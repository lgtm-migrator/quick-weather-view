import { useState, useCallback, Dispatch, SetStateAction } from 'react';

export function useInput<T>(
  initialValue: T
): [T, (e?: React.ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<typeof initialValue>(initialValue);

  const changer = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, changer, setValue];
}
