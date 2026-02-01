import { projects } from '@/data/projects';
import { ProjectDetail } from '@/components/sections/ProjectDetail';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Strategic Project Details`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
