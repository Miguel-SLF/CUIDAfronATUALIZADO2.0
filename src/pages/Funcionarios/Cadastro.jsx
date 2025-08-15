import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCadastro = (e) => {
    e.preventDefault();

    if (!nome || !email || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find(u => u.email === email)) {
      alert("Usuário já cadastrado!");
      return;
    }

    const newUser = { nome, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    navigate("/home-funcionario");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-md shadow-lg bg-blue-100">
          <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>

          <form onSubmit={handleCadastro} className="space-y-4">
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full p-3 border rounded-md" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded-md" />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border rounded-md" />
            <button type="submit" className="w-full p-3 rounded-md bg-blue-500 text-white">Cadastrar</button>
          </form>

          <p className="mt-4 text-center">
            Já possui conta?{" "}
            <button onClick={() => navigate("/login")} className="text-blue-700 font-semibold">
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;

