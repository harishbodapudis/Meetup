import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const PageHeading = styled.h1`
  color: #334155;
`
export const HedingParaImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const WelcomeMsg = styled.p`
  color: #475569;
  margin-top: 0px;
`
export const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: 0px;
  width: 90px;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`
export const MeetUpImage = styled.img`
  width: 480px;
  height: 280px;
  margin-top: 15px;
`
export const LinkToPage = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`

export const NameHeading = styled.h1`
  color: #2563eb;
  margin-bottom: 0px;
`
export const PageHeadingBox = styled.div`
  font-size: 35px;
  margin-bottom: 0px;
`
export const CourseParagraphBox = styled.div`
  font-size: 25px;
  margin-top: 0px;
`
export const CourseParagraph = styled.p`
  font-size: 25px;
  color: #475569;
  font-weight: bold;
  margin-top: 0px;
`
