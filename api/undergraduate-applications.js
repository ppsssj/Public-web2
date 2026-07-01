const requiredFields = [
  "name",
  "email",
  "phone",
  "affiliation",
  "academicStatus",
  "applicationType",
  "availableFrom",
  "researchInterest",
  "message",
  "privacyConsent",
];

const clean = (value, max = 500) => String(value || "").trim().slice(0, max);

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ success: false });
  }

  const body = request.body || {};
  if (body.website) return response.status(200).json({ success: true });

  const missing = requiredFields.some((field) => !clean(body[field]));
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean(body.email, 254));
  const needsOtherInterest = clean(body.researchInterest) === "기타";
  const otherInterestMissing = needsOtherInterest && !clean(body.otherResearchInterest, 150);

  if (
    missing ||
    !validEmail ||
    otherInterestMissing ||
    clean(body.message, 3001).length < 30
  ) {
    return response.status(400).json({ success: false });
  }

  // TODO: Replace this response with an internal DB insert when the database is ready.
  return response.status(202).json({
    success: true,
    persisted: false,
    applicationId: `DUMMY-${Date.now()}`,
  });
}
