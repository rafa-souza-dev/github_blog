import {
  HomeContainer,
  HomeContent,
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

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <ProfileCardContainer>
          <ProfileCardContent>
            <img
              src="https://github.com/rafa-souza-dev.png"
              alt="Imagem do Dono do Blog"
            />
            <ProfileInfoContainer>
              <ProfileInfoHeader>
                <strong>Rafael Souza</strong>
                <a href="">
                  <p>Github</p>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </ProfileInfoHeader>
              <ProfileInfoBio>
                Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
                viverra massa quam dignissim aenean malesuada suscipit. Nunc,
                volutpat pulvinar vel mass.
              </ProfileInfoBio>
              <ProfileInfoFooter>
                <IconInfo type="svg" text="rafa-souza-dev" imagePath={github} />
                <IconInfo
                  type="fortAwesome"
                  text="Flipon"
                  icon={faBuilding}
                  colorImage="#3A536B"
                />
                <IconInfo
                  type="fortAwesome"
                  text="32 seguidores"
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
      </HomeContent>
    </HomeContainer>
  )
}
