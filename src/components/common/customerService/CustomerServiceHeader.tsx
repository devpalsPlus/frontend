import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import * as S from './CustomerServiceHeader.styled';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

interface CustomerServiceHeaderProps {
  title: string;
}

export default function CustomerServiceHeader({
  title,
}: CustomerServiceHeaderProps) {
  return (
    <S.Container>
      <S.WrapperTitle>
        <S.Title>DevPals {title}</S.Title>
      </S.WrapperTitle>
      <S.WrapperNav>
        <S.WrapperSearchBar>
          <S.SearchBarInput
            type='text'
            placeholder='궁금한 내용을 검색해보세요.'
          />
          <S.SearchButton>
            <MagnifyingGlassIcon />
          </S.SearchButton>
        </S.WrapperSearchBar>
        <Link to={ROUTES.inquiry}>
          <S.MoveInquiredDiv>문의하기</S.MoveInquiredDiv>
        </Link>
      </S.WrapperNav>
    </S.Container>
  );
}
