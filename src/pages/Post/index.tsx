/* eslint-disable react/no-children-prop */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  PostBannerContainer,
  PostBannerContent,
  PostBannerFooter,
  PostBannerHeader,
  PostBannerTitle,
  PostContainer,
  PostContent,
  PostText,
} from './styles'

import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import goback from '../../assets/goback.svg'
import github from '../../assets/github.svg'
import { IconInfo } from '../../components/IconInfo'

import ReactMarkdown from 'react-markdown'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export function Post() {
  const { id } = useParams()
  const navigate = useNavigate()

  function redirectHome() {
    navigate('/')
  }

  // useEffect(() => {
  //   if (id === undefined) redirectHome()
  // }, [])

  const markdown = `**Olá**`

  return (
    <PostContainer>
      <PostContent>
        <PostBannerContainer>
          <PostBannerContent>
            <PostBannerHeader>
              <NavLink to={'/'}>
                <img src={goback} alt="" />
                VOLTAR
              </NavLink>
              <a href="">
                VER NO GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </PostBannerHeader>
            <PostBannerTitle>
              JavaScript data types and data structures
            </PostBannerTitle>
            <PostBannerFooter>
              <IconInfo type="svg" text="rafa-souza-dev" imagePath={github} />
              <IconInfo
                type="fortAwesome"
                text="Há 1 dia"
                icon={faCalendarDay}
                colorImage="#3A536B"
              />
              <IconInfo
                type="fortAwesome"
                text="5 comentários"
                icon={faComment}
                colorImage="#3A536B"
              />
            </PostBannerFooter>
          </PostBannerContent>
        </PostBannerContainer>
        <PostText>
          <ReactMarkdown children={markdown} />
        </PostText>
      </PostContent>
    </PostContainer>
  )
}
