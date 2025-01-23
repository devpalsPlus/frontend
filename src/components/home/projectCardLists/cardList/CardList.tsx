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
      <div className='deadLine'>
        마감일: {formatDate(list.recruitmentEndDate)}
      </div>
      <div className='title'>
        <span>{list.title}</span>
      </div>
      <div className='position'>
        <div className='positionTitle'>모집 분야</div>
        <div className='positionTags'>
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
              onMouseOver={() => handlePositionTag(true)}
              onMouseOut={() => handlePositionTag(false)}
            >
              <EllipsisHorizontalIcon />
            </S.EllipsisIcon>
          )}
        </div>
      </div>
      <div className='skillTag'>
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
            onMouseOver={() => handleSkillTag(true)}
            onMouseOut={() => handleSkillTag(false)}
          >
            <EllipsisHorizontalIcon />
          </S.EllipsisIcon>
        )}
      </div>
      <div className='info'>
        <div className='nickname'>
          <Avatar size={'2.8rem'} image={list.User.profileImg} />
          <span>{list.User.nickname}</span>
        </div>
        <div className='etc'>
          {list.isBeginner && <img src={beginner} alt='plant' />}
          <div className='view'>
            <EyeIcon />
            <span>{list.views}</span>
          </div>
        </div>
      </div>
    </S.Container>
  );
}
