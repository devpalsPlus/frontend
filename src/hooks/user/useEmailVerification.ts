import { useState } from 'react';
import { postVerificationEmail, postVerifyEmailCode } from '../../api/auth.api';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

const useEmailVerification = () => {
  const [emailMessage, setEmailMessage] = useState<string | null>(null);
  const [codeMessage, setCodeMessage] = useState<string | null>(null);

  const sendEmailMutation = useMutation<void, AxiosError, string>({
    mutationFn: async (email) => {
      await postVerificationEmail(email);
    },
    onSuccess: () => {
      setEmailMessage('인증 코드가 이메일로 전송되었습니다.');
    },
    onMutate: () => {
      setEmailMessage('메일이 전송중입니다.');
    },
    onError: (error: AxiosError) => {
      const status = error?.response?.status;

      if (status === 400) {
        setEmailMessage('유효한 이메일을 입력해주세요.');
      } else if (status === 500) {
        setEmailMessage('서버 내부 오류로 인해 메일 발송에 실패했습니다.');
      } else if (!status) {
        setEmailMessage('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
      } else {
        setEmailMessage('알 수 없는 에러가 발생했습니다.');
      }
    },
  });

  const verifyCodeMutation = useMutation<
    void,
    AxiosError,
    { email: string; code: string }
  >({
    mutationFn: async ({ email, code }) => {
      await postVerifyEmailCode({ email, code });
    },
    onSuccess: () => {
      setCodeMessage('인증코드가 확인되었습니다.');
    },
    onError: (error: AxiosError) => {
      const status = error?.response?.status;

      if (status === 400) {
        setCodeMessage('유효하지 않은 인증 코드입니다.');
      } else if (status === 401) {
        setCodeMessage('인증 코드가 만료되었습니다.');
      } else if (status === 500) {
        setCodeMessage('서버 내부 오류로 인해 인증 코드 확인에 실패했습니다.');
      } else if (!status) {
        setCodeMessage('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
      } else {
        setCodeMessage('이메일과 인증코드를 다시 확인해주세요.');
      }
    },
  });

  const handleCodeChange = (code: string) => {
    setCodeMessage(code ? '' : null);
  };

  const handleEmailChange = (email: string) => {
    setEmailMessage(email ? '' : null);
  };

  const handleEmail = async (email: string) => {
    setEmailMessage(null);
    if (!email) {
      return;
    }
    sendEmailMutation.mutate(email);
  };

  const handleVerifyCode = async (email: string, code: string) => {
    setCodeMessage(null);
    if (!email || !code) {
      setCodeMessage('이메일과 인증코드를 입력해주세요.');
      return;
    }
    verifyCodeMutation.mutate({ email, code });
  };

  return {
    emailMessage,
    codeMessage,
    handleEmail,
    handleVerifyCode,
    handleCodeChange,
    handleEmailChange,
  };
};

export default useEmailVerification;
