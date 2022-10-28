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

interface UserData {
  name: string
  login: string
  company: string
  followers: number
  avatar_url: string
  bio: string
}

export function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)

  async function fetchUserData() {
    await client
      .get('users/rafa-souza-dev')
      .then((res) => {
        const data = res.data
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

  useEffect(() => {
    fetchUserData()
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
          <PostCardContainer>
            <PostCardHeader>
              <strong>JavaScript data types and data structures</strong>
              <span>Há 1 dia</span>
            </PostCardHeader>
            <PostCardText>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in...
            </PostCardText>
          </PostCardContainer>
        </PostList>
      </HomeContent>
    </HomeContainer>
  )
}
