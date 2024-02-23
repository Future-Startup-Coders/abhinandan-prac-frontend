import { Stack ,Button} from "@mui/material"


const NavBar = ()=>{
    return(
        <Stack direction='row' alignItems='center' justifyContent="space-between" sx={{height:'10vh',pl:2,pr:2}}>
            <Stack>
                <Button sx={{fontSize:20}} variant="text">ANSHU</Button>
            </Stack>
            <Stack spacing={1} direction='row'>
                <Button variant="outlined">Home</Button>
                <Button variant="outlined">About</Button>
                <Button variant="outlined">Skills</Button>
                <Button variant="outlined">Contact</Button>
            </Stack>
        </Stack>
    )
}
export default NavBar