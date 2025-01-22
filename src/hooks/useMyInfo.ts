import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getMyAppliedStatusList,
  getMyInfo,
  getMyJoinedProjectList,
  patchMyProfileImg,
  putMyInfo,
} from '../api/mypage.api';
import { EditMyInfo, UserInfo } from '../models/userInfo';
import { useAlert } from './useAlert';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { myInfoKey, ProjectListKey } from './queries/keys';
import useAuthStore from '../store/authStore';
import {
  MyAppliedProjectStatusList,
  UserJoinedProjectList,
} from '../models/userProject';

export const useMyProfileInfo = () => {
  const { isLoggedIn } = useAuthStore();

  const { data, isLoading } = useQuery<UserInfo>({
    queryKey: myInfoKey.myProfile,
    queryFn: () => getMyInfo(),
    staleTime: 1 * 60 * 1000,
    enabled: isLoggedIn,
  });

  return { myData: data, isLoading };
};

export const useEditMyProfileInfo = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const queryClient = useQueryClient();

  const editProfileMutation = useMutation<void, AxiosError, EditMyInfo>({
    mutationFn: async (data: EditMyInfo) => {
      await putMyInfo(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: myInfoKey.myProfile });
      showAlert('프로필 수정이 완료되었습니다.');
      navigate(ROUTES.mypage);
    },
    onError: () => {
      showAlert('프로필 수정에 실패했습니다.');
    },
  });

  const editMyProfile = (data: EditMyInfo) => {
    editProfileMutation.mutate(data);
  };

  return { editMyProfile };
};

export const useUploadProfileImg = () => {
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();

  const uploadProfileImgMutation = useMutation<void, AxiosError, File>({
    mutationFn: async (data: File) => {
      await patchMyProfileImg(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: myInfoKey.myProfile });
      showAlert('프로필 이미지가 업로드 되었습니다.');
    },
    onError: () => {
      showAlert(`이미지는 5MB 이하, .png.jpg.jpeg.svg 형식만 가능합니다.`);
    },
  });

  const uploadProfileImg = (data: File) => {
    uploadProfileImgMutation.mutate(data);
  };

  return { uploadProfileImg };
};

export const useMyJoinedProjectList = () => {
  const { isLoggedIn } = useAuthStore();

  const { data, isLoading } = useQuery<UserJoinedProjectList>({
    queryKey: ProjectListKey.myJoinedList,
    queryFn: () => getMyJoinedProjectList(),
    enabled: isLoggedIn,
  });

  return { myJoinedProjectListData: data, isLoading };
};

export const useMyAppliedStatusList = () => {
  const { isLoggedIn } = useAuthStore();

  const { data, isLoading } = useQuery<MyAppliedProjectStatusList>({
    queryKey: ProjectListKey.myAppliedStatusList,
    queryFn: () => getMyAppliedStatusList(),
    enabled: isLoggedIn,
  });

  return { myAppliedStatusListData: data, isLoading };
};
