import styled, { css } from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.header`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
`;

export const HeaderTitle = styled.h1``;

export const InquiryForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InquiryWrapper = styled.div`
  width: 49rem;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`;

export const CategoryWrapper = styled.div`
  position: relative;
`;

export const CategorySelect = styled.button<{ $isCategoryOpen: boolean }>`
  padding: 0.3rem 0.5rem;
  width: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  svg {
    width: 1.3rem;
    height: 1.3rem;
    transition: transform 300ms ease-in-out;
    transform: rotate(0deg);
    ${({ $isCategoryOpen }) =>
      $isCategoryOpen &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

export const CategoryValueInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
`;

export const CategoryButtonWrapper = styled.div`
  width: 9rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background: ${({ theme }) => theme.color.white};
`;

export const CategoryButton = styled.button`
  font-size: 1.3rem;
  padding: 0.5rem;
  display: flex;
  justify-content: start;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.color.navy};
    color: ${({ theme }) => theme.color.white};
  }
`;

export const InputInquiryTitle = styled.input`
  padding: 0.2rem 0.8rem;
  width: calc(100% - 8rem);
  font-size: 1.3rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;

export const ContentWrapper = styled.section`
  width: 100%;
`;

export const Content = styled.textarea`
  resize: none;
  margin: 0.5rem 0;
  padding: 1rem;
  height: 55vh;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  font-size: 1rem;
`;

export const InquiryFileWrapper = styled.div`
  display: flex;
  height: 40px;
`;

export const InquiryFileLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  width: 6rem;
  background: ${({ theme }) => theme.color.navy};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.navy};
  border-radius: ${({ theme }) => theme.borderRadius.primary} 0 0
    ${({ theme }) => theme.borderRadius.primary};

  &:hover {
    background: ${({ theme }) => theme.color.lightgrey};
    color: ${({ theme }) => theme.color.navy};
    border: 1px solid ${({ theme }) => theme.color.navy};
    transition: all 0.3s ease-in-out;
  }
`;

export const InquiryShowFile = styled.span`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  width: 40%;
  color: ${({ theme }) => theme.color.navy};
  border-radius: 0 ${({ theme }) => theme.borderRadius.primary}
    ${({ theme }) => theme.borderRadius.primary} 0;
`;

export const InquiryFile = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
`;

export const FileImg = styled.img`
  margin-left: 0.5rem;
  width: 60px;
  height: 40px;
`;

export const SendButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 6rem;
  background: ${({ theme }) => theme.color.navy};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.navy};
  padding: 0.5em;

  &:hover {
    background: ${({ theme }) => theme.color.lightgrey};
    color: ${({ theme }) => theme.color.navy};
    border: 1px solid ${({ theme }) => theme.color.navy};
    transition: all 0.3s ease-in-out;
  }
`;
