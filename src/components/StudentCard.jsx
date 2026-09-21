import { getInitials } from '../utils/getInitials'

// ============================================================
// StudentCard — a reusable card that shows one student.
//
// All the information is received through PROPS, so the same
// component can display any student.
//
// Example:
//   <StudentCard
//     name="Juan Dela Cruz"
//     studentNumber="2024-0001"
//     course="BS Information Technology"
//     yearLevel="2nd Year"
//   />
// ============================================================

function StudentCard({
  name,
  studentNumber,
  course,
  yearLevel,
  status = 'Active', // default value if nothing is passed
  email = '',
  gpa = '—',
  credits = '—',
  phone = '',
}) {
  return (
    <article className="card card-hover p-6">
      {/* ---------- Header: avatar, name and status ---------- */}
      <div className="flex items-center gap-4">
        <div className="avatar">{getInitials(name)}</div>

        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-slate-900">
            {name}
          </h3>
          <p className="truncate text-sm text-slate-500">{email}</p>
          <div className="mt-2">
            <span className="badge badge-status">
              <span className="dot"></span>
              {status}
            </span>
          </div>
        </div>
      </div>

      {/* ---------- Student details ---------- */}
      <div className="mt-4">
        <div className="info-row">
          <span className="info-label">Student ID</span>
          <span className="info-value">{studentNumber}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Program</span>
          <span className="info-value">{course}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Year Level</span>
          <span className="info-value">{yearLevel}</span>
        </div>
      </div>

      {/* ---------- Small statistics ---------- */}
      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center">
        <div>
          <p className="text-sm font-bold text-slate-900">{gpa}</p>
          <p className="text-xs text-slate-500">GPA</p>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">{credits}</p>
          <p className="text-xs text-slate-500">Credits</p>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">
            {phone ? phone.slice(-4) : '—'}
          </p>
          <p className="text-xs text-slate-500">Phone</p>
        </div>
      </div>
    </article>
  )
}

export default StudentCard