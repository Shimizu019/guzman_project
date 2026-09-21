import { useState } from 'react'

import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'

function Courses() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('All')

  // The course levels found in the data, sorted from lowest to highest
  // (100, 200, 300, 400). "new Set" removes duplicates.
  const levels = [...new Set(courses.map((course) => course.level))].sort(
    (a, b) => a - b,
  )

  // Keep only the courses that match the search text AND the level
  const filteredCourses = courses.filter((course) => {
    const matchSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchLevel = selectedLevel === 'All' || course.level === selectedLevel
    return matchSearch && matchLevel
  })

  return (
    <div className="page">
      {/* ---------- Page title ---------- */}
      <header className="page-head">
        <h1 className="page-title">Courses</h1>
        <p className="page-subtitle">
          Explore the courses currently offered in the Student Information
          Portal.
        </p>
      </header>

      {/* ---------- Small summary ---------- */}
      <div className="summary-row">
        <div className="stat">
          <p className="stat-number">{courses.length}</p>
          <p className="stat-label">Available Courses</p>
        </div>
      </div>

      {/* ---------- Search and level filter ---------- */}
      <div className="toolbar">
        <input
          type="text"
          className="field"
          placeholder="Search by course or instructor..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <div className="chip-row">
          {['All', ...levels].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setSelectedLevel(level)}
              className={level === selectedLevel ? 'chip chip-active' : 'chip'}
            >
              {level === 'All' ? 'All Levels' : `Level ${level}`}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-5 text-sm text-slate-500">
        Showing {filteredCourses.length} of {courses.length} courses
      </p>

      {/* ---------- Course cards ---------- */}
      {filteredCourses.length > 0 ? (
        <div className="card-grid">
          {/* {...course} sends every field of the object as a prop */}
          {filteredCourses.map((course) => (
            <CourseCard key={course.code} {...course} />
          ))}
        </div>
      ) : (
        <p className="empty">No courses found. Try a different search.</p>
      )}
    </div>
  )
}

export default Courses