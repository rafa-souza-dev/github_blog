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

export function Post() {
  const markdown = `**Olá**`

  return (
    <PostContainer>
      <PostContent>
        <PostBannerContainer>
          <PostBannerContent>
            <PostBannerHeader>
              <a href="">
                <img src={goback} alt="" />
                VOLTAR
              </a>
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
