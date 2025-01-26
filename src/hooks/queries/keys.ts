export const managedProjectsKey = {
  mine: ['myManagedProjects'],
} as const;

export const applicantKey = {
  all: ['applicantList'],
  info: ['applicantInfo'],
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
