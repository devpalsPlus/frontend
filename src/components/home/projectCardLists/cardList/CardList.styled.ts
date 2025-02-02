import styled from 'styled-components';

export const Container = styled.article`
  position: relative;
  cursor: pointer;
  width: 100%;
  min-width: 15rem;
  height: 22rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 2rem;
  padding: 1.8rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    padding: 1.5rem;
    gap: 0.5rem;
    height: 18rem;
  }
`;

export const Deadline = styled.div`
  color: #3c3c3c;
  font-size: 0.9rem;
`;

export const Title = styled.div`
  height: 4rem;
  font-size: 1.25rem;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const PositionTitle = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
  color: #5f5f5f;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  position: relative;
`;

export const TagWrapper = styled.div<{ $positionPadding?: boolean }>`
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  padding-bottom: ${({ $positionPadding }) => ($positionPadding ? '1rem' : '')};
  gap: 0.5rem;
  z-index: 10;
`;

export const EllipsisIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.8rem;
  font-size: 0.7rem;
`;

export const MoreSpan = styled.span``;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NickName = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  color: #646464;
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 0.5rem;
`;

export const BeginnerImg = styled.img`
  width: 2rem;

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    width: 1.5rem;
  }
`;

export const ViewWrapper = styled.div`
  display: flex;
  gap: 0.3rem;

  svg {
    width: 1.3rem;
    color: #5f5f5f;
  }

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    svg {
      width: 1rem;
    }
  }
`;

export const ViewCount = styled.span`
  flex-direction: row;
  color: #5f5f5f;

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    align-items: end;
    font-size: 0.9rem;
  }
`;
