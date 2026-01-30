import React from 'react';
import { projects } from '@/data/projects';
import { ProjectDetail } from '@/components/sections/ProjectDetail';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
