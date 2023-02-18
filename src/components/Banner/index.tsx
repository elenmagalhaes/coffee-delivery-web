import { BENEFITS_LIST } from './constants'
import {
  BannerSection,
  BannerInfo,
  Heading,
  Paragraph,
  BenefitItem,
  BenefitsContainer,
} from './styles'
import coffeeIllustration from '../../assets/coffee-illustration.svg'

export const Banner = () => {
  return (
    <BannerSection>
      <BannerInfo>
        <Heading>Encontre o café perfeito para qualquer hora do dia</Heading>
        <Paragraph>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Paragraph>
        <BenefitsContainer>
          {BENEFITS_LIST.map((benefit) => {
            return (
              <BenefitItem key={benefit.id} variant={benefit.variant}>
                <span className="benefit-icon">{benefit.icon}</span>
                <span>{benefit.label}</span>
              </BenefitItem>
            )
          })}
        </BenefitsContainer>
      </BannerInfo>
      <img src={coffeeIllustration} alt="Ilustração de um copo de café" />
    </BannerSection>
  )
}
