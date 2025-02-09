import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

function App() {
  const [dataEnviada, setDataEnviada] = useState({
    title: "",
    body: "",
    userId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataEnviada((dataPrevia) => ({
      ...dataPrevia,
      [name]: value,
    }));
  };

  // console.log(dataEnviada);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", dataEnviada)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={dataEnviada.title}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Body: </label>
          <input
            type="text"
            name="body"
            value={dataEnviada.body}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>UserId: </label>
          <input
            type="number"
            name="userId"
            value={dataEnviada.userId}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
