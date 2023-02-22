import styled from 'styled-components'

export const CatalogContainer = styled.main`
  padding: 2rem 10rem;

  @media (max-width: 768px) {
    padding: 2rem 2.25rem;
  }
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

  .filter-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const CatalogList = styled.div`
  display: grid;
  margin-top: 3.375rem;
  grid-template-columns: repeat(auto-fit, minmax(15.313rem, 1fr));
  grid-template-rows: auto;
  grid-row-gap: 3rem;
  grid-column-gap: 2rem;

  @media (max-width: 1024px) {
    width: 100%;
  }
`
