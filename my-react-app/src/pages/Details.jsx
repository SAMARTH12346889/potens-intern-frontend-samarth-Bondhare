import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";

import { useLanguage } from "../context/LanguageContext";
import { generateReferenceId, saveReport } from "../utilits/Storage";

function Details() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const maxCharacters = 300;

  // Upload & Compress Image
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const options = {
      maxSizeMB: 0.3,
      maxWidthOrHeight: 1000,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);

      setImage(compressedFile);

      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error("Image compression failed:", error);
    }
  };

  // Voice Recognition
  const startVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      setDescription((prev) => prev + " " + transcript);
    };

    recognition.start();
  };

  // Submit Report
  const handleSubmit = () => {
    const report = {
      category: localStorage.getItem("selectedCategory"),
      description,
      photo: preview,
      timestamp: new Date().toLocaleString(),
      referenceId: generateReferenceId(),
    };

    saveReport(report);

    localStorage.setItem("latestReport", JSON.stringify(report));

    navigate("/confirmation");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
        {/* Progress */}
        <p className="text-sm text-gray-500">
          {t.step} 2 of 3
        </p>

        <div className="mt-2 mb-6 h-2 w-full rounded-full bg-gray-200">
          <div className="h-full w-2/3 rounded-full bg-indigo-600"></div>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-2xl font-bold">
          {t.details}
        </h1>

        {/* Description */}
        <label className="mb-2 block font-semibold">
          {t.description}
        </label>

        <textarea
          rows={5}
          maxLength={maxCharacters}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={t.descriptionPlaceholder}
          className="w-full resize-none rounded-xl border p-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />

        <div className="mt-1 text-right text-sm text-gray-500">
          {description.length}/{maxCharacters}
        </div>

        {/* Voice Input */}
        <button
          onClick={startVoiceInput}
          className="mt-5 w-full rounded-xl bg-purple-600 py-3 text-white hover:bg-purple-700"
        >
          🎤 {t.voiceInput}
        </button>

        {/* Upload Image */}
        <div className="mt-6">
          <label className="mb-2 block font-semibold">
            {t.uploadPhoto}
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full"
          />
        </div>

        {/* Preview */}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 h-56 w-full rounded-xl object-cover"
          />
        )}

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex-1 rounded-xl border border-indigo-600 py-3 text-indigo-600 hover:bg-indigo-50"
          >
            {t.back}
          </button>

          <button
            onClick={handleSubmit}
            className="flex-1 rounded-xl bg-indigo-600 py-3 text-white hover:bg-indigo-700"
          >
            {t.submit}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;