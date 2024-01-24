import { volumes } from "../../../lib/data";
import Link from "next/link";

export default function TheFellowship() {
  console.log(volumes);

  const fellowshipData = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  console.log(fellowshipData);
  return (
    <>
      <Link href="../volumes">All Volumes</Link>
      <h1>{fellowshipData.title}</h1>
      <p>{fellowshipData.description}</p>

      {fellowshipData.books.map((book) => (
        <ul key={book.ordinal}>
          <li>{book.ordinal}</li>
          <li>{book.title}</li>
        </ul>
      ))}
    </>
  );
}
