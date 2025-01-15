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
  console.log(list);

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
          {list.positionTags.length > 0 &&
            list.positionTags.map((position) => (
              <PositionButton position={position.name} key={position.id} />
            ))}
        </div>
      </div>
      <div className='skillTag'>
        {Boolean(list.skillTags.length) &&
          list.skillTags.map((skill) => (
            <SkillTagImg
              image={skill.img}
              key={skill.id}
              skillTag={skill.name}
            />
          ))}
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
