import styled from 'styled-components';
import Button from '../../../common/Button/Button';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  position: absolute;
  top: 7rem;
  right: 2rem;
`;

export const SendEmailButton = styled(Button)`
  width: 9rem;

  svg {
    width: 1.5rem;
    margin-left: 0.5rem;
  }
  &:hover {
    opacity: 0.8;
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 7rem;
    font-size: ${({ theme }) => theme.heading.small.tabletFontSize};
    padding: ${({ theme }) => theme.buttonSize.small.padding};

    svg {
      width: 15px;
      height: 15px;
    }
  }
`;
