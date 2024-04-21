import { Box, styled, Typography } from '@mui/material'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

const ContactPage = () => {
  const RootBox = styled(Box)({
    border: '5px solid white', 
    width: '60vw', 
    margin: '10em auto 0',
    borderRadius: '20px',
    padding: '1em'
  })

  const RootTitle = styled(Typography)({
    flexGrow: 1, 
    fontSize: '6vw', 
    color: 'white', 
    textAlign: 'center', 
    fontFamily: 'system-ui'
  })

  const Paragraph = styled(Typography)({
    flexGrow: 1, 
    fontSize: '1.4vw', 
    color: 'white', 
    textAlign: 'center', 
    fontFamily: 'system-ui',
    marginBottom: '1em'
  })

  const SocialImage = styled('img')({
    width: '20%', 
    margin: '0 6.5%'
  })

  const ImageLayout = styled(Box)({
    margin: '0 auto'
  })

  return (
    <>
    <RootBox>
      <RootTitle>Contact Me</RootTitle>
      <Paragraph>Below are some of my social media platforms, feel fee to contact me through any of them:</Paragraph>
      <ImageLayout>
        <a className='instagram' href='https://www.instagram.com/nathaneil_tamn/' target='_blank'>
          <SocialImage src={instagram} alt='instagram'/>
        </a>
        <a className='linkedin' href='https://www.linkedin.com/in/nathaniel-tan-448870268/' target='_blank'>
          <SocialImage src={linkedin} alt='linkedin'/>
        </a>
        <a className='github' href='https://github.com/NgTaniel' target='_blank'>
          <SocialImage src={github} alt='github'/>
        </a>
      </ImageLayout>
    </RootBox>
    </>
  )
}

export default ContactPage