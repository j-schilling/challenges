import Image from "./Image";
import avatar from ".././img/avatar.jpg";

export default function Avatar({ src, alt }) {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <a href="#">
        <Image src={src} alt={alt} />
      </a>
    </button>
  );
}
