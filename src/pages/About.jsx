// The three information cards shown on this page
const infoCards = [
  {
    icon: '🧩',
    title: 'React Components',
    text: 'Reusable JSX components make the application easier to organize and maintain.',
  },
  {
    icon: '🔗',
    title: 'React Router',
    text: 'Allows users to navigate between pages without refreshing the entire application.',
  },
  {
    icon: '🎓',
    title: 'Student Information',
    text: 'Provides an organized way to display student and course details.',
  },
]

// The React skills this laboratory activity demonstrates
const skills = [
  'React components',
  'JSX',
  'Props',
  'React Router',
  'Reusable UI',
  'Basic CSS',
]

function About() {
  return (
    <div className="page">
      {/* ---------- Page title ---------- */}
      <header className="page-head">
        <h1 className="page-title">About the Student Portal</h1>
        <p className="page-subtitle">
          The Student Information Portal is a simple React-based web
          application designed to organize student and course information in one
          place.
        </p>
      </header>

      {/* ---------- Three information cards ---------- */}
      <section className="card-grid mb-14">
        {infoCards.map((card) => (
          <div key={card.title} className="feature-card">
            <div className="feature-icon">{card.icon}</div>
            <h2 className="text-base font-bold text-slate-900">
              {card.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {card.text}
            </p>
          </div>
        ))}
      </section>

      {/* ---------- Built for Academic Learning ---------- */}
      <section className="card mb-8 p-7">
        <h2 className="section-title">Built for Academic Learning</h2>
        <p className="text-sm leading-relaxed text-slate-500">
          This project was created as a school activity to practise the basics
          of building a website with React. It demonstrates:
        </p>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              <span className="text-green-600">✓</span>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="card p-7">
        <h2 className="section-title">Contact</h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div>
            <p className="info-label">Email</p>
            <p className="text-sm font-semibold text-slate-900">
              support@studentportal.edu
            </p>
          </div>
          <div>
            <p className="info-label">Phone</p>
            <p className="text-sm font-semibold text-slate-900">
              (555) 123-4567
            </p>
          </div>
          <div>
            <p className="info-label">Address</p>
            <p className="text-sm font-semibold text-slate-900">
              123 Campus Drive, University Town
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About