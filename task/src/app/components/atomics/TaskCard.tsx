import { Button, Card, Container, Grid, Row, Text } from "@nextui-org/react"
import { Task } from "../../models/Task"
import { FaTrash } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useTask } from "../../states/useTask"

export const TaskCard = ({ item }: { item: Task }) => {
    const navigate = useNavigate();
    const { getTasks } = useTask();

    const url = import.meta.env.VITE_API;

    const deleteTask = async (id: string) => {
        const confDelete = confirm(`¿Quiere eliminar esta tarea ${id}?`)
        if (!confDelete) {
            return;
        }
        try {
            await axios.delete(`${url}/${id}`);
            alert("Eliminado");
            getTasks();
        } catch (error) {
            console.error(error);
        }
    };

    return <Grid xs={6} sm={3}>
        <Card isPressable onPress={() => navigate(`/edit/${item.id}`)}>
            <Card.Body css={{ p: 0 }}>
                <Container css={{
                    width: '100%', height: '140px',
                    background: item.color.includes('http') ? `url(${item.color})` : item.color,
                    backgroundSize: 'cover'
                }}></Container>
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between">
                    <Text b>{item.title}</Text>
                    <Button icon={<FaTrash />} onPress={() => deleteTask(`${item.id}`)} auto color="error" />
                </Row>
            </Card.Footer>
        </Card>
    </Grid>
}
