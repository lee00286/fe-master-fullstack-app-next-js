import { getUserFromCookie } from '@/lib/auth';
import { cookies } from 'next/dist/client/components/headers';
import { db } from '@/lib/db';
import TaskCard from '@/components/TaskCard';

const getData = async (id) => {
  const user = await getUserFromCookie(cookies());
  const project = await db.project.findFirst({
    where: { id, ownerId: user?.id },
    include: { Tasks: true }
  });
  return project;
};

export default async function ProjectPage({ params }) {
  const project = await getData(params.id);

  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      <TaskCard tasks={project.Tasks} title={project.name} />
    </div>
  );
}
