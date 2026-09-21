// ============================================================
// CourseCard — a reusable card that shows one course.
//
// All the information is received through PROPS, so the same
// component can display any course.
//
// Example:
//   <CourseCard
//     code="IT 202"
//     name="Web Systems and Technologies"
//     instructor="Mr. Santos"
//     schedule="Monday • 9:00 AM - 11:00 AM"
//   />
// ============================================================

function CourseCard({
  code,
  name,
  instructor,
  schedule,
  credits = 0,
  level,
  enrolled = 0,
  capacity = 1, // 1 avoids dividing by zero
  description = '',
}) {
  // How full the class is, as a percentage
  const percentFull = Math.round((enrolled / capacity) * 100)

  // The bar turns red when the class is almost full
  const barColor =
    percentFull >= 90
      ? 'bg-red-500'
      : percentFull >= 70
        ? 'bg-amber-500'
        : 'bg-green-500'

  return (
    <article className="card card-hover flex flex-col overflow-hidden">
      {/* ---------- Header: course code and course name ---------- */}
      <div className="border-b border-slate-200 bg-blue-50 px-6 py-5">
        <span className="badge badge-code">{code}</span>
        <h3 className="mt-3 text-base font-bold text-slate-900">{name}</h3>
      </div>

      {/* ---------- Body ---------- */}
      <div className="flex-1 px-6 py-5">
        <p className="text-sm leading-relaxed text-slate-500">{description}</p>

        {/* Instructor and schedule, each with a label above the value */}
        <div className="mt-5 space-y-4">
          <div>
            <p className="info-label">Instructor</p>
            <p className="text-sm font-semibold text-slate-900">
              {instructor}
            </p>
          </div>
          <div>
            <p className="info-label">Schedule</p>
            <p className="text-sm font-semibold text-slate-900">{schedule}</p>
          </div>
        </div>

        {/* ---------- Enrollment bar ---------- */}
        <div className="mt-5">
          <div className="mb-1 flex justify-between text-xs text-slate-500">
            <span>Enrollment</span>
            <span>
              {enrolled}/{capacity}
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className={`h-full rounded-full ${barColor}`}
              style={{ width: `${percentFull}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* ---------- Footer ---------- */}
      <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4">
        <span className="text-sm font-semibold text-blue-600">
          {credits} Credits
        </span>
        <span className="badge">Level {level}</span>
      </div>
    </article>
  )
}

export default CourseCard