import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  duration?: number; // in ms
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const timeouts = useRef<Record<string, ReturnType<typeof setTimeout> | undefined>>({});

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    if (timeouts.current[id]) {
      clearTimeout(timeouts.current[id]);
      delete timeouts.current[id];
    }
  }, []);

  const addNotification = useCallback(
    (message: string, type: NotificationType = 'info', duration: number = 5000) => {
      const id = generateId();
      const notification: Notification = { id, message, type, duration };
      setNotifications((prev) => [...prev, notification]);

      if (duration > 0) {
        const timeout = setTimeout(() => {
          removeNotification(id);
        }, duration);
        timeouts.current[id] = timeout;
      }

      return id;
    },
    [removeNotification]
  );

  const clearNotifications = useCallback(() => {
    setNotifications([]);
    Object.values(timeouts.current).forEach(clearTimeout);
    timeouts.current = {};
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(timeouts.current).forEach(clearTimeout);
    };
  }, []);

  // Computed values
  const unreadCount = useMemo(() => notifications.length, [notifications]);
  const hasUnread = useMemo(() => unreadCount > 0, [unreadCount]);

  return {
    notifications,
    addNotification,
    removeNotification,
    clearNotifications,
    unreadCount,
    hasUnread,
  };
}
