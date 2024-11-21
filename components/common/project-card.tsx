'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SiGooglemaps } from 'react-icons/si';
import Button from './button';
import { useRouter } from 'next/navigation';

interface Project {
  id: string;
  slug: string;
  description: string;
  imageSrc: string[];
  title: string;
  location: string;
  status: string;
  brochureSrc: string;
  logo: string;
}

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  const router = useRouter();

  return (
    <Link href={`/projects/${project.slug}`}>
      {' '}
      <div
        className="relative border hover:cursor-pointer overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-500 rounded"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={project.imageSrc[0]}
          alt="Loading..."
          width={1000}
          height={1000}
          className="lg:h-[350px] h-[350px] shadow object-cover"
        />
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 bg-primary/80 rounded-b text-white transform transition-transform duration-500 ${
            hovered ? 'lg:translate-y-0' : 'lg:translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between">
            {' '}
            <Image
              width={100}
              height={100}
              src={project.logo}
              alt={project.title}
              className="object-cover"
            />
            <Button
              onClick={() => router.push(`/projects/${project.slug}`)}
              label={'Learn More'}
            />
          </div>

          {/* <h3 className="text-xl font-semibold playfair capitalize">
            {project.title}
          </h3> */}
          {/* <p className="text-sm capitalize flex items-center gap-3">
            {' '}
            <SiGooglemaps />
            {project.location}
          </p> */}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
