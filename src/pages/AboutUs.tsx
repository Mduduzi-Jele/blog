import React from 'react';
import pic1 from '../assets/images/pic1.jpeg'; 
import pic4 from '../assets/images/pic4.jpeg'; 
import pic2 from '../assets/images/pic2.jpeg'; 
import Navigation from "./Navigation";


const AboutUs: React.FC = () => {
  return (
    <>
      <Navigation />
      <header className="header">
        <h1>About Us</h1>
      </header>
      <div className="about-us">
        <section className="section">
          <div className="section-content">
            <h2>Our Mission</h2>
            <p>
              We are dedicated to keeping you informed and empowered with the latest news from around the world. Our mission is to provide accurate, unbiased, and timely news coverage on a wide range of topics, from politics and economics to technology and culture. We believe in the power of information to shape a better future, and we're here to be your trusted source.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="section-content">
            <h2>Our Team</h2>
            <p>
              Our dedicated team members work tirelessly to bring you the best content possible:
            </p>

            <div className="team-members">
              <div className="team-member">
                <img src={pic1} alt="John Doe" />
                <h3>John Doe</h3>
                <p>Founder & Chief Editor</p>
              </div>
              <div className="team-member">
                <img src={pic4}  alt="Jane Smith" />
                <h3>Jane Smith</h3>
                <p>Senior Correspondent</p>
              </div>
              <div className="team-member">
                <img src={pic2}  alt="Jane Smith" />
                <h3>Jane Smith</h3>
                <p>Technology and Innovation Analyst</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-content">
            <div className="our-story">
              <h3>Our Story</h3>
              <p>
                Founded in 2014, our blog has been on a mission to deliver news that matters. Our journey began with a small team of dedicated journalists who believed in the power of unbiased reporting.
              </p>
            </div>
            <div className="what-we-cover">
              <h3>What We Cover</h3>
              <p>
                We cover a wide range of topics, including breaking news, politics, business, technology, culture, and more. Our goal is to provide you with comprehensive coverage to keep you well-informed.
              </p>
            </div>
            <div className="our-values">
              <h3>Our Values</h3>
              <p>
                At Our News Blog, we uphold values of accuracy, impartiality, transparency, and accountability in our reporting. We are committed to delivering news with integrity.
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-content">
            <div className="get-in-touch">
              <h3>Get in Touch</h3>
              <p>
                Have a news tip, question, or feedback? We're here to listen. Reach out to us at <a href="mailto:contact@ournewsblog.com">contact@ournewsblog.com</a>. Your insights and leads contribute to the stories we tell.
              </p>
            </div>
            <div className="join-news-community">
              <h3>Join Our News Community</h3>
              <p>
                Stay connected with us on social media and subscribe to our newsletter for the latest updates, breaking news, and in-depth analyses.
              </p>
              <div className="social-media-links">
                <a href="https://www.facebook.com/ournewsblog">Facebook</a>
                <a href="https://twitter.com/ournewsblog">Twitter</a>
                <a href="https://www.linkedin.com/company/ournewsblog">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
