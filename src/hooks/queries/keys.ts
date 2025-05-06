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

export const ProjectCommentList = {
  projectComment: ['projectCommentList'],
};

export const AlarmList = {
  myAlarmList: ['AlarmList'],
};

export const ProjectReplyList = {
  commentReply: ['CommentReplyList'],
};

export const ChartDataList = {
  chartData: ['ChartDataList'],
};

export const ActivityLog = {
  myComments: ['MyComments'],
  myInquiries: ['MyInquiries'],
};

export const CustomerService = {
  faq: ['faq'],
  notice: ['notice'],
};
