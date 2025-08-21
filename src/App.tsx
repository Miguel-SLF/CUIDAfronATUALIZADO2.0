import React from "react";
import { Toaster } from "@/components/ui/toaster"; 
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas principais
import HomePage from "@/pages/HomePage";
import Index from "@/pages/Funcionarios/Dashboard/Index";
import Portal from "@/pages/Clientes/Portal";
import Login from "@/pages/Funcionarios/Login-Cadastro/Login";
import Cadastro from "@/pages/Funcionarios/Login-Cadastro/Cadastro";
import NotFound from "@/pages/NotFound";

// Página de medicamentos
import MedicamentosPage from "@/pages/Funcionarios/Dashboard/Medicines/MedicamentosPage";

// Página de clientes cadastrados
import ClientesCadastradosPage from "@/pages/Funcionarios/Dashboard/ClientesCadastrados";

// Página de Documento
import Documento from "@/pages/Funcionarios/Dashboard/Documentos";

// Rota protegida
import PrivateRoute from "@/components/PrivateRoute";

const queryClient = new QueryClient();

const App: React.FC = () => (
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

          {/* Lista de Medicamentos */}
          <Route path="/medicamentos" element={<MedicamentosPage />} />

          {/* Página de Clientes Cadastrados */}
          <Route path="/clientes-cadastrados" element={<ClientesCadastradosPage />} />

          {/* Página de Documento */}
          <Route path="/documento" element={<Documento />} />

          {/* Rota protegida - funcionário */}
          <Route
            path="/home-funcionario"
            element={
              <PrivateRoute>
                <Index />
              </PrivateRoute>
            }
          />

          {/* Rota coringa */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
