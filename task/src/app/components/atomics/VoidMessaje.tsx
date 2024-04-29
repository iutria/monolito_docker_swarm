import { Container, Image, Text } from "@nextui-org/react"
import image from '../../../assets/voidImage.jpg'

export const VoidMessaje = () => {
    return <Container css={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '$0',
        padding: '$0',
        flexDirection: 'column'
    }}>
        <Image
            width={320}
            height={180}
            src={image}
            alt="Default Image"
            objectFit="cover"
        />
        <Text h2>No se han encontrado tareas</Text>
    </Container>
}
