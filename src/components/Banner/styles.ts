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
  line-height: 160%;
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

  @media (max-width: 1024px) {
    padding: 5rem 5rem 3rem;

    img {
      width: 344px;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    padding: 5.75rem 2.25rem 3rem;
    text-align: center;

    img {
      display: none;
    }
  }

  @media (max-width: 480px) {
    text-align: left;
  }
`

export const BannerInfo = styled.div`
  width: 36.75rem;

  @media (max-width: 1024px) {
    width: 100%;
  }
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
