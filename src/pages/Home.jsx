import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import api from "../api";

function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    fetchProducts();
  }, []);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <>
      <Navbar />


      {/* Categories */}
      <section className="py-4">
        <div className="container">

          <h2 className="fw-bold mb-3">
            Categories
          </h2>

          <div className="d-flex gap-2 flex-wrap">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn ${
                  selectedCategory === category
                    ? "btn-dark"
                    : "btn-outline-dark"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-4">

        <div className="container">

          <h2 className="fw-bold mb-4">
            Products
          </h2>

          {loading ? (
            <p className="text-center">
              Loading products...
            </p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center">
              No products found.
            </p>
          ) : (
            <div className="row g-4">

              {filteredProducts.map((product) => (
                <div
                  className="col-md-6 col-lg-4"
                  key={product._id}
                >
                  <ProductCard product={product} />
                </div>
              ))}

            </div>
          )}

        </div>

      </section>
<footer className="bg-dark text-white mt-5" id="about">
  <div className="container py-5">

    <div className="row">

      {/* About */}
      <div className="col-md-6 mb-4">
        <h4 className="fw-bold">KRYPOS</h4>

        <p className="text-light">
          PICKORA helps you discover useful products, deals, and
          recommendations in one place.
        </p>
      </div>

      {/* Contact */}
      <div className="col-md-6 mb-4">
        <h4 className="fw-bold">Work With Us</h4>

        <p className="text-light">
          Want to build a website, promote your product, or collaborate
          with PICKORA?
        </p>

        <p className="mb-0">
          📧 Email us at:
        </p>

        <a
          href="mailto:yourmail@gmail.com"
          className="text-white text-decoration-none fw-semibold"
        >
          mohamedsaibullah361@gmail.com
        </a>
      </div>

    </div>

    <hr className="border-secondary" />

    <p className="text-center mb-0">
      © 2026 krypos. All rights reserved.
    </p>

  </div>
</footer>
    </>
  );
}

export default Home;