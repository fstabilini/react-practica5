import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";

export default function AppFake() {
  const [data, setData] = useState({
    title: "title",
    body: "body",
    userId: "userId",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((dataPrevia) => ({
      ...dataPrevia,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
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
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Body:</label>
          <input
            type="text"
            name="body"
            value={data.body}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>UserId:</label>
          <input
            type="text"
            name="userId"
            value={data.userId}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
