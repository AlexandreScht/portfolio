import Button from '@/components/buttons';
import { Gallery } from '@/components/cards/gallery';
import projects from '@/config/projects';
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
    <div className="w-full sm:w-5/6 md:w-11/12 lg:w-9/12 my-0 mx-auto py-6 md:py-8 lg:py-10 px-4 sm:px-0">
      <div className="mb-6 md:mb-8 lg:mb-10">
        <Link
          href="/#projects"
          className="inline-flex font-medium items-center gap-2 text-muted text-[0.9rem] mb-4 md:mb-5 lg:mb-6 transition-all duration-200 ease-in hover:text-primary hover:-translate-x-0.5"
        >
          <FaArrowLeftLong /> Retour aux projets
        </Link>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 lg:gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl m-0 text-primary font-semibold">{project?.title}</h1>
          <span className="text-sm md:text-sm lg:text-base p-[0.3rem_0.8rem] rounded-md text-default-text/75 pb-0.5 pt-1 px-2 bg-border/15 md:ml-2 dark:bg-border/30 font-semibold w-fit">
            {project?.date}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] xl:grid-cols-[0.9fr_1fr] gap-6 md:gap-8 lg:gap-10">
        <div className="w-full h-fit md:h-full">
          {project?.picture?.length ? (
            <Gallery
              className="flex flex-col justify-between gap-y-8 h-fit md:h-full"
              breakpoints={{
                desktop: project.picture.slice(0, 3).map(v => ({
                  src: v,
                  alt: `${project.title} project picture`,
                  className:
                    'border-1 !relative border-border/20 rounded-lg !object-scale-down !w-full !h-auto hover:border-primary/20 transition-all duration-300 hover:scale-105',
                  fill: true,
                })),
                tablet: project.picture.slice(0, 2).map(v => ({
                  src: v,
                  alt: `${project.title} project picture`,
                  className: 'border-1 !relative border-border/20 rounded-lg !object-scale-down !w-full !h-auto',
                  fill: true,
                })),
                mobile: [
                  {
                    src: project.picture[0],
                    alt: `${project.title} project picture`,
                    className: 'border-1 !relative border-border/20 rounded-lg !object-scale-down !w-full !h-auto',
                    fill: true,
                  },
                ],
              }}
            />
          ) : (
            <div className="w-full h-42 md:h-auto md:aspect-square flex items-center justify-center bg-accent">
              <FiCameraOff className="w-20 md:w-36 lg:w-42 h-20 md:h-36 lg:h-42 text-default-text/75" />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 md:gap-6 lg:gap-8">
          <div className="flex flex-wrap gap-2 md:gap-2 lg:gap-3 max-w-md">
            {project?.types.map(v => (
              <span
                key={v}
                className="flex-shrink-0 px-2 py-1 rounded bg-accent text-primary text-xs md:text-xs lg:text-sm font-medium shadow-[0_1px_1px_var(--color-shadow)]"
              >
                {v}
              </span>
            ))}
          </div>

          <div>
            <h2 className="text-xl md:text-xl lg:text-2xl mb-3 md:mb-3 lg:mb-4 text-default-text font-medium text-left">Description</h2>
            <p className="text-muted leading-6 md:leading-7 lg:leading-8 text-sm md:text-sm lg:text-base font-medium m-0">{project?.description}</p>
          </div>

          <div className="hidden lg:block">
            <div className="mb-6">
              <h2 className="text-xl md:text-xl lg:text-2xl mb-3 md:mb-3 lg:mb-4 text-default-text font-medium text-left">
                Fonctionnalités Techniques
              </h2>
              <ul className="pl-4 md:pl-5 lg:pl-6 m-0 list-disc">
                {project?.features.map(v => (
                  <li key={v} className="text-muted mb-2 md:mb-2 lg:mb-3 leading-6 md:leading-6 lg:leading-7 text-sm md:text-sm lg:text-base">
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-xl lg:text-2xl mb-3 md:mb-3 lg:mb-4 text-default-text font-medium text-left">Technologies utilisées</h2>
              <div className="flex flex-wrap gap-2 md:gap-2 lg:gap-3">
                {project?.skills.map(v => (
                  <span
                    key={v}
                    className="flex-shrink-0 px-2 py-1 rounded bg-accent text-primary text-xs md:text-xs lg:text-sm shadow-[0_1px_1px_var(--color-shadow)]"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {project?.link && (
              <Link href={project.link.url} target="_blank" rel="noopener noreferrer" className="mt-6 block">
                <Button
                  className="px-4 py-[0.6rem] rounded-lg text-sm md:text-sm lg:text-base bg-primary border-1 border-border/20 text-white w-full border-none hover:bg-secondary hover:border-primary"
                  startContent={LinkIcon ? <LinkIcon className="mb-0.5" /> : undefined}
                >
                  {project.link.label}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8 lg:hidden">
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-xl lg:text-2xl mb-3 md:mb-3 lg:mb-4 text-default-text font-medium text-left">Fonctionnalités Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8">
            <ul className="pl-4 md:pl-5 lg:pl-6 m-0 list-disc">
              {project?.features.slice(0, Math.ceil(project.features.length / 2)).map(v => (
                <li key={v} className="text-muted mb-2 md:mb-2 lg:mb-3 leading-6 md:leading-6 lg:leading-7 text-sm md:text-sm lg:text-base">
                  {v}
                </li>
              ))}
            </ul>
            <ul className="pl-4 md:pl-5 lg:pl-6 m-0 list-disc">
              {project?.features.slice(Math.ceil(project.features.length / 2)).map(v => (
                <li key={v} className="text-muted mb-2 md:mb-2 lg:mb-3 leading-6 md:leading-6 lg:leading-7 text-sm md:text-sm lg:text-base">
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl md:text-xl lg:text-2xl mb-3 md:mb-3 lg:mb-4 text-default-text font-medium text-left">Technologies utilisées</h2>
          <div className="flex flex-wrap gap-2 md:gap-2 lg:gap-3 max-w-md">
            {project?.skills.map(v => (
              <span
                key={v}
                className="flex-shrink-0 px-2 py-1 rounded bg-accent text-primary text-xs md:text-xs lg:text-sm shadow-[0_1px_1px_var(--color-shadow)]"
              >
                {v}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 md:mt-8 w-full lg:hidden">
          {project?.link && (
            <Link href={project.link.url} target="_blank" rel="noopener noreferrer" className="mt-1.5">
              <Button
                className="m-auto px-4 py-[0.6rem] rounded-lg text-sm md:text-sm lg:text-base bg-primary border-1 border-border/20 text-white w-full border-none hover:bg-secondary hover:border-primary"
                startContent={LinkIcon ? <LinkIcon className="mb-0.5" /> : undefined}
              >
                {project.link.label}
              </Button>
            </Link>
          )}
        </div>
      </div>

      {project?.picture && project?.picture?.length > 1 && (
        <Gallery
          className="w-full grid px-5 md:px-0 grid-cols-1 md:grid-cols-2 gap-8 md:gap-7 lg:gap-10"
          breakpoints={{
            desktop: project.picture.slice(3).map((v, idx) => ({
              src: v,
              alt: `${project.title} project picture ${idx + 2}`,
              className:
                'rounded-xl !relative !w-full bg-accent !h-auto border-2 border-border/10 hover:border-primary/20 transition-all duration-300 hover:scale-105',
              fill: true,
            })),
            tablet: project.picture.slice(2).map((v, idx) => ({
              src: v,
              alt: `${project.title} project picture ${idx + 2}`,
              className: 'rounded-xl !relative !w-full bg-accent !h-auto border-2 border-border/10',
              fill: true,
            })),
            mobile: project.picture.slice(1).map((v, idx) => ({
              src: v,
              alt: `${project.title} project picture ${idx + 2}`,
              className: 'rounded-xl !relative !w-full bg-accent !h-auto border-2 border-border/10',
              fill: true,
            })),
          }}
        >
          <div className="w-full flex flex-col items-center lg:items-start mt-10 md:mt-20 lg:mt-24 mb-10">
            <div className="w-fit">
              <h3 className="text-lg text-center lg:text-left md:text-xl lg:text-2xl font-semibold text-default-text mr-2 lg:mr-3">Galerie</h3>
              <div className="bg-gradient-to-r from-default-text/75 to-border/15 h-1 w-full lg:mt-1.5"></div>
            </div>
          </div>
        </Gallery>
      )}
    </div>
  );
}
