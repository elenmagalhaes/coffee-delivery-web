import { Trash } from "phosphor-react";
import * as S from "./styles";

interface RemoveButtonProps {
	onClick: () => void;
	children?: React.ReactNode;
}

const RemoveButton = ({ onClick, children = "Remover" }: RemoveButtonProps) => {
	return (
		<S.RemoveButtonContainer onClick={onClick}>
			<Trash size={16} />
			{children}
		</S.RemoveButtonContainer>
	);
};

export default RemoveButton;
