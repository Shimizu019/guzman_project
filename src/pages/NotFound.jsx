import { Link } from 'react-router-dom'

// Shown when the user opens a URL that does not exist
function NotFound() {
  return (
    <div className="page">
      <div className="card mx-auto max-w-lg p-10 text-center">
        <p className="text-6xl font-extrabold text-blue-600">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">
          Page Not Found
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* Link keeps the navigation inside the React app */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/students" className="btn btn-outline">
            Students
          </Link>
          <Link to="/courses" className="btn btn-outline">
            Courses
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound