import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import hotel from "../assets/projects/hotel.png";
import pod from "../assets/projects/pod.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="BookMyStay"
              description="BookMyStay is a hotel booking platform featuring responsive accommodation listings, reservation management, and guest interactions. Built with React and Node.js, it integrates advanced search filters, Cloudinary for image storage, and Stripe API for secure payments. JWT-based authentication ensures user data privacy, while MongoDB supports efficient data handling for a seamless booking experience.."
              ghLink="https://github.com/AryanHayaran/BookMyStay"
              liveLink="https://hotelbooking-frontend-km05.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pod}
              isBlog={false}
              title="Audify"
              description="Audify is an AI-powered podcast platform built with Next.js and TypeScript, enabling audio generation from user-submitted transcripts. It offers customizable thumbnails through AI or local uploads, boosting visual engagement. The platform uses Convex for scalable database management and integrates Clerk for secure, seamless user authentication, providing a reliable and user-friendly experience.."
              ghLink="https://github.com/AryanHayaran/Audify"
              liveLink="https://podcoast-982u41y6q-aryanhayarans-projects.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects