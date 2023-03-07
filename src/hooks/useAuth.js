import { useSelector } from "react-redux";

import { selectIsAuth } from "./../store";

export const useAuth = () => {
  const isAuth = useSelector(selectIsAuth);

  return {
    isAuth,
  };
};
