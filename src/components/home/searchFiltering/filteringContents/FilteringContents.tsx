import {
  PROJECT_METHOD,
  PROJECT_POSITION,
  PROJECT_SKILL,
} from '../../../../constants/homeConstants';
import Filtering from './filtering/Filtering';
import * as S from './FilteringContents.styled';
import beginner from '../../../../assets/beginner.svg';

export default function FilteringContents() {
  return (
    <S.Container>
      <Filtering selects={[...PROJECT_SKILL]} defaultValue="언어선택" />
      <Filtering selects={[...PROJECT_POSITION]} defaultValue="포지션" />
      <Filtering selects={[...PROJECT_METHOD]} defaultValue="진행방식" />
      <div className="beginnerButton">
        <button>
          새싹 모집
          <img src={beginner} alt="plant" />
        </button>
      </div>
    </S.Container>
  );
}
