// Canonical content data shared by the public site and database seed.
export const researchFields = [
  "Artificial Intelligence",
  "Machine Learning",
  "Financial Forecasting",
  "Digital Accessibility",
  "AI Applications",
  "Explainable AI",
];

export const undergraduateApplicationTypes = [
  "학부 연구생",
  "학부 연구 인턴",
  "기타 문의",
];

export const graduateApplicationSettings = {
  maxFileSize: 3 * 1024 * 1024,
  allowedExtensions: ["pdf", "doc", "docx", "hwp"],
  allowedMimeTypes: {
    pdf: "application/pdf",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    hwp: "application/x-hwp",
  },
};
