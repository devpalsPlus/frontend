import { setupWorker } from 'msw/browser';
import { myProjectList } from './manageProjectList';
import { applicantList } from './applicant';
import { projectDetail } from './projectDetail';

export const handlers = [myProjectList, applicantList, projectDetail];

export const worker = setupWorker(...handlers);
