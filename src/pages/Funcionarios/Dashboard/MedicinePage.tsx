"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Users, Eye } from "lucide-react"

interface MedicineProps {
  nome: string
  bula: string
  precisaReceita: boolean
  quantidade: number
  pessoasNaFila: number
  visualizacoes: number
}

export default function MedicinePage({
  nome,
  bula,
  precisaReceita,
  quantidade,
  pessoasNaFila,
  visualizacoes,
}: MedicineProps) {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{nome}</CardTitle>
          <CardDescription>{bula}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            {precisaReceita
              ? "Este medicamento requer receita médica. Compareça ao postinho com sua receita e documentos em mãos."
              : "Este medicamento não requer receita médica."}
          </p>

          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="gap-1">
              <Package className="w-3 h-3" /> {quantidade} unidades disponíveis
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Users className="w-3 h-3" /> {pessoasNaFila} pessoas aguardando
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Eye className="w-3 h-3" /> {visualizacoes} visualizando online
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}