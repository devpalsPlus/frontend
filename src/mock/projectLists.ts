import { HttpResponse, http } from 'msw';
import count from '../../public/data/count.json';
import project from '../../public/data/project.json';

export const fetchProjectLists = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/project`,
  () => {
    return HttpResponse.json(project, {
      status: 200,
    });
  }
);

export const fetchProjectStatistic = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/project/count`,
  () => {
    return HttpResponse.json(count, {
      status: 200,
    });
  }
);
