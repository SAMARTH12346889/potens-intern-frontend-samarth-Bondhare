export const generateReferenceId = () => {
  const today = new Date();

  const date =
    today.getFullYear().toString() +
    String(today.getMonth() + 1).padStart(2, "0") +
    String(today.getDate()).padStart(2, "0");

  const random = Math.floor(1000 + Math.random() * 9000);

  return `REF-${date}-${random}`;
};

export const saveReport = (report) => {
  const reports = JSON.parse(localStorage.getItem("reports")) || [];

  reports.push(report);

  localStorage.setItem("reports", JSON.stringify(reports));
};

export const getReports = () => {
  return JSON.parse(localStorage.getItem("reports")) || [];
};