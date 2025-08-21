import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pill, Syringe, Droplet, TestTube } from "lucide-react";

const MedicamentosPage = () => {
  const navigate = useNavigate();

  const categorias = [
    {
      tipo: "Pílulas",
      icone: <Pill className="w-6 h-6 text-blue-600" />,
      itens: [
        { id: 1, nome: "Dipirona 500mg", rota: "/medicamentos/dipirona", quantidade: 89, pessoasNaFila: 3, visualizacoes: 7 },
        { id: 2, nome: "Paracetamol 500mg", rota: "/medicamentos/paracetamol", quantidade: 150, pessoasNaFila: 8, visualizacoes: 12 },
        { id: 3, nome: "Ibuprofeno 400mg", rota: "/medicamentos/ibuprofeno", quantidade: 70, pessoasNaFila: 5, visualizacoes: 9 },
      ]
    },
    {
      tipo: "Vacinas",
      icone: <Syringe className="w-6 h-6 text-green-600" />,
      itens: [
        { id: 4, nome: "Vacina Influenza", rota: "/medicamentos/influenza", quantidade: 120, pessoasNaFila: 2, visualizacoes: 4 },
        { id: 5, nome: "Vacina Covid-19", rota: "/medicamentos/covid", quantidade: 80, pessoasNaFila: 6, visualizacoes: 10 },
        { id: 6, nome: "Vacina Hepatite B", rota: "/medicamentos/hepatite-b", quantidade: 50, pessoasNaFila: 1, visualizacoes: 3 },
      ]
    },
    {
      tipo: "Remédios IV",
      icone: <Droplet className="w-6 h-6 text-red-600" />,
      itens: [
        { id: 7, nome: "Dipirona IV", rota: "/medicamentos/dipirona-iv", quantidade: 40, pessoasNaFila: 3, visualizacoes: 5 },
        { id: 8, nome: "Antibiótico IV", rota: "/medicamentos/antibiotico-iv", quantidade: 30, pessoasNaFila: 2, visualizacoes: 4 },
        { id: 9, nome: "Solução Glicose IV", rota: "/medicamentos/glicose-iv", quantidade: 60, pessoasNaFila: 1, visualizacoes: 2 },
      ]
    },
    {
      tipo: "Soros",
      icone: <TestTube className="w-6 h-6 text-purple-600" />,
      itens: [
        { id: 10, nome: "Soro Fisiológico", rota: "/medicamentos/soro-fisiologico", quantidade: 100, pessoasNaFila: 2, visualizacoes: 6 },
        { id: 11, nome: "Soro Glicose", rota: "/medicamentos/soro-glicose", quantidade: 80, pessoasNaFila: 3, visualizacoes: 5 },
        { id: 12, nome: "Soro Ringer", rota: "/medicamentos/soro-ringer", quantidade: 70, pessoasNaFila: 1, visualizacoes: 3 },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-10">
      <h1 className="text-3xl font-bold mb-6">Lista de Medicamentos</h1>

      {categorias.map((categoria) => (
        <section key={categoria.tipo}>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            {categoria.icone} {categoria.tipo}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoria.itens.map((med) => (
              <Card
                key={med.id}
                className="cursor-pointer hover:bg-gray-100 transition"
                onClick={() => navigate(med.rota)}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{med.nome}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <Badge variant="secondary" className="gap-1">
                    <Package className="w-3 h-3" /> {med.quantidade} disponíveis
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Users className="w-3 h-3" /> {med.pessoasNaFila} na fila
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Eye className="w-3 h-3" /> {med.visualizacoes} online
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-6">
        <Button variant="outline" onClick={() => navigate(-1)}>
          Voltar
        </Button>
      </div>
    </div>
  );
};

export default MedicamentosPage;
