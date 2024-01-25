import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
// import Cover from "../../../public/images/the-fellowship-of-the-ring.png";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function TheFellowship() {
  console.log("volumes: ", volumes);

  const router = useRouter();
  console.log("router: ", router);
  console.log("router.query.slug: ", router.query.slug);
  const volumeData = volumes.find(({ slug }) => slug === router.query.slug);
  console.log("volumeData: ", volumeData);

  //   function handlePreviousButton() {
  //     if
  //   }

  if (!volumeData) {
    return (
      <>
        <h1>This volume doesnt exist</h1>;
        <Link href="/volumes">← Back to all volumes</Link>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{volumeData.title}</title>
      </Head>
      <Link href="../volumes">All Volumes</Link>
      <h1>{volumeData.title}</h1>
      <p>{volumeData.description}</p>

      {volumeData.books.map((book) => (
        <ul key={book.ordinal}>
          <li>{book.ordinal}</li>
          <li>{book.title}</li>
        </ul>
      ))}
      <Image src={volumeData.cover} width={140} height={230} alt="" />

      <Link href="volumes.">
        <button>All Volumes</button>
      </Link>

      <button>Next Volume</button>
    </>
  );
}
