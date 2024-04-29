import { Button, Container } from "@nextui-org/react";
import { PopOverBackground } from "../form/PopOverBackground";
import { FaAngleLeft } from "react-icons/fa";
import { useFormikContext } from "formik";
import { Task } from "../../models/Task";
import { useNavigate } from "react-router-dom";
import { getBackground } from "../../utils/background";

export const Banner = () => {
    const formik = useFormikContext<Task>();
    const navigate = useNavigate();

    return (
        <Container
            css={{
                width: "100%",
                height: "300px",
                background: getBackground(formik.values.color),
                backgroundSize: "cover",
                backgroundPosition: "center",
                justifyContent: "space-between",
                display: "flex",
                padding: "$10",
            }}
        >
            <Button onPress={() => navigate("/")} icon={<FaAngleLeft />} auto />
            <PopOverBackground />
        </Container>
    );
};
