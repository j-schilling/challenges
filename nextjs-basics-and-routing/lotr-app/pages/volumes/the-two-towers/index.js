import { volumes } from "../../../lib/data";
import Link from "next/link";

export default function TheTwoTowers() {
  const theTwoTowersData = volumes.find(
    ({ slug }) => slug === "the-two-towers"
  );
  return (
    <>
      <Link href="../volumes">All Volumes</Link>
      <h1>{theTwoTowersData.title}</h1>
      <p>{theTwoTowersData.description}</p>

      {theTwoTowersData.books.map((book) => (
        <ul key={book.ordinal}>
          <li>{book.ordinal}</li>
          <li>{book.title}</li>
        </ul>
      ))}
    </>
  );
}
