import { useFormikContext } from "formik";
import { Task } from "../../models/Task";
import { Textarea } from "@nextui-org/react";

export const InputDescription = () => {

    const formik = useFormikContext<Task>();

    return (
        <Textarea
            css={{ width: "100%" }}
            maxRows={Infinity}
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            bordered
            label="Descripción"
            color="default"
        />
    );
};
