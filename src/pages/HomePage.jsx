import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-3xl font-bold mb-12 text-blue-800">Bem-vindo ao CUIDA</h1>
      
      <div className="flex flex-col gap-6 bg-blue-100 p-10 rounded-xl shadow-lg">
        <button
          className="bg-blue-300 text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-400 transition font-semibold"
          onClick={() => navigate("/portal-cidadao")}
        >
          Sou Cliente
        </button>

<button
          className="bg-blue-300 text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-400 transition font-semibold"
          onClick={() => navigate("/Login")}
        >
          Sou Funcionário
        </button>
      </div>
    </div>
  );
};

export default HomePage;
