import PositionButton from '../../../common/positionButton/PositionButton';
import SkillTagImg from '../../../common/skillTagBox/skillTag/skillTagImg/SkillTagImg';
import * as S from './CardList.styled';
import beginner from '../../../../assets/beginner.svg';
import Avatar from '../../../common/avatar/Avatar';
import { EyeIcon } from '@heroicons/react/24/outline';
import type { ProjectList } from '../../../../models/mainProjectLists';
import { formatDate } from '../../../../util/formatDate';

interface CardListProps {
  list: ProjectList;
}

export default function CardList({ list }: CardListProps) {
  const listPositionTag = list.positionTags.slice(0, 2);
  const listSkillTag = list.skillTags.slice(0, 4);
  const othersPosition = list.positionTags.length - 2;
  const othersSkill = list.skillTags.length - 4;
  return (
    <S.Container>
      <S.Deadline>마감일: {formatDate(list.recruitmentEndDate)}</S.Deadline>
      <S.Title>{list.title}</S.Title>
      <S.PositionWrapper>
        <S.PositionTitle>모집 분야</S.PositionTitle>
        <S.TagsWrapper>
          {Boolean(list.positionTags.length) &&
            listPositionTag.map((tag) => (
              <PositionButton position={tag.name} key={tag.id} />
            ))}
          {list.positionTags.length > listPositionTag.length && (
            <S.EllipsisIconButton>+{othersPosition}</S.EllipsisIconButton>
          )}
        </S.TagsWrapper>
      </S.PositionWrapper>
      <S.TagsWrapper>
        {Boolean(list.skillTags.length) &&
          listSkillTag.map((tag) => (
            <SkillTagImg image={tag.img} key={tag.id} skillTag={tag.name} />
          ))}
        {list.skillTags.length > listSkillTag.length && (
          <S.EllipsisIconButton>+{othersSkill}</S.EllipsisIconButton>
        )}
      </S.TagsWrapper>
      <S.InfoWrapper>
        <S.ProfileWrapper>
          <Avatar size={'2.8rem'} image={list.User.profileImg} />
          <S.NickName>{list.User.nickname}</S.NickName>
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
