import { Input } from "@nextui-org/react";
import { useFormikContext } from "formik";
import { Task } from "../../models/Task";

export const InputTitle = () => {
  const formik = useFormikContext<Task>();

  return (
    <>
      <Input
        placeholder="Titulo"
        css={{ width: "100%", padding: '$5', marginBottom: formik.errors.title ? '$10' : "$0" }}
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        underlined
        clearable
        color={formik.errors.title ? "error" : "default"}
        helperText={formik.errors.title}
        status={formik.errors.title ? "error" : "default"}
      />
    </>
  );
};
