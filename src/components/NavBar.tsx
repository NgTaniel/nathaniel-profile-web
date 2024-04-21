import { AppBar, Typography, Toolbar, Button, styled } from "@mui/material"
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()

  const NavBar = styled(AppBar)({
    width: '100vw', 
    height:'6.6vh', 
    backgroundColor: 'black', 
    margin: '0'
  })

  const SpacedButton = styled(Button)({
    margin: '0 0.5em',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '1.75vw',
    padding: '0 0.1em',
    fontFamily: 'system-ui'
  })
  
  return (
    <>
    <NavBar>
      <Toolbar>
        <Typography sx={{ flexGrow: 1, fontSize: '1.35em', marginLeft: '1em' }}>
          Nathaniel Tan 
          <MusicNoteOutlinedIcon
            sx={{
              fontSize: '2em',
              marginLeft: '0.1em',
              position: 'relative',
              top: '0.2em'
            }}
            />
        </Typography>
        <SpacedButton variant='contained' color='success' onClick={() => navigate('/')}>Home</SpacedButton>
        <SpacedButton variant='contained' color='success' onClick={() => navigate('/about')}>About Me</SpacedButton>
        <SpacedButton variant='contained' color='success' onClick={() => navigate('/experience')}>Experience</SpacedButton>
        <SpacedButton variant='contained' color='success' onClick={() => navigate('/contact')}>Contact Me</SpacedButton>
      </Toolbar>
    </NavBar>
    </>
  )
}

export default NavBar