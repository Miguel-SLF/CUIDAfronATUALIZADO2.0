"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Users, Eye } from "lucide-react"
import { RealTimeTracker } from "@/components/real-time-tracker"

export default function MedicineDetailPage() {
  const params = useParams()
  const { id } = params

  // Dados de exemplo, você pode puxar do backend depois
  const medicamentos = [
    {
      id: "1",
      nome: "Paracetamol 500mg",
      bula: "Alívio da dor e febre. Tomar com água.",
      receita: false,
      quantidade: 150,
      fila: 8,
      visualizacoes: 12,
    },
    {
      id: "2",
      nome: "Dipirona 500mg",
      bula: "Analgesico e antitérmico.",
      receita: true,
      quantidade: 89,
      fila: 3,
      visualizacoes: 7,
    },
    {
      id: "3",
      nome: "Omeprazol 20mg",
      bula: "Reduz ácido estomacal.",
      receita: false,
      quantidade: 45,
      fila: 12,
      visualizacoes: 15,
    },
  ]

  const medicamento = medicamentos.find((m) => m.id === id)

  if (!medicamento) {
    return <p className="text-center mt-10 text-red-500">Medicamento não encontrado!</p>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{medicamento.nome}</CardTitle>
            <CardDescription>
              {medicamento.receita
                ? "Medicamento controlado: compareça ao postinho com receita e documentos."
                : "Medicamento sem necessidade de receita."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">{medicamento.bula}</p>

            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="gap-1">
                <Package className="w-3 h-3" /> {medicamento.quantidade} unidades disponíveis
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Users className="w-3 h-3" /> {medicamento.fila} pessoas na fila
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Eye className="w-3 h-3" /> {medicamento.visualizacoes} visualizando online
              </Badge>
            </div>

            <div className="mt-4">
              <RealTimeTracker pageName="medicine-detail" medicineId={medicamento.id} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
