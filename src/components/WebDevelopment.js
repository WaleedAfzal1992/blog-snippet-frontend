import React from "react";
import { FaLayerGroup, FaCogs, FaUsers, FaShieldAlt, FaCode, FaHandshake, FaLock } from "react-icons/fa";
import "../DevOpsSolutions.css";

const DataExtraction = () => {
  return (
    <div className="devops-container">
      <header className="devops-header">
        <h1>Web Development</h1>
        <p className="intro-text">
          Boost your business with tailor-made web applications built for the modern digital age.
        </p>
      </header>

      <div className="intro-section">
        <p className="section-text">
        We are experts in designing, developing, and deploying robust and user friendly web applications tailored to your business needs. Our team leverages the latest technologies and best practices to deliver scalable, secure, and high-performance solutions that drive growth and innovation.
        </p>
      </div>
      <div className="solutions-content">
  <div className="solution-item right-aligned">
    <div className="solution-header">
      <FaCogs className="solution-icon yellow-icon" />
      <h2>Custom Development</h2>
    </div>
    <p>
      We offer end-to-end web application development services focused on boosting performance through cloud deployment, API creation and integration, continuous quality assurance, and full SaaS support.
    </p>
  </div>

  <div className="solution-item left-aligned">
    <div className="solution-header">
      <FaUsers className="solution-icon yellow-icon" />
      <h2>Dedicated Team</h2>
    </div>
    <p>
      Every web app development project we undertake is backed by a dedicated team that stays engaged throughout the entire product lifecycle, ensuring consistent functionality and optimal performance.
    </p>
  </div>

  <div className="solution-item right-aligned">
    <div className="solution-header">
      <FaLayerGroup className="solution-icon yellow-icon" />
      <h2>Adaptable Software</h2>
    </div>
    <p>
      We craft technology stacks tailored for the fast-paced digital landscape, following development best practices and the Agile Scrum approach. This guarantees your web app remains adaptable and continuously improves even after deployment.
    </p>
  </div>

  <div className="solution-item left-aligned">
    <div className="solution-header">
      < FaShieldAlt className="solution-icon yellow-icon" />
      <h2>Always Secure</h2>
    </div>
    <p>
      Interconnected web apps can introduce security vulnerabilities. That’s why we conduct thorough security evaluations to ensure our applications adhere to the highest industry standards.
    </p>
  </div>
</div>


      <section className="our-works">
        <h2>Our Works</h2>
        <p>
          We harness advanced technologies and enterprise-grade solutions to solve real-world problems, enabling businesses to scale and evolve consistently.
        </p>
      </section>

      <section className="data-features">
      <div className="feature-item">
        <FaCode className="feature-icon" />
        <h3>Comprehensive Web Development</h3>
        <p>
          We consistently deliver award-winning applications that simplify life for businesses and consumers alike, all while maintaining the highest quality standards.
        </p>
      </div>
      <div className="feature-item">
        <FaHandshake className="feature-icon" />
        <h3>Partnerships for Growth</h3>
        <p>
          We are dedicated to building long-lasting partnerships and nurturing long-term relationships with our clients.
        </p>
      </div>
      <div className="feature-item">
        <FaLock className="feature-icon" />
        <h3>Secure Software</h3>
        <p>
          Our web applications are designed to scale with your organization’s needs, utilizing best practices such as Agile Scrum methodology to ensure continuous improvement and robust security even after launch.
        </p>
      </div>
    </section>

    </div>
  );
};

export default DataExtraction;