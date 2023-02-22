import { TagItem } from './styles'

interface TagProps {
  value: string
  backgroundColor?: string
  onFilterList: (value: string) => void
}

export const Tag = ({ value, backgroundColor, onFilterList }: TagProps) => {
  const handleSelectTag = () => {
    onFilterList(value)
  }

  return (
    <TagItem onClick={handleSelectTag} backgroundColor={backgroundColor}>
      {value}
    </TagItem>
  )
}
