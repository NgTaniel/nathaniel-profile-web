import { Box, Button, MobileStepper, Paper, Typography, styled } from '@mui/material'
import { useState } from 'react'
import jewel from '../images/jewel.jpg'
import marina from '../images/marina.jpg'
import plane from '../images/planeview.jpg'
import mountain from '../images/mountain.jpg'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

const SlideSteps = [
  {
    label: 'Changi Airport Jewel',
    image: jewel
  }, 
  {
    label: 'Stormy Day at Marina Bay Sands',
    image: marina
  },
  {
    label: 'Plane view outside Batam',
    image: plane
  },
  {
    label: 'Gunung Jempol (Thumb hill)',
    image: mountain
  }
]

const AboutPage = () => {
  const [step, setStep] = useState(0);

  const maxSteps = SlideSteps.length

  const handleNextSlide = () => {
    setStep((previous) => previous + 1);
  }

  const handlePreviousSlide = () => {
    setStep((previous) => previous - 1);
  }

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

  const HobbyText = styled(Typography)({
    flexGrow: 1, 
    fontSize: '3.5vw', 
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

  const SlidePaper = styled(Paper)({
    display: 'flex',
    alignItems: 'center',
    height: '6vh',
    pl: 2,
    bgcolor: 'background.default',
  })

  const SlideBox = styled(Box)({
    width: '40vw', 
    flexGrow: 1, 
    display: 'block', 
    margin: '1em auto'
  })

  const ImageBox = styled(Box)({
    height: '45vw',
    width: '100%'
  })

  const ImageDisplay = styled('img')({
    width: '100%', 
    height: '100%', 
    objectFit: 'cover'
  })

  return (
    <>
    <RootBox>
      <RootTitle>
        About Me
      </RootTitle>
      <Paragraph>
        I am a 3rd year UNSW undergraduate student majoring in computer science, where I have learnt many aspects and fields such as introductory programming, frontend and backend development
        as well as undertaking tertiary math courses following my high school completion.
      </Paragraph>
      <Paragraph>
        During my ongoing studies, I have developed an interest in project development, which lead me to explore opportunities that focus on frontend, backend or full-stack development. As I am continuing my studies
        and search for prospective opportunities, I take the time to develop projects based off different motivations such as my current profile page, where my inspiration came from a profile page that I made in HTML 
        for an opportunity to be introduced and learn React. 
      </Paragraph>
      <Paragraph>
        My goal with my current website (here) is use my ongoing experiences to improve and soon to become comfortable with learning these languages and frameworks before intending to undertake a full-time opportunity 
      </Paragraph>
      <br/>
      <HobbyText>
        Other Hobbies
      </HobbyText>
      <Paragraph>
        Whenever I have spare time or not developing any projects and self-learning, my other hobbies involve finding time to play and perform some piano pop covers, as I have learnt music for 13 years before 
        completing my certificate of performance.
      </Paragraph>
      <Paragraph>
        Sometimes whenever I travel on vacation, I engage myself in photography to capture and store memories of my trip as well as to practice my skills as a pasttime. 
      </Paragraph>
      <Paragraph>
        Below is a slide of photos from my trip overseas:
      </Paragraph>

      <SlideBox>
        <SlidePaper>
          <Typography sx={{marginLeft: '1em', fontSize: '1.3em'}}>{SlideSteps[step].label}</Typography>
        </SlidePaper>
        <ImageBox>
          <ImageDisplay src={SlideSteps[step].image} alt={SlideSteps[step].label} />
        </ImageBox>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={step}
          nextButton={
            <Button
              size="small"
              onClick={handleNextSlide}
              disabled={step === maxSteps - 1}
            >
              <KeyboardArrowRight /> 
            </Button>
          }
          backButton={
            <Button size="small" onClick={handlePreviousSlide} disabled={step === 0}>
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </SlideBox>
    </RootBox>
    </>
  )
}

export default AboutPage