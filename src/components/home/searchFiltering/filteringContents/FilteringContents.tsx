import Filtering from './filtering/Filtering';
import * as S from './FilteringContents.styled';
import beginner from '../../../../assets/beginner.svg';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import SkillTagBox from '../../../common/skillTagBox/SkillTagBox';
import { useEffect, useRef, useState } from 'react';
import { useSearchFilteringSkillTag } from '../../../../hooks/useSearchFilteringSkillTag';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';

export default function FilteringContents() {
  const { skillTagsData, positionTagsData, methodTagsData } =
    useSearchFilteringSkillTag();
  const [skillTagButtonToggle, setSkillTagButtonToggle] = useState(false);

  const handleSkillTagBoxToggle = () => {
    setSkillTagButtonToggle((prev) => !prev);
  };

  const filteringRef = useOutsideClick(() => setSkillTagButtonToggle(false));

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
      <Filtering selects={positionTagsData} defaultValue='포지션' />
      <Filtering selects={methodTagsData} defaultValue='진행방식' />
      <div className='filteringButton beginnerButton'>
        <button>
          새싹 모집
          <img src={beginner} alt='plant' />
        </button>
      </div>

      {skillTagButtonToggle && (
        <div className='skillTagBox'>
          <SkillTagBox width='90%' skillTagsData={skillTagsData} />
        </div>
      )}
    </S.Container>
  );
}
