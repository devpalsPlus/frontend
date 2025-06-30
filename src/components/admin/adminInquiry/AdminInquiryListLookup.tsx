import React, { useEffect, useState } from 'react';
import type { SearchParamsInquiryKeyType } from './AdminInquiryList';
import * as S from './AdminInquiryListLookup.styled';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'react-router-dom';
import { AdminInquiryChangeSearchParams } from '../../../models/inquiry';
import Modal from '../../common/modal/Modal';
import { useModal } from '../../../hooks/useModal';
import { MODAL_MESSAGE } from '../../../constants/user/modalMessage';

export default function AdminInquiryListLookup() {
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get('userId') || '';
  const startDate = searchParams.get('startDate') || '';
  const endDate = searchParams.get('endDate') || '';
  const nickname = searchParams.get('nickname') || '';
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const [searchFilters, setSearchFilters] = useState<
    Omit<AdminInquiryChangeSearchParams, 'userId'>
  >({
    startDate,
    endDate,
  });

  useEffect(() => {
    const startDate = searchParams.get('startDate') || '';
    const endDate = searchParams.get('endDate') || '';
    setSearchFilters({
      startDate,
      endDate,
    });
  }, [searchParams, setSearchFilters]);

  const handleSubmitChangeParams = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { startDate, endDate } = searchFilters;

    const newParams = new URLSearchParams(searchParams);

    if (startDate && !endDate) {
      return handleModalOpen(MODAL_MESSAGE.endDateEmpty);
    } else if (!startDate && endDate) {
      return handleModalOpen(MODAL_MESSAGE.startDateEmpty);
    } else if (startDate && endDate) {
      newParams.set('startDate', startDate);
      newParams.set('endDate', endDate);
    } else {
      newParams.delete('startDate');
      newParams.delete('endDate');
    }

    setSearchParams(newParams);
  };

  const handleChangeDate = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: SearchParamsInquiryKeyType
  ) => {
    const value = e.currentTarget.value;

    setSearchFilters((prev) => {
      switch (key) {
        case 'startDate': {
          if (prev.endDate !== '' && prev.endDate < value) {
            handleModalOpen(MODAL_MESSAGE.startDateInvalid);
            return prev;
          }
          return { ...prev, startDate: value };
        }
        case 'endDate': {
          if (prev.startDate !== '' && prev.startDate > value) {
            handleModalOpen(MODAL_MESSAGE.endDateInvalid);
            return prev;
          }
          return { ...prev, endDate: value };
        }
        default: {
          return prev;
        }
      }
    });
  };

  const handleClickInit = () => {
    setSearchParams({});
    setSearchFilters({ startDate: '', endDate: '' });
  };

  return (
    <S.LookupContainer>
      <S.LookupWrapper onSubmit={handleSubmitChangeParams}>
        <S.LookupUser
          type='text'
          value={nickname}
          placeholder='닉네임을 클릭하세요.'
          readOnly
        />
        <S.LookupDateWrapper>
          <S.LookupStartDate
            type='date'
            value={searchFilters.startDate}
            onChange={(e) => handleChangeDate(e, 'startDate')}
          />
          <S.LookupJoinDate> ~ </S.LookupJoinDate>
          <S.LookupEndDate
            type='date'
            value={searchFilters.endDate}
            onChange={(e) => handleChangeDate(e, 'endDate')}
          />
        </S.LookupDateWrapper>
        <S.LookupIconWrapper>
          {(userId || startDate || endDate) && (
            <S.IconDefault type='button' onClick={handleClickInit}>
              <XMarkIcon />
            </S.IconDefault>
          )}
          <S.IconSearch type='submit'>
            <MagnifyingGlassIcon />
          </S.IconSearch>
        </S.LookupIconWrapper>
      </S.LookupWrapper>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.LookupContainer>
  );
}
