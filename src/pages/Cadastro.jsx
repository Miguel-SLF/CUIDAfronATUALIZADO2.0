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

    // Salvar usuário no localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      alert("Usuário já cadastrado. Faça login!");
      return;
    }

    users.push({ nome, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    console.log("Cadastro realizado:", { nome, email });
    navigate("/home"); // Redireciona para Index após cadastro
  };

  return (
    <div className="flex min-h-screen bg-[hsl(var(--background))]">
      <div className="flex-1 flex items-center justify-center bg-[hsl(var(--card))]">
        <h1 className="text-4xl font-bold text-[hsl(var(--primary))]">CUIDA</h1>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-md shadow-lg bg-blue-100">
          <h2 className="text-2xl font-bold mb-6 text-center text-[hsl(var(--foreground))]">
            Cadastro
          </h2>

          <form onSubmit={handleCadastro} className="space-y-4">
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-3 border rounded-md"
              style={{
                borderColor: "hsl(var(--border))",
                backgroundColor: "hsl(var(--input))",
                color: "hsl(var(--foreground))",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md"
              style={{
                borderColor: "hsl(var(--border))",
                backgroundColor: "hsl(var(--input))",
                color: "hsl(var(--foreground))",
              }}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md"
              style={{
                borderColor: "hsl(var(--border))",
                backgroundColor: "hsl(var(--input))",
                color: "hsl(var(--foreground))",
              }}
            />

            <button
              type="submit"
              className="w-full p-3 rounded-md transition"
              style={{
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
              }}
            >
              Cadastrar
            </button>
          </form>

          <p className="mt-4 text-center text-[hsl(var(--muted-foreground))]">
            Já possui conta?{" "}
            <button
              type="button"
              className="font-semibold text-[hsl(var(--primary))]"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
