//Hooks
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUid, useBoard } from "./../../../hooks";
//helpers
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../helpers/validationScheme";
import dayjs from "dayjs";
//API
import { useAddTaskMutation } from "../../../api/todosApi";
//UI
import { Box, Dialog, Typography } from "@mui/material";
import { CloseBtn } from "../../../UI/CloseBtn";
import { FormInputText } from "../../../components/FormInputText";
import { PrimaryBtn } from "../../../UI/PrimaryBtn";
import { FormDatePicker } from "../../../components/FormDatePicker";
import { FormSelect } from "../../../components/FormSelect/FormSelect";
import { FormError } from "../../../components/FormError";

export const CreateTask = ({ modalCreateTask, setModalCreateTask }) => {
  const handlerCloseModalCreateTask = () => {
    setModalCreateTask(false);
  };
  //Get current location data
  const uid = useUid();
  const { board } = useBoard();
  const [addTask, result] = useAddTaskMutation();

  const { control, handleSubmit, reset, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      board: board,
      deadline: dayjs().add(1, "day").startOf("day").add(1, "second"),
    },
  });

  const onSubmit = async (values) => {
    //Prepare data to fetch
    const taskData = {
      title: values.title,
      description: values.description,
      deadline: values.deadline.toDate(),
      created: new Date(),
    };
    const currentBoard = values.board.toLowerCase();
    //fetch
    await addTask({ uid, board: currentBoard, taskData });

    reset({
      title: "",
      desctiption: "",
    });
    result.reset();
    handlerCloseModalCreateTask();
  };

  useEffect(() => {
    setValue("board", board);
  }, [board, setValue]);

  return (
    <Dialog
      open={modalCreateTask}
      PaperProps={{ sx: { width: { xs: "90%" }, maxWidth: "900px" } }}
    >
      <Box component="form" sx={{ p: 2 }} onSubmit={handleSubmit(onSubmit)}>
        {/* Form Header */}
        <Box sx={{ display: "flex", mb: 2.5 }}>
          <Typography
            component="span"
            sx={(theme) => ({
              color: theme.palette.primary.main,
              fontSize: theme.typography.pxToRem(24),
              fontWeight: 700,
              lineHeight: 1.35,
              letterSpacing: "0.02em",
              display: "flex",
              alignItems: "center",
              flex: "1 1 auto",
            })}
          >
            Create new task
          </Typography>
          <CloseBtn
            size="large"
            color="error"
            sx={{ p: 1, flex: "0 0 44px" }}
            onClick={() => {
              handlerCloseModalCreateTask();
              reset({
                title: "",
                desctiption: "",
              });
            }}
          />
        </Box>
        {/* Form Fields */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "column-reverse", sm: "row" },
            }}
          >
            <FormInputText name="title" control={control} label="Title" />
            <FormSelect
              name="board"
              control={control}
              label="Board"
              options={["Home", "Health", "Business", "Education"]}
              sx={{ width: "200px" }}
            />
          </Box>
          <FormInputText
            label="Description"
            name="description"
            control={control}
            multiline
            rows={4}
          />
          <Box>
            <Typography>Deadline</Typography>
            <FormDatePicker name="deadline" control={control} />
          </Box>
        </Box>
        {/* Form Actions */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <PrimaryBtn variant="contained" type="submit">
            Save
          </PrimaryBtn>
        </Box>
        <FormError
          isSubmitting={result.isLoading}
          isSubmitSuccessful={result.isSuccess}
          error={result.isError && "Ops, error :("}
        />
      </Box>
      <button
        onClick={() => {
          result.reset();
        }}
      >
        reset
      </button>
    </Dialog>
  );
};
