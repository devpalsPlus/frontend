import { PropsWithChildren } from 'react';
import { ModalContextProps } from '../../../context/ModalContext';
import { ModalProvider } from './ModalProvider';
import ModalCloseButton from './ModalCloseButton';
import { ModalContents } from './ModalContents';
import { ModalContainer } from './ModalContainer';
import { ModalBody } from './ModalBody';
import { ModalContentIcon } from './ModalIconWrapper';

export const ModalWrapper = ({
  isOpen = false,
  onClose = (event?: React.SyntheticEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  },
  children,
}: PropsWithChildren<Partial<ModalContextProps>>) => {
  const modalProps: ModalContextProps = {
    isOpen,
    onClose,
  };

  return <ModalProvider value={modalProps}>{children}</ModalProvider>;
};

ModalWrapper.CloseButton = ModalCloseButton;
ModalWrapper.Contents = ModalContents;
ModalWrapper.Container = ModalContainer;
ModalWrapper.Body = ModalBody;
ModalWrapper.ContentIcon = ModalContentIcon;
