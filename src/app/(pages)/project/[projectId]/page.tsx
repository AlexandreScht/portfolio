import Button from '@/components/buttons';
import projects from '@/config/projects';
import { cn } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FiCameraOff } from 'react-icons/fi';

export async function generateStaticParams() {
  return projects.map(proj => ({
    projectId: proj.title.toString().toLowerCase(),
  }));
}

export default async function Project({ params }: { params: Promise<{ projectId: string }> }) {
  const awaitedParams = await params;
  const project = projects.find(p => p.title.toLowerCase() === decodeURIComponent(awaitedParams?.projectId).toLowerCase());
  if (!project) {
    return notFound();
  }
  const LinkIcon = project?.link?.icon;

  return (
    <div className="w-full sm:w-5/6 md:w-4/6 my-0 mx-auto py-6 md:py-10 px-4 sm:px-0">
      <div className="mb-6 md:mb-10">
        <Link
          href="/#projects"
          className="inline-flex font-medium items-center gap-2 text-muted text-[0.9rem] mb-4 md:mb-6 transition-all duration-200 ease-in hover:text-primary hover:-translate-x-0.5"
        >
          <FaArrowLeftLong /> Retour aux projets
        </Link>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <h1 className="text-3xl md:text-5xl m-0 text-primary font-semibold">{project?.title}</h1>
          <span className="text-sm md:text-base p-[0.3rem_0.8rem] rounded-md text-default-text/75 pb-0.5 pt-1 px-2 bg-border/15 md:ml-2 dark:bg-border/30 font-semibold w-fit">
            {project?.date}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="grid grid-cols-1 gap-y-4 md:gap-y-5">
          {project?.picture?.length ? (
            project.picture.map((v, idx) => (
              <div key={idx} className={cn('w-full aspect-square overflow-hidden relative rounded-2xl', idx > 0 && 'hidden md:block')}>
                <Image src={v} alt={`${project.title} project picture ${idx}`} fill />
              </div>
            ))
          ) : (
            <div className="w-full flex items-center justify-center aspect-square overflow-hidden bg-accent">
              <FiCameraOff className="w-32 md:w-42 h-32 md:h-42 text-default-text/75 rounded-2xl" />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-wrap gap-2 md:gap-3 max-w-md">
            {project?.types.map(v => (
              <span
                key={v}
                className="flex-shrink-0 px-2 py-1 rounded bg-accent text-primary text-xs md:text-sm font-medium shadow-[0_1px_1px_var(--color-shadow)]"
              >
                {v}
              </span>
            ))}
          </div>

          <div>
            <h2 className="text-xl md:text-2xl mb-3 md:mb-4 text-default-text font-medium text-left">Description</h2>
            <p className="text-muted leading-6 md:leading-8 text-sm md:text-base font-medium m-0">{project?.description}</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl mb-3 md:mb-4 text-default-text font-medium text-left">Fonctionnalités Techniques</h2>
            <ul className="pl-4 md:pl-6 m-0 list-disc">
              {project?.features.map(v => (
                <li key={v} className="text-muted mb-2 md:mb-3 leading-6 md:leading-7 text-sm md:text-base">
                  {v}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl mb-3 md:mb-4 text-default-text font-medium text-left">Technologies utilisées</h2>
            <div className="flex flex-wrap gap-2 md:gap-3 max-w-md">
              {project?.skills.map(v => (
                <span
                  key={v}
                  className="flex-shrink-0 px-2 py-1 rounded bg-accent text-primary text-xs md:text-sm shadow-[0_1px_1px_var(--color-shadow)]"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-1 w-full">
            {project?.link && (
              <Link href={project.link.url} target="_blank" rel="noopener noreferrer" className="mt-1.5">
                <Button
                  className="m-auto px-4 py-[0.6rem] rounded-lg text-sm md:text-base bg-primary border-1 border-border/20 text-white w-full border-none hover:bg-secondary hover:border-primary"
                  startContent={LinkIcon ? <LinkIcon className="mb-0.5" /> : undefined}
                >
                  {project.link.label}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {project?.picture && project?.picture?.length > 1 && (
        <div className="grid grid-cols-1 gap-y-4 mt-14 md:hidden">
          {project.picture.slice(1).map((v, idx) => (
            <div key={idx + 1} className="w-full aspect-square overflow-hidden relative rounded-2xl">
              <Image src={v} alt={`${project.title} project picture ${idx + 1}`} fill />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
