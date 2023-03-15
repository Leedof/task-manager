import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { db } from "../firebase";
import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Task"],
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
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Task", id })),
              { type: "Task", id: "LIST" },
            ]
          : [{ type: "Task", id: "LIST" }],
    }),
    addTask: builder.mutation({
      async queryFn(arg) {
        const { uid, board, taskData } = arg;
        try {
          await addDoc(
            collection(db, "users", uid, "boards", board, "tasks"),
            taskData
          );
          return { status: "Success" };
        } catch (error) {
          return { err: error };
        }
      },
      invalidatesTags: [{ type: "Task", id: "LIST" }],
    }),
  }),
});

export const { useGetTasksQuery, useAddTaskMutation } = todosApi;
