import { useState } from 'react';

const useCommand = () => {
  const [activateId, setActivateId] = useState<number | null>(null);
  const [activateEditMode, setActivateEditMode] = useState<number | null>(null);
  const [onReplyMessage, setOnReplyMessage] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isShowReply, setIsShowReply] = useState<number | null>(null);

  const handleActivateClick = (
    id: number,
    createrId: number | undefined,
    loginUserId: number | undefined
  ) => {
    setActivateId((prev) => (prev === id ? null : id));

    if (createrId !== loginUserId) {
      setOnReplyMessage(true);
      setTimeout(() => {
        setOnReplyMessage(false);
      }, 2000);
    }
  };

  const onEdit = (id: number) => {
    setActivateEditMode((prev) => (prev === id ? null : id));
  };

  const handleDropDownClick = () => {
    setShowMenu(!showMenu);
  };

  const handleShowReplyClick = (id: number) => {
    setIsShowReply((prev) => (prev === id ? null : id));
  };

  return {
    handleActivateClick,
    onEdit,
    setActivateEditMode,
    handleDropDownClick,
    handleShowReplyClick,
    isShowReply,
    showMenu,
    activateId,
    activateEditMode,
    onReplyMessage,
  };
};

export default useCommand;
