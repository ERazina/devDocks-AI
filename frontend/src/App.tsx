import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [health, setHealth] = useState<null | { status: string }>(null);

  const BASE_API = "http://localhost:8000";

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch(`${BASE_API}/health`);
        const data = await response.json();
        console.log(data);
        setHealth(data);
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    getApi();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = (e.currentTarget.elements[0] as HTMLInputElement).value;

    try {
      const response = await fetch(`${BASE_API}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error sending chat request:", error);
    }
  };

  return (
    <>
      <section id="center">
        <div className="hero"></div>
        <h1>Welcome to DevDocs AI</h1>
        {health ? <p>{health.status}</p> : <p>Loading</p>}
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Ask a question..." />
        </form>
      </section>
    </>
  );
}

export default App;
