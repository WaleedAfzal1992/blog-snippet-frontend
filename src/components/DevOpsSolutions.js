import React from "react";
import { FaChartLine, FaEye, FaRobot, FaCode, FaUserTie, FaUsers, FaLaptop } from "react-icons/fa";
import "../DevOpsSolutions.css";

const DevOpsSolutions = () => {
  return (
    <div className="devops-container">
      <header className="devops-header">
        <h1>DevOps solutions</h1>
        <p className="intro-text">
          We provide assistance throughout the entire process, from initial planning to ongoing development and monitoring.
        </p>
      </header>

      <div className="intro-section">
        <p className="section-text">
          We offer solutions that bring you closer to digital evolution.
        </p>
      </div>
      <div className="solutions-content">
  <div className="solution-item right-aligned">
    <div className="solution-header">
      <FaChartLine className="solution-icon yellow-icon" />
      <h2>Incremental enhancement</h2>
    </div>
    <p>
      Our DevOps solutions maintain software performance while continuously driving improvement through incremental updates.
    </p>
  </div>

  <div className="solution-item left-aligned">
    <div className="solution-header">
      <FaEye className="solution-icon yellow-icon" />
      <h2>Ongoing delivery oversight</h2>
    </div>
    <p>
      We support your existing team in adopting continuous delivery frameworks, enabling them to adapt effectively to changing user demands and evolving business goals.
    </p>
  </div>

  <div className="solution-item right-aligned">
    <div className="solution-header">
      <FaRobot className="solution-icon yellow-icon" />
      <h2>Automation</h2>
    </div>
    <p>
      Our team streamlines the automation of resource-heavy tasks in your existing workflows, ensuring reliable Delivery Automation for seamless product releases and updates.
    </p>
  </div>

  <div className="solution-item left-aligned">
    <div className="solution-header">
      <FaCode className="solution-icon yellow-icon" />
      <h2>Code-driven infrastructure</h2>
    </div>
    <p>
      Your code is a vital business asset, and we protect it by detecting and addressing risks, enhancing update processes, and ensuring seamless integration.
    </p>
  </div>
</div>


      <section className="our-works">
        <h2>Our Works</h2>
        <p>
          We prioritize innovative technology and strategic solutions to tackle real-world challenges, helping businesses reach new levels of success and growth.
        </p>
      </section>
      
      <section className="data-features">
            <div className="feature-item">
              <FaUserTie className="feature-icon" />
              <h3>Professional-level expertise</h3>
              <p>
                Our DevOps experts possess more than ten years of proficiency in crafting and launching intricate enterprise-level software solutions.
              </p>
            </div>
            <div className="feature-item">
              <FaUsers className="feature-icon" />
              <h3>Adopting an Agile methodology</h3>
              <p>
                our team ensures efficient project execution and delivers top-notch software quality, even for large-scale projects.
              </p>
            </div>
            <div className="feature-item">
              <FaLaptop className="feature-icon" />
              <h3>Continuous watching</h3>
              <p>
                After deployment, our DevOps experts maintain constant vigilance over your software, swiftly addressing any issues to uphold user satisfaction
              </p>
            </div>
          </section>

    </div>
  );
};

export default DevOpsSolutions;