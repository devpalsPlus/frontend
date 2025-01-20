import * as S from './MyProjectVolunteersPass.styled';
import Sidebar from '../../../components/common/sidebar/Sidebar';
import {
  DocumentTextIcon,
  PencilSquareIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { ROUTES } from '../../../constants/routes';
import { useParams } from 'react-router-dom';

const MyProjectVolunteersPass = () => {
  const { projectId } = useParams();
  const menuItems = [
    {
      label: '지원자 보기',
      path: `${ROUTES.manageProjectsRoot}/${projectId}`,
      icon: <UserIcon />,
    },
    {
      label: '지원자 합/불 관리',
      path: `${ROUTES.manageProjectsPassNonPass}/${projectId}`,
      icon: <DocumentTextIcon />,
    },
    {
      label: '공고 관리',
      path: '/mypage/apply-projects',
      icon: <PencilSquareIcon />,
    },
  ];
  return (
    <S.Container>
      <Sidebar menuItems={menuItems} />
    </S.Container>
  );
};

export default MyProjectVolunteersPass;
