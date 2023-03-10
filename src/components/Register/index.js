import {Component} from 'react'
import Header from '../Header'
import ReactContext from '../../ReactContext'
import {
  RegisterBody,
  ImgBox,
  RegisterImg,
  FormBox,
  OptionField,
  LabelInputBox,
  NameLabel,
  NameText,
  SelectField,
  RegisterNowBtn,
  FormContainer,
  FormHeading,
  RegisterContainer,
  ErrMsg,
} from './styledComponent'

let contextValues = null

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {stdName: '', stdCourse: 'ARTS_AND_CULTURE', errMsg: ''}

  updateNameCourse = e => {
    e.preventDefault()
    const {stdName, stdCourse} = this.state
    const courseText = topicsList.filter(item => item.id === stdCourse)
    console.log(courseText[0], '++++')

    if (stdName.length > 0) {
      contextValues.setName(stdName)
      contextValues.setCourse(courseText[0].displayText)
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errMsg: 'Please enter your name'})
    }
  }

  setStdName = e => {
    this.setState({stdName: e.target.value})
  }

  setStdCourse = e => {
    this.setState({stdCourse: e.target.value})
  }

  render() {
    const {stdName, stdCourse, errMsg} = this.state
    console.log(stdName, stdCourse, errMsg)

    return (
      <ReactContext.Consumer>
        {value => {
          contextValues = value
          const {setName, setCourse} = value

          return (
            <RegisterContainer>
              <Header />
              <RegisterBody>
                <ImgBox>
                  <RegisterImg
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                </ImgBox>
                <FormContainer>
                  <FormHeading>Let us join</FormHeading>
                  <FormBox onSubmit={this.updateNameCourse}>
                    <LabelInputBox>
                      <NameLabel htmlFor="name">NAME</NameLabel>
                      <NameText
                        id="name"
                        placeholder="Your name"
                        value={stdName}
                        onChange={this.setStdName}
                      />
                    </LabelInputBox>
                    <LabelInputBox>
                      <NameLabel htmlFor="topics">TOPICS</NameLabel>
                      <SelectField
                        id="topics"
                        value={stdCourse}
                        onChange={this.setStdCourse}
                      >
                        {topicsList.map(item => (
                          <OptionField key={item.id} value={item.id}>
                            {item.displayText}
                          </OptionField>
                        ))}
                      </SelectField>
                      <RegisterNowBtn type="submit">
                        Register Now
                      </RegisterNowBtn>
                      <ErrMsg>{errMsg}</ErrMsg>
                    </LabelInputBox>
                  </FormBox>
                </FormContainer>
              </RegisterBody>
            </RegisterContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Register
