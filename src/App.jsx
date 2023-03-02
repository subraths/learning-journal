import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./components/data";
import { useState } from "react";
import Blog from "./components/Blog";

function App() {
  const [blog, setBlog] = useState(data);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {blog.map((data) => (
        <Blog key={data.id} {...data} />
      ))}
    </div>
  );
}

export default App;
