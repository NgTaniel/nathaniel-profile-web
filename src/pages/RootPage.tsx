import { Typography, styled, Box } from '@mui/material'
import dragon from '../images/dragon.jpg'

const RootPage = () => {

  const RootBox = styled(Box)({
    border: '5px solid white', 
    width: '60vw', 
    margin: '10em auto 0',
    borderRadius: '20px',
    padding: '0 1em'
  })

  const RootTitle = styled(Typography)({
    flexGrow: 1, 
    fontSize: '6vw', 
    color: 'white', 
    textAlign: 'center', 
    fontFamily: 'system-ui'
  })

  const RootText = styled(Typography)({
    flexGrow: 1, 
    fontSize: '3vw', 
    color: 'white', 
    textAlign: 'center', 
    fontFamily: 'system-ui',
    marginBottom: '0.4em'
  })

  const HorizontalLine = styled('hr')({
    width: '90%'
  })

  return (
    <>
    <RootBox>
      <RootTitle>
        Nathaniel Tan 
      </RootTitle>
      <HorizontalLine/>
      <img src={dragon} alt='dragon' style={{ width: '30%', height: '30%', objectFit: 'cover', borderRadius: '50%', margin: '2em auto', display: 'block' }}/>
      <HorizontalLine/>
      <RootText>
        Computer Science Student
      </RootText>

    </RootBox>
    </>
  )
}

export default RootPage;