import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card h-100 border-0 shadow-sm product-card">

      <img
        src={product.image}
        className="card-img-top product-image"
        alt={product.name}
      />

      <div className="card-body p-3">

        <small className="text-muted category">
          {product.category}
        </small>

        <h6 className="card-title mt-2 product-name">
          {product.name}
        </h6>

        <p className="text-warning mb-2 rating">
          ⭐ {product.rating}
        </p>

        <p className="card-text text-muted product-description">
          {product.description}
        </p>

        <h6 className="fw-bold mb-2">
          {product.price}
        </h6>

        <Link
          to={`/product/${product._id}`}
          className="btn btn-dark w-100 review-btn"
        >
          Read Review
        </Link>

      </div>
    </div>
  );
}

export default ProductCard;