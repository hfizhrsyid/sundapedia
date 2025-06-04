import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-30 left-12 z-50 bg-primary text-white hover:bg-primary/90 rounded-full p-3 shadow-lg transition-all duration-300"
      aria-label="Kembali"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
  );
}

export default BackButton;
