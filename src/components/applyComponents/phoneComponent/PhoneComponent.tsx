import * as S from './PhoneComponent.styled';
import Input from '../../inputComponent/inputComponent';
import { ApplySchemeType } from '../../../pages/apply/Apply';
import { Control, FieldErrors } from 'react-hook-form';

interface PhoneComponentProps {
  control: Control<ApplySchemeType>;
  errors: FieldErrors<ApplySchemeType>;
}

const PhoneComponent = ({ control, errors }: PhoneComponentProps) => {
  return (
    <S.PhoneInputContainer>
      <Input control={control} name='phone.0' maxLength={3} placeholder='010' />
      <S.Dash>-</S.Dash>
      <Input
        control={control}
        name='phone.1'
        maxLength={4}
        placeholder='1234'
      />
      <S.Dash>-</S.Dash>
      <Input
        control={control}
        name='phone.2'
        maxLength={4}
        placeholder='5678'
      />

      {errors.phone && (
        <S.FormError>{String(errors?.phone?.root?.message)}</S.FormError>
      )}
    </S.PhoneInputContainer>
  );
};

export default PhoneComponent;
