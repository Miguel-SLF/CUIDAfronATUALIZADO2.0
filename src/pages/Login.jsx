import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulação: verificar cadastro no localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      console.log("Login realizado:", userExists);
      navigate("/home");
    } else {
      alert("Usuário não encontrado ou senha incorreta. Faça cadastro!");
    }
  };

  return (
    <div className="flex min-h-screen bg-[hsl(var(--background))]">
      <div className="flex-1 flex items-center justify-center bg-[hsl(var(--card))]">
        <h1 className="text-4xl font-bold text-[hsl(var(--primary))]">CUIDA</h1>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-md shadow-lg bg-blue-100">
          <h2 className="text-2xl font-bold mb-6 text-center text-[hsl(var(--foreground))]">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
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
              Entrar
            </button>
          </form>

          <p className="mt-4 text-center text-[hsl(var(--muted-foreground))]">
            Ainda não tem conta?{" "}
            <button
              type="button"
              className="font-semibold text-[hsl(var(--primary))]"
              onClick={() => navigate("/cadastro")}
            >
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

