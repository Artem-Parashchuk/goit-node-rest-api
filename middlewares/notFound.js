export const notFound = (_, res) => {
  res.status(404).json({ message: "Route not found" });
}