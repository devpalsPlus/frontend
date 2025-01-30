import * as S from './Banner.styled';
import banner from '../../../assets/banner.svg';

export default function Banner() {
  return (
    <S.Container>
      <S.BannerImg src={banner} alt='banner1' />
    </S.Container>
  );
}
