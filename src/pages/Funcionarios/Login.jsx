import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find(u => u.email === email && u.password === password);

    if (userExists) {
      localStorage.setItem("loggedInUser", JSON.stringify(userExists));
      navigate("/home-funcionario");
    } else {
      alert("Usuário não encontrado ou senha incorreta!");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-md shadow-lg bg-blue-100">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md"
            />
            <button
              type="submit"
              className="w-full p-3 rounded-md bg-blue-500 text-white"
            >
              Entrar
            </button>
          </form>

          <p className="mt-4 text-center">
            Ainda não tem conta?{" "}
            <button onClick={() => navigate("/cadastro")} className="text-blue-700 font-semibold">
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


