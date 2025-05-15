import { Link, useOutletContext } from 'react-router-dom';
import * as S from './All.styled';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Spinner from '../../Spinner';
import { useAlarmDelete } from '../../../../../hooks/user/useAlarmDelete';
import { useAlarmPatch } from '../../../../../hooks/user/useAlarmPatch';
import useAlarmList from '../../../../../hooks/user/useAlarmList';
import NoContent from '../../../../common/noContent/NoContent';

export default function All() {
  const { alarmListData, isLoading } = useAlarmList();
  const { filterId }: { filterId: number } = useOutletContext();
  const { mutate: deleteAlarm } = useAlarmDelete();
  const { mutate: patchAlarm } = useAlarmPatch();

  const linkUrl = (id: number, filter: number, replier = 0) => {
    // 문의, 신고 답변시 추후 수정
    if (filter === 1 || filter === 3) {
      if (replier === 3) {
        return `/activity-log/inquiries`;
      } else {
        return `/project-detail/${id}`;
      }
    } else if (filter === 2) {
      return `/manage/${id}`;
    } else {
      return `/mypage/notification`;
    }
  };

  if (isLoading) {
    return <Spinner size='50px' color='#3e5879' />;
  }

  const filterLength = alarmListData?.filter((list) => {
    if (filterId === 0) {
      return true;
    } else if (list.alarmFilterId === filterId) {
      return true;
    }
    return false;
  }).length;

  if (!alarmListData || alarmListData.length === 0 || filterLength === 0) {
    return (
      <S.WrapperNoContent>
        <NoContent type='notification' />
      </S.WrapperNoContent>
    );
  }

  return (
    <S.container>
      <S.WrapperNotifications>
        {alarmListData
          .filter((list) => {
            if (filterId === 0) {
              return true;
            } else if (list.alarmFilterId === filterId) {
              return true;
            }
            return false;
          })
          .map((list) => (
            <S.WrapperNotification $enabled={list.enabled} key={list.id}>
              {/* 신고하기 알림 구별 */}
              {list.alarmFilterId !== 5 ? (
                <Link
                  to={linkUrl(list.routingId, list.alarmFilterId, list.replier)}
                  onClick={() => patchAlarm(list.id)}
                >
                  <S.SpanNotification
                    $warn={list.alarmFilterId === 5}
                    $enabled={list.enabled}
                  >
                    {list.content}
                  </S.SpanNotification>
                </Link>
              ) : (
                <S.SpanNotification
                  $warn={list.alarmFilterId === 5}
                  $enabled={list.enabled}
                >
                  {list.content}
                </S.SpanNotification>
              )}
              {list.alarmFilterId !== 5 && (
                <S.XButtonNotification
                  onClick={() => deleteAlarm(list.id)}
                  $enabled={list.enabled}
                >
                  <XMarkIcon />
                </S.XButtonNotification>
              )}
            </S.WrapperNotification>
          ))}
      </S.WrapperNotifications>
    </S.container>
  );
}
