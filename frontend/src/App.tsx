import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [health, setHealth] = useState<null | { status: string }>(null);

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch("http://localhost:8000/health");
        const data = await response.json();
        console.log(data);
        setHealth(data);
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    getApi();
  }, []);

  return (
    <>
      <section id="center">
        <div className="hero"></div>
        <h1>Welcome to DevDocs AI</h1>
        {health ? <p>{health.status}</p> : <p>Loading</p>}
      </section>
    </>
  );
}

export default App;
