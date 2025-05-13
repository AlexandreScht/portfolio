import Button from '@/components/buttons';
import projects from '@/config/projects';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FiCameraOff } from 'react-icons/fi';

export default async function Project({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  console.log(projectId);

  const project = projects.find(v => v.title === decodeURIComponent(projectId));
  const LinkIcon = project?.link?.icon;
  return (
    <div className="w-4/6 my-0 mx-auto py-10">
      <div className="mb-10">
        <Link
          href="/#projects"
          className="inline-flex font-medium items-center gap-2 text-muted text-[0.9rem] mb-6 transition-all duration-200 ease-in hover:text-primary hover:-translate-x-0.5"
        >
          <FaArrowLeftLong /> Retour aux projets
        </Link>
        <div className="flex items-center gap-4">
          <h1 className="text-5xl m-0 text-primary font-semibold">{project?.title}</h1>
          <span className="text-base p-[0.3rem_0.8rem] rounded-md text-default-text/75 pb-0.5 pt-1 px-2 bg-border/15 ml-2 dark:bg-border/30 font-semibold">
            {project?.date}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="grid grid-col-1 gap-y-5">
          {project?.picture?.length ? (
            project.picture.map((v, idx) => (
              <div key={idx} className="w-full aspect-square overflow-hidden relative rounded-2xl">
                <Image src={v} alt={`${project.title} project picture ${idx}`} fill />
              </div>
            ))
          ) : (
            <div className="w-full flex items-center justify-center aspect-square overflow-hidden bg-accent">
              <FiCameraOff className="w-42 h-42 text-default-text/75 rounded-2xl" />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-3 max-w-md">
            {project?.types.map(v => (
              <span
                key={v}
                className="flex-shrink-0 px-2 py-1 rounded bg-accent text-primary text-sm font-medium shadow-[0_1px_1px_var(--color-shadow)]"
              >
                {v}
              </span>
            ))}
          </div>

          <div>
            <h2 className="text-2xl mb-4 text-default-text font-medium text-left">Description</h2>
            <p className="text-muted leading-8 text-base font-medium  m-0">{project?.description}</p>
          </div>

          <div>
            <h2 className="text-2xl mb-4 text-default-text font-medium text-left">Fonctionnalités Techniques</h2>
            <ul className="pl-6 m-0 list-disc">
              {project?.features.map(v => (
                <li key={v} className="text-muted mb-3 leading-7 text-base">
                  {v}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl mb-4 text-default-text font-medium text-left">Technologies utilisées</h2>
            <div className="flex flex-wrap gap-3 max-w-md">
              {project?.skills.map(v => (
                <span key={v} className="flex-shrink-0 px-2 py-1 rounded bg-accent text-primary text-sm shadow-[0_1px_1px_var(--color-shadow)]">
                  {v}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-1 w-full">
            {project?.link && (
              <Link href={project.link.url} target="_blank" rel="noopener noreferrer" className="mt-1.5">
                <Button
                  className="m-auto px-4 py-[0.6rem] rounded-lg text-base bg-primary border-1 border-border/20 text-white w-full border-none hover:bg-secondary hover:border-primary"
                  startContent={LinkIcon ? <LinkIcon className="mb-0.5" /> : undefined}
                >
                  {project.link.label}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
