import { useCallback, useState } from 'react';
import dayjs from 'dayjs';

const canUseLocalStorage = () => window.localStorage != null;

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  expiry?: number
): [T, (s: T) => void] {
  const [storedValue, setStoredValue] = useState(readValue<T>(key) ?? initialValue);

  const setStateWithCache = useCallback(
    (newState: T) => {
      setStoredValue(newState);
      setLocalStorageData(key, newState, expiry ? dayjs().add(expiry, 'second') : undefined);
    },
    [key, expiry]
  );

  return [storedValue, setStateWithCache];
}

function setLocalStorageData<T>(key: string, value: T, expiry?: dayjs.Dayjs | undefined) {
  if (!canUseLocalStorage) {
    console.error('localStorage를 지원하지 않아요.');
    return;
  }

  const data = {
    value,
    ...(() => (expiry ? { expiry: expiry.toISOString() } : {}))(),
  };

  return window.localStorage.setItem(key, JSON.stringify(data));
}

function readValue<T>(key: string): T | null {
  if (!canUseLocalStorage) {
    console.error('localStorage를 지원하지 않아요.');
    return null;
  }

  const rawData = window.localStorage.getItem(key);
  if (rawData == null) {
    return null;
  }

  const data = JSON.parse(rawData);

  if (data.expiry) {
    const now = dayjs();
    const expiry = dayjs(data.expiry);
    return now.isBefore(expiry) ? data.value : null;
  } else {
    return data.value;
  }
}
