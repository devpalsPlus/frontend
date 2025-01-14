import { useEffect, useState } from 'react';
import { ManagedProject } from '../models/manageMyProject';
import { getMyProjectLists } from '../api/myProjectList.api';

export const useManagedProjects = () => {
  const [managedProjects, setManagedProjects] = useState<ManagedProject[]>([]);

  useEffect(() => {
    getMyProjectLists().then((projects) => {
      setManagedProjects(projects);
    });
  }, []);

  return { managedProjects };
};
