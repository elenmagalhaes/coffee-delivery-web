
import * as S from './styles';

type BrandColor = 'yellow' | 'yellowDark' | 'yellowLight' | 'purple' | 'purpleDark' | 'purpleLight';
type BaseColor = 'white' | 'background' | 'card' | 'input' | 'button' | 'hover' | 'label' | 'text' | 'subtitle' | 'title';
type ColorVariant = BrandColor | BaseColor;
type TagVariant = 'default' | 'filled' | 'outlined';

interface TagProps {
	name: string;
	variant?: TagVariant;
	color?: ColorVariant;
	active?: boolean;
	onClick?: (name: string) => void;
}

const Tag = ({ name, variant = 'default', color = 'yellow', active = false, onClick }: TagProps) => {
	return (
		<S.TagContainer
			variant={variant}
			color={color}
			active={active}
			clickable={!!onClick}
			onClick={onClick ? () => onClick(name) : undefined}
		>
			<S.TagText variant={variant} color={color} active={active}>
				{name}
			</S.TagText>
		</S.TagContainer>
	);
}

export default Tag;