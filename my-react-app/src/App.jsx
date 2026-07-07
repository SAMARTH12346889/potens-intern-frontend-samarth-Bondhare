
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import InstallPrompt from "./componets/Installprompt";
import { useLanguage } from "./context/LanguageContext";


const Category = lazy(() => import("./pages/Category"));
const Details = lazy(() => import("./pages/Details"));
const Confirmation = lazy(() => import("./pages/Confirmation"));

function App() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <>
      <InstallPrompt />
      

      <BrowserRouter>
      
        <div style={{ padding: "20px" }}>
          <button onClick={toggleLanguage}>
            {language === "en" ? "हिन्दी" : "English"}
          </button>

          <Suspense
            fallback={
              <div className="min-h-screen flex justify-center items-center">
                Loading.....
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Category />} />
              <Route path="/details" element={<Details />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;