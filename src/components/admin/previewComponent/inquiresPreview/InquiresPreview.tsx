import React from 'react';
import * as S from './InquiresPreview.styled';
import { useGetAllInquiries } from '../../../../hooks/admin/useGetAllInquiries';
import Avatar from '../../../common/avatar/Avatar';
import { ADMIN_ROUTE } from '../../../../constants/routes';
import { Link } from 'react-router-dom';

const InquiresPreview = () => {
  const { allInquiriesData } = useGetAllInquiries();

  const previewList = allInquiriesData
    ? allInquiriesData.length > 6
      ? allInquiriesData.slice(-4)
      : allInquiriesData
    : [];

  return (
    <S.Container>
      {previewList?.map((inquiry) => (
        <S.Wrapper key={inquiry.id}>
          {/* <Link to={`${ADMIN_ROUTE.}`} */}
          <Avatar image={inquiry.user.img} size='41px' />
          <S.Inquiry to={`${ADMIN_ROUTE.inquiries}/${inquiry.id}`}>
            <S.Category>{inquiry.category}</S.Category>
            <S.Title>{inquiry.title}</S.Title>
            <S.StateArea>
              <S.Date>{inquiry.createdAt}</S.Date>
              <S.Divider>|</S.Divider>
              <S.InquiryState $isCompleted={inquiry.state}>
                {inquiry.state ? '답변 완료' : '답변 대기 중'}
              </S.InquiryState>
            </S.StateArea>
          </S.Inquiry>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default InquiresPreview;
