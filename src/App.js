import "./styles.css";
import { useState } from "react";
import { ChiledArea } from "./ChiledArea";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (event) => {
    setText(event.target.value);
  };
  const onClickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <input value={text} onChange={onChangeText}></input>
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChiledArea open={open} />
    </div>
  );
}
