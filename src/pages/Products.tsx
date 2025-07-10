import { useSearchParams } from "react-router";

export default function Products() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  return (
    <div>
      <a href="/">Back</a>
      <h1>Products</h1>

      {category && (
        <span>
          Category <strong>{category}</strong>
        </span>
      )}

      <div className="cards">
        <a href="/details/1">Product 1</a>
        <a href="/details/2">Product 2</a>
        <a href="/details/3">Product 3</a>
        <a href="/details/4">Product 4</a>
        <a href="/details/5">Product 5</a>
      </div>
    </div>
  );
}
