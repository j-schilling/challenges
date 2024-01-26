import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
// import Cover from "../../../public/images/the-fellowship-of-the-ring.png";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function TheFellowship() {
  console.log("volumes: ", volumes);

  const router = useRouter();

  const volumeData = volumes.find(({ slug }) => slug === router.query.slug);
  console.log("volumeData: ", volumeData);

  const currentIndex = volumes.findIndex(
    (element) => element.slug === router.query.slug
  );
  console.log("currentIndex: ", currentIndex);

  const prevVolume = currentIndex > 0 ? volumes[currentIndex - 1] : null;
  const nextVolume =
    currentIndex < volumes.length - 1 ? volumes[currentIndex + 1] : null;

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

      {prevVolume && (
        <Link href={`/volumes/${prevVolume.slug}`}>
          <button>Previous Volume</button>
        </Link>
      )}
      {nextVolume && (
        <Link href={`/volumes/${nextVolume.slug}`}>
          <button>Next Volume</button>
        </Link>
      )}
    </>
  );
}
