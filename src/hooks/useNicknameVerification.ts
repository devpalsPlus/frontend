import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { postCheckNickname } from '../api/auth.api';
import { AxiosError } from 'axios';

const useNickNameVerification = () => {
  const [nicknameMessage, setNicknameMessage] = useState<string | null>(null);

  const verifyNicknameMutation = useMutation<void, AxiosError, string>({
    mutationFn: async (nickname) => {
      await postCheckNickname(nickname);
    },
    onSuccess: () => {
      setNicknameMessage('사용 가능한 닉네임입니다.');
    },
    onError: (error: AxiosError) => {
      const status = error?.response?.status;

      if (status === 400) {
        setNicknameMessage('이미 사용 중인 닉네임입니다.');
      } else {
        setNicknameMessage('유효한 닉네임을 입력해주세요.');
      }
    },
  });

  const handleNickNameChange = (nickname: string) => {
    setNicknameMessage(nickname ? '' : null);
  };

  const handleNickname = async (nickname: string) => {
    setNicknameMessage(null);
    if (!nickname) {
      return;
    }
    verifyNicknameMutation.mutate(nickname);
  };

  return {
    nicknameMessage,
    handleNickNameChange,
    handleNickname,
  };
};

export default useNickNameVerification;
