import { TagItem } from './styles'

interface TagProps {
  value: string
  backgroundColor?: string
}

export const Tag = ({ value, backgroundColor }: TagProps) => {
  return <TagItem backgroundColor={backgroundColor}>{value}</TagItem>
}
