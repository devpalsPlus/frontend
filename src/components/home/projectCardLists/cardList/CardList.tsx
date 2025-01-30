import PositionButton from '../../../common/positionButton/PositionButton';
import SkillTagImg from '../../../common/skillTagBox/skillTag/skillTagImg/SkillTagImg';
import * as S from './CardList.styled';
import beginner from '../../../../assets/beginner.svg';
import Avatar from '../../../common/avatar/Avatar';
import { EllipsisHorizontalIcon, EyeIcon } from '@heroicons/react/24/outline';
import type { ProjectList } from '../../../../models/mainProjectLists';
import { formatDate } from '../../../../util/formatDate';
import { useState } from 'react';

interface CardListProps {
  list: ProjectList;
}

export default function CardList({ list }: CardListProps) {
  const listPositionTag = list.positionTags.slice(0, 3);
  const listSkillTag = list.skillTags.slice(0, 6);
  const [isShowTag, setIsShowTag] = useState({ position: false, skill: false });

  const handlePositionTag = (state: boolean) => {
    setIsShowTag((prev) => ({ ...prev, position: state }));
  };

  const handleSkillTag = (state: boolean) => {
    setIsShowTag((prev) => ({ ...prev, skill: state }));
  };

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
          {isShowTag.position && Boolean(list.positionTags.length) && (
            <S.TagWrapper $positionPadding={isShowTag.position}>
              {list.positionTags.map((tag) => (
                <PositionButton position={tag.name} key={tag.id} />
              ))}
            </S.TagWrapper>
          )}
          {list.positionTags.length > listPositionTag.length && (
            <S.EllipsisIcon
              $hiddenIcon={isShowTag.position || isShowTag.skill}
              onMouseOver={() => handlePositionTag(true)}
              onMouseOut={() => handlePositionTag(false)}
            >
              <EllipsisHorizontalIcon />
            </S.EllipsisIcon>
          )}
        </S.TagsWrapper>
      </S.PositionWrapper>
      <S.TagsWrapper>
        {Boolean(list.skillTags.length) &&
          listSkillTag.map((tag) => (
            <SkillTagImg image={tag.img} key={tag.id} skillTag={tag.name} />
          ))}
        {isShowTag.skill && Boolean(list.skillTags.length) && (
          <S.TagWrapper>
            {list.skillTags.map((tag) => (
              <SkillTagImg image={tag.img} key={tag.id} skillTag={tag.name} />
            ))}
          </S.TagWrapper>
        )}
        {list.skillTags.length > listSkillTag.length && (
          <S.EllipsisIcon
            $hiddenIcon={isShowTag.position || isShowTag.skill}
            onMouseOver={() => handleSkillTag(true)}
            onMouseOut={() => handleSkillTag(false)}
          >
            <EllipsisHorizontalIcon />
          </S.EllipsisIcon>
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
