import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/test" element={<h1>Test Page</h1>} />
    </Routes>
  );
}

export default App;