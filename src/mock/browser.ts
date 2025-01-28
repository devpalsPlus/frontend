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
import { userPageProfile } from './userpage';

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
  userPageProfile,
];

export const worker = setupWorker(...handlers);
