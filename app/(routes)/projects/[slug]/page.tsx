import { notFound } from 'next/navigation';
import projectList from '../../../../data/projects.json';
import Container from '@/components/common/container';
import Image from 'next/image';
import { SiGooglemaps } from 'react-icons/si';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import PicsGrid from '../components/pics-grid';
import LocationMap from '@/components/common/location-map';

export async function generateStaticParams() {
  return projectList.map((p) => ({
    slug: p.slug.toString(),
  }));
}

export default function slug({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = projectList.find((p) => p.slug.toString() === slug);
  if (!project) {
    notFound();
  }

  return (
    <main>
      <div className="relative flex items-center justify-center h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <Image
          width={1000}
          height={1000}
          src={project.imageSrc[0]}
          alt={'Loading...'}
          className="w-full h-[80vh] object-cover z-1"
        />
        <div className="absolute inset-0 z-2 w-full h-full">
          <Container>
            <div className="text-left flex flex-col justify-center items-center gap-2 w-full h-full">
              <Image
                width={300}
                height={300}
                src={project.logo}
                alt={project.title}
                className="object-cover"
              />

              {/* <p className="text-white text-3xl md:text-5xl font-semibold playfair capitalize">
                {project.title}
              </p> */}
            </div>
          </Container>
        </div>
      </div>
      <div className="mx-auto max-w-5xl py-20 px-3">
        <p className="text-primary text-lg max-w-2xl capitalize flex items-center gap-3 mb-10">
          <SiGooglemaps /> {project.location}
        </p>
        <div>
          <p className="text-lg lg:text-3xl font-bold text-primary">
            {project.description}
          </p>
        </div>
        {project.brochureSrc && (
          <div className="mt-20 w-fit">
            <Link
              href={project.brochureSrc}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="group flex items-center gap-3 rounded hover:opacity-80 transition text-lg lg:text-3xl font-bold text-primary">
                Open Brochure{' '}
                <div className="group-hover:transform group-hover:translate-x-3 transition-all duration-300">
                  <BsArrowRight size={30} />
                </div>
              </span>
            </Link>
          </div>
        )}

        <PicsGrid media={project.imageSrc} />
        <div className="mt-20">
          <LocationMap
            latitude={project.address?.latitude || 0}
            longitude={project.address?.longitude || 0}
          />
        </div>
      </div>
    </main>
  );
}
