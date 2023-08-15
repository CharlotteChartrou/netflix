import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./assets/data.json";
/* import Section from "./components/Section"; */

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <img
          src="https://lereacteur-react-netflix.netlify.app/static/media/logo.696c2101.png"
          alt="logo"
        />
      </header>
      <main>
        {data.map((cat, index) => {
          return (
            <section key={index}>
              <h2>{cat.category}</h2>
              <div className="bloc-img">{cat.images}</div>

              {data.map((img) => {
                return console.log(img.images);
              })}
            </section>
          );
        })}
      </main>
    </>
  );
}
export default App;
