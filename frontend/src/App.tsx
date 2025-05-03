import { useEffect, useState } from "react";

function App() {
  // flaskからのメッセージを格納するstate
  const [flaskMessage, setFlaskMessage] = useState("");
  const [flaskUserUpdateMessage, setFlaskUserUpdateMessage] = useState("");

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
    const fetchUpdateMessage = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Test User",
            email: "test@example.com",
          }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFlaskUserUpdateMessage(data.message);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchMessage();
    fetchUpdateMessage();
  }, []);

  return (
    <>
      <p className="text-3xl font-bold underline text-center">
        {flaskMessage || "test message"}
      </p>

      <p className="text-4xl font-bold underline text-center text-amber-800">
        {flaskUserUpdateMessage || "response message"}
      </p>
    </>
  );
}

export default App;
