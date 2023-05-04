import { Dispatch, SetStateAction, useCallback, useState } from "react";

export default function useToggle(
  initialState: boolean = false
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback((): void => setState((state) => !state), []);
  return [state, toggle, setState];
}
