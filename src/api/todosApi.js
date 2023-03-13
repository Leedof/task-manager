import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getTasks: builder.query({
      async queryFn(arg) {
        const { uid, board } = arg;
        try {
          const tasksRef = collection(
            db,
            "users",
            uid,
            "boards",
            board,
            "tasks"
          );
          const querySnapshot = await getDocs(tasksRef);
          let tasks = [];
          querySnapshot?.forEach((doc) => {
            const { title, description, completed, created, deadline } =
              doc.data();
            tasks.push({
              id: doc.id,
              title,
              description,
              completed,
              created: created.seconds,
              deadline: deadline.seconds,
            });
          });

          return { data: tasks };
        } catch (err) {
          return { error: err };
        }
      },
    }),
  }),
});

export const { useGetTasksQuery } = todosApi;
