import { Typography } from "../Typography";
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
				<Typography>Total de itens</Typography>
				<Typography size="large">R$ {itemsTotal.toFixed(2).replace('.', ',')}</Typography>
			</S.Row>
			<S.Row>
				<Typography>Entrega</Typography>
				<Typography size="large">R$ {deliveryFee.toFixed(2).replace('.', ',')}</Typography>
			</S.Row>
			<S.TotalRow>
				<Typography color="subtitle" size="xxlarge" weight="bold">Total de itens</Typography>
				<Typography color="subtitle" size="xxlarge" weight="bold">R$ {total.toFixed(2).replace('.', ',')}</Typography>
			</S.TotalRow>
		</S.Container>
	);
};

export default OrderSummary;
