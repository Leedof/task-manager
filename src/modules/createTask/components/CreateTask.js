import { useForm } from "react-hook-form";
import { Box, Dialog, Typography } from "@mui/material";
import { CloseBtn } from "../../../UI/CloseBtn";
import { FormInputText } from "../../../components/FormInputText";
import { PrimaryBtn } from "../../../UI/PrimaryBtn";
import { FormDatePicker } from "../../../components/FormDatePicker";
import { FormSelect } from "../../../components/FormSelect/FormSelect";
import { useEffect } from "react";
import { useBoard } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../helpers/validationScheme";
import dayjs from "dayjs";
export const CreateTask = ({ modalOpen, handleModalClose }) => {
  const { board } = useBoard();

  const { control, handleSubmit, reset, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      board: board,
      deadline: dayjs().add(1, "day").startOf("day"),
    },
  });

  const onSubmit = async (values) => {
    const taskData = {
      title: values.title,
      description: values.description,
      deadline: values.deadline.toDate(),
      created: new Date(),
    };
    console.log(taskData);
  };

  useEffect(() => {
    setValue("board", board);
  }, [board, setValue]);

  return (
    <Dialog
      open={modalOpen}
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
              handleModalClose();
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
      </Box>
    </Dialog>
  );
};
