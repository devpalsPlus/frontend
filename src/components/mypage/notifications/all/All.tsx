import { Link, useOutletContext } from 'react-router-dom';
import useAlarmList from '../../../../hooks/useAlarmList';
import NoContent from '../../../common/noContent/NoContent';
import * as S from './All.styled';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useAlarmDelete } from '../../../../hooks/useAlarmDelete';
import { useAlarmPatch } from '../../../../hooks/useAlarmPatch';
import Spinner from '../../Spinner';

export default function All() {
  const { alarmListData, isLoading } = useAlarmList();
  const { filterId }: { filterId: number } = useOutletContext();
  const { mutate: deleteAlarm } = useAlarmDelete();
  const { mutate: patchAlarm } = useAlarmPatch();

  const linkUrl = (id: number, filter: number) => {
    switch (filter) {
      case 1:
      case 3:
        return `/project-detail/${id}`;
      case 2:
        return `/manage/${id}`;
      default:
        return `/mypage/notification`;
    }
  };

  if (isLoading) {
    return <Spinner size='50px' color='#3e5879;' />;
  }

  if (!alarmListData || alarmListData.length === 0) {
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
              <Link
                to={linkUrl(list.routingId, list.alarmFilterId)}
                onClick={() => patchAlarm(list.id)}
              >
                <S.SpanNotification $enabled={list.enabled}>
                  {list.content}
                </S.SpanNotification>
              </Link>
              {list.alarmFilterId !== 4 && (
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
