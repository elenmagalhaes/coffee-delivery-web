import * as S from "./styles";

interface OrderSummaryProps {
	itemsTotal: number;
	deliveryFee: number;
	total: number;
}

const OrderSummary = ({ itemsTotal, deliveryFee, total }: OrderSummaryProps) => {
	return (
		<S.Container>
			<S.Row>
				<S.Label>Total de itens</S.Label>
				<S.Value>R$ {itemsTotal.toFixed(2).replace('.', ',')}</S.Value>
			</S.Row>
			<S.Row>
				<S.Label>Entrega</S.Label>
				<S.Value>R$ {deliveryFee.toFixed(2).replace('.', ',')}</S.Value>
			</S.Row>
			<S.TotalRow>
				<S.TotalLabel>Total</S.TotalLabel>
				<S.TotalValue>R$ {total.toFixed(2).replace('.', ',')}</S.TotalValue>
			</S.TotalRow>
		</S.Container>
	);
};

export default OrderSummary;
