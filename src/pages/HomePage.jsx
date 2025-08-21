import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, UserCheck, MapPin, Activity, Shield, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cuida-gradient-soft">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cuida-blue rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">CUIDA</h1>
                <p className="text-sm text-muted-foreground">Marília - SP</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-cuida-blue" />
              <span className="text-sm font-medium text-foreground">Sistema Oficial</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Sistema de Saúde Digital de Marília
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Plataforma integrada para gestão de medicamentos, atendimento aos cidadãos e monitoramento
            em tempo real das unidades de saúde da cidade.
          </p>
        </div>
      </section>

      {/* Access Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Employee Access */}
            <Card className="bg-white shadow-cuida-lg hover:shadow-cuida transition-shadow duration-300 border-l-4 border-l-cuida-blue">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-cuida-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-cuida-blue" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Acesso para Funcionários</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  Sistema de gestão interna para profissionais da saúde
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-foreground">
                    <Activity className="w-5 h-5 text-cuida-blue" />
                    <span>Gerenciamento de medicamentos</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Users className="w-5 h-5 text-cuida-blue" />
                    <span>Controle de filas em tempo real</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin className="w-5 h-5 text-cuida-blue" />
                    <span>Monitoramento de unidades</span>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <Button
                    className="w-full bg-cuida-blue hover:bg-cuida-blue/90 text-white py-3 text-lg font-medium"
                    onClick={() => navigate("/login")}
                  >
                    Acessar Sistema Interno
                  </Button>
                  <Button
                    className="w-full bg-cuida-blue/70 hover:bg-cuida-blue/85 text-white py-3 text-lg font-medium"
                    onClick={() => navigate("/medicamentos")}
                  >
                    Ver Medicamentos
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Customer Access */}
            <Card className="bg-white shadow-cuida-lg hover:shadow-cuida transition-shadow duration-300 border-l-4 border-l-cuida-green">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-cuida-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cuida-green" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Portal do Cidadão</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  Serviços de saúde online para a população de Marília
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin className="w-5 h-5 text-cuida-green" />
                    <span>Localizar postos de saúde</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Activity className="w-5 h-5 text-cuida-green" />
                    <span>Consultar disponibilidade de medicamentos</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Heart className="w-5 h-5 text-cuida-green" />
                    <span>Informações e dicas de saúde</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button
                    className="w-full bg-cuida-green hover:bg-cuida-green/90 text-white py-3 text-lg font-medium"
                    onClick={() => navigate("/Clientes/loginClientes/LoginCli")}
                  >
                    Entrar no Portal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Recursos do Sistema</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tecnologia avançada para melhorar o atendimento e a gestão da saúde pública
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Tempo Real</h4>
              <p className="text-gray-600">Monitoramento em tempo real de filas, medicamentos e visualizações</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Localização</h4>
              <p className="text-gray-600">Encontre o posto de saúde mais próximo com informações atualizadas</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Segurança</h4>
              <p className="text-gray-600">Dados protegidos e sistema confiável para informações de saúde</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-cuida-blue rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Secretaria de Saúde de Marília</span>
            </div>
            <p className="text-muted-foreground mb-2">Sistema oficial da Prefeitura Municipal de Marília</p>
            <p className="text-gray-400 text-sm">© 2025 Secretaria de Saúde de Marília. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
