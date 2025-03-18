import React, { useEffect, useState } from "react";
import "../styles/resume.css";
import html2pdf from 'html2pdf.js';

const Resume = () => {
    const [resumeData, setResumeData] = useState(null);

    // Fetch resume data
    useEffect(() => {
        fetch("/data/resume.json")
            .then((res) => res.json())
            .then((data) => setResumeData(data))
            .catch((error) => console.error("Error loading resume:", error));
    }, []);

    // Handle PDF Download

    const downloadResume = () => {
        // Get the element you want to convert to PDF
        const resumeElement = document.querySelector(".resume-box");
    
        // Define options for html2pdf.js
        const options = {
            margin: [10, 10, 10, 10], // Add equal margins around the content
            filename: "Ramyashree_Nandakumar_Resume.pdf",
            image: { type: "jpeg", quality: 0.98 }, // Use high-quality images
            html2canvas: {
                scale: 2, // Increase scale to improve rendering quality
                logging: true, // Useful for debugging
                useCORS: true, // Allow cross-origin images
            },
            jsPDF: {
                unit: "mm",
                format: "a4",
                orientation: "portrait", // Ensure the page is in portrait mode
                font: "sans-serif", // Ensure the font is sans-serif
                fontSize: 12, // Ensure font size is 12px
            },
        };
    
        // Generate the PDF using html2pdf
        html2pdf()
            .from(resumeElement)
            .set(options)
            .save()
            .catch((error) => {
                console.error("Error generating PDF:", error);
            });
    };
    


    if (!resumeData) return <p>Loading...</p>;

    return (
        <main className="resume-container">
            {/* Resume Header */}
            <div className="resume-header">
                <h2>Online Resume</h2>
                <button onClick={downloadResume} className="downloadResume">
                    <i className="fas fa-download"></i> Download PDF
                </button>
            </div>

            {/* Resume Content */}
            <div className="resume-box">
                {/* Header: Name, Title, Contact */}
                <div className="resume-top">
                    <div className="resume-header">
                        <h2>{resumeData.name}</h2>
                        <h4>{resumeData.title}</h4>
                    </div>
                    <div className="resume-contact">
                        <ul>
                            <li><i className="fas fa-envelope contact-icon email-icon"></i> {resumeData.email}</li>
                            <li><i className="fas fa-phone contact-icon phone-icon"></i> {resumeData.phone}</li>
                            <li><i className="fab fa-linkedin contact-icon linkedin-icon"></i> <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><i className="fas fa-briefcase contact-icon portfolio-icon"></i> <a href={resumeData.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a></li>
                            <li><i className="fas fa-map-marker-alt contact-icon address-icon"></i> {resumeData.address}</li>
                        </ul>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="section">
                    <div className="resume-section-header">
                        <h2>Summary</h2>
                    </div>
                    <hr className="resume-thin-section-divider" />
                    <p>{resumeData.summary}</p>
                </div>

                {/* Education Section */}
                <div className="resume-section">
                    <div className="resume-section-header">
                        <h2>Education</h2>
                    </div>
                    <hr className="resume-thin-section-divider" />
                    <table className="resume-table">
                        <tbody>
                            {resumeData.education.map((edu, index) => (
                                <React.Fragment key={index}>
                                    <tr >
                                        <td className="edu-degree"><strong>{edu.degree}</strong>, {edu.institution}</td>
                                        <td className="edu-duration">{edu.duration}</td>

                                    </tr>
                                    <tr >
                                        <td className="edu-coursework"><strong>Relevant Coursework:</strong> {edu.coursework.join(", ")}</td>
                                        <td className="edu-gpa">GPA: {edu.gpa}</td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Work Experience Section */}
                <div className="resume-section">
                    <div className="resume-section-header">
                        <h2>Work Experience</h2>
                    </div>
                    <hr className="resume-thin-section-divider" />
                    <div>
                        {resumeData.experience.map((job, index) => (
                            <div key={index} className="exp-item">
                                <div className="exp-header">
                                    <span className="exp-title"><strong>{job.title}</strong> – {job.company}</span>
                                    <span className="exp-duration">{job.duration}</span>
                                </div>
                                <p className="exp-tech-stack"><strong>Tech Stack:</strong> {job.tech_stack.join(", ")}</p>
                                <div className="exp-achievements">
                                    {job.achievements.map((ach, i) => (
                                        <div key={i} className="exp-achievement-block">
                                            <p className="exp-role"><strong>{ach.role}:</strong></p>
                                            <ul className="exp-list">
                                                {ach.details.map((detail, j) => <li key={j}>{detail}</li>)}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Projects Section */}
                <div className="resume-section">
                    <div className="resume-section-header">
                        <h2>Projects</h2>
                    </div>
                    <hr className="resume-thin-section-divider" />
                    <div>
                        {resumeData.projects.map((proj, index) => (
                            <div key={index}>
                                <div className="exp-header">
                                    <span>{proj.title}</span>
                                </div>
                                <p className="exp-tech-stack"><strong>Tech Stack:</strong> {proj.tech_stack.join(", ")}</p>
                                <ul className="exp-list">
                                    {proj.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div className="resume-section">
                    <div className="resume-section-header">
                        <h2>Technical Skills</h2>
                    </div>
                    <hr className="resume-thin-section-divider" />
                    <div>
                        {Object.keys(resumeData.skills).map((category, index) => (
                            <ul key={index} className="skill-list">
                                <li><strong>{category.replace("_", " ").toUpperCase()}:</strong> {resumeData.skills[category].join(", ")}</li>
                            </ul>
                        ))}
                    </div>
                </div>

                {/* Awards Section */}
                <div className="resume-section">
                    <div className="resume-section-header">
                        <h2>Awards</h2>
                    </div>
                    <hr className="resume-thin-section-divider" />
                    <div>
                        {resumeData.awards.map((award, index) => (
                            <p key={index} className="award-list"><strong>{award.title}:</strong> {award.description}</p>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Resume;
