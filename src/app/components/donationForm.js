"use client";
export default function DonationForm() {
    return (
        <section>
            <div className="donation-container">
                <div className="donation-box">
                    <form className="donation-form">
                        <h1 className="form-header">Make a Difference Today</h1>
                        <p className="form-p">Your generous donation helps us continue our work and make a difference. Thank you for your support!</p>
                        <div className="form-fields">
                            <input placeholder="First Name" className="field" type="text" name="First name" id="First name" required/>
                            <input placeholder="Amount" className="field" type="number" id="donation-input" min="0" required/>
                            <select className="field" name="frequency" id="frequency" placeholder="How often?" required>
                                <option value="daily">One Time</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                            </select>
                        </div>
                        <button type="submit" className="donate-button">Donate Now</button>
                    </form>
                </div>
            </div>
        </section>
    );
}