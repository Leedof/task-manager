import { Box, Button } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../../hooks";
import { signOut } from "../../../../store/app/thunks";
import { useDispatch } from "react-redux";
//  TEST CODE
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
//  TEST CODE
export const LayoutPage = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  //  TEST CODE
  const addNewUser = async () => {
    await setDoc(doc(db, "users", "test-1"), {
      firstName: "Maksym",
      lastName: "Kushchenko",
      photo: "",
    });
  };

  //  TEST CODE
  return (
    <Box sx={{ fontSize: 14 }}>
      <header>Header</header>
      <div>Sidebar</div>
      <div>Depends on URL section</div>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(signOut());
        }}
      >
        Test
      </Button>
      <Outlet />
      {/* Test code */}
      <Button variant="contained" onClick={addNewUser}>
        Add new user
      </Button>
      {/* Test code */}
    </Box>
  );
};
