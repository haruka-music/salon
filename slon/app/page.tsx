"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./page/LoginPage/Login";
import HomePage from "./page/HomePage/Home";
import SchedulePage from "./page/SchedulePage/Schedule";
import BlogPage from "./page/BlogPage/Blog";
import ContactPage from "./page/ContactPage/Contact";
import PlayerPage from "./page/PlayerPage/Player";
import MoviesPage from "./page/MoviesPage/Movies";
import LessonPage from "./page/LessonPage/Lesson";

export default function Home() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Schedule" element={<SchedulePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Player" element={<PlayerPage />} />
          <Route path="/Movies" element={<MoviesPage />} />
          <Route path="/Lesson" element={<LessonPage />} />
        </Routes>
      </div>
    </Router>
  );
}
