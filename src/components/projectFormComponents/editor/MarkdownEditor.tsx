import { UseControllerReturn } from 'react-hook-form';
import * as S from './MarkdownEditor.styled';

interface MdEditorInputProps {
  field: UseControllerReturn['field'];
}

const MdEditorInput = ({ field }: MdEditorInputProps) => {
  return (
    <>
      {/* 그냥 ...field 형태로 전달하니 동작 X */}
      <S.StyledMDEditor
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        textareaProps={{
          placeholder: '마크다운 형식으로도 작성이 가능합니다.',
        }}
      />
    </>
  );
};
export default MdEditorInput;
