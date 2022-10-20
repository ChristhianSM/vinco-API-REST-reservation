
export const personalizeError = (err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something wen wrong"
}