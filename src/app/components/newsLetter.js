"use client"

export default function NewsLetter() {
    return (
        <section className="newsletter-section">
            <h2 className="newsletter-header">Subscribe to Our Newsletter</h2>
            <p className="newsletter-subheader">Stay updated with our latest news, events, and stories. Join our community today!</p>
            <form className="newsletter-form">
                <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required 
                />
            <button type="submit" className="newsletter-button">
                Subscribe
            </button>
            </form>

        </section>
    )

}