import { literal } from 'zod';
import { SIDEBAR_LIST } from '../../../../../constants/admin/sidebar';
import * as S from './AdminSidebarList.styled';
import {
  ArrowRightStartOnRectangleIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  HomeIcon,
  MegaphoneIcon,
  NewspaperIcon,
  PhotoIcon,
  TagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  mainPage: <HomeIcon />,
  movedSite: <ArrowRightStartOnRectangleIcon />,
  notice: <MegaphoneIcon />,
  banner: <PhotoIcon />,
  tags: <TagIcon />,
  allUser: <UserGroupIcon />,
  reports: <ExclamationCircleIcon />,
  inquiries: <EnvelopeIcon />,
  manage: <ChatBubbleBottomCenterTextIcon />,
};

type IconKey = keyof typeof iconMap;

interface AdminSidebarListProps {
  title: string;
  list: readonly { name: IconKey; title: string; router: string }[];
}

export default function AdminSidebarList({
  title,
  list,
}: AdminSidebarListProps) {
  return (
    <S.MovedListContainer>
      <S.MovedListTitleWrapper>
        {title && <S.MovedListTitle>{title}</S.MovedListTitle>}
      </S.MovedListTitleWrapper>
      {list.map((list) => (
        <S.MovedListLink
          to={list.router}
          target={list.name.includes('movedSite') ? '_blank' : '_parent'}
          key={list.name}
        >
          <S.MovedListIcon>{iconMap[list.name]}</S.MovedListIcon>
          <S.MovedList>{list.title}</S.MovedList>
        </S.MovedListLink>
      ))}
    </S.MovedListContainer>
  );
}
