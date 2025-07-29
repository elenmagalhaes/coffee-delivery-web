import { Flex } from "@/components/Flex";
import { Typography } from "@/components/Typography";
import { useApp } from "@/hooks";
import { theme } from "@/theme/theme";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import * as S from "./styles";

const CheckoutFilled = () => {
	const { address, getPaymentMethodLabel } = useApp();
	return (
		<S.PageContainer>
			<Flex direction="column" gap="0.25rem" align="flex-start">
				<Typography fontFamily="title" color="yellowDark" size="xhuge" weight="extrabold">
					Uhu! Pedido confirmado
				</Typography>
				<Typography color="subtitle" size="xxlarge">
					Agora é só aguardar que logo o café chegará até você
				</Typography>
			</Flex>

			<S.Container>
				<Flex direction="column" gap="2.5rem">
					<S.AddressContainer>
						<S.AddressItem>
							<S.Circle colorType="brand" color="purple">
								<MapPin size={16} weight="fill" color={theme.colors.base.white} />
							</S.Circle>
							<Flex direction="column">
								<Typography size="large">
									Entrega em <strong>{address.street}, {address.streetNumber}</strong>
								</Typography>
								<Typography size="large">
									{address.neighborhood} - {address.city}, {address.state}
								</Typography>
							</Flex>
						</S.AddressItem>

						<S.AddressItem>
							<S.Circle colorType="brand" color="yellow">
								<Timer size={16} weight="fill" color={theme.colors.base.white} />
							</S.Circle>
							<Flex direction="column">
								<Typography size="large">
									Previsão de entrega
								</Typography>
								<Typography size="large">
									<strong>20 min - 30 min</strong>
								</Typography>
							</Flex>
						</S.AddressItem>

						<S.AddressItem>
							<S.Circle colorType="brand" color="yellowDark">
								<CurrencyDollar size={16} weight="fill" color={theme.colors.base.white} />
							</S.Circle>
							<Flex direction="column">
								<Typography size="large">
									Pagamento na entrega
								</Typography>
								<Typography size="large">
									<strong>{getPaymentMethodLabel() || 'Não selecionado'}</strong>
								</Typography>
							</Flex>
						</S.AddressItem>
					</S.AddressContainer>
				</Flex>

				<S.ImageContainer>
					<img src="/assets/illustration.png" alt="Café sendo entregue" />
				</S.ImageContainer>
			</S.Container>
		</S.PageContainer >
	);
}

export default CheckoutFilled;
