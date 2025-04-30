export const routeSelector = (routerId: number, filter: number) => {
  switch (filter) {
    case 1:
      return `/mypage/notifications/applied-projects`;
    case 3:
      return `/project-detail/${routerId}`;
    case 2:
      return `/manage/${routerId}`;
    default:
      return `/mypage/notifications`;
  }
};
