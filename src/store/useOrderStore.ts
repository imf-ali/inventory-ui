import { create } from 'zustand';
import { ordersApi } from '@/api/orders';
import type { Order, CreateOrderDto } from '@/api/types';

interface OrderState {
  orders: Order[];
  selectedOrder: Order | null;
  isLoading: boolean;
  error: string | null;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  fetchOrders: (params?: {
    page?: number;
    limit?: number;
    status?: string;
  }) => Promise<void>;
  fetchOrderById: (id: string) => Promise<void>;
  createOrder: (data: CreateOrderDto) => Promise<Order>;
  updateOrderStatus: (id: string, status: Order['status']) => Promise<void>;
  setSelectedOrder: (order: Order | null) => void;
  clearError: () => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: [],
  selectedOrder: null,
  isLoading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  },

  fetchOrders: async (params = {}) => {
    set({ isLoading: true, error: null });
    try {
      const response = await ordersApi.getAll(params);
      set({
        orders: response.data,
        pagination: {
          page: response.page,
          limit: response.limit,
          total: response.total,
          totalPages: response.totalPages,
        },
        isLoading: false,
      });
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.message || 'Failed to fetch orders',
      });
    }
  },

  fetchOrderById: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      const order = await ordersApi.getById(id);
      set({
        selectedOrder: order,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.message || 'Failed to fetch order',
      });
    }
  },

  createOrder: async (data: CreateOrderDto) => {
    set({ isLoading: true, error: null });
    try {
      const order = await ordersApi.create(data);
      set((state) => ({
        orders: [order, ...state.orders],
        isLoading: false,
      }));
      return order;
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.message || 'Failed to create order',
      });
      throw error;
    }
  },

  updateOrderStatus: async (id: string, status: Order['status']) => {
    set({ isLoading: true, error: null });
    try {
      const updatedOrder = await ordersApi.updateStatus(id, status);
      set((state) => ({
        orders: state.orders.map((o) => (o.id === id ? updatedOrder : o)),
        selectedOrder:
          state.selectedOrder?.id === id
            ? updatedOrder
            : state.selectedOrder,
        isLoading: false,
      }));
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.message || 'Failed to update order status',
      });
      throw error;
    }
  },

  setSelectedOrder: (order: Order | null) => {
    set({ selectedOrder: order });
  },

  clearError: () => set({ error: null }),
}));

