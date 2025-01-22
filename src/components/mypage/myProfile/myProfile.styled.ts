import styled from 'styled-components';

export const TitleWrapper = styled.div`
  padding: 1rem 0 1rem 1.2rem;
`;

export const Box = styled.div`
  position: relative;
`;

export const Container = styled.div`
  background-color: rgb(246 246 246);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 2.5rem 3rem;
  margin-top: 1rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;

  button {
    position: absolute;
    top: 1.1rem;
    right: 1rem;
    background-color: #3e5879;
    padding: 0.5rem;
    border-radius: 50%;

    svg {
      width: 1.3rem;
      height: 1.3rem;
      color: ${({ theme }) => theme.color.white};
    }
  }

  a {
    width: fit-content;
    display: inline-block;
    padding: 0.5rem 0.7rem;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    background-color: #3e5879;
    color: ${({ theme }) => theme.color.white};
    font-size: 0.8rem;
    margin-top: 1rem;
  }
`;

export const IconWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  margin-top: -0.1rem;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0.2rem;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
`;

export const Bio = styled.p`
  white-space: pre-line;
  word-break: break-word;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1.25rem;

  label {
    margin-right: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.deepGrey};
  }

  ul {
    margin-top: 0.6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.7rem;
      color: #a1a1a1;

      img {
        background-color: white;
        border-radius: 50%;
        border: 1px solid #f0f0f0;
      }
    }
  }

  button {
    margin-right: 1rem;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;

  label {
    font-weight: 700;
    color: ${({ theme }) => theme.color.deepGrey};
    margin-bottom: 0.6rem;
  }
  ul {
    display: flex;
    flex-direction: column;

    li {
      color: #a1a1a1;
      margin-bottom: 0.8rem;

      span {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;

export const EditWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin-bottom: 2.6rem;

  label {
    margin-right: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.deepGrey};
  }

  button {
    margin-left: 1rem;
    padding: 0.65rem 1rem;
    min-width: 60px;
    font-size: 0.9rem;
  }
`;

export const InputTextNickname = styled.div`
  width: 20%;
  min-width: 125px;
`;

export const InputTextGithub = styled.div`
  width: 90%;
`;

export const InputTextCareer = styled.div`
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 85%;
`;

export const ErrorMessage = styled.span<{ message?: string }>`
  position: absolute;
  bottom: -1.8rem;
  left: 0.5rem;
  display: inline-block;
  color: #d43636;
  font-size: 0.8rem;
  height: 1.2rem;
`;

export const ErrorCareerMessage = styled.span<{ message?: string }>`
  display: inline-block;
  color: #d43636;
  font-size: 0.7rem;
`;

export const EditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  label {
    font-weight: 700;
    color: ${({ theme }) => theme.color.deepGrey};
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #3e5879;
    svg {
      color: ${({ theme }) => theme.color.white};
    }
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const EditList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  position: relative;
  margin-bottom: 3rem;
  background-color: ${({ theme }) => theme.color.white};
  padding: 1rem;
  border-radius: 20px;
`;

export const CareerList = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  background-color: rgba(237, 237, 237, 0.73);
  border-radius: 20px;
  padding: 0.5rem;

  button {
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    top: 0;
    right: 0.5rem;
  }
`;

export const CareerWrapper = styled.div`
  flex: 1;
  position: relative;
`;
