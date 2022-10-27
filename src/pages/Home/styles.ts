import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;
  padding: 0 1rem;
`

export const HomeContent = styled.main`
  display: flex;
  flex-direction: column;
`

export const ProfileCardContainer = styled.div`
  height: 13.25rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  margin-top: -5.3125rem;
  padding: 2rem 2.5rem;
`

export const ProfileCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ProfileInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;

  strong {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }
`

export const ProfileInfoBio = styled.p`
  margin: 0.5rem 0 1.5rem 0;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  text-align: justify;

  color: ${(props) => props.theme['base-text']};
`

export const ProfileInfoFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`
