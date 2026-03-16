const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
const tasksRoutes = require("./routes/tasks"); // ✅ removed .default
app.use("/api/tasks", tasksRoutes);

// health check
app.get("/api/health", (req, res) => {
  res.json({ message: "API working" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server error" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
