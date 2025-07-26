import * as S from "./styles";

interface SelectProps {
	value: number;
	min?: number;
	max?: number;
	onChange: (value: number) => void;
}

const Select = ({ value, onChange, min = 1, max = 99 }: SelectProps) => {
	const handleMinus = () => {
		if (value > min) onChange(value - 1);
	};
	const handlePlus = () => {
		if (value < max) onChange(value + 1);
	};
	return (
		<S.SelectContainer>
			<S.SelectButton type="button" onClick={handleMinus} disabled={value <= min}>
				–
			</S.SelectButton>
			<S.SelectValue>{value}</S.SelectValue>
			<S.SelectButton type="button" onClick={handlePlus} disabled={value >= max}>
				+
			</S.SelectButton>
		</S.SelectContainer>
	);
};

export default Select;
