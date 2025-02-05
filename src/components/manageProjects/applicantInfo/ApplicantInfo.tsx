import * as S from './ApplicantInfo.styled';
import { ApplicantInfo as MApplicantInfo } from '../../../models/applicant';
import AvatarList from '../../common/avatar/AvatarList';
import { LabelWithContent } from './LabelWithContent';
import { formatDate } from '../../../util/format';
interface ApplicantInfoProps {
  applicantInfo: MApplicantInfo;
}

const ApplicantInfo = ({ applicantInfo }: ApplicantInfoProps) => {
  return (
    <S.Container>
      <S.Title>{applicantInfo.User.nickname}</S.Title>
      <LabelWithContent label='이메일' content={applicantInfo.email} />
      <LabelWithContent label='휴대폰' content={applicantInfo.phoneNumber} />
      <S.SkillSetWrapper>
        <S.Label>스킬셋</S.Label>
        <AvatarList avatars={applicantInfo.User.UserSkillTag} />
      </S.SkillSetWrapper>

      <S.Label>경력</S.Label>
      {applicantInfo.career?.map((data) => (
        <S.Text>
          <S.PeriodSpan>
            [{formatDate(data.periodStart)} ~ {formatDate(data.periodEnd)}]
          </S.PeriodSpan>
          {data.name} - {data.role}
        </S.Text>
      ))}
      <LabelWithContent label='자기 소개' content={applicantInfo.User.bio} />
      <LabelWithContent label='하고 싶은 말' content={applicantInfo.message} />
    </S.Container>
  );
};

export default ApplicantInfo;
