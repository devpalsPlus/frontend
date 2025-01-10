import * as S from '../../pages/createProject/CreateProject.styled';
import { PROJECTDATA } from '../../constants';
import Input from './inputComponent';

const ProjectInformation = () => {
  return (
    <>
      {PROJECTDATA.map((input, index) => (
        <>
          <S.InfoRow key={index}>
            <label htmlFor={input.name}>{input.label}</label>
            {/* <Input
              index={input.id}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
            /> */}
          </S.InfoRow>
        </>
      ))}

      <S.InfoRow>
        <label htmlFor='field'>진행 방식</label>
      </S.InfoRow>

      <S.InfoRow>
        <label htmlFor='position'>모집 분야</label>
      </S.InfoRow>

      <S.InfoRow>
        <label htmlFor='languages'>사용 언어</label>
      </S.InfoRow>
    </>
  );
};

export default ProjectInformation;
