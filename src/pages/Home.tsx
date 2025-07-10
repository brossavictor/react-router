import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home page</h1>

      <nav>
        <a href="/products">Products</a>
        <a href="/products?category=tvs">Categories</a>

        <button type="button" onClick={() => navigate("/products")}>
          See products
        </button>
      </nav>
    </div>
  );
}
