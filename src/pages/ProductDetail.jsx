import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import api from "../api";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Get all products
        const response = await api.get("/products");

        const products = response.data;

        // Find selected product using MongoDB _id
        const selectedProduct = products.find(
          (item) => item._id === id
        );

        setProduct(selectedProduct);

        // Recommended products
        if (selectedProduct) {
          const recommended = products.filter(
            (item) =>
              item.category === selectedProduct.category &&
              item._id !== selectedProduct._id
          );

          setRecommendedProducts(recommended);
        }
      } catch (error) {
        console.log("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h3>Loading product...</h3>
      </div>
    );
  }

  // Product not found
  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product Not Found</h2>

        <Link to="/" className="btn btn-dark mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar bg-dark navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">
            PICKORA
          </Link>
        </div>
      </nav>

      {/* Product Details */}
      <main className="container py-5">

        <Link
          to="/"
          className="text-decoration-none text-muted"
        >
          ← Back to Products
        </Link>

        <div className="row mt-4 align-items-center">

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
              style={{
                maxHeight: "450px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Details */}
          <div className="col-md-6">

            <small className="text-muted">
              {product.category}
            </small>

            <h1 className="fw-bold mt-2">
              {product.name}
            </h1>

            <p className="text-warning fs-5">
              ⭐ {product.rating} / 5
            </p>

            <h2 className="fw-bold">
              {product.price}
            </h2>

            <p className="text-muted mt-3">
              {product.description}
            </p>

            <hr />

            {/* Review */}
            <h4 className="fw-bold">
              Our Review
            </h4>

            <p>
              This product offers a great combination of
              quality, features and everyday usability.
              It is worth considering if you're looking
              for a reliable product.
            </p>

            {/* Pros */}
            <h4 className="fw-bold mt-4">
              Pros
            </h4>

            <ul>
              <li>Good build quality</li>
              <li>Great performance</li>
              <li>Easy to use</li>
            </ul>

            {/* Cons */}
            <h4 className="fw-bold mt-4">
              Cons
            </h4>

            <ul>
              <li>Can be expensive</li>
            </ul>

            {/* Affiliate Link */}
            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-lg mt-3"
            >
              Check Price →
            </a>

            <p className="small text-muted mt-3">
              This post may contain affiliate links. We may
              earn a commission if you purchase through our links.
            </p>

          </div>
        </div>

        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <section className="mt-5 pt-5 border-top">

            <h2 className="fw-bold mb-4">
              Recommended Products
            </h2>

            <div className="row g-4">

              {recommendedProducts.map((item) => (
                <div
                  className="col-md-6 col-lg-4"
                  key={item._id}
                >
                  <ProductCard product={item} />
                </div>
              ))}

            </div>

          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p className="mb-0">
          © 2026 PICKORA
        </p>
      </footer>
    </>
  );
}

export default ProductDetail;