import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Confirmation() {
  const [report, setReport] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("latestReport"));

    if (data) {
      setReport(data);
    }
  }, []);

  // Download Report
  const downloadReport = () => {
    if (!report) return;

    const reportText = `
Complaint Report
========================

Reference ID : ${report.referenceId}

Category     : ${report.category}

Description  : ${report.description}

Submitted At : ${report.timestamp}
`;

    const blob = new Blob([reportText], {
      type: "text/plain",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${report.referenceId}.txt`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Redirect to Home
    navigate("/");
  };

  if (!report) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        No report found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-md">

        <div className="text-center text-6xl">✅</div>

        <h1 className="text-3xl font-bold text-center mt-4">
          Report Submitted
        </h1>

        <p className="text-center text-green-600 mt-2">
          Your complaint has been submitted successfully.
        </p>

        <div className="mt-6 space-y-3 text-gray-700">

          <div>
            <strong>Reference ID</strong>
            <p>{report.referenceId}</p>
          </div>

          <div>
            <strong>Category</strong>
            <p>{report.category}</p>
          </div>

          <div>
            <strong>Description</strong>
            <p>{report.description}</p>
          </div>

          <div>
            <strong>Submitted</strong>
            <p>{report.timestamp}</p>
          </div>

          {report.photo && (
            <img
              src={report.photo}
              alt="Uploaded"
              className="rounded-xl w-full mt-4"
            />
          )}
        </div>

        <button
          onClick={downloadReport}
          className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl"
        >
          Download Report & Go Home
        </button>

      </div>
    </div>
  );
}

export default Confirmation;