import { useState } from 'react';
import { getCheckNickname } from '../../api/auth.api';

const useNickNameVerification = () => {
  const [nicknameMessage, setNicknameMessage] = useState<string | undefined>(
    undefined
  );

  const handleDuplicationNickname = async (nickname: string) => {
    const result = await getCheckNickname(nickname);
    setNicknameMessage(result);
  };

  return { nicknameMessage, handleDuplicationNickname };
};

export default useNickNameVerification;
