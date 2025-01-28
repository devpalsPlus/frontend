import { setupWorker } from 'msw/browser';
import { myProjectList } from './manageProjectList';
import { applicantInfo, applicantList, passNonPass } from './applicant';
import { projectDetail } from './projectDetail';
import {
  myPageAppliedProjectList,
  myPageJoinedProjectList,
  myPagePositionTag,
  myPageProfile,
  myPageSkillTag,
} from './mypage';

export const handlers = [
  myProjectList,
  applicantList,
  projectDetail,
  applicantInfo,
  passNonPass,
  myPageProfile,
  myPagePositionTag,
  myPageSkillTag,
  myPageJoinedProjectList,
  myPageAppliedProjectList,
];

export const worker = setupWorker(...handlers);
