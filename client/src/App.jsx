import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  //store our 'from' and 'to' languages in state
  const [from, setFrom] = useState("ar");
  const [to, setTo] = useState("ar");

  //store the word we want to translate in state
  //translation returns an object (of data) so thats what we are using in brackets
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");

  //on change function for the input of the word we want to translate

  //onsubmit function that calls our API
  async function handleTranslate(event) {
    event.preventDefault();
    const API = `http://localhost:8080/translate?word=${word}&from=${from}&to=${to}`;
    const res = await axios.get(API);
    setTranslation(res.data.translation);
  }

  return (
    <>
      <form onSubmit={handleTranslate}>
        <div className="container">
          <select onChange={(event) => setFrom(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <input
            placeholder="Translate"
            onChange={(event) => setWord(event.target.value)}
          />
        </div>

        <div className="container">
          <select onChange={(event) => setTo(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <div className="output">{translation}</div>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
