import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import * as S from './CustomerServiceHeader.styled';
import MovedInquiredLink from './MoveInquiredLink';

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
        <S.SearchBarForm>
          <S.SearchBarInput
            type='text'
            placeholder='궁금한 내용을 검색해보세요.'
          />
          <S.SearchButton type='submit' aria-label='search'>
            <MagnifyingGlassIcon />
          </S.SearchButton>
        </S.SearchBarForm>
        <MovedInquiredLink />
      </S.WrapperNav>
    </S.Container>
  );
}
