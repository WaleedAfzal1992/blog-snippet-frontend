import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faDatabase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import "../Services.css"; // Assume we have a corresponding CSS file

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>OUR SERVICES</h1>
        <p className="subheading">We run all kinds of services</p>
        <p className="description">
          Our experience has enabled our clients to successfully launch and promote their products in the most effective way over the years
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
            <div className="service-icon">
            <FontAwesomeIcon icon={faCloud} size="3x" />
          </div>
          <h2>DevOps & Solution Architecture</h2>
          <p>
            At Sunsprinkle, we move apps and infrastructure to the cloud for better performance and security.
          </p>
          <a href="/devops-solution" className="view-more">View More →</a>
        </div>

        <div className="service-card">
            <div className="service-icon">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
          </div>
          <h2>Data Extraction/ETL</h2>
          <p>
            Unlock the power of the web with our expert Web Data Extraction services.
          </p>
          <a href="/data-extraction" className="view-more">View More →</a>
        </div>

        <div className="service-card">
            <div className="service-icon">
            <FontAwesomeIcon icon={faCode} size="3x" />
          </div>
          <h2>Web Development</h2>
          <p>
            Transform your digital presence with our premium Web Development services.
          </p>
          <a href="/web-development" className="view-more">View More →</a>
        </div>
      </div>
    </div>
  );
};

export default Services;