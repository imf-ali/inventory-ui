import styles from './page.module.css';

export default function ProductRegistrationPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h2 className={styles.title}>Product Registration</h2>
        <p className={styles.subtitle}>Register and manage your product inventory</p>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Product Name *</label>
              <input type="text" className={styles.input} placeholder="Enter product name" required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>SKU/Barcode *</label>
              <input type="text" className={styles.input} placeholder="Enter SKU or barcode" required />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Category *</label>
              <select className={styles.input} required>
                <option value="">Select category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="food">Food & Beverages</option>
                <option value="books">Books</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Price *</label>
              <input type="number" className={styles.input} placeholder="0.00" step="0.01" required />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Quantity in Stock *</label>
              <input type="number" className={styles.input} placeholder="0" required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Reorder Level</label>
              <input type="number" className={styles.input} placeholder="Minimum stock level" />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Description</label>
            <textarea className={styles.textarea} rows={4} placeholder="Enter product description"></textarea>
          </div>
          <div className={styles.formActions}>
            <button type="button" className={styles.cancelBtn}>Cancel</button>
            <button type="submit" className={styles.submitBtn}>Register Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}

