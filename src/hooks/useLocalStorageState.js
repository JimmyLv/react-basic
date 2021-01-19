import React from "react";

export function useLocalStorageState(key, initValue = "") {
  const [value, setValue] = React.useState(
    () => window.localStorage.getItem(key) || initValue
  );
  React.useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
