import { Button, Container } from "@nextui-org/react";
import { useFormikContext } from "formik";
import { Task } from "../../models/Task";

export const SelectBackgroundColor = () => {
    const formik = useFormikContext<Task>();

    const colors = [
        "#1abc9c",
        "#16a085",
        "#f1c40f",
        "#e67e22",
        "#3498db",
        "#9b59b6",
        "#ecf0f1",
        "#2c3e50",
        "#34495e",
        "#d35400",
    ];

    return (
        <Container
            css={{ display: "flex", gap: "5px", margin: "$0", padding: "$0" }}
        >
            {colors.map((item, index) => {
                return (
                    <Button
                        onPress={() => formik.setFieldValue("color", item)}
                        flat
                        css={{ padding: "$0" }}
                        auto
                        type="button"
                        key={index}
                    >
                        <Container css={{ margin: '$0', padding: '$0', width: '40px', height: '50px', background: item }} />
                    </Button>
                );
            })}
        </Container>
    );
};
