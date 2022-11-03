import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;
  padding: 1rem;
`

export const HomeContent = styled.main`
  display: flex;
  flex-direction: column;
`

export const ProfileCardContainer = styled.div`
  height: 13.25rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  margin-top: -6.5rem;
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

  a:hover {
    text-decoration: underline;
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

export const SearchForm = styled.form`
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const SearchFormHeader = styled.header`
  display: flex;
  justify-content: space-between;

  strong {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`

export const SearchFormInput = styled.input`
  width: 100%;
  height: 3.125rem;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  padding: 0.75rem 1rem;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.blue};
  }
`

export const PostList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 702px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme['base-post']};

  &:hover {
    border: 1px solid ${(props) => props.theme['base-label']};
    cursor: pointer;
  }

  @media (max-width: 702px) {
    width: 100%;
  }
`

export const PostCardHeader = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  strong {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    flex-shrink: 0;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostCardText = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  text-align: justify;
  color: ${(props) => props.theme['base-text']};
`
