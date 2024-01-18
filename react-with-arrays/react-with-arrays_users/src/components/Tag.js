import "./Tag.css";

export default function Tag({ tag }) {
  // let adminClass = "";
  // if ((tag = "admin")) {

  return (
    <li className={`tag ${tag == "admin" ? "tag--highlight" : ""}`}>{tag}</li>
  );
}
