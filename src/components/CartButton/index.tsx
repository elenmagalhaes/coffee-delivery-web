import type { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";


type BrandColor = 'yellow' | 'yellowDark' | 'yellowLight' | 'purple' | 'purpleDark' | 'purpleLight';

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	full?: boolean;
	badgeCount?: number;
	backgroundColor?: BrandColor;
}


const CartButton = ({ children, full = false, badgeCount, backgroundColor, ...rest }: CartButtonProps) => {
	return (
		<S.CartButtonBase
			full={full ? true : undefined}
			backgroundColor={backgroundColor}
			{...rest}
		>
			{children}
			{badgeCount && badgeCount > 0 && <S.CartBadge>{badgeCount}</S.CartBadge>}
		</S.CartButtonBase>
	);
};

export default CartButton;
