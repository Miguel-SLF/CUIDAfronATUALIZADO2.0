import { Toaster } from "@/components/ui/toaster"; 
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Index from "./pages/Index"; // Funcionário
import Portal from "./pages/Clientes/Portal"; // Cliente
import Login from "./pages/Funcionarios/Login";
import Cadastro from "./pages/Funcionarios/Cadastro";
import NotFound from "./pages/NotFound";

// Novas páginas
import Registry from "./pages/Funcionarios/Registry";
import Technologies from "./pages/Funcionarios/Technologies";
import Departments from "./pages/Funcionarios/Departments";

import PrivateRoute from "./components/PrivateRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<HomePage />} />

          {/* Rotas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/portal-cidadao" element={<Portal />} />

          {/* Rotas públicas das novas páginas */}
          <Route path="/registry" element={<Registry />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/departments" element={<Departments />} />

          {/* Rota protegida - funcionário */}
          <Route path="/home-funcionario" element={
            <PrivateRoute>
              <Index />
            </PrivateRoute>
          } />

          {/* Rota coringa */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

