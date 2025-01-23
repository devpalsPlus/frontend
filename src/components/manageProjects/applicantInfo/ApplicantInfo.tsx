import * as S from './ApplicantInfo.styled';
import { ApplicantInfo as MApplicantInfo } from '../../../models/applicant';
import AvartarList from '../../common/avatar/AvartarList';
import { LabelWithContent } from './LabelWithContent';
interface ApplicantInfoProps {
  applicantInfo: MApplicantInfo;
}

const ApplicantInfo = ({ applicantInfo }: ApplicantInfoProps) => {
  return (
    <S.Container>
      <S.Title>{applicantInfo.User.nickname}</S.Title>
      <LabelWithContent label='이메일' content={applicantInfo.email} />
      <LabelWithContent label='휴대폰' content={applicantInfo.phoneNumber} />
      <div className='skillset-wrap'>
        <S.Label>스킬셋</S.Label>
        <AvartarList avatars={applicantInfo.User.UserSkillTag} />
      </div>

      <S.Label>경력</S.Label>
      {applicantInfo.career?.map((data) => (
        <S.Text>
          <span className='period'>
            [{data.periodStart} ~ {data.periodEnd}]
          </span>
          {data.name} - {data.role}
        </S.Text>
      ))}
      <LabelWithContent label='자기 소개' content={applicantInfo.User.bio} />
      <LabelWithContent label='하고 싶은 말' content={applicantInfo.message} />
    </S.Container>
  );
};

export default ApplicantInfo;
