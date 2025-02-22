"use client"; 

import DonationForm from "./components/donationForm";
import Cards from "./components/cards";
import HeroSection from "./components/heroSection";
import FaqList from "./components/faqList";
import ArticlesSection from "./components/articlesSection";
import WhyChooseUs from "./components/whyChooseUs";
import NewsLetter from "./components/newsLetter"
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
     <HeroSection />

      <DonationForm />

        <Cards />

        <WhyChooseUs />

          <ArticlesSection />

       <section className="gallery-section">
            <h2 className="gallery-header">Photo Gallery</h2>
            <p className="gallery-subheader">Explore moments from our journey and see the impact of your support.</p>
            <div className="gallery-grid">
                <div className="gallery-item">
                    <img src="https://cdn.pixabay.com/photo/2017/09/16/01/03/girl-2754233_1280.jpg" alt="Gallery Image 1" className="gallery-image" />
                </div>
                <div className="gallery-item">
                    <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vciUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Gallery Image 2" className="gallery-image" />
                </div>
                <div className="gallery-item">
                    <img src="https://media.istockphoto.com/id/629760410/photo/young-indian-woman-holding-her-little-baby-india.jpg?s=612x612&w=0&k=20&c=D4Rv1jnXdvirndmhl9px4R8iX0_uwe5sB5GEdSMUlQ4=" alt="Gallery Image 3" className="gallery-image" />
                </div>
                <div className="gallery-item">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/0*AyMbuO2x8Ucg-tEd" alt="Gallery Image 4" className="gallery-image" />
                </div>
            </div>
        </section>

        <FaqList />
        <Testimonials />
        <NewsLetter />
        <Footer />
    </>
  );
}

