import { HttpResponse, http } from 'msw';
import skill from '../../public/data/skill.json';
import position from '../../public/data/position.json';
import method from '../../public/data/method.json';

export const fetchSkillTag = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/skill-tag`,
  () => {
    return HttpResponse.json(skill, {
      status: 200,
    });
  }
);
export const fetchPositionTag = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/position-tag`,
  () => {
    return HttpResponse.json(position, {
      status: 200,
    });
  }
);

export const fetchMethodTag = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/method`,
  () => {
    return HttpResponse.json(method, {
      status: 200,
    });
  }
);
