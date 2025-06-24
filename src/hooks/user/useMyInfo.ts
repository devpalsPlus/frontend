import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { myInfoKey, ProjectListKey } from '../queries/keys';
import useAuthStore from '../../store/authStore';
import type { ApiUserInfo, EditMyInfo } from '../../models/userInfo';
import {
  getMyAppliedStatusList,
  getMyInfo,
  getMyJoinedProjectList,
  patchGithubLink,
  patchMyProfileImg,
  putMyInfo,
} from '../../api/mypage.api';
import { MODAL_MESSAGE } from '../../constants/user/modalMessage';
import { ROUTES } from '../../constants/routes';
import type {
  ApiAppliedProject,
  ApiJoinedProject,
} from '../../models/userProject';

export const useMyProfileInfo = () => {
  const isLoggedIn = useAuthStore.getState().isLoggedIn;

  const { data, isLoading } = useQuery<ApiUserInfo>({
    queryKey: myInfoKey.myProfile,
    queryFn: () => getMyInfo(),
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    refetchInterval: 1000 * 60 * 60,
    refetchIntervalInBackground: false,
    enabled: isLoggedIn,
  });

  return { myData: data?.data, isLoading };
};

export const useEditMyProfileInfo = (
  handleModalOpen: (message: string) => void
) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const editProfileMutation = useMutation<void, AxiosError, EditMyInfo>({
    mutationFn: async (data: EditMyInfo) => {
      await putMyInfo(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: myInfoKey.myProfile });
      handleModalOpen(MODAL_MESSAGE.myProfileSuccess);
      setTimeout(() => {
        navigate(ROUTES.mypage);
      }, 1500);
    },
    onError: () => {
      handleModalOpen(MODAL_MESSAGE.myProfileFail);
    },
  });

  const editMyProfile = (data: EditMyInfo) => {
    editProfileMutation.mutate(data);
  };

  return { editMyProfile };
};

export const useUploadProfileImg = (
  handleModalOpen: (message: string) => void
) => {
  const queryClient = useQueryClient();

  const uploadProfileImgMutation = useMutation<void, AxiosError, File>({
    mutationFn: async (data: File) => {
      await patchMyProfileImg(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: myInfoKey.myProfile });
      handleModalOpen(MODAL_MESSAGE.profileImgSuccess);
    },
    onError: () => {
      handleModalOpen(MODAL_MESSAGE.profileImgFail);
    },
  });

  const uploadProfileImg = (data: File) => {
    uploadProfileImgMutation.mutate(data);
  };

  return { uploadProfileImg };
};

export const useGithubLink = () => {
  const queryClient = useQueryClient();
  const isLoggedIn = useAuthStore.getState().isLoggedIn;

  const { mutate: patchGithubLinkMutate } = useMutation<
    void,
    AxiosError,
    string
  >({
    mutationFn: (githubUrl: string) => patchGithubLink(githubUrl),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: myInfoKey.myProfile });
    },
  });

  return { patchGithubLinkMutate, isLoggedIn };
};

export const useMyJoinedProjectList = () => {
  const isLoggedIn = useAuthStore.getState().isLoggedIn;

  const { data, isLoading } = useQuery<ApiJoinedProject>({
    queryKey: ProjectListKey.myJoinedList,
    queryFn: () => getMyJoinedProjectList(),
    enabled: isLoggedIn,
  });

  return { myJoinedProjectListData: data?.data, isLoading };
};

export const useMyAppliedStatusList = () => {
  const isLoggedIn = useAuthStore.getState().isLoggedIn;

  const { data, isLoading } = useQuery<ApiAppliedProject>({
    queryKey: ProjectListKey.myAppliedStatusList,
    queryFn: () => getMyAppliedStatusList(),
    enabled: isLoggedIn,
  });

  return { myAppliedStatusListData: data?.data, isLoading };
};
