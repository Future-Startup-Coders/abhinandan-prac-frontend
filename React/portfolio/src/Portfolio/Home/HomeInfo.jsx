import { Stack } from "@mui/material"
import image from '../Assets/hh.png'

const HomeInfo = ()=>{
    return(
        <Stack direction='row' sx={{backgroundColor:'#0003', height:'100%'}}>
            <Stack sx={{width:'100%'}}>

            </Stack>
            <Stack sx={{width:'100%'}}>
                <img src={image} alt="" style={{marginTop:'auto',position:'fixed',bottom:0,right:10}}></img>
            </Stack>
        </Stack>
    )
}
export default HomeInfo;