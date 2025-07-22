import { useEffect, useRef, useState } from 'react';
import type { MyInquiries } from '../../../../../../models/activityLog';
import * as S from './Inquiry.styled';
import { My_INQUIRIES_MESSAGE } from '../../../../../../constants/user/customerService';
import ContentBorder from '../../../../../common/contentBorder/ContentBorder';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';

interface InquiryProps {
  list: MyInquiries;
  no: number;
}

interface IsImageOpen {
  isImageOpen: boolean;
  url: string;
}

export default function Inquiry({ list, no }: InquiryProps) {
  const { state } = useLocation();
  const { id } = state || {};
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isImageOpen, setIsImageOpen] = useState<IsImageOpen>({
    isImageOpen: false,
    url: '',
  });
  const answer = list.answer || '';
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (list.id === id) {
      setIsOpen(true);
    }
  }, [list.id, id]);

  return (
    <S.Container ref={divRef}>
      <S.InquiryTitleWrapper
        type='button'
        onClick={() => setIsOpen((prev) => !prev)}
        data-id={list.id}
      >
        <S.InquiryNumber>{no}</S.InquiryNumber>
        <S.InquiryCategory>{`[${list.category}]`}</S.InquiryCategory>
        <S.InquiryTitle>{list.title}</S.InquiryTitle>
        <S.InquiryState>
          <S.InquiryStateSpan $isCompletedAnswer={list.state ? true : false}>
            {list.state ? '답변완료' : '확인중'}
          </S.InquiryStateSpan>
        </S.InquiryState>
      </S.InquiryTitleWrapper>
      {isOpen && (
        <S.InquiryContentWrapper>
          <S.InquiryContent>{list.content}</S.InquiryContent>
          {list.imageUrls.length !== 0 && (
            <S.InquiryImgContainer>
              <S.InquiryImgWrapper>
                {list.imageUrls.map((url) => (
                  <S.ImgWrapper
                    key={`${list.category}-${list.title}-${url}`}
                    onClick={() =>
                      setIsImageOpen({
                        isImageOpen: true,
                        url,
                      })
                    }
                  >
                    <S.InquiryImg src={url} />
                  </S.ImgWrapper>
                ))}
              </S.InquiryImgWrapper>
              <S.MessageWrapper>
                {My_INQUIRIES_MESSAGE.blowUpMessage}
              </S.MessageWrapper>
            </S.InquiryImgContainer>
          )}
          {answer && (
            <S.InquiryAnswerContentContainer>
              <ContentBorder />
              <S.InquiryAnswerContentWrapper>
                <S.InquiryAnswerIconWrapper>
                  <ChevronRightIcon />
                </S.InquiryAnswerIconWrapper>
                <S.InquiryAnswerContent>{answer}</S.InquiryAnswerContent>
              </S.InquiryAnswerContentWrapper>
            </S.InquiryAnswerContentContainer>
          )}
          {isImageOpen.isImageOpen && (
            <S.ModalImgContainer>
              <S.ModalImgWrapper
                onClick={() =>
                  setIsImageOpen({
                    isImageOpen: false,
                    url: '',
                  })
                }
              >
                <S.ModalImgMessageWrapper>
                  {My_INQUIRIES_MESSAGE.isImageOpenMessage}
                </S.ModalImgMessageWrapper>
                <S.ModalImg src={isImageOpen.url} />
              </S.ModalImgWrapper>
            </S.ModalImgContainer>
          )}
        </S.InquiryContentWrapper>
      )}
    </S.Container>
  );
}
