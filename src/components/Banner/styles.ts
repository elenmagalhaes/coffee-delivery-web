import styled from 'styled-components'
import backgroundImage from '../../assets/banner-background.svg'

const BACKGROUND_COLORS_ITEM = {
  yellowDark: 'yellow-900',
  gray: 'gray-700',
  yellow: 'yellow-500',
  purple: 'purple-500',
} as const

interface BenefitItemProps {
  variant: keyof typeof BACKGROUND_COLORS_ITEM
}

export const Heading = styled.h1`
  font-family: ${(props) => props.theme.typography.font.secondary};
  font-weight: ${(props) => props.theme.typography.weight['extra-bold']};
  font-size: 3rem;
  line-height: 130%;
  color: ${(props) => props.theme.color['gray-900']};
`

export const Paragraph = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme.color['gray-800']};
`

export const BannerSection = styled.section`
  background-image: url(${backgroundImage});
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.75rem 10rem;
`

export const BannerInfo = styled.div`
  width: 36.75rem;
`

export const BenefitsContainer = styled.div`
  display: grid;
  margin-top: 4.125rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 1.25rem;
`

export const BenefitItem = styled.div<BenefitItemProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  span:first-child {
    padding: 0.5rem;
    height: 2rem;
    width: 2rem;
    min-width: 2rem;
    border-radius: 50%;
    background: ${(props) =>
      props.theme.color[BACKGROUND_COLORS_ITEM[props.variant]]};
  }
`
