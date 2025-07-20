import React, { createContext } from 'react';
import { useNotifications, type Notification, type NotificationType } from '../hooks/useNotifications';

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (message: string, type?: NotificationType, duration?: number) => string;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
  unreadCount: number;
  hasUnread: boolean;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    notifications,
    addNotification,
    removeNotification,
    clearNotifications,
    unreadCount,
    hasUnread,
  } = useNotifications();

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification, clearNotifications, unreadCount, hasUnread }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

