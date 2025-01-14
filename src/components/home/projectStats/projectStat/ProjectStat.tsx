import * as S from './ProjectStat.styled';

interface ProjectStatProps {
  title: string;
  count: number;
}

export default function ProjectStat({ title, count }: ProjectStatProps) {
  return (
    <S.Container>
      <div className='border'></div>
      <div className='stat'>
        <div className='number'>{count}</div>
        <div className='title'>{title}</div>
      </div>
    </S.Container>
  );
}
