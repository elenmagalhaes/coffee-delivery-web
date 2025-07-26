import type { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: "primary" | "purple" | "remove";
}

const Button = ({ children, variant = "primary", ...rest }: ButtonProps) => {
	if (variant === "purple") {
		return <S.ButtonPurple {...rest}>{children}</S.ButtonPurple>;
	}
	if (variant === "remove") {
		return <S.ButtonRemove {...rest}>{children}</S.ButtonRemove>;
	}
	return <S.ButtonPrimary {...rest}>{children}</S.ButtonPrimary>;
};

export default Button;
