import { setupWorker } from 'msw/browser';
import { myProjectList } from './manageProjectList';
import {
  applicantInfo,
  applicantList,
  passNonPass,
  passNonPassList,
} from './applicant';
import { projectDetail } from './projectDetail';
import { fetchProjectLists, fetchProjectStatistic } from './projectLists';
import {
  fetchMethodTag,
  fetchPositionTag,
  fetchSkillTag,
} from './projectSearchFiltering';

export const handlers = [
  // myProjectList,
  // applicantList,
  // projectDetail,
  // applicantInfo,
  // passNonPass,
  // passNonPassList,
  fetchProjectLists,
  fetchProjectStatistic,
  fetchMethodTag,
  fetchPositionTag,
  fetchSkillTag,
];

export const worker = setupWorker(...handlers);
