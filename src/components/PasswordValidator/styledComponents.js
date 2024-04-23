import styled from 'styled-components'

// Styling main container
export const MainContainer = styled.div`
  background-image: linear-gradient(to bottom, #24263c, #383a4e);
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

// styling content card
export const ContentCard = styled.div`
  background: #475569;
  width: 290px;
  padding: 5vh 3vw;
  border-radius: 13px;

  box-shadow: 0 4px 12px 0 #434451;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;

  @media (min-width: 768px) {
    width: 330px;
  }
`
export const Aligner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

// Styling Heading and Text content
export const Title = styled.h2`
  font-family: 'Roboto';
  color: #ffffff;
  margin-bottom: 7px;
`

export const Description = styled.p`
  font-family: 'Roboto';
  color: #f8fafc;
  font-size: 12px;
  font-weight: 500;
`
export const ErrMsg = styled(Description)`
  color: #ef4444;
  font-size: 9px;
  margin-top: 2px;
  text-align: center;
`

// Styling input Element.
export const Password = styled.input`
  height: 33px;
  width: 95%;

  border: none;
  border-radius: 7px;
  padding-left: 11px;
  background-color: #edeeff;

  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: #383a4e;
  outline: none;
  cursor: pointer;
`
