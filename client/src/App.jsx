import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import BlogDetails from './pages/BlogDetails'
import Team from './pages/Team'
import Publications from './pages/Publications'
import Courses from './pages/Courses'
import Grade from './pages/Grade'
import Subject from './pages/Subject'
import Chapter from './pages/Chapter'
import Lecture from './pages/Lecture'
import Books from './pages/Books'
import TeacherPack from './pages/TeacherPack'
import ParentPack from './pages/ParentPack'
import Quizzes from './pages/Quizzes'
import PastPapers from './pages/PastPapers'
import Results from './pages/Results'
import ResultChecker from './pages/ResultChecker'
import HealthAndHygiene from './pages/HealthAndHygiene'
import Stories from './pages/Stories'
import StoryCategory from './pages/StoryCategory'
import Games from './pages/Games'
import ActivityBooks from './pages/ActivityBooks'
import NotFound from './pages/NotFound'
import Terms from './pages/Terms'
import Disclaimer from './pages/Disclaimer'
import Privacy from './pages/Privacy'
import { storyCollections } from './data/stories'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:grade" element={<Grade />} />
          <Route path="/courses/:grade/:subject" element={<Subject />} />
          <Route path="/courses/:grade/:subject/:chapter" element={<Chapter />} />
          <Route path="/lecture/:id" element={<Lecture />} />
          <Route path="/books" element={<Books />} />
          <Route path="/teacher-pack" element={<TeacherPack />} />
          <Route path="/parent-pack" element={<ParentPack />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/past-papers" element={<PastPapers />} />
          <Route path="/results" element={<Results />} />
          <Route path="/results/check" element={<ResultChecker />}/>
          <Route path="/health-and-hygiene" element={<HealthAndHygiene />} />
          <Route path="/stories" element={<Stories />} />
          {storyCollections.map((collection) => (
            <Route
              key={collection.to}
              path={collection.to}
              element={<StoryCategory category={collection} />}
            />
          ))}
          <Route path="/games" element={<Games />} />
          <Route path="/activity-books" element={<ActivityBooks />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
