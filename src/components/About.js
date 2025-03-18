import React from "react";
import "../styles/about.css";

const About = () => {
    return (
        <div className="about-content">
            <div className="about-content-box">
                <h1>Ramyashree Nandakumar</h1>
                <h3>Full Stack Developer | Data Scientist</h3>
                <p>
                    I'm a Software Engineer specializing in full-stack development, machine learning, and cloud technologies.
                    With 4 years of experience, I build scalable, high-performance applications for diverse industries.
                </p>
            </div>

            <div className="about-content-box">
                <div className="about-title-section">
                    <div className="about-title-line"></div>
                    <h2>Key Projects</h2>
                </div>
                <ul>
                    <li><strong>Ellucian Payment Services:</strong> Engineered a cloud-based SaaS payment solution integrated
                        with AWS Serverless and microservices. Developed secure transaction processing, reducing payment failure
                        rates by 20%, and improved scalability through efficient API integrations with third-party payment
                        providers.</li>

                    <li><strong>Quercus Logging System:</strong> Built a logging microservice utilizing AWS S3 and Amazon Athena
                        for high-efficiency log storage and query execution. Enhanced system monitoring and debugging by
                        improving log accessibility by 30%.</li>

                    <li><strong>Automated Image Captioning System:</strong> Designed a deep learning-powered image captioning
                        model using ResNet50 for feature extraction, an LSTM-based sequence model, and Attention Mechanism.
                        Achieved a BLEU score of 0.67, enhancing the accuracy of AI-generated captions for images.</li>

                    <li><strong>Credit Card Fraud Detection:</strong> Developed machine learning models using TensorFlow &
                        Scikit-Learn to detect fraudulent transactions in real-time, achieving 95% precision. Implemented
                        anomaly detection techniques such as Isolation Forest and One-Class SVM to enhance fraud detection.</li>


                    <li><strong>Web Scraper for E-commerce Analytics:</strong> Developed a Python-based web scraper using
                        BeautifulSoup and Pandas to analyze pricing trends across 10,000+ products. Automated data extraction
                        and visualization to assist in competitive market analysis.</li>

                </ul>
            </div>

            <div className="about-content-box">
                <div className="about-title-section">
                    <div className="about-title-line"></div>
                    <h2>Technical Skills</h2>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="about-skill-card">
                            <i className="fab fa-python"></i>
                            <div>
                                <h5>Python</h5>
                                <p>Experienced in Python for data science, machine learning, and backend development.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about-skill-card">
                            <i className="fab fa-js"></i>
                            <div>
                                <h5>JavaScript</h5>
                                <p>Proficient in vanilla JavaScript and ES6+ for frontend and backend development.</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="about-skill-card">
                            <i className="fab fa-java"></i>
                            <div>
                                <h5>Java</h5>
                                <p>Experienced in Java for building scalable backend systems, working with frameworks like
                                    Spring Boot and Hibernate.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about-skill-card">
                            <i className="fab fa-docker"></i>
                            <div>
                                <h5>Docker</h5>
                                <p>Proficient in using Docker for containerization, streamlining deployment processes, and
                                    managing microservices.</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="about-skill-card">
                            <i className="fab fa-node"></i>
                            <div>
                                <h5>Node.js</h5>
                                <p>Backend development with Express.js and NestJS for scalable APIs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about-skill-card">
                            <i className="fab fa-react"></i>
                            <div>
                                <h5>React.js</h5>
                                <p>Frontend development using React.js for dynamic web applications.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about-skill-card">
                            <i className="fas fa-database"></i>
                            <div>
                                <h5>Database Systems</h5>
                                <p>Proficient in MySQL, PostgreSQL, MongoDB, and Oracle databases.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about-skill-card">
                            <i className="fas fa-cloud"></i>
                            <div>
                                <h5>Cloud Technologies</h5>
                                <p>Hands-on experience with AWS (Serverless, S3, DynamoDB) for cloud deployments.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about-skill-card">
                            <i className="fas fa-brain"></i>
                            <div>
                                <h5>Machine Learning</h5>
                                <p>Expertise in AI, deep learning, Scikit-Learn, and TensorFlow.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about-skill-card">
                            <i className="fas fa-cogs"></i>
                            <div>
                                <h5>Other Skills</h5>
                                <p>API development, Microservices architecture, and software testing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
