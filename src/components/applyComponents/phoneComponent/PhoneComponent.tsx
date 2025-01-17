import * as S from './PhoneComponent.styled';
import { ApplySchemeType } from '../../../pages/apply/Apply';
import { Control, FieldErrors } from 'react-hook-form';
import PhoneInput from './phoneComponentInput/PhoneComponentInput';

interface PhoneComponentProps {
  control: Control<ApplySchemeType>;
  errors: FieldErrors<ApplySchemeType>;
}

const PhoneComponent = ({ control, errors }: PhoneComponentProps) => {
  return (
    <S.PhoneInputContainer>
      <PhoneInput
        control={control}
        name='phone.0'
        maxLength={3}
        placeholder='010'
      />
      <S.Dash>-</S.Dash>
      <PhoneInput
        control={control}
        name='phone.1'
        maxLength={4}
        placeholder='1234'
      />
      <S.Dash>-</S.Dash>
      <PhoneInput
        control={control}
        name='phone.2'
        maxLength={4}
        placeholder='5678'
      />

      {errors.phone && (
        <S.FormError>{String(errors?.phone[0]?.message)}</S.FormError>
      )}
    </S.PhoneInputContainer>
  );
};

export default PhoneComponent;
