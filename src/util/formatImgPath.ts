export const formatImgPath = (imgPath: string) => {
  const path = imgPath.split('/').slice(3).join('/');
  return path;
};
