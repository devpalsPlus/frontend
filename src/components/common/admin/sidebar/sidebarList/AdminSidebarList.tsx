import * as S from './AdminSidebarList.styled';
import {
  ArrowRightStartOnRectangleIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  HomeIcon,
  LightBulbIcon,
  MegaphoneIcon,
  PhotoIcon,
  TagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  mainPage: <HomeIcon />,
  movedSite: <ArrowRightStartOnRectangleIcon />,
  notice: <MegaphoneIcon />,
  faq: <LightBulbIcon />,
  banner: <PhotoIcon />,
  skillTags: <TagIcon />,
  positionTags: <TagIcon />,
  allUser: <UserGroupIcon />,
  reports: <ExclamationTriangleIcon />,
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
      {list.map((item) => (
        <S.MovedListLink
          to={item.router}
          target={item.name.includes('movedSite') ? '_blank' : '_self'}
          key={item.name}
        >
          <S.MovedListIcon>{iconMap[item.name]}</S.MovedListIcon>
          <S.MovedList>{item.title}</S.MovedList>
        </S.MovedListLink>
      ))}
    </S.MovedListContainer>
  );
}
