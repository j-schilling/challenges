import Image from "./Image";

export default function Logo({ src, alt }) {
  return (
    <a href="#">
      <Image src={src} alt={alt} />
    </a>
  );
}
