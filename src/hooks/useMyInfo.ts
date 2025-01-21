import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getMyInfo, patchMyProfileImg, putMyInfo } from '../api/mypage.api';
import { EditMyInfo, UserInfo } from '../models/userInfo';
import { useAlert } from './useAlert';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { myInfoKey } from './queries/keys';
import useAuthStore from '../store/authStore';

export const useMyProfileInfo = () => {
  const { isLoggedIn } = useAuthStore();

  const { data, isLoading } = useQuery<UserInfo>({
    queryKey: myInfoKey.myProfile,
    queryFn: () => getMyInfo(),
    staleTime: 1 * 60 * 1000,
    enabled: !!isLoggedIn,
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
      showAlert('이미지는 1MB 이하, .PNG.JPG.JPEG 형식만 가능합니다.');
    },
  });

  const uploadProfileImg = (data: File) => {
    uploadProfileImgMutation.mutate(data);
  };

  return { uploadProfileImg };
};
