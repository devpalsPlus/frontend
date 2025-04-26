import { useState } from 'react';
import * as S from './DropDown.styled';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

interface DropDownProps {
  children: React.ReactNode;
  toggleButton: React.ReactNode;
  isOpen?: boolean;
}

const DropDown = ({
  children,
  toggleButton,
  isOpen = false,
  ...props
}: DropDownProps) => {
  const [open, setOpen] = useState(isOpen);
  const dropdownRef = useOutsideClick(() => handleCloseModal());
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <S.DropDownContainer ref={dropdownRef}>
      <S.DropDownButtonWrapper
        onClick={() => setOpen(!open)}
        tabIndex={0}
        {...props}
      >
        {toggleButton}
      </S.DropDownButtonWrapper>
      {open && <S.Panel>{children}</S.Panel>}
    </S.DropDownContainer>
  );
};

export default DropDown;
