import { useState } from 'react'
import { Link } from 'react-router-dom'

import StudentCard from '../components/StudentCard'
import { getInitials } from '../utils/getInitials'
import { students } from '../data/students'
import { courses } from '../data/courses'

// The three highlights shown under the hero section
const features = [
  {
    icon: '👥',
    title: 'Student Directory',
    text: 'Access the profile of every student enrolled in the portal.',
  },
  {
    icon: '📚',
    title: 'Course Catalog',
    text: 'Browse the courses on offer with their instructors and schedules.',
  },
  {
    icon: 'ℹ️',
    title: 'About the Portal',
    text: 'Learn how this React application is organized and built.',
  },
]

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProgram, setSelectedProgram] = useState('All')

  // The first student in the list is used as the example profile
  const featured = students[0]

  // The different programs found in the student list
  const programs = [...new Set(students.map((student) => student.course))]

  // Search + filter for the student directory at the bottom
  const filteredStudents = students.filter((student) => {
    const matchSearch = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchProgram =
      selectedProgram === 'All' || student.course === selectedProgram
    return matchSearch && matchProgram
  })

  return (
    <div className="page">
      {/* ================= HERO ================= */}
      <section className="hero">
        {/* LEFT: label, heading, description and buttons */}
        <div>
          <p className="eyebrow">Student Information Portal</p>
          <h1 className="hero-title">
            Everything You Need,
            <br />
            All in One Place.
          </h1>
          <p className="hero-text">
            Access student information, courses, and important academic details
            through one simple and organized portal.
          </p>
          <div className="hero-actions">
            <Link to="/students" className="btn btn-primary">
              View Students
            </Link>
            <Link to="/courses" className="btn btn-outline">
              Explore Courses
            </Link>
          </div>
        </div>

        {/* RIGHT: example student profile card */}
        <div className="card hero-card">
          <div className="hero-card-head">
            <span className="badge badge-light">Student Profile</span>
          </div>

          <div className="hero-card-body">
            <div className="flex items-center gap-4">
              <div className="avatar avatar-lg">
                {getInitials(featured.name)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {featured.name}
                </h3>
                <p className="text-sm text-slate-500">{featured.course}</p>
                <p className="text-sm text-slate-500">{featured.yearLevel}</p>
              </div>
            </div>

            <div className="mt-5">
              <div className="info-row">
                <span className="info-label">Student ID</span>
                <span className="info-value">{featured.studentNumber}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Status</span>
                <span className="info-value">
                  <span className="badge badge-status">
                    <span className="dot"></span>
                    {featured.status}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="stats-grid">
        <div className="stat">
          <p className="stat-number">{students.length}</p>
          <p className="stat-label">Students</p>
        </div>
        <div className="stat">
          <p className="stat-number">{courses.length}</p>
          <p className="stat-label">Courses</p>
        </div>
        <div className="stat">
          <p className="stat-number">{programs.length}</p>
          <p className="stat-label">Programs</p>
        </div>
      </section>

      {/* ================= WHAT YOU CAN DO ================= */}
      <section className="mb-14">
        <h2 className="section-title">What you can do here</h2>
        <div className="card-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="text-base font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STUDENT DIRECTORY ================= */}
      <section>
        <div className="section-head">
          <h2 className="section-title">Student Directory</h2>
          <Link to="/students" className="btn btn-outline">
            View all students
          </Link>
        </div>

        <div className="toolbar">
          <input
            type="text"
            className="field"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <div className="chip-row">
            {['All', ...programs].map((program) => (
              <button
                key={program}
                type="button"
                onClick={() => setSelectedProgram(program)}
                className={
                  program === selectedProgram ? 'chip chip-active' : 'chip'
                }
              >
                {program}
              </button>
            ))}
          </div>
        </div>

        <p className="mb-5 text-sm text-slate-500">
          Showing {filteredStudents.length} of {students.length} students
        </p>

        {filteredStudents.length > 0 ? (
          <div className="card-grid">
            {/* {...student} sends every field of the object as a prop */}
            {filteredStudents.map((student) => (
              <StudentCard key={student.studentNumber} {...student} />
            ))}
          </div>
        ) : (
          <p className="empty">No students found. Try a different search.</p>
        )}
      </section>
    </div>
  )
}

export default Home
