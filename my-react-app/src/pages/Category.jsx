import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const categories = [
  {
    id: "doctor",
    title: "doctor",
    icon: "🩺",
  },
  {
    id: "teacher",
    title: "teacher",
    icon: "📚",
  },
  {
    id: "student",
    title: "student",
    icon: "🎓",
  },
  {
    id: "engineer",
    title: "engineer",
    icon: "💻",
  },
];

function Category() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleContinue = () => {
    if (selectedCategory) {
      navigate("/details");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6">

        {/* Progress */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 font-medium">
            {t.step} 1 of 3
          </p>

          <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div className="w-1/3 h-2 bg-indigo-600 rounded-full"></div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {t.categories}
        </h1>

        <p className="text-gray-500 mb-6">
          {t.selectCategory}
        </p>

        {/* Cards */}
        <div className="space-y-4">

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full rounded-2xl border-2 p-5 transition-all duration-300 flex items-center justify-between

              ${
                selectedCategory === category.id
                  ? "border-indigo-600 bg-indigo-50 scale-105 shadow-lg"
                  : "border-gray-200 bg-white hover:border-indigo-300 hover:scale-[1.02]"
              }
              
              `}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">
                  {category.icon}
                </span>

                <span className="text-lg font-semibold">
                  {t[category.title]}
                </span>
              </div>

              {selectedCategory === category.id && (
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                  ✓
                </div>
              )}
            </button>
          ))}

        </div>

        {/* Continue Button */}

        <button
          onClick={handleContinue}
          disabled={!selectedCategory}
          className={`w-full mt-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300

          ${
            selectedCategory
              ? "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }

          `}
        >
          {t.continue}
        </button>

      </div>
    </div>
  );
}

export default Category;