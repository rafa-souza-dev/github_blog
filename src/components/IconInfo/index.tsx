import { IconInfoContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

interface IconInfoProps {
  type: 'fortAwesome' | 'svg'
  icon?: IconDefinition
  imagePath?: string
  colorImage?: string
  text: string
}

export function IconInfo(props: IconInfoProps) {
  const { icon, text, type, imagePath, colorImage } = props

  return (
    <IconInfoContainer>
      {type === 'fortAwesome' ? (
        <FontAwesomeIcon icon={icon!} color={colorImage} />
      ) : (
        <img src={imagePath} alt="" />
      )}
      <p>{text}</p>
    </IconInfoContainer>
  )
}
