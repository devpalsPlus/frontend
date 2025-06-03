import * as S from './AdminMain.styled';
import MainCard from '../../../components/admin/mainCard/MainCard';
import { cardList } from '../../../constants/admin/mainItems';

const Main = () => {
  return (
    <S.Container>
      <S.Wrapper>
        {cardList.map(({ key, title, link, Component }) => (
          <MainCard key={key} title={title} moreLink={link}>
            {title === '방문자 현황' ? (
              <S.GraphArea>
                <Component />
              </S.GraphArea>
            ) : (
              <Component />
            )}
          </MainCard>
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default Main;
