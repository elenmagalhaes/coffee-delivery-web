
/**
 * 
 * @param value number
 * @returns string
 * Formats a number to Brazilian currency format (R$) with two decimal places.
 */
function currencyMasker(value: number) {
	return new Intl.NumberFormat("pt-BR", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(value);
};

export {
	currencyMasker
};

