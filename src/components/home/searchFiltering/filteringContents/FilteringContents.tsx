import {
  PROJECT_METHOD,
  PROJECT_POSITION,
} from '../../../../constants/homeConstants';
import Filtering from './filtering/Filtering';
import * as S from './FilteringContents.styled';
import beginner from '../../../../assets/beginner.svg';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import SkillTagBox from '../../../common/skillTagBox/SkillTagBox';
import { useEffect, useRef, useState } from 'react';

export default function FilteringContents() {
  const [skillTagButtonToggle, setSkillTagButtonToggle] = useState(false);
  const filteringRef = useRef<HTMLDivElement>(null);

  const handleSkillTagBoxToggle = () => {
    setSkillTagButtonToggle((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        filteringRef.current &&
        !filteringRef.current.contains(e.target as Node)
      ) {
        setSkillTagButtonToggle(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [filteringRef]);

  return (
    <S.Container>
      <div
        className='filteringButton skillTagButton'
        onClick={handleSkillTagBoxToggle}
        ref={filteringRef}
      >
        <button>
          언어선택
          <ChevronDownIcon />
        </button>
      </div>
      <Filtering selects={[...PROJECT_POSITION]} defaultValue='포지션' />
      <Filtering selects={[...PROJECT_METHOD]} defaultValue='진행방식' />
      <div className='filteringButton beginnerButton'>
        <button>
          새싹 모집
          <img src={beginner} alt='plant' />
        </button>
      </div>

      {skillTagButtonToggle && (
        <div className='skillTagBox'>
          <SkillTagBox />
        </div>
      )}
    </S.Container>
  );
}
