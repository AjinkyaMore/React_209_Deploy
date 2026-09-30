import { Link } from "react-router-dom"

function Header() {

  return (
    <>
      {/* ================= Navbar ================= */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container">

          <Link className="navbar-brand fw-bold text-primary" to="/">
            My App
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="mainNavbar"
          >
            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>

            <div className="d-flex gap-2">

              <Link
                to="/login"
                className="btn btn-outline-primary btn-sm px-3"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-primary btn-sm px-3"
              >
                Register
              </Link>

            </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Header