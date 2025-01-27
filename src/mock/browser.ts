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
  myProjectList,
  applicantList,
  projectDetail,
  applicantInfo,
  passNonPass,
  passNonPassList,
];

export const worker = setupWorker(...handlers);
