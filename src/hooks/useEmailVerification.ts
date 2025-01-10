import { useState } from 'react';
import { postVerificationEmail, postVerifyEmailCode } from '../api/auth.api';
import axios from 'axios';

interface emailVerificationResult {
  emailMessage: string | null;
  codeMessage: string | null;
  handleEmail: (email: string) => Promise<void>;
  handleVerifyCode: (email: string, code: string) => Promise<void>;
  handleEmailChange: (email: string) => void;
  handleCodeChange: (code: string) => void;
}

const useEmailVerification = (): emailVerificationResult => {
  const [emailMessage, setEmailMessage] = useState<string | null>(null);
  const [codeMessage, setCodeMessage] = useState<string | null>(null);

  const handleEmail = async (email: string) => {
    setEmailMessage(null);
    if (!email) {
      return;
    }
    try {
      const response = await postVerificationEmail(email);
      if (response?.status === 201) {
        setEmailMessage('인증 코드가 이메일로 전송되었습니다.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          setEmailMessage('유효한 이메일을 입력해주세요.');
        } else {
          setEmailMessage(
            '서버 내부 오류로 인해 인증 코드 확인에 실패했습니다.'
          );
        }
      }
    }
  };

  const handleVerifyCode = async (email: string, code: string) => {
    setCodeMessage(null);

    if (!email || !code) {
      setCodeMessage('이메일과 인증코드를 입력해주세요.');
      return;
    }

    try {
      const response = await postVerifyEmailCode({ email, code });
      if (response?.status === 200) {
        setCodeMessage('인증코드가 확인되었습니다.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          setCodeMessage('유효하지 않은 인증 코드입니다.');
        } else if (error.response?.status === 401) {
          setCodeMessage('인증 코드가 만료되었습니다.');
        } else {
          setCodeMessage('이메일과 인증코드를 다시 확인해주세요.');
        }
      }
    }
  };

  const handleCodeChange = (code: string) => {
    if (!code) {
      setEmailMessage(null);
    } else {
      setEmailMessage('');
    }
  };

  const handleEmailChange = (email: string) => {
    if (!email) {
      setEmailMessage(null);
    } else {
      setEmailMessage('');
    }
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
