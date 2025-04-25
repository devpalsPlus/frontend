import * as S from './HeroSection.styled';
import landimg from '../../assets/landing.svg';
import DownArrow from '../../assets/arrow.svg';
import Button from '../../components/common/Button/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
interface HeroSectionProps {
  handleScrollToSection: (sectionId: number) => void;
}

const HeroSection = ({ handleScrollToSection }: HeroSectionProps) => {
  return (
    <S.MainContainer>
      <S.ImgWrapper>
        <S.landingImg src={landimg} />
        <S.Title>
          여러분들의 프로젝트 경험을 쉽게!
          <br />
          DEVPALS
        </S.Title>
      </S.ImgWrapper>
      <S.ButtonWrapper>
        <Link to={ROUTES.main} role='none'>
          <Button
            size='primary'
            schema='primary'
            radius='large'
            aria-label='클릭시 프로젝트보기 페이지로 이동합니다.'
          >
            프로젝트보기
          </Button>
        </Link>
        <Link to={ROUTES.createProject} role='none'>
          <Button
            size='primary'
            schema='primary'
            radius='large'
            aria-label='클릭시 팀원모집하기 페이지로 이동합니다.'
          >
            팀원모집하기
          </Button>
        </Link>
      </S.ButtonWrapper>
      <S.DownArrow
        src={DownArrow}
        onClick={() => handleScrollToSection(0)}
        role='button'
        tabIndex={0}
        alt='아래로 스크롤하는 화살표 아이콘'
      />
    </S.MainContainer>
  );
};

export default HeroSection;
