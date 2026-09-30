import { Link } from 'react-router-dom';
import '../CSS/Footer.css'

function Footer() {

    return (
    <>
                  {/* ================= Footer ================= */}
            <footer className="footer-section text-white pt-5 pb-3">

                <div className="container">

                    <div className="row g-4">

                        <div className="col-md-4">

                            <h5 className="fw-bold">
                                My App
                            </h5>

                            <p className="text-light opacity-75">
                                A simple and modern platform designed to
                                provide useful learning and services.
                            </p>

                        </div>


                        <div className="col-6 col-md-2">

                            <h6 className="fw-bold">
                                Quick Links
                            </h6>

                            <ul className="list-unstyled">

                                <li>
                                    <Link to="/" className="footer-link">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/about" className="footer-link">
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/courses" className="footer-link">
                                        Courses
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/contact" className="footer-link">
                                        Contact
                                    </Link>
                                </li>

                            </ul>

                        </div>


                        <div className="col-6 col-md-3">

                            <h6 className="fw-bold">
                                Resources
                            </h6>

                            <ul className="list-unstyled">

                                <li>
                                    <Link to="/services" className="footer-link">
                                        Services
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/courses" className="footer-link">
                                        Programs
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/faq" className="footer-link">
                                        FAQ
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/privacy" className="footer-link">
                                        Privacy Policy
                                    </Link>
                                </li>

                            </ul>

                        </div>


                        <div className="col-md-3">

                            <h6 className="fw-bold">
                                Contact
                            </h6>

                            <p className="text-light opacity-75 mb-1">
                                Pune, Maharashtra
                            </p>

                            <p className="text-light opacity-75 mb-1">
                                contact@example.com
                            </p>

                            <p className="text-light opacity-75">
                                +91 98765 43210
                            </p>

                        </div>

                    </div>


                    <hr className="border-secondary mt-4" />

                    <div className="text-center">

                        <small className="text-light opacity-75">
                            © 2026 My App. All rights reserved.
                        </small>

                    </div>

                </div>

            </footer>
    </>
  )
}

export default Footer;