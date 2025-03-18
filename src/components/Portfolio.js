import React, { useState, useEffect } from "react";
import "../styles/portfolio.css";

const Portfolio = () => {
    const [projects, setProjects] = useState({});
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

    // Fetch project data
    useEffect(() => {
        fetch("./data/projects.json")
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                console.log("Portfolio script initialized!"); // Debugging
            })
            .catch((error) => {
                console.error("Error loading projects:", error);
            });
    }, []);

    // Open modal and apply blur effect
    const openModal = (projectKey) => {
        if (projects[projectKey]) {
            setSelectedProject(projects[projectKey]);
            setIsModalOpen(true);
        } else {
            console.error("Project not found:", projectKey);
        }
    };

    // Close modal and remove blur effect
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    // Modal render
    const modalContent = selectedProject && isModalOpen && (

        <div
            className={`${isModalOpen ? "show" : ""}`} // Add the id here for targeting in CSS or other purposes
            id="projectModal"
            onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside it
        >
            <div className="project-container" onClick={closeModal}>
                <div className="modal-header">
                    <h3 className="modal-title">{selectedProject.title}</h3>
                    <button className="close-modal" onClick={closeModal} aria-label="Close">
                        &times;
                    </button>
                    <hr class="portfolio-thin-section-divider" />
                </div>
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                <p>{selectedProject.description}</p>

                <h3 className="modal-elements">Project Overview</h3>
                <hr class="portfolio-thin-section-divider" />
                <p>{selectedProject.details.projectOverview}</p>

                <h3 className="modal-elements">Approach</h3>
                <hr class="portfolio-thin-section-divider" />
                <ul>
                    {selectedProject.details.approach.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ul>
               
                <h3 className="modal-elements">Results</h3>
                <hr class="portfolio-thin-section-divider" />
                <p>{selectedProject.details.solutionAndResults}</p>
            </div>
        </div>
    );

    // Load projects into grid
    const loadProjects = () => {
        return Object.keys(projects).map((key) => {
            const project = projects[key];
            return (
                <div key={key} className="portfolio-item">
                    <img src={project.image} alt={project.title} />
                    <div className="portfolio-overlay">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <button
                            className="portfolio-view-btn"
                            onClick={() => openModal(key)} // On click, open the modal with the selected project
                        >
                            View Details
                        </button>
                    </div>
                </div>
            );
        });
    };

    return (
        <>
            <div className={`portfolio-content-wrapper ${isModalOpen ? "blur-background" : ""}`}>
                <div className="portfolio-header">
                    <h1>Portfolio</h1>
                    <p>Welcome to my portfolio! Explore my projects and feel free to reach out.</p>
                </div>
                {/* Projects Grid */}
                <div className="portfolio-grid">{loadProjects()}</div>

            </div>
            <div>

                {/* Modal */}
                {modalContent}
            </div>
        </>

    );
};

export default Portfolio;
