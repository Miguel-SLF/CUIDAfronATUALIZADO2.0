import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserCheck, Eye, EyeOff, ArrowLeft, Heart } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find(u => u.email === email && u.password === password);

    setTimeout(() => {
      setIsLoading(false);
      if (userExists) {
        localStorage.setItem("loggedInUser", JSON.stringify(userExists));
        navigate("/home-funcionario");
      } else {
        alert("Usuário não encontrado ou senha incorreta!");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Voltar ao início */}
        <button 
          onClick={() => navigate("/")} 
          className="inline-flex items-center gap-2 text-cuida-blue hover:text-cuida-blue/80 mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao início
        </button>

        {/* Header da logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-cuida-blue rounded-lg flex items-center justify-center">
            <Heart className="w-7 h-7 text-white" />
          </div>
          <div className="text-left">
            <h1 className="text-lg font-bold text-gray-900">Secretaria de Saúde</h1>
            <p className="text-sm text-gray-600">Marília - SP</p>
          </div>
        </div>

        {/* Login Card */}
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-cuida-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-8 h-8 text-cuida-blue" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Acesso de Funcionário</CardTitle>
            <CardDescription className="text-gray-600">
              Entre com suas credenciais para acessar o sistema interno
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email institucional</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="funcionario@saude.marilia.sp.gov.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-cuida-blue hover:bg-cuida-blue/90 text-white font-medium transition"
                disabled={isLoading}
              >
                {isLoading ? "Entrando..." : "Entrar no Sistema"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Não tem acesso?{" "}
              <button onClick={() => navigate("/cadastro")} className="text-cuida-blue font-medium hover:text-cuida-blue/80">
                Solicitar cadastro
              </button>
            </p>

            <p className="mt-6 text-xs text-gray-500 text-center border-t pt-4">
              Sistema restrito a funcionários autorizados da Secretaria de Saúde de Marília
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;

