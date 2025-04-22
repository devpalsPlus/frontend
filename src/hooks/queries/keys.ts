export const managedProjectKey = {
  managedProjectList: ['myManagedProjectList'],
  detail: ['projectDataAll'],
} as const;

export const applicantKey = {
  all: ['applicantList'],
  info: ['applicantInfo'],
  passNonPass: ['passNonPassList'],
};

export const myInfoKey = {
  myProfile: ['myProfile'],
} as const;

export const userInfoKey = {
  userProfile: ['userProfile'],
  userJoinedList: ['userJoinedProjectList'],
} as const;

export const ProjectListKey = {
  myJoinedList: ['myJoinedProjectList'],
  myAppliedStatusList: ['myAppliedProjectStatusList'],
} as const;

export const ProjectCommandList = {
  projectCommand: ['projectCommand'],
};

export const AlarmList = {
  myAlarmList: ['AlarmList'],
};
