// importing hooks
import {useState} from 'react'

// importing styled components
import {
  MainContainer,
  ContentCard,
  Aligner,
  Title,
  Description,
  Password,
  ErrMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, newPassword] = useState('')
  const [showErr, toggleErr] = useState(true)

  const validatePassword = event => {
    newPassword(event.target.value)
    if (event.target.value.length >= 8) {
      toggleErr(false)
    } else {
      toggleErr(true)
    }
  }

  return (
    <MainContainer>
      <ContentCard>
        <Aligner>
          <Title>Password Validator</Title>
          <Description>
            Check how strong and secure is your password
          </Description>
        </Aligner>
        <Aligner>
          <Password
            type="password"
            name="password"
            onChange={validatePassword}
            value={password}
          />
          {showErr && (
            <ErrMsg>Your password must be at least 8 characters</ErrMsg>
          )}
        </Aligner>
      </ContentCard>
    </MainContainer>
  )
}

export default PasswordValidator
