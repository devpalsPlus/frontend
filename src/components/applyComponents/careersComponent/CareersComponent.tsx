import {
  Control,
  FieldArrayWithId,
  UseFieldArrayAppend,
} from 'react-hook-form';
import { ApplySchemeType } from '../../../pages/apply/Apply';
import * as S from './CareersComponent.styled';
import CareerInput from './careersInputComponent/CareersComponentInput';
import { CAREER_INPUT } from '../../../constants/projectConstants';

interface CareersComponentProps {
  fieldsCareers: FieldArrayWithId<ApplySchemeType, 'careers'>[];
  appendCareers: UseFieldArrayAppend<ApplySchemeType, 'careers'>;
  control: Control<ApplySchemeType>;
}

const CareersComponent = ({
  fieldsCareers,
  appendCareers,
  control,
}: CareersComponentProps) => {
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
