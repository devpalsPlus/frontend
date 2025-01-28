import { setupWorker } from 'msw/browser';
import { myProjectList } from './manageProjectList';
import {
  applicantInfo,
  applicantList,
  passNonPass,
  passNonPassList,
} from './applicant';
import { projectDetail } from './projectDetail';

export const handlers = [
  passNonPassList,
  myProjectList,
  applicantList,
  projectDetail,
  applicantInfo,
  passNonPass,
];

export const worker = setupWorker(...handlers);
