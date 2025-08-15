import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <button onClick={() => navigate("/")} className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Voltar para Home
      </button>
    </div>
  );
};

export default NotFound;
