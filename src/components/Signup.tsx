import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";
export function Signup() {
  const { signup } = useSignup();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handelSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password && email) {
      await signup(email, name, password);
      console.log("Key: " + localStorage.getItem("token"));
      navigate("/");
    }
  };

  return (
    <>
      <h1>SignUp</h1>
      <form onSubmit={handelSumbit}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
