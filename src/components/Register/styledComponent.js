import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const RegisterBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: auto;
`
export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 70vh;
`
export const RegisterImg = styled.img`
  width: 400px;
  height: 380px;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 70vh;
  padding: 15px 0px;
`
export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`
export const FormHeading = styled.h1`
  color: #334155;
  font-size: 40px;
`
export const LabelInputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`

export const NameLabel = styled.label`
  color: #7b8794;
  font-weight: bold;
  margin: 5px 0px;
`
export const NameText = styled.input`
  width: 80%;
  padding: 6px 2px;
  outline: none;
`
export const SelectField = styled.select`
  width: 80%;
  padding: 6px 0px;
  outline: none;
`

export const RegisterNowBtn = styled.button`
  background-color: #2563eb;
  border: 0px;
  height: 35px;
  width: 135px;
  color: #ffffff;
  margin: 25px 0px;
  margin-bottom: 2px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
`
export const OptionField = styled.option`
  color: #000000;
`
export const ErrMsg = styled.p`
  color: #ff0b37;
  height: 5px;
  margin-top: 0px;
  font-size: 12px;
`
