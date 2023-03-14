import { useSelector } from "react-redux";
import { selectUid } from "../store";

export const useUid = () => {
  const uid = useSelector(selectUid);
  return uid;
};
