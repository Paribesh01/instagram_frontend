import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export function Login() {
  const { login } = useLogin();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handelSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password && email) {
      await login(email, password);
      console.log("Key: " + localStorage.getItem("token"));
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handelSumbit}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sumbit</button>
      </form>
    </>
  );
}
