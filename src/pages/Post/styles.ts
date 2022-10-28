import styled from 'styled-components'

export const PostContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;
  padding: 1rem;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostBannerContainer = styled.div`
  height: 10.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  margin-top: -6rem;
`

export const PostBannerContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`

export const PostBannerHeader = styled.header`
  display: flex;
  justify-content: space-between;

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

export const PostBannerTitle = styled.h1`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};

  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
`

export const PostBannerFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 2rem;
`
