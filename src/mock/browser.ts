import { setupWorker } from 'msw/browser';
import { myProjectList } from './manageProjectList';
import { applicantInfo, applicantList } from './applicant';
import { projectDetail } from './projectDetail';

export const handlers = [
  myProjectList,
  applicantList,
  projectDetail,
  applicantInfo,
];

export const worker = setupWorker(...handlers);
