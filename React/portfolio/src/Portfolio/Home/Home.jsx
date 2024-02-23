import { Stack } from "@mui/material"
import NavBar from "./NavBar"
import HomeInfo from './HomeInfo'
const Home = ()=>{
    return(
        <Stack sx={{height:"100vh"}}>
            <NavBar/>
            <HomeInfo/>
        </Stack>
    )
}
export default Home