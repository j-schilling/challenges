import { introduction } from "../../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import Head from "next/head";

export default function Volumes() {
  const router = useRouter();
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomVolume = getRandomElement(volumes);
  console.log("randomVolume: ", randomVolume);
  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
      </Head>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          router.push(`/volumes/${randomVolume.slug}`);
        }}
      >
        Navigate to random volume here!
      </button>
    </>
  );
}
