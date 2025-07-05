import * as S from './ToggleSwitch.styled';

interface ToggleSwitchProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch = ({ id, checked, onChange }: ToggleSwitchProps) => (
  <S.ToggleSwitch>
    <S.HiddenInput
      type='checkbox'
      id={id}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    <S.ToggleLabel htmlFor={id} />
  </S.ToggleSwitch>
);

export default ToggleSwitch;
