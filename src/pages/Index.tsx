import { Search, Shield, Play, MapPin, Pill, Brain, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CuidaLogo from "@/components/CuidaLogo";
import { Link } from "react-router-dom";
import roboticHand from "@/assets/robotic-hand-medical.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <CuidaLogo size="sm" showText={false} />
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/registry"
                className="text-gray-600 hover:text-primary text-sm font-nunito"
              >
                Registry
              </Link>
              <Link
                to="/technologies"
                className="text-gray-600 hover:text-primary text-sm font-nunito"
              >
                Technologies
              </Link>
              <Link
                to="/departments"
                className="text-gray-600 hover:text-primary text-sm font-nunito"
              >
                Departments
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-primary text-sm font-nunito"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-primary text-sm font-nunito"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Side - Content */}
          <div className="space-y-8 relative">
            {/* Small floating elements */}
            <div className="absolute -top-8 right-20 w-3 h-3 bg-cuida-blue rounded-full opacity-60"></div>
            <div className="absolute top-32 -left-4 w-2 h-2 bg-cuida-orange rounded-full opacity-40"></div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-poppins font-bold text-gray-900 leading-tight">
                The Future
                <br />
                Of Medicine
                <br />
                Is <span className="text-cuida-blue">Now</span>.
              </h1>
              
              <p className="text-gray-600 font-nunito text-lg leading-relaxed max-w-md">
                CUIDA é o sistema revolucionário de gestão de medicamentos da Secretaria de Saúde, 
                especialista em controle automatizado e transparência no acesso.
              </p>
            </div>

            {/* Consultation Card */}
            <Card className="bg-cuida-blue text-white p-6 max-w-sm shadow-xl">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/80 font-nunito uppercase tracking-wide">
                      Therapeutic Department
                    </p>
                    <h3 className="text-lg font-poppins font-semibold">
                      CONSULTATION
                      <br />
                      WITH A THERAPIST
                    </h3>
                  </div>
                </div>
                <Link to="/portal">
                  <Button className="bg-white text-cuida-blue hover:bg-gray-100 font-medium w-full">
                    BOOK ONLINE
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Illustration */}
          <div className="relative">
            {/* Background elements */}
            <div className="absolute top-20 right-10 w-24 h-24 bg-cuida-blue rounded-full opacity-20"></div>
            <div className="absolute bottom-32 left-10 w-16 h-16 bg-cuida-green rounded-full opacity-15"></div>
            
            {/* Main illustration */}
            <div className="relative z-10">
              <img 
                src={roboticHand} 
                alt="Future of medical technology" 
                className="w-full h-auto max-w-2xl mx-auto"
              />
            </div>

            {/* Floating Info Cards */}
            <div className="absolute top-8 left-8 bg-white rounded-lg p-3 shadow-lg text-xs">
              <div className="flex items-center gap-2 mb-1">
                <Brain className="w-3 h-3 text-cuida-blue" />
                <span className="font-medium font-poppins">The next evolution of</span>
              </div>
              <p className="text-gray-600 font-nunito">medical treatments</p>
            </div>

            <div className="absolute top-40 right-4 bg-white rounded-lg p-3 shadow-lg text-xs">
              <div className="flex items-center gap-2 mb-1">
                <Eye className="w-3 h-3 text-cuida-green" />
                <span className="font-medium font-poppins">The best specialists</span>
              </div>
              <p className="text-gray-600 font-nunito">in all fields</p>
            </div>

            {/* Patient Stories Section */}
            <div className="absolute bottom-8 left-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-cuida-blue rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm">VIEW PATIENT</h4>
                  <h4 className="font-poppins font-semibold text-sm">STORIES</h4>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-50 rounded p-2 text-center">
                  <div className="font-medium font-poppins">Physiology</div>
                </div>
                <div className="bg-gray-50 rounded p-2 text-center">
                  <div className="font-medium font-poppins">Psychiatry</div>
                </div>
                <div className="bg-gray-50 rounded p-2 text-center">
                  <div className="font-medium font-poppins">Plastic surgery</div>
                </div>
                <div className="bg-gray-50 rounded p-2 text-center">
                  <div className="font-medium font-poppins">Traumatology</div>
                </div>
                <div className="bg-gray-50 rounded p-2 text-center">
                  <div className="font-medium font-poppins">Neurosurgery</div>
                </div>
                <div className="bg-gray-50 rounded p-2 text-center">
                  <div className="font-medium font-poppins">Otolaryngology</div>
                </div>
                <div className="bg-gray-50 rounded p-2 text-center">
                  <div className="font-medium font-poppins">Therapeutic department</div>
                </div>
                <div className="bg-gray-50 rounded p-2 text-center">
                  <div className="font-medium font-poppins">Pediatrics</div>
                </div>
              </div>
            </div>

            {/* Decorative line graphics */}
            <div className="absolute bottom-20 right-20">
              <svg width="60" height="20" viewBox="0 0 60 20" className="text-gray-300">
                <path d="M2 10h56M50 4l6 6-6 6" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Access buttons floating */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3">
        <Link to="/login">
          <Button 
            size="sm" 
            variant="cuida" 
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <Shield className="w-4 h-4 mr-2" />
            Gestores
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;

