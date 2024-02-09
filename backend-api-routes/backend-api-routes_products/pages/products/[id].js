import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Products() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <ul>
      <li>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <p>
          {data.price}
          {data.currency}
        </p>
        <p>{data.category}</p>
      </li>
    </ul>
  );
}
