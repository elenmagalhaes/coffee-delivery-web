import styled from 'styled-components'

export const CatalogContainer = styled.main`
  padding: 2rem 10rem;
`

export const CatalogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: ${(props) => props.theme.typography.font.secondary};
    font-weight: ${(props) => props.theme.typography.weight['extra-bold']};
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme.color['gray-800']};
  }

  .filter-list {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
  }
`

export const CatalogList = styled.div`
  display: grid;
  margin-top: 3.375rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 3rem;
`

export const CoffeeCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 16rem;
  height: 19.47rem;
  border-radius: 6px 36px;
  padding: 1.25rem;
  background: ${(props) => props.theme.color['gray-100']};

  img {
    width: 7.5rem;
    height: 7.5rem;
    min-width: 7.5rem;
    margin-top: -3rem;
  }

  h3 {
    font-family: ${(props) => props.theme.typography.font.secondary};
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: ${(props) => props.theme.typography.weight['extra-bold']};
    color: ${(props) => props.theme.color['gray-800']};
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme.color['gray-600']};
  }
`

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 0.25rem;
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  .price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
    line-height: 130%;
    color: ${(props) => props.theme.color['gray-800']};

    span {
      font-size: 0.875rem;
    }

    div {
      font-family: ${(props) => props.theme.typography.font.secondary};
      font-weight: ${(props) => props.theme.typography.weight['extra-bold']};
      font-size: 2rem;
      color: ${(props) => props.theme.color['gray-700']};
    }
  }

  .counter-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 0.25rem; */

    border-radius: 6px;
    background: ${(props) => props.theme.color['gray-300']};
    color: ${(props) => props.theme.color['gray-900']};

    .decrease-content {
      cursor: pointer;
      padding: 0.75rem 0.25rem 0.75rem 0.5rem;
    }

    .increase-content {
      cursor: pointer;
      padding: 0.75rem 0.5rem 0.75rem 0.25rem;
    }

    span {
      width: 1.25rem;
      text-align: center;
    }

    svg {
      display: flex;
    }
  }

  .buy-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    a {
      background: ${(props) => props.theme.color['purple-900']};
      border-radius: 6px;
      padding: 0.5rem;

      svg {
        display: flex;
      }
    }
  }
`
