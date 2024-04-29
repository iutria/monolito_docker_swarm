import { Avatar, Button, Container } from "@nextui-org/react"
import { useFormikContext } from "formik";
import { Task } from "../../models/Task";

export const SelectBackgroundImage = () => {

    const formik = useFormikContext<Task>();

    const images = [
        'https://fastly.picsum.photos/id/60/1920/1200.jpg?hmac=fAMNjl4E_sG_WNUjdU39Kald5QAHQMh-_-TsIbbeDNI',
        'https://fastly.picsum.photos/id/61/3264/2448.jpg?hmac=Xi3Kq99U5tueFi0aajgUP0yWAL4xwCHg5ZXGZRLTqyI',
        'https://fastly.picsum.photos/id/76/4912/3264.jpg?hmac=VkFcSa2Rbv0R0ndYnz_FAmw02ON1pPVjuF_iVKbiiV8',
        'https://fastly.picsum.photos/id/88/1280/1707.jpg?hmac=NnkwPVDBTVxHkc4rALB_fyu-OHY2usdm7iRk5El7JC4',
        'https://fastly.picsum.photos/id/98/3264/2176.jpg?hmac=yRaOwMpmio9mwf43lbPEYI_5-WiPWoghJZyOKldQ43U',
        'https://fastly.picsum.photos/id/106/2592/1728.jpg?hmac=E1-3Hac5ffuCVwYwexdHImxbMFRsv83exZ2EhlYxkgY',
        'https://fastly.picsum.photos/id/145/4288/2848.jpg?hmac=UkhcwQUE-vRBFXzDN1trCwWigpm7MXG5Bl5Ji103QG4',
        'https://fastly.picsum.photos/id/155/3264/2176.jpg?hmac=Zgf_oGMJeg18XoKBFmJgp2DgHMRYuorXlDx5wLII9nU',
        'https://fastly.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY',
        'https://fastly.picsum.photos/id/408/2909/1934.jpg?hmac=cOpptC-KVCW51r2wCpytYzuPNuV3a87HUpDYFSS3TVI'
    ]

  return (
    <Container css={{display: 'flex', gap: '5px', margin: '$0', padding: '$0',}}>
        {
            images.map(
                (item, index)=>{
                return <Button 
                onPress={()=>formik.setFieldValue('color', item)}
                flat
                auto
                type='button'
                key={index}
                icon={<Avatar squared src={item} />}
                />
                }
            )
        }
    </Container>
  )
}
