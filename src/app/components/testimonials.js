"use client";

export default function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-content">
                    <div className="testimonials-header">
                        <p className="testimonials-subheader">2,157 people have said how good Rescue Next is</p>
                        <h2 className="testimonials-title">What Our Donors and Volunteers say about Us</h2>
                    </div>

                    <div className="testimonials-link">
                        <a href="#" className="testimonials-link-text">Check all 2,157 reviews</a>
                    </div>

                    <div className="testimonials-grid">
                        {/* Testimonial 1 */}
                        <div className="testimonial-card">
                            <div className="testimonial-card-content">
                                <div className="testimonial-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="star-icon" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <blockquote className="testimonial-text">
                                    “Zibber flop noodle wuzzle quack, blibber snarf doodle zorp! Flibber jibber wackle snoof, glorp shmizzle bop.”
                                </blockquote>
                                <div className="testimonial-author">
                                    <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Madison Carter" className="author-avatar" />
                                    <div className="author-info">
                                        <p className="author-name">Madison Carter</p>
                                        <p className="author-role">Donor</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="testimonial-card">
                            <div className="testimonial-card-content">
                                <div className="testimonial-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="star-icon" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <blockquote className="testimonial-text">
                                    “Zibber flop noodle wuzzle quack, blibber snarf doodle zorp! Flibber jibber wackle snoof, glorp shmizzle bop.”
                                </blockquote>
                                <div className="testimonial-author">
                                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Tyler Bennett" className="author-avatar" />
                                    <div className="author-info">
                                        <p className="author-name">Tyler Bennett</p>
                                        <p className="author-role">Volunteer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-card-content">
                                <div className="testimonial-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="star-icon" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <blockquote className="testimonial-text">
                                    “Zibber flop noodle wuzzle quack, blibber snarf doodle zorp! Flibber jibber wackle snoof, glorp shmizzle bop.”
                                </blockquote>
                                <div className="testimonial-author">
                                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Olivia Brooks" className="author-avatar" />
                                    <div className="author-info">
                                        <p className="author-name">Olivia Brooks</p>
                                        <p className="author-role">Donor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}