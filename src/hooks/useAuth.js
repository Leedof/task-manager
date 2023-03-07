import { useSelector } from "react-redux";

import { selectIsAuth } from "./../store/app/selectors";

export const useAuth = () => {
  const isAuth = useSelector(selectIsAuth);

  return {
    isAuth,
  };
};
