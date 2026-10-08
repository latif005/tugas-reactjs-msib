import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-top bg-white mt-auto">
      <div className="container py-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">

        <p className="mb-0 text-secondary">
          © 2026 Develop by Latif Wibowo
        </p>

        <div className="d-flex gap-3">
          <Link
            to="/"
            className="text-secondary text-decoration-none"
          >
            Home
          </Link>

          <Link
            to="/team"
            className="text-secondary text-decoration-none"
          >
            Team
          </Link>

          <Link
            to="/contact"
            className="text-secondary text-decoration-none"
          >
            Contact
          </Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer