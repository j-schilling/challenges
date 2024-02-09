import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>
            {product.price}
            {product.currency}
          </p>
          <p>{product.category}</p>
        </li>
      ))}
    </ul>
  );
}
