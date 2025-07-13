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
} as const;

export const Inquiries = {
  allInquiries: ['AllInquiries'],
  inquiriesPreview: ['InquiriesPreview'],
} as const;

export const CustomerService = {
  faq: 'faq',
  notice: 'notice',
  noticePreview: 'noticePreview',
  noticeDetail: 'noticeDetail',
  inquiryDetail: 'inquiryDetail',
} as const;

export const ReportData = {
  allReports: ['AllReports'],
  allReportsPreview: ['AllReportsPreview'],
  reportDetail: ['ReportDetail'],
} as const;

export const UserData = {
  allUser: ['AllUser'],
  allUserPreview: ['AllUserPreview'],
  userInfo: ['userInfo'],
  userJoinedProjectList: ['userJoinedProjectList'],
  userActivity: ['userActivity'],
} as const;

export const Tag = {
  skillTag: ['skillTagsData'],
  positionTag: ['positionsData'],
  method: ['fetchMethodTag'],
} as const;

export const Banners = {
  allBanners: ['AllBanners'],
} as const;
