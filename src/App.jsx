import React from "react";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import BookDetailPage from "./pages/BookDetailPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ProtectedComponet from "./routes/ProtectedComponent";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<ProtectedComponet Component={BookPage} />} />
        <Route path="/books/detail/:id" element={<ProtectedComponet Component={BookDetailPage} />}  />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
