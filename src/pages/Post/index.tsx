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
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { client } from '../../client/client'
import { getDistanceOfDateToNow } from '../../utils/formatDate'

interface PostData {
  title: string
  username: string
  created_at: string
  comments: number
  html_url: string
  body: string
}

export function Post() {
  const [postData, setPostData] = useState<PostData>({
    body: '',
    comments: 0,
    created_at: '2022-11-04T18:28:15.849Z',
    html_url: '',
    title: '',
    username: '',
  })

  const { id } = useParams()

  async function getPostById(id: number) {
    await client.get(`repos/rafa-souza-dev/test_blog/issues/${id}`)
      .then(res => {
        const username: string = res.data.user.login
        const data: PostData = res.data

        setPostData({
          username,
          body: data.body,
          comments: data.comments,
          created_at: data.created_at,
          html_url: data.html_url,
          title: data.title
        })
      })
      .catch(err => alert(err))
  }

  useEffect(() => {
    getPostById(Number(id))
  }, [])

  const markdown = postData.body
  const date = getDistanceOfDateToNow(new Date(postData.created_at))

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
              <a href={postData.html_url} target={'_blank'}>
                VER NO GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </PostBannerHeader>
            <PostBannerTitle>
              {postData.title}
            </PostBannerTitle>
            <PostBannerFooter>
              <IconInfo type="svg" text="rafa-souza-dev" imagePath={github} />
              <IconInfo
                type="fortAwesome"
                text={date}
                icon={faCalendarDay}
                colorImage="#3A536B"
              />
              <IconInfo
                type="fortAwesome"
                text={`${postData.comments} comentários`}
                icon={faComment}
                colorImage="#3A536B"
              />
            </PostBannerFooter>
          </PostBannerContent>
        </PostBannerContainer>
        <PostText>
          <ReactMarkdown>{postData.body}</ReactMarkdown>
        </PostText>
      </PostContent>
    </PostContainer>
  )
}
