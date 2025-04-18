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
        <Link to={ROUTES.main}>
          <Button size='primary' schema='primary' radius='large'>
            프로젝트보기
          </Button>
        </Link>
        <Link to={ROUTES.createProject}>
          <Button size='primary' schema='primary' radius='large'>
            팀원모집하기
          </Button>
        </Link>
      </S.ButtonWrapper>
      <S.DownArrow src={DownArrow} onClick={() => handleScrollToSection(0)} />
    </S.MainContainer>
  );
};

export default HeroSection;
