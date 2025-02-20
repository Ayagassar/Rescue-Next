"use client"
import React, { useState } from 'react';

export default function FaqList() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: 'How does my donation help poor people?',
            answer: 'Your donation goes directly toward providing essential resources such as food, clothing, medical assistance, and education for those in need. We ensure that every contribution is used efficiently to make a meaningful impact in underprivileged communities.',
        },
        {
            question: 'Is my donation tax-deductible?',
            answer: 'Yes! As a registered non-profit organization, all donations are tax-deductible. After making a donation, you will receive a receipt that you can use for tax purposes.',
        },
        {
            question: 'How can I be sure my donation is making a difference?',
            answer: 'We believe in transparency and accountability. We provide regular updates, impact reports, and stories from the communities we help, so you can see exactly how your donation is changing lives.',
        },
        {
            question: 'Can I set up a recurring donation?',
            answer: 'Yes! You can choose to make a one-time donation or set up a recurring monthly donation. Recurring donations help us provide consistent support to those in need and make a long-term impact. You can manage or cancel your recurring donation at any time.',
        },
    ]

    return (
        <section className="faq-section">
            <div className="faq-container">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    <p className="faq-description">
                    Got questions? Here are some common ones about how our non-profit helps those in need and how you can support our mission.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="faq-item"
                            onClick={() => toggleFAQ(index)}
                        >
                            <button type="button" className="faq-item-button">
                                <span className="faq-item-title">{faq.question}</span>
                                <svg
                                    className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {openIndex === index && (
                                <div className="faq-item-content">
                                    <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <p className="faq-support-text">
                    Didn’t find the answer you are looking for?{' '}
                    <a href="#" className="faq-support-link">
                        Contact our support
                    </a>
                </p>
            </div>
        </section>
    );

}