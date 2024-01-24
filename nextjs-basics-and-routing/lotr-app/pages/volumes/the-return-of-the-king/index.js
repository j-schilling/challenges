import { volumes } from "../../../lib/data";
import Link from "next/link";

export default function TheReturnOfTheKing() {
  const theReturnOfTheKingData = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  return (
    <>
      <Link href="../volumes">All Volumes</Link>
      <h1>{theReturnOfTheKingData.title}</h1>
      <p>{theReturnOfTheKingData.description}</p>

      {theReturnOfTheKingData.books.map((book) => (
        <ul key={book.ordinal}>
          <li>{book.ordinal}</li>
          <li>{book.title}</li>
        </ul>
      ))}
    </>
  );
}
