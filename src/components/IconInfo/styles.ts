import styled from 'styled-components'

export const IconInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 1rem;
    height: 1rem;
  }

  p {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
