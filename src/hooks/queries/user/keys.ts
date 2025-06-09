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
  userManagedList: ['userManagedProjectList'],
} as const;

export const ProjectListKey = {
  myJoinedList: ['myJoinedProjectList'],
  myAppliedStatusList: ['myAppliedProjectStatusList'],
} as const;

export const ProjectCommentList = {
  projectComment: ['projectCommentList'],
} as const;

export const AlarmList = {
  myAlarmList: ['AlarmList'],
} as const;

export const ProjectReplyList = {
  commentReply: ['CommentReplyList'],
} as const;

export const ChartDataList = {
  chartData: ['ChartDataList'],
} as const;

export const ProjectMemberListEval = {
  MemberListEval: ['MemberListEval'],
} as const;

export const ActivityLog = {
  myComments: ['MyComments'],
  myInquiries: ['MyInquiries'],
};

export const Inquiries = {
  allInquiries: ['AllInquiries'],
};

export const CustomerService = {
  faq: 'faq',
  notice: 'notice',
  noticeDetail: 'noticeDetail',
};

export const ReportData = {
  allReports: ['AllReports'],
};

export const UserData = {
  allUser: ['AllUser'],
  allUserPreview: ['AllUserPreview'],
  userInfo: ['userInfo'],
};
