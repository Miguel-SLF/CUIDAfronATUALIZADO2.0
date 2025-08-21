"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Clock, Users, Navigation, ArrowLeft } from "lucide-react";
import CuidaLogo from "@/components/CuidaLogo";

interface HealthPost {
  id: number;
  name: string;
  address: string;
  phone: string;
  distance: string;
  status: "available" | "limited" | "closed";
  openHours: string;
  medicines: string[];
}

export default function Portal() {
  const [searchQuery, setSearchQuery] = useState("");

  // Dados adaptados do código de inspiração
  const healthPosts: HealthPost[] = [
    {
      id: 1,
      name: "UBS Centro Dr. João Silva",
      address: "Rua XV de Novembro, 123 - Centro",
      phone: "(14) 3402-1234",
      distance: "0.8 km",
      status: "available",
      openHours: "07:00 - 17:00",
      medicines: ["Paracetamol 500mg", "Dipirona 500mg", "Omeprazol 20mg"],
    },
    {
      id: 2,
      name: "UBS Vila Real Dra. Maria Santos",
      address: "Av. das Flores, 456 - Vila Real",
      phone: "(14) 3402-5678",
      distance: "1.2 km",
      status: "available",
      openHours: "07:00 - 17:00",
      medicines: ["Losartana 50mg", "Metformina 850mg", "Sinvastatina 20mg"],
    },
    {
      id: 3,
      name: "UBS Jardim América",
      address: "Rua dos Pássaros, 789 - Jardim América",
      phone: "(14) 3402-9012",
      distance: "2.1 km",
      status: "limited",
      openHours: "07:00 - 17:00",
      medicines: ["Captopril 25mg", "Hidroclorotiazida 25mg", "AAS 100mg"],
    },
    {
      id: 4,
      name: "UBS Nova Marília",
      address: "Rua das Palmeiras, 321 - Nova Marília",
      phone: "(14) 3402-3456",
      distance: "1.8 km",
      status: "closed",
      openHours: "07:00 - 17:00",
      medicines: ["Ibuprofeno 600mg", "Amoxicilina 500mg"],
    },
  ];

  const filteredPosts = healthPosts.filter((post) =>
    post.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.medicines.some((med) => med.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const openInMaps = (post: HealthPost) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(post.address)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <CuidaLogo size="lg" />
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-1" />
            Voltar ao Início
          </Button>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-white py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Portal do Cidadão</h1>
          <p className="text-gray-600 mb-8">
            Encontre medicamentos disponíveis nas unidades de saúde próximas a você
          </p>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Digite o nome do medicamento ou unidade..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg bg-white shadow border rounded"
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Unidades Encontradas</h2>
          <span className="text-gray-600">{filteredPosts.length} unidades disponíveis</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg font-bold">{post.name}</CardTitle>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {post.address}
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.status === "available"
                        ? "bg-green-100 text-green-700"
                        : post.status === "limited"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {post.status === "available"
                      ? "Disponível"
                      : post.status === "limited"
                      ? "Limitado"
                      : "Fechado"}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center text-sm mb-2">
                  <Clock className="w-4 h-4 mr-2 text-gray-500" />
                  <span>{post.openHours}</span>
                </div>
                <div className="flex items-center text-sm mb-4">
                  <Users className="w-4 h-4 mr-2 text-gray-500" />
                  <span>{post.phone}</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Medicamentos disponíveis:</p>
                  <div className="flex flex-wrap gap-1">
                    {post.medicines.map((med, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                      >
                        {med}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={() => openInMaps(post)}
                  className="w-full bg-green-600 hover:bg-green-700 gap-2 flex items-center justify-center"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Ver no Mapa
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
