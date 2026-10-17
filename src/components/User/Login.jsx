import { useState } from "react";
import { useUser } from "../../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUser();

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ username, password });
  }

  return (
    <div className="p-4">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="rounded border border-gray-400 px-1 focus:outline-none"
      />{" "}
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded border border-gray-400 px-1 focus:outline-none"
      />{" "}
      <button
        onClick={handleSubmit}
        className="rounded border border-gray-400 px-1"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
