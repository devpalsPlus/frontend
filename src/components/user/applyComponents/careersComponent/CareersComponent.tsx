import { Control, useFieldArray } from 'react-hook-form';
<<<<<<< HEAD
import * as S from './CareersComponent.styled';
import CareerInput from './careersInputComponent/CareersComponentInput';
import { CAREER_INPUT } from '../../../constants/projectConstants';
import { ApplySchemeType } from '../../../models/joinProject';
=======
import { ApplySchemeType } from '../../../../pages/user/apply/Apply';
import * as S from './CareersComponent.styled';
import CareerInput from './careersInputComponent/CareersComponentInput';
import { CAREER_INPUT } from '../../../../constants/user/projectConstants';
>>>>>>> 4069f4a (chore: 디렉토리 변경에 따른  경로수정)

interface CareersComponentProps {
  control: Control<ApplySchemeType>;
}

const CareersComponent = ({ control }: CareersComponentProps) => {
  const { fields: fieldsCareers, append: appendCareers } = useFieldArray({
    name: 'careers',
    control,
  });

  return (
    <S.Container>
      {fieldsCareers.map((field, index) => (
        <S.CareerContainer key={field.id}>
          {CAREER_INPUT.map((career) => (
            <CareerInput
              control={control}
              index={index}
              type={career.type}
              placeholder={career.placeholder}
              name={career.name}
            />
          ))}
        </S.CareerContainer>
      ))}
      <S.AddButton
        size='primary'
        schema='primary'
        radius='primary'
        type='button'
        onClick={() =>
          appendCareers({
            name: '',
            periodStart: '',
            periodEnd: '',
            role: '',
          })
        }
      >
        추가
      </S.AddButton>
    </S.Container>
  );
};

export default CareersComponent;
