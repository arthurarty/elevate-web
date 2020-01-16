import React from 'react';
import '../../assets/styles/pages/partnerpage.scss'

export default function PartnersPage() {
  return (
    <div>
      <div className="latest-projects">
        <p>LATEST PROJECTS</p>
        <div className="projects-container">
          <div className="project-container">
            <img
              src="https://images.unsplash.com/photo-1579130589334-31c6414eafdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
              alt="branding"
            />
          </div>
          <div className="project-container">
          <img
              src="https://images.unsplash.com/photo-1578874619862-55fc955ad118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="branding"
            />
          </div>
          <div className="project-container">
          <img
              src="https://images.unsplash.com/photo-1579121477063-4026649ad6d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="branding"
            />
          </div>
        </div>
      </div>
      <div className="partners">
        <p>THEY TRUSTED US</p>
      </div>
    </div>
  );
}