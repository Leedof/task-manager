import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { boards } from "../constants/defaultBoards";

export const setUserDB = async (uid, email) => {
  try {
    // Create doc for USER
    await setDoc(doc(db, "users", uid), {
      email: email,
      firstName: "Name",
      lastName: "Surname",
    });
    // Сreate collection Boards and add 'home' board by default
    for (const board of boards) {
      await setDoc(doc(db, "users", uid, "boards", board), {
        totalCount: board === "home" ? 1 : 0,
      });
    }

    // Create example task in 'home' board
    await setDoc(doc(db, "users", uid, "boards", "home", "tasks", "example"), {
      title: "Create new task today",
      description: "Create new task today!",
      completed: false,
      deadline: new Date(Date.now() + 1000 * 60 * 60 * 24),
    });
  } catch (error) {
    console.error(error);
  }
};
