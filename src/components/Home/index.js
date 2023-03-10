import {Component} from 'react'
import Header from '../Header'
import ReactContext from '../../ReactContext'

import {
  MainContainer,
  PageHeading,
  HedingParaImgBox,
  WelcomeMsg,
  RegisterButton,
  MeetUpImage,
  LinkToPage,
  NameHeading,
  PageHeadingBox,
  CourseParagraphBox,
  CourseParagraph,
} from './styledComponent'

class Home extends Component {
  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {name, course} = value
          console.log(name, 'big baby')
          return (
            <MainContainer>
              <Header />
              <HedingParaImgBox>
                <PageHeadingBox>
                  {name ? (
                    <NameHeading>{`Hello ${name}`}</NameHeading>
                  ) : (
                    <PageHeading>Welcome to Meetup</PageHeading>
                  )}
                </PageHeadingBox>
                <CourseParagraphBox>
                  {course ? (
                    <CourseParagraph>{`Welcome to ${course}`}</CourseParagraph>
                  ) : (
                    <WelcomeMsg>Please register for the topic</WelcomeMsg>
                  )}
                </CourseParagraphBox>
                <LinkToPage to="/register">
                  {!name ? (
                    <RegisterButton type="button" onClick={this.changePage}>
                      Register
                    </RegisterButton>
                  ) : (
                    <></>
                  )}
                </LinkToPage>
                <MeetUpImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HedingParaImgBox>
            </MainContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Home
