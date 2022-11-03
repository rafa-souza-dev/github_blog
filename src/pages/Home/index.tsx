import {
  HomeContainer,
  HomeContent,
  PostCardContainer,
  PostCardHeader,
  PostCardText,
  PostList,
  ProfileCardContainer,
  ProfileCardContent,
  ProfileInfoBio,
  ProfileInfoContainer,
  ProfileInfoFooter,
  ProfileInfoHeader,
  SearchForm,
  SearchFormHeader,
  SearchFormInput,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { IconInfo } from '../../components/IconInfo'

import github from '../../assets/github.svg'
import { useEffect, useState } from 'react'
import { client } from '../../client/client'
import { getDistanceOfDateToNow } from '../../utils/formatDate'
import { reduceText } from '../../utils/formatString'

interface UserData {
  name: string
  login: string
  company: string
  followers: number
  avatar_url: string
  bio: string
}

interface IssueData {
  id: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [issues, setIssues] = useState<IssueData[]>([])

  async function fetchUserData() {
    await client
      .get('users/rafa-souza-dev')
      .then((res) => {
        const data: UserData = res.data
        setUserData({
          name: data.name,
          login: data.login,
          followers: data.followers,
          company: data.company,
          bio: data.bio,
          avatar_url: data.avatar_url,
        })
      })
      .catch((err) => alert(err))
  }

  async function fetchIssues() {
    await client
    .get('search/issues?q=repo:rafa-souza-dev/test_blog')
    .then(res => {
      const data = res.data
      let items: IssueData[] = data.items
      let issuesAux: IssueData[] = []

      items.map(issue => issuesAux.push({
        id: issue.id,
        title: issue.title,
        body: issue.body,
        created_at: issue.created_at
      }))

      setIssues(issuesAux)
    })
    .catch(err => alert(err))
  }

  useEffect(() => {
    fetchUserData()
    fetchIssues()
  }, [])

  return (
    <HomeContainer>
      <HomeContent>
        <ProfileCardContainer>
          <ProfileCardContent>
            <img src={userData?.avatar_url} alt="Imagem do Dono do Blog" />
            <ProfileInfoContainer>
              <ProfileInfoHeader>
                <strong>{userData?.name}</strong>
                <a
                  target={'_blank'}
                  href={`https://github.com/${userData?.login}`}
                  rel="noreferrer"
                >
                  <p>Github</p>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </ProfileInfoHeader>
              <ProfileInfoBio>{userData?.bio}</ProfileInfoBio>
              <ProfileInfoFooter>
                <IconInfo
                  type="svg"
                  text={userData?.login!}
                  imagePath={github}
                />
                <IconInfo
                  type="fortAwesome"
                  text={userData?.company!}
                  icon={faBuilding}
                  colorImage="#3A536B"
                />
                <IconInfo
                  type="fortAwesome"
                  text={`${userData?.followers} seguidores`}
                  icon={faUserGroup}
                  colorImage="#3A536B"
                />
              </ProfileInfoFooter>
            </ProfileInfoContainer>
          </ProfileCardContent>
        </ProfileCardContainer>
        <SearchForm>
          <SearchFormHeader>
            <strong>Publicações</strong>
            <span>6 publicações</span>
          </SearchFormHeader>
          <SearchFormInput placeholder="Buscar Conteúdo" />
        </SearchForm>
        <PostList>
          {
            issues?.map(issue => (
              <PostCardContainer key={issue.id}>
                <PostCardHeader>
                  <strong>{issue.title}</strong>
                  <span>{getDistanceOfDateToNow(new Date(issue.created_at))}</span>
                </PostCardHeader>
                <PostCardText>
                  {reduceText(issue.body)}
                </PostCardText>
              </PostCardContainer>
            ))
          }
        </PostList>
      </HomeContent>
    </HomeContainer>
  )
}
