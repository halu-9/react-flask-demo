import { useEffect, useState } from "react";

function App() {
  // flaskからのメッセージを格納するstate
  const [flask_message, setFlaskMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFlaskMessage(data.message);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchMessage();
  }, []);

  return (
    <>
      <p className="text-3xl font-bold underline text-center">
        {flask_message || "default text"}
      </p>
    </>
  );
}

export default App;
