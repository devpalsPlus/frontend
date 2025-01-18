import { Control, UseFieldArrayAppend } from 'react-hook-form';
import { ApplySchemeType } from '../../../pages/apply/Apply';
import * as S from './CareersComponent.styled';
import CareerInput from './careersInputComponent/CareersComponentInput';
import { CAREER_INPUT } from '../../../constants/projectConstants';

interface CareersComponentProps {
  fieldsCareers: any;
  appendCareers: UseFieldArrayAppend<ApplySchemeType, 'careers'>;
  control: Control<ApplySchemeType>;
}

const CareersComponent = ({
  fieldsCareers,
  appendCareers,
  control,
}: CareersComponentProps) => {
  return (
    <>
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
        onClick={() =>
          appendCareers({
            name: '',
            periodStart: '',
            periodEnd: '',
            role: '',
          })
        }
        style={{ cursor: 'pointer', color: 'blue' }}
      >
        추가
      </S.AddButton>
    </>
  );
};

export default CareersComponent;
