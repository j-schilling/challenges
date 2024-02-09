import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character");
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Random character</h1>
      <ul>
        <li>{data.firstName}</li>
        <li>{data.lastName}</li>
        <li>{data.twitterName}</li>
        <li>{data.geohash}</li>
      </ul>
    </>
  );
}
