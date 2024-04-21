import { Box, Typography, styled } from '@mui/material'

const ExperiencePage = () => {
    
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

  const Paragraph = styled(Typography)({
    flexGrow: 1, 
    fontSize: '1.4vw', 
    color: 'white', 
    textAlign: 'center', 
    fontFamily: 'system-ui',
    marginBottom: '1em'
  })

  return (
    <>
      <RootBox>
        <RootTitle>
          Experience
        </RootTitle>
        <Paragraph>
          Some of my main and past experiences involved tutoring mathematics at different tutor centres, where my motivation for this was to maintain my current mathematical understanding and to improve
          my communication skills, which I continue to do.
        </Paragraph>
        <Paragraph>
          Below are some of my current and recent experiences and languages that I learnt in my computer science journey:
          <ul>
            <li>C: Began Introductory programming, and learnt about arrays, linked lists, binary trees, graphs, bitwise and file operations</li><br/>
            <li>MIPS: Focused mainly on translating C code into assembly language</li><br/>
            <li>
              JavaScript: Learnt about JS syntax and its differences with C, used many frameworks from JS to build assignments and projects
              <br/>
              Some frameworks learnt include express.js, to develop a backend server and make HTTP requests through an API. React.js to build frontends themselves or for a provided backend to work on
            </li><br/>
            <li>TypeScript: The type-safe counterpart of JS (which is dynamically typed), which I also use for similar purposes mentioned in my journey in JavaScript</li><br/>
            <li>Java: Studied Object Oriented Programming and Design patterns used to refactor provided Java code to improve its overall design, as well as introductory syntax and exercises</li><br/>
            <li>HTML5: Before developing React.js based projects, I began my journey using HTML to familiarise myself with the syntax and element tags used</li><br/>
            <li>
              CSS3: Simultaneously worked with CSS3 and HTML5, involves learning to style and layout HTML and React elements. Variations of CSS that I learnt include universal CSS, CSS modules and
              styled components, as well as Material/Mantine UI (MUI) 
            </li>
          </ul>
        </Paragraph>
      </RootBox>
    </>
  )
}

export default ExperiencePage