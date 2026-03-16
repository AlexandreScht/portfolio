import Button from '@/components/buttons';
import { Gallery } from '@/components/cards/gallery';
import projects from '@/config/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FiCameraOff } from 'react-icons/fi';
import { HiOutlineCode } from 'react-icons/hi';

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
  const halfFeatures = Math.ceil((project?.features?.length ?? 0) / 2);

  return (
    <div className="w-full sm:w-5/6 md:w-11/12 lg:w-9/12 my-0 mx-auto py-6 md:py-8 lg:py-10 px-4 sm:px-0">
      {/* ═══ Back ═══ */}
      <Link
        href="/#projects"
        className="inline-flex font-medium items-center gap-2 text-muted text-sm mb-5 md:mb-6 transition-all duration-200 hover:text-primary hover:-translate-x-0.5"
      >
        <FaArrowLeftLong /> Retour aux projets
      </Link>

      {/* ═══ Title Row ═══ */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 md:mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl m-0 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
            {project?.title}
          </h1>
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">{project?.date}</span>
            {project?.types.map(v => (
              <span key={v} className="text-xs font-semibold text-muted bg-accent px-2.5 py-1 rounded-full border border-border/30">
                {v}
              </span>
            ))}
          </div>
        </div>
        {project?.link && (
          <Link href={project.link.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <Button
              className="px-5 py-2.5 h-auto text-sm font-bold bg-primary text-white border-none hover:bg-secondary transition-colors duration-300 w-full sm:w-auto"
              startContent={LinkIcon ? <LinkIcon className="text-base" /> : undefined}
            >
              {project.link.label}
            </Button>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {/* ── Gallery Card (spans 2 cols on lg) ── */}
        <div className="md:col-span-2 lg:col-span-2 glass-card !rounded-2xl overflow-hidden !p-1.5">
          <div className="w-full bg-accent rounded-xl overflow-hidden relative aspect-[16/9]">
            {project?.picture?.length ? (
              <Gallery
                className="w-full h-full"
                breakpoints={{
                  desktop: project.picture.slice(0, 3).map(v => ({
                    src: v,
                    alt: `${project.title} picture`,
                    className: '!relative !w-full !h-full object-cover',
                    fill: true,
                  })),
                  tablet: project.picture.slice(0, 2).map(v => ({
                    src: v,
                    alt: `${project.title} picture`,
                    className: '!relative !w-full !h-full object-cover',
                    fill: true,
                  })),
                  mobile: [
                    {
                      src: project.picture[0],
                      alt: `${project.title} picture`,
                      className: '!relative !w-full !h-full object-cover',
                      fill: true,
                    },
                  ],
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <FiCameraOff className="w-16 md:w-24 h-16 md:h-24 text-muted/25" />
              </div>
            )}
          </div>
        </div>

        {/* ── Description Card ── */}
        <div className="glass-card !rounded-2xl !p-6 md:!p-7 flex flex-col">
          <h2 className="text-lg md:text-xl font-bold text-default-text mb-3 flex items-center gap-2.5">
            <span className="w-1 h-5 bg-primary rounded-full shadow-[0_0_6px_var(--color-primary-glow)]" />
            Description
          </h2>
          <p className="text-muted leading-7 text-sm m-0 flex-1">{project?.description}</p>
        </div>

        {/* ── Features Card (spans 2 cols on lg) ── */}
        {project?.features && project.features.length > 0 && (
          <div className="md:col-span-2 lg:col-span-2 glass-card !rounded-2xl !p-6 md:!p-7 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-lg md:text-xl font-bold text-default-text mb-4 flex items-center gap-2.5 relative z-10">
              <span className="w-1 h-5 bg-primary rounded-full shadow-[0_0_6px_var(--color-primary-glow)]" />
              Fonctionnalités Techniques
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 relative z-10">
              <ul className="space-y-2.5 m-0">
                {project.features.slice(0, halfFeatures).map(v => (
                  <li key={v} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 mt-[7px] shrink-0 bg-primary rounded-full shadow-[0_0_4px_var(--color-primary-glow)]" />
                    <span className="text-muted text-sm leading-relaxed">{v}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5 m-0">
                {project.features.slice(halfFeatures).map(v => (
                  <li key={v} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 mt-[7px] shrink-0 bg-primary rounded-full shadow-[0_0_4px_var(--color-primary-glow)]" />
                    <span className="text-muted text-sm leading-relaxed">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ── Tech Stack Card ── */}
        <div className="glass-card !rounded-2xl !p-6 md:!p-7">
          <h2 className="text-lg md:text-xl font-bold text-default-text mb-4 flex items-center gap-2.5">
            <HiOutlineCode className="text-primary text-xl" />
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project?.skills.map(v => (
              <span key={v} className="px-2.5 py-1 rounded-lg bg-primary/8 text-primary text-xs font-semibold border border-primary/15">
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ Additional Gallery ═══ */}
      {project?.picture && project?.picture?.length > 1 && (
        <div className="mt-12 md:mt-16">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-default-text m-0">Galerie</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          <Gallery
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            breakpoints={{
              desktop: project.picture.slice(3).map((v, idx) => ({
                src: v,
                alt: `${project.title} picture ${idx + 4}`,
                className:
                  'glass-card !p-1.5 !rounded-xl !relative !w-full bg-accent !h-[240px] object-scale-down hover:!border-primary/30 transition-all duration-300',
                fill: true,
              })),
              tablet: project.picture.slice(2).map((v, idx) => ({
                src: v,
                alt: `${project.title} picture ${idx + 3}`,
                className: 'glass-card !p-1.5 !rounded-xl !relative !w-full bg-accent !h-[220px] object-scale-down',
                fill: true,
              })),
              mobile: project.picture.slice(1).map((v, idx) => ({
                src: v,
                alt: `${project.title} picture ${idx + 2}`,
                className: 'glass-card !p-1.5 !rounded-xl !relative !w-full bg-accent !h-[200px] object-scale-down',
                fill: true,
              })),
            }}
          />
        </div>
      )}
    </div>
  );
}
