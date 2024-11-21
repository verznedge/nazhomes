'use client';

import PageHeader from '@/components/common/page-header';
import React from 'react';
import projectList from '../../../data/projects.json';
import ProjectCard from '@/components/common/project-card';

const ProjectsClient = () => {
  console.log(projectList);
  return (
    <div>
      <PageHeader
        title={' Our Signature Projects'}
        imageUrl={'/assets/slider/6.jpg'}
        subtitle="Where Innovation Meets Elegance"
      />
      <div className="mx-auto max-w-5xl py-20 px-3">
        <div>
          <p className="text-lg lg:text-3xl font-bold text-primary">
            Naz Homes takes pride in crafting residential developments that go
            above and beyond expectations, offering a luxurious living
            experience that reflects their commitment to excellence.
          </p>
        </div>
        <ul className="grid lg:grid-cols-2 gap-5 mt-20">
          {projectList.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsClient;
