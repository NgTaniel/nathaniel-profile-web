import { AppBar, Typography, Toolbar } from "@mui/material"
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';


const NavBar = () => {
//   const navigate = useNavigate()
  
  return (
    <>
    <AppBar sx={{width: '100vw', height:'10vh', backgroundColor: 'black', margin: '0'}}>
      <Toolbar>
      {/* <Box> */}
        {/* <div>
          <Button>Hello</Button>
        </div> */}

        <Typography sx={{ flexGrow: 1, fontSize: '4em', textAlign: 'center' }}>
          Nathaniel Tan 
          <MusicNoteOutlinedIcon
            fontSize='large'
            sx={{
                width: '1.5em'
            }}
            />
        </Typography>
        {/* <button  color="inherit" onClick={() => navigate('/')}>Home</button>
        <button  color="error">About Me</button>
        <button  color="error">My Experience</button>
        <button  color="error">Contact Me</button> */}
      {/* </Box> */}
      </Toolbar>
    </AppBar>
    </>
  )
}

export default NavBar