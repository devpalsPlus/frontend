import { setupWorker } from 'msw/browser';
import { myProjectList, sendResult } from './manageProjectList';
import {
  applicantInfo,
  applicantList,
  createApplicant,
  passNonPass,
  passNonPassList,
} from './applicant';
import { projectDetail, reportsAll } from './projectDetail';
import {
  myPageAppliedProjectList,
  mypageEditProfile,
  myPageJoinedProjectList,
  myPagePositionTag,
  myPageProfile,
  myPageSkillTag,
} from './mypage';
import {
  userAll,
  userPageAppliedProjectList,
  userPageProfile,
} from './userpage';
import { login } from './auth';
import { fetchProjectLists, fetchProjectStatistic } from './projectLists';
import {
  fetchMethodTag,
  fetchPositionTag,
  fetchSkillTag,
} from './projectSearchFiltering';
import { createProject } from './createProject.ts';

export const handlers = [
  fetchProjectLists,
  fetchProjectStatistic,
  fetchMethodTag,
  fetchPositionTag,
  fetchSkillTag,
  passNonPassList,
  sendResult,
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
  createApplicant,
  createProject,
  userAll,
  reportsAll,
];

export const worker = setupWorker(...handlers);
