import { Link } from "react-router-dom";
import '../CSS/Home.css';

function Home() {
    return (
        <div className="home-page">

            {/* ================= Hero Section ================= */}
            <section className="hero-section">

                <div className="container">

                    <div className="row align-items-center py-5">

                        <div className="col-lg-6">

                            <span className="badge bg-primary-subtle text-primary mb-3">
                                Learn • Build • Grow
                            </span>

                            <h1 className="display-4 fw-bold mb-3">
                                Build Your Skills.
                                <br />
                                <span className="text-primary">
                                    Shape Your Future.
                                </span>
                            </h1>

                            <p className="lead text-secondary mb-4">
                                Learn practical skills through structured
                                courses, real-world projects and hands-on
                                learning experiences.
                            </p>

                            <div className="d-flex gap-2 flex-wrap">

                                <Link
                                    to="/courses"
                                    className="btn btn-primary btn-lg px-4"
                                >
                                    Explore Courses
                                </Link>

                                <Link
                                    to="/about"
                                    className="btn btn-outline-secondary btn-lg px-4"
                                >
                                    Learn More
                                </Link>

                            </div>

                        </div>


                        <div className="col-lg-6 mt-5 mt-lg-0">

                            <div className="hero-image-wrapper">

                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                                    alt="Learning"
                                    className="img-fluid rounded-4 shadow"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= Stats ================= */}
            <section className="py-4 border-bottom">

                <div className="container">

                    <div className="row text-center g-4">

                        <div className="col-6 col-md-3">
                            <h3 className="fw-bold text-primary mb-1">
                                25+
                            </h3>
                            <small className="text-secondary">
                                Courses
                            </small>
                        </div>

                        <div className="col-6 col-md-3">
                            <h3 className="fw-bold text-primary mb-1">
                                500+
                            </h3>
                            <small className="text-secondary">
                                Students
                            </small>
                        </div>

                        <div className="col-6 col-md-3">
                            <h3 className="fw-bold text-primary mb-1">
                                10+
                            </h3>
                            <small className="text-secondary">
                                Trainers
                            </small>
                        </div>

                        <div className="col-6 col-md-3">
                            <h3 className="fw-bold text-primary mb-1">
                                95%
                            </h3>
                            <small className="text-secondary">
                                Satisfaction
                            </small>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= About Section ================= */}
            <section className="py-5">

                <div className="container">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-5">

                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                                alt="Learning environment"
                                className="img-fluid rounded-4"
                            />

                        </div>

                        <div className="col-lg-7">

                            <span className="text-primary fw-semibold">
                                ABOUT US
                            </span>

                            <h2 className="fw-bold mt-2 mb-3">
                                Learning That Goes Beyond the Classroom
                            </h2>

                            <p className="text-secondary">
                                Our goal is to provide a simple and practical
                                learning environment where learners can
                                develop technical knowledge and apply it to
                                real-world situations.
                            </p>

                            <p className="text-secondary">
                                With structured learning paths, practical
                                examples and project-based learning, we help
                                learners build confidence and improve their
                                skills.
                            </p>

                            <Link
                                to="/about"
                                className="btn btn-outline-primary"
                            >
                                Read More
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= Courses Section ================= */}
            <section className="py-5 bg-light">

                <div className="container">

                    <div className="text-center mb-5">

                        <span className="text-primary fw-semibold">
                            OUR COURSES
                        </span>

                        <h2 className="fw-bold mt-2">
                            Explore Our Popular Courses
                        </h2>

                        <p className="text-secondary">
                            Choose from a range of practical and
                            career-focused learning programs.
                        </p>

                    </div>


                    <div className="row g-4">

                        {/* Course 1 */}
                        <div className="col-md-6 col-lg-4">

                            <div className="card h-100 border-0 shadow-sm">

                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"
                                    className="card-img-top"
                                    alt="Programming"
                                />

                                <div className="card-body">

                                    <span className="badge bg-primary-subtle text-primary mb-2">
                                        Development
                                    </span>

                                    <h5 className="card-title fw-bold">
                                        Full Stack Development
                                    </h5>

                                    <p className="card-text text-secondary">
                                        Learn frontend and backend
                                        development with practical projects.
                                    </p>

                                    <Link
                                        to="/courses"
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        View Course
                                    </Link>

                                </div>

                            </div>

                        </div>


                        {/* Course 2 */}
                        <div className="col-md-6 col-lg-4">

                            <div className="card h-100 border-0 shadow-sm">

                                <img
                                    src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=700&q=80"
                                    className="card-img-top"
                                    alt="Programming course"
                                />

                                <div className="card-body">

                                    <span className="badge bg-success-subtle text-success mb-2">
                                        Programming
                                    </span>

                                    <h5 className="card-title fw-bold">
                                        Programming Fundamentals
                                    </h5>

                                    <p className="card-text text-secondary">
                                        Build a strong foundation in
                                        programming concepts and logic.
                                    </p>

                                    <Link
                                        to="/courses"
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        View Course
                                    </Link>

                                </div>

                            </div>

                        </div>


                        {/* Course 3 */}
                        <div className="col-md-6 col-lg-4">

                            <div className="card h-100 border-0 shadow-sm">

                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80"
                                    className="card-img-top"
                                    alt="Technology course"
                                />

                                <div className="card-body">

                                    <span className="badge bg-warning-subtle text-warning mb-2">
                                        Technology
                                    </span>

                                    <h5 className="card-title fw-bold">
                                        Modern Technologies
                                    </h5>

                                    <p className="card-text text-secondary">
                                        Explore modern tools and technologies
                                        used in today's applications.
                                    </p>

                                    <Link
                                        to="/courses"
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        View Course
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="text-center mt-4">

                        <Link
                            to="/courses"
                            className="btn btn-primary px-4"
                        >
                            View All Courses
                        </Link>

                    </div>

                </div>

            </section>


            {/* ================= Why Choose Us ================= */}
            <section className="py-5">

                <div className="container">

                    <div className="text-center mb-5">

                        <span className="text-primary fw-semibold">
                            WHY CHOOSE US
                        </span>

                        <h2 className="fw-bold mt-2">
                            Simple. Practical. Effective.
                        </h2>

                    </div>


                    <div className="row g-4">

                        <div className="col-md-4">

                            <div className="card h-100 border text-center p-4">

                                <div className="feature-number mx-auto mb-3">
                                    01
                                </div>

                                <h5 className="fw-bold">
                                    Practical Learning
                                </h5>

                                <p className="text-secondary mb-0">
                                    Focus on practical examples and real-world
                                    applications instead of only theory.
                                </p>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="card h-100 border text-center p-4">

                                <div className="feature-number mx-auto mb-3">
                                    02
                                </div>

                                <h5 className="fw-bold">
                                    Expert Guidance
                                </h5>

                                <p className="text-secondary mb-0">
                                    Learn with structured guidance and
                                    instructor-supported learning.
                                </p>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="card h-100 border text-center p-4">

                                <div className="feature-number mx-auto mb-3">
                                    03
                                </div>

                                <h5 className="fw-bold">
                                    Real Projects
                                </h5>

                                <p className="text-secondary mb-0">
                                    Apply your knowledge by working on
                                    practical projects and exercises.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= Testimonials ================= */}
            <section className="py-5 bg-light">

                <div className="container">

                    <div className="text-center mb-5">

                        <span className="text-primary fw-semibold">
                            TESTIMONIALS
                        </span>

                        <h2 className="fw-bold mt-2">
                            What People Say
                        </h2>

                    </div>


                    <div className="row g-4">

                        <div className="col-md-4">

                            <div className="card testimonial-card h-100 border-0 shadow-sm p-4">

                                <div className="d-flex align-items-center mb-3">

                                    <img
                                        src="https://i.pravatar.cc/80?img=12"
                                        alt="User"
                                        className="testimonial-image me-3"
                                    />

                                    <div>
                                        <h6 className="fw-bold mb-0">
                                            Rahul Sharma
                                        </h6>

                                        <small className="text-secondary">
                                            Student
                                        </small>
                                    </div>

                                </div>

                                <p className="text-secondary mb-0">
                                    "The learning experience was simple,
                                    practical and easy to understand."
                                </p>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="card testimonial-card h-100 border-0 shadow-sm p-4">

                                <div className="d-flex align-items-center mb-3">

                                    <img
                                        src="https://i.pravatar.cc/80?img=32"
                                        alt="User"
                                        className="testimonial-image me-3"
                                    />

                                    <div>
                                        <h6 className="fw-bold mb-0">
                                            Priya Patel
                                        </h6>

                                        <small className="text-secondary">
                                            Student
                                        </small>
                                    </div>

                                </div>

                                <p className="text-secondary mb-0">
                                    "The practical approach helped me
                                    understand concepts much better."
                                </p>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="card testimonial-card h-100 border-0 shadow-sm p-4">

                                <div className="d-flex align-items-center mb-3">

                                    <img
                                        src="https://i.pravatar.cc/80?img=56"
                                        alt="User"
                                        className="testimonial-image me-3"
                                    />

                                    <div>
                                        <h6 className="fw-bold mb-0">
                                            Vijay Kumar
                                        </h6>

                                        <small className="text-secondary">
                                            Developer
                                        </small>
                                    </div>

                                </div>

                                <p className="text-secondary mb-0">
                                    "A clean learning environment with
                                    useful practical examples."
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="py-5">

                <div className="container">

                    <div className="cta-section rounded-4 p-5 text-center">

                        <h2 className="fw-bold mb-3">
                            Start Your Learning Journey
                        </h2>

                        <p className="text-secondary mb-4">
                            Explore our courses and take the next step
                            towards your goals.
                        </p>

                        <Link
                            to="/courses"
                            className="btn btn-primary px-4"
                        >
                            Explore Courses
                        </Link>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Home;