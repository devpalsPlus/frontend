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
  mypageEditProfile,
  myPageJoinedProjectList,
  myPagePositionTag,
  myPageProfile,
  myPageSkillTag,
} from './mypage';
import { userPageAppliedProjectList, userPageProfile } from './userpage';
import { login } from './auth';
import { fetchProjectLists, fetchProjectStatistic } from './projectLists';
import {
  fetchMethodTag,
  fetchPositionTag,
  fetchSkillTag,
} from './projectSearchFiltering';

export const handlers = [
  fetchProjectLists,
  fetchProjectStatistic,
  fetchMethodTag,
  fetchPositionTag,
  fetchSkillTag,
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
  passNonPassList,
  mypageEditProfile,
  login,
];

export const worker = setupWorker(...handlers);
