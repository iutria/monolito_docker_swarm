import { Button, Card, Popover, Spacer } from "@nextui-org/react"
import { LuPaintBucket } from "react-icons/lu"
import { SelectBackgroundColor } from "./SelectBackgroundColor"
import { SelectBackgroundImage } from "./SelectBackgroundImage"

export const PopOverBackground = () => {
  return (
    <Popover disableAnimation>
    <Popover.Trigger>
    <Button icon={<LuPaintBucket />} animated={false} auto color="success" />
    </Popover.Trigger>
    <Popover.Content>
    <Card>
        <Card.Body css={{background: '#EAF4FF', padding: '$5'}}>
        <SelectBackgroundColor />
        <Spacer />
        <SelectBackgroundImage />
        </Card.Body>
    </Card>
    </Popover.Content>
</Popover>
  )
}
