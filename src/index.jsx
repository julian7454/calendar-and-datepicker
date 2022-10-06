import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Calendar from "./Calendar";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const onSelect = (date) => {
  console.log(date);
  // callback
};

root.render(
  <StrictMode>
    <div class="wrapper">
      <h1>Calendar and DatePicker</h1>
      <Calendar date={null} onSelect={onSelect} />
    </div>
  </StrictMode>
);
