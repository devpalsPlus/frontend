import { HttpResponse, http } from 'msw';
import skill from './mockSkill.json';
import position from './mockPosition.json';
import method from './mockMethod.json';

export const fetchSkillTag = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}skill-tag`,
  () => {
    return HttpResponse.json(skill, {
      status: 200,
    });
  }
);
export const fetchPositionTag = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}position-tag`,
  () => {
    return HttpResponse.json(position, {
      status: 200,
    });
  }
);

export const fetchMethodTag = http.get(
  `${import.meta.env.VITE_APP_API_BASE_URL}method`,
  () => {
    return HttpResponse.json(method, {
      status: 200,
    });
  }
);
