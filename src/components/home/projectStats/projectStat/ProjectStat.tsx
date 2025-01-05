import * as S from './ProjectStat.styled';

interface ProjectStatProps {
  title: string;
}

export default function ProjectStat({ title }: ProjectStatProps) {
  return (
    <S.Container>
      <div className="border"></div>
      <div className="stat">
        <div className="number">20</div>
        <div className="title">{title}</div>
      </div>
    </S.Container>
  );
}
