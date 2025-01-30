import { setupWorker } from 'msw/browser';
import { myProjectList } from './manageProjectList';
import {
  applicantInfo,
  applicantList,
  passNonPass,
  passNonPassList,
} from './applicant';
import { projectDetail } from './projectDetail';
import {
  myPageAppliedProjectList,
  myPageJoinedProjectList,
  myPagePositionTag,
  myPageProfile,
  myPageSkillTag,
} from './mypage';
import { userPageAppliedProjectList, userPageProfile } from './userpage';

export const handlers = [
  passNonPassList,
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
  userPageAppliedProjectList,
];

export const worker = setupWorker(...handlers);
