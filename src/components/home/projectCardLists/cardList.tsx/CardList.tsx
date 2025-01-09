import { PROJECT_POSITION } from '../../../../constants/homeConstants';
import PositionButton from '../../../common/positionButton/PositionButton';
import SkillTagImg from '../../../common/skillTagBox/skillTag/skillTagImg/SkillTagImg';
import * as S from './CardList.styled';
import { v4 as uuid } from 'uuid';
import beginner from '../../../../assets/beginner.svg';
import Avatar from '../../../common/avatar/Avatar';
import { EyeIcon } from '@heroicons/react/24/outline';

export default function CardList() {
  return (
    <S.Container>
      <div className='deadLine'>마감일: 2025년 2월 10일</div>
      <div className='title'>
        <span>
          클론코딩 사이드 프로젝트 팀원 모집 클론코딩 사이드 프로젝트 팀원 모집
          클론코딩 사이드 프로젝트 팀원 모집
        </span>
      </div>
      <div className='position'>
        <div className='positionTitle'>모집 분야</div>
        <div className='skillTags'>
          {PROJECT_POSITION.map((position) => (
            <PositionButton position={position} key={uuid()} />
          ))}
        </div>
      </div>
      <div className='skill'>
        {PROJECT_POSITION.map((po) => (
          <SkillTagImg image={beginner} key={po} skillTag={po} />
        ))}
      </div>
      <div className='info'>
        <div className='nickname'>
          <Avatar size={'2.8rem'} image={beginner} />
          <span>Jenny</span>
        </div>
        <div className='etc'>
          <img src={beginner} alt='plant' />
          <div className='view'>
            <EyeIcon />
            <span>1</span>
          </div>
        </div>
      </div>
    </S.Container>
  );
}
