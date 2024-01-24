import { volumes } from "../../../lib/data";
import Link from "next/link";

export default function TheTwoTowers() {
  const theTwoTowers = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <Link href="../volumes">All Volumes</Link>
      <h1>{theTwoTowers.title}</h1>
      <p>{theTwoTowers.description}</p>

      {theTwoTowers.books.map((book) => (
        <ul key={book.ordinal}>
          <li>{book.ordinal}</li>
          <li>{book.title}</li>
        </ul>
      ))}
    </>
  );
}
