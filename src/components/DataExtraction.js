import React from "react";
import { FaClipboardCheck, FaFileExport, FaTools, FaFileAlt, FaDatabase, FaBrush } from "react-icons/fa";
import "../DevOpsSolutions.css";
import { BsFileCheck } from 'react-icons/bs'

const DataExtraction = () => {
  return (
    <div className="devops-container">
      <header className="devops-header">
        <h1>Data Extraction/ETL</h1>
        <p className="intro-text">
          Providing customized web crawling solutions for efficient data extraction and insightful presentation.
        </p>
      </header>

      <div className="intro-section">
        <p className="section-text">
          Effective web scraping tools are key to achieving optimal results.
        </p>
      </div>
      <div className="solutions-content">
  <div className="solution-item right-aligned">
    <div className="solution-header">
      <FaFileExport className="solution-icon yellow-icon" />
      <h2>Extraction</h2>
    </div>
    <p>
      We specialize in building custom crawl clusters that efficiently navigate large volumes of data from various sources, rapidly extracting valuable insights while overcoming scalability challenges.
    </p>
  </div>

  <div className="solution-item left-aligned">
    <div className="solution-header">
      <FaBrush className="solution-icon yellow-icon" />
      <h2>Cleaning</h2>
    </div>
    <p>
      We refine the raw data gathered by our web scraping tools through an advanced platform that removes outdated information, duplicates, errors, and irrelevant content.
    </p>
  </div>

  <div className="solution-item right-aligned">
    <div className="solution-header">
      <FaClipboardCheck className="solution-icon yellow-icon" />
      <h2>Quality assurance</h2>
    </div>
    <p>
      We apply strict quality checks at every stage to ensure our web scraping tools perform efficiently and align with your expectations.
    </p>
  </div>

  <div className="solution-item left-aligned">
    <div className="solution-header">
      <BsFileCheck className="solution-icon yellow-icon" />
      <h2>Verification & validation</h2>
    </div>
    <p>
      We continuously check your data during the scraping process to ensure and confirm the accuracy of the outcomes
    </p>
  </div>
</div>


      <section className="our-works">
        <h2>Our Works</h2>
        <p>
          We utilize advanced technology and business solutions to address practical challenges and assist companies in growing and improving.
        </p>
      </section>

      <section className="data-features">
      <div className="feature-item">
        <FaTools className="feature-icon" />
        <h3>Specialized tools</h3>
        <p>
          Our tools are specifically crafted to precisely target and expertly extract your data.
        </p>
      </div>
      <div className="feature-item">
        <FaFileAlt className="feature-icon" />
        <h3>Focused data</h3>
        <p>
          Our web scraping specialists gather and retrieve the necessary data using thorough web scraping techniques.
        </p>
      </div>
      <div className="feature-item">
        <FaDatabase className="feature-icon" />
        <h3>Cleansed data</h3>
        <p>
          Our data purification processes guarantee that you receive only the most valuable data.
        </p>
      </div>
    </section>

    </div>
  );
};

export default DataExtraction;