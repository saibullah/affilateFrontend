import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card h-100 border-0 shadow-sm">

      <img
        src={product.image}
        className="card-img-top p-4"
        alt={product.name}
        style={{
          height: "220px",
          objectFit: "contain",
        }}
      />

      <div className="card-body">

        <small className="text-muted">
          {product.category}
        </small>

        <h5 className="card-title mt-2">
          {product.name}
        </h5>

        <p className="text-warning mb-2">
          ⭐ {product.rating}
        </p>

        <p className="card-text text-muted">
          {product.description}
        </p>

        <h5 className="fw-bold">
          {product.price}
        </h5>

        <Link
          to={`/product/${product._id}`}
          className="btn btn-dark w-100 mt-2"
        >
          Read Review
        </Link>

      </div>
    </div>
  );
}

export default ProductCard;