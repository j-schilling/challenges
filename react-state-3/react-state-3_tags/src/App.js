import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    setTags([...tags, newTag]);
  }

  const handleDeleteTag = (tagToDelete) => {
    const filtered = tags.filter((tag) => tag !== tagToDelete);
    console.log("filtered: ", filtered);
    setTags(filtered);
  };
  // const handleAddTag = (newTag) => {
  //   setTags(...tags, newTag);
  //   console.log(handleAddTag);}

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
