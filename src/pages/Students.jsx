import { useState } from 'react'

import StudentCard from '../components/StudentCard'
import { students } from '../data/students'

function Students() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProgram, setSelectedProgram] = useState('All')

  // The programs found in the student data.
  // "new Set" removes the duplicates, e.g. Computer Science appears twice.
  const programs = [...new Set(students.map((student) => student.course))]

  // Keep only the students that match the search text AND the program
  const filteredStudents = students.filter((student) => {
    const matchSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchProgram =
      selectedProgram === 'All' || student.course === selectedProgram
    return matchSearch && matchProgram
  })

  return (
    <div className="page">
      {/* ---------- Page title ---------- */}
      <header className="page-head">
        <h1 className="page-title">Students</h1>
        <p className="page-subtitle">
          View the students currently registered in the portal.
        </p>
      </header>

      {/* ---------- Small summary ---------- */}
      <div className="summary-row">
        <div className="stat">
          <p className="stat-number">{students.length}</p>
          <p className="stat-label">Total Students</p>
        </div>
      </div>

      {/* ---------- Search and program filter ---------- */}
      <div className="toolbar">
        <input
          type="text"
          className="field"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <div className="chip-row">
          {['All', ...programs].map((program) => (
            <button
              key={program}
              type="button"
              onClick={() => setSelectedProgram(program)}
              className={program === selectedProgram ? 'chip chip-active' : 'chip'}
            >
              {program}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-5 text-sm text-slate-500">
        Showing {filteredStudents.length} of {students.length} students
      </p>

      {/* ---------- Student cards ---------- */}
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
    </div>
  )
}

export default Students