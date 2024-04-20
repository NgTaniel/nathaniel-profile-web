// import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Button, styled } from '@mui/material'
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';

const RootPage = () => {
  const navigate = useNavigate()

  const SpacedButton = styled(Button)({
    margin: '0 2em',
    backgroundColor: '#b2b2b2',
    color: 'black'
  })
  
  return (
    <>
    <div style={{marginTop: '10vh'}}>
      <Typography sx={{ flexGrow: 1, fontSize: '3em', color: 'white' }}>
          Nathaniel Tan 
          <MusicNoteOutlinedIcon
            fontSize='large'
            sx={{
                width: '1.5em'
            }}
            />
        </Typography>
        <SpacedButton variant='contained' color='inherit' onClick={() => navigate('/')}>Home</SpacedButton>
        <SpacedButton variant='contained' color='inherit' onClick={() => navigate('/about')}>About Me</SpacedButton>
        <SpacedButton variant='contained' color='inherit' >My Experience</SpacedButton>
        <SpacedButton variant='contained' color='inherit' >Contact Me</SpacedButton>
    </div>
    </>
  )
}

export default RootPage;