import { Control, UseFieldArrayAppend } from 'react-hook-form';
import { ApplySchemeType } from '../../../pages/apply/Apply';
import Input from '../../projectFormComponents/inputComponent/inputComponent';
import * as S from './CareersComponent.styled';

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
          <Input
            control={control}
            index={index}
            field={field}
            placeholder='회사명 / 활동명'
            name='name'
          />
          <Input
            control={control}
            index={index}
            field={field}
            placeholder='시작 기간'
            name='periodStart'
            type='date'
          />
          <Input
            control={control}
            index={index}
            field={field}
            placeholder='종료 기간'
            name='periodEnd'
            type='date'
          />
          <Input
            control={control}
            index={index}
            field={field}
            placeholder='역할 / 기여도'
            name='role'
          />
        </S.CareerContainer>
      ))}
      <button
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
      </button>
    </>
  );
};

export default CareersComponent;
