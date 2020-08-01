import { h, render } from "preact";
import "preact/devtools";
import App from "./App";
import "./tailwind.css";

const el = document.getElementById("root");
if (el) {
  render(<App />, el);
} else {
  console.error("mount point does not exist");
}
