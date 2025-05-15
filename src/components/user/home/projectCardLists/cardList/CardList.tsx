import PositionButton from '../../../../common/positionButton/PositionButton';
import * as S from './CardList.styled';
import { EyeIcon } from '@heroicons/react/24/outline';
import type { ProjectList } from '../../../../../models/mainProjectLists';
import { formatDate } from '../../../../../util/formatDate';
import Avatar from '../../../../common/avatar/Avatar';
import beginner from '../../../../../assets/beginner.svg';

interface CardListProps {
  list: ProjectList;
}

export default function CardList({ list }: CardListProps) {
  const listPositionTag = list.positions.slice(0, 2);
  const listSkillTag = list.skills.slice(0, 4);
  const othersPosition = list.positions.length - 2;
  const othersSkill = list.skills.length - 4;

  return (
    <S.Container>
      <S.Deadline>마감일: {formatDate(list.recruitmentEndDate)}</S.Deadline>
      <S.Title>{list.title}</S.Title>
      <S.PositionWrapper>
        <S.PositionTitle>모집 분야</S.PositionTitle>
        <S.TagsWrapper>
          {Boolean(list.positions.length) &&
            listPositionTag.map((tag) => (
              <PositionButton
                position={tag.name}
                key={`cardListPosition-${tag.id}`}
                fontSize
              />
            ))}
          {list.positions.length > listPositionTag.length && (
            <S.EllipsisIconButton>+{othersPosition}</S.EllipsisIconButton>
          )}
        </S.TagsWrapper>
      </S.PositionWrapper>
      <S.TagsWrapper>
        {Boolean(list.skills.length) &&
          listSkillTag.map((tag) => (
            <S.SkillTagImgWrapper key={`cardListSkill-${tag.id}`}>
              <S.SkillTagImg src={tag.img} alt={tag.name} />
            </S.SkillTagImgWrapper>
          ))}
        {list.skills.length > listSkillTag.length && (
          <S.EllipsisIconButton>+{othersSkill}</S.EllipsisIconButton>
        )}
      </S.TagsWrapper>
      <S.InfoWrapper>
        <S.ProfileWrapper>
          <Avatar size={'2.8rem'} image={list.user.img} />
          <S.NickName>{list.user.nickname}</S.NickName>
        </S.ProfileWrapper>
        <S.StatusWrapper>
          {list.isBeginner && <S.BeginnerImg src={beginner} alt='plant' />}
          <S.ViewWrapper>
            <EyeIcon />
            <S.ViewCount>{list.views}</S.ViewCount>
          </S.ViewWrapper>
        </S.StatusWrapper>
      </S.InfoWrapper>
    </S.Container>
  );
}
