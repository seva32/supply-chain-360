import { useEffect, useRef } from 'react';
import { Button, notification } from 'antd';
import CloseIcon from '@/assets/close.svg?react';
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';

import './Notification.scss';

export const notificationType = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

const AccessibleNotification = ({ message, description, duration, type }) => {
  const closeButtonRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    if (notificationRef.current) {
      notificationRef.current.focus();
    }

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        notification.destroy();
      }
    };

    setTimeout(
      () => {
        notification.destroy();
      },
      duration && duration > 5 ? duration * 1000 : 5000,
    );

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [duration]);

  const Icon =
    type === notificationType.SUCCESS ? CheckCircleFilled : CloseCircleFilled;
  const iconColor = type === notificationType.SUCCESS ? '#26803b' : '#a9270a';

  return (
    <div
      ref={notificationRef}
      role='alert'
      aria-live='assertive'
      aria-atomic='true'
      className='a11y-notification'
    >
      <div className='a11y-notification-message'>
        {type && (
          <Icon
            style={{
              fontSize: '16px',
              color: iconColor,
              paddingRight: '14px',
            }}
          />
        )}
        {message}
      </div>
      {description && (
        <div className='a11y-notification-description'>{description}</div>
      )}
      <div className='a11y-notification-close-button'>
        <Button
          ref={closeButtonRef}
          onClick={() => notification.destroy()}
          aria-label='Close notification'
          type='text'
        >
          <CloseIcon style={{ width: '12px' }} />
        </Button>
      </div>
    </div>
  );
};

/**
 * Displays an accessible notification.
 *
 * @param {Object} param0 - The parameters for the notification.
 * @param {string} param0.message - The main text message of the notification.
 * @param {string} param0.description - A detailed description of the notification.
 * @param {number} param0.duration - The duration the notification should be visible, in seconds. Must be greater than 5.
 * @param {string} param0.type - The type of notification, should use the `notificationType` constant (e.g., 'success', 'error').
 */
export const showNotification = ({ message, description, duration, type }) => {
  notification.open({
    message: null,
    description: (
      <AccessibleNotification
        message={message}
        description={description}
        duration={duration}
        type={type}
      />
    ),
    duration: 0, // prevent auto dismiss
    className: 'a11y-notification',
  });
};
