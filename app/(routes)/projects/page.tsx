import React from 'react';
import ProjectsClient from './projects-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore Nazhomes signature projects, where innovation meets elegance. Dive into a portfolio of extraordinary developments that redefine modern living. Find your perfect home with Nazhomes.',
};

const ProjectsPage = () => {
  return <ProjectsClient />;
};

export default ProjectsPage;
