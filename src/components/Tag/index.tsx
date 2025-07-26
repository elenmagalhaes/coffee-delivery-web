
import * as S from './styles';

interface TagProps {
	name: string;
	config?: {
		backgroundColor?: string;
		backgroundColorType?: 'base' | 'brand';
		borderColor?: string;
		borderColorType?: 'base' | 'brand';
		color?: string;
		colorType?: 'base' | 'brand';
	};
	onClick: (name: string) => void;
}

const Tag = ({ name, config, onClick }: TagProps) => {
	return (
		<S.TagContainer config={config} onClick={() => onClick(name)}>
			<S.TagText config={config}>{name}</S.TagText>
		</S.TagContainer>
	);
}

export default Tag;