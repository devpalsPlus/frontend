import { useLocation, useParams } from 'react-router-dom';
import useGetUserActivity from '../../../../../hooks/admin/useGetAllUserActivity';
import ContentBorder from '../../../../common/contentBorder/ContentBorder';
import NoContent from '../../../../common/noContent/NoContent';
import Spinner from '../../Spinner';
import * as S from './Inquiries.styled';
import Inquiry from './inquiry/Inquiry';
import type { MyInquiries } from '../../../../../models/activityLog';
import { useLayoutEffect, useRef, useState } from 'react';

export default function Inquiries() {
  const { userId } = useParams();
  const { state } = useLocation();
  const { id } = state || {};
  const { userActivityData, isLoading } = useGetUserActivity(
    Number(userId),
    'inquiries'
  );
  const headRef = useRef<HTMLDivElement>(null);
  const inquiriesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [headHeight, setHeadHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (!id || !headRef?.current) return;
    const height = headRef.current.offsetHeight;
    setHeadHeight(height);
    const idx = userActivityData?.findIndex((item) => item.id == id);
    const targetRef = idx !== undefined ? inquiriesRef.current[idx] : null;
    if (inquiriesRef?.current && targetRef) {
      targetRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [userActivityData, id]);

  if (isLoading) {
    return (
      <S.WrapperNoContentAppliedProjects data-type='noContent'>
        <Spinner />
      </S.WrapperNoContentAppliedProjects>
    );
  }

  if (!userActivityData || userActivityData?.length === 0)
    return (
      <S.WrapperNoContentAppliedProjects data-type='noContent'>
        <NoContent type='inquiries' />
      </S.WrapperNoContentAppliedProjects>
    );

  const myInquiriesData = Array.isArray(userActivityData)
    ? (userActivityData as MyInquiries[])
    : [];

  return (
    <S.container>
      <S.InquiriesContainer>
        <S.InquiriesTableHeadContainer ref={headRef}>
          <S.InquiriesTableHeadWrapper>
            <S.InquiriesTableHeaderNo>No</S.InquiriesTableHeaderNo>
            <S.InquiriesTableHeaderCategory>
              구별
            </S.InquiriesTableHeaderCategory>
            <S.InquiriesTableHeaderTitle>제목</S.InquiriesTableHeaderTitle>
            <S.InquiriesTableHeaderState>상태</S.InquiriesTableHeaderState>
          </S.InquiriesTableHeadWrapper>
          <ContentBorder />
        </S.InquiriesTableHeadContainer>
        <S.InquiriesWrapper>
          {myInquiriesData.map((list, index) => (
            <S.MyInquiriesWrapper
              ref={(el) => (inquiriesRef.current[index] = el)}
              key={`${index}-${list.title}`}
              $headHeight={headHeight}
            >
              <Inquiry list={list} no={myInquiriesData.length - index} />
            </S.MyInquiriesWrapper>
          ))}
        </S.InquiriesWrapper>
      </S.InquiriesContainer>
    </S.container>
  );
}
