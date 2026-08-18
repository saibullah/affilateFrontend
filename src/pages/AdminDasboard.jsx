import React, { useEffect, useState } from "react";
import api from "../api";

const emptyForm = {
  name: "",
  category: "",
  price: "",
  rating: "",
  image: "",
  description: "",
  affiliateLink: "",
};

function AdminDasboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(emptyForm);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(emptyForm);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        ...formData,
        rating: Number(formData.rating) || 0,
      };

      if (editingId) {
        const response = await api.put(`/products/${editingId}`, payload);
        setProducts((prev) =>
          prev.map((product) =>
            product._id === editingId ? response.data : product
          )
        );
      } else {
        const response = await api.post("/products", payload);
        setProducts((prev) => [response.data, ...prev]);
      }

      resetForm();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      rating: product.rating,
      image: product.image,
      description: product.description,
      affiliateLink: product.affiliateLink,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await api.delete(`/products/${id}`);
      setProducts((prev) => prev.filter((product) => product._id !== id));

      if (editingId === id) {
        resetForm();
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to delete product");
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <p className="text-muted mb-1">Admin panel</p>
          <h2 className="fw-bold mb-0">Product Manager</h2>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-4">
          <form onSubmit={handleSubmit} className="card shadow-sm border-0 p-4">
            <h4 className="fw-bold mb-3">
              {editingId ? "Edit Product" : "Add Product"}
            </h4>

            <div className="mb-3">
              <label className="form-label">Product name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Rating</label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                className="form-control"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="url"
                className="form-control"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Affiliate Link</label>
              <input
                type="url"
                className="form-control"
                name="affiliateLink"
                value={formData.affiliateLink}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-dark" disabled={submitting}>
                {submitting
                  ? editingId
                    ? "Updating..."
                    : "Saving..."
                  : editingId
                    ? "Update Product"
                    : "Add Product"}
              </button>

              {editingId && (
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={resetForm}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="fw-bold mb-3">Products</h4>

              {loading ? (
                <p className="text-center text-muted py-4">Loading products...</p>
              ) : products.length === 0 ? (
                <p className="text-center text-muted py-4">No products found.</p>
              ) : (
                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product._id}>
                          <td>
                            <img
                              src={product.image}
                              alt={product.name}
                              style={{ width: 60, height: 60, objectFit: "cover" }}
                              className="rounded"
                            />
                          </td>
                          <td>{product.name}</td>
                          <td>{product.category}</td>
                          <td>{product.price}</td>
                          <td>{product.rating || 0}</td>
                          <td>
                            <div className="d-flex gap-2">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-dark"
                                onClick={() => handleEdit(product)}
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleDelete(product._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDasboard;