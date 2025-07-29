import { Flex } from "@/components/Flex";
import { useApp } from "@/hooks";
import { theme } from "@/theme/theme";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import * as S from "./styles";

const CheckoutFilled = () => {
	const { address, getPaymentMethodLabel } = useApp();
	return (
		<S.PageContainer>
			<Flex direction="column" gap="0.25rem" align="flex-start">
				<S.Title>Uhu! Pedido confirmado</S.Title>
				<S.Subtitle>Agora é só aguardar que logo o café chegará até você</S.Subtitle>
			</Flex>

			<S.Container>
				<Flex direction="column" gap="2.5rem">
					<S.AddressContainer>
						<S.AddressItem>
							<S.Circle colorType="brand" color="purple">
								<MapPin size={16} weight="fill" color={theme.colors.base.white} />
							</S.Circle>
							<Flex direction="column">
								<S.AddressText>Entrega em <strong>{address.street}, {address.streetNumber}</strong></S.AddressText>
								<S.AddressText>{address.neighborhood} - {address.city}, {address.state}</S.AddressText>
							</Flex>
						</S.AddressItem>

						<S.AddressItem>
							<S.Circle colorType="brand" color="yellow">
								<Timer size={16} weight="fill" color={theme.colors.base.white} />
							</S.Circle>
							<Flex direction="column">
								<S.AddressText>Previsão de entrega</S.AddressText>
								<S.AddressText><strong>20 min - 30 min</strong></S.AddressText>
							</Flex>
						</S.AddressItem>

						<S.AddressItem>
							<S.Circle colorType="brand" color="yellowDark">
								<CurrencyDollar size={16} weight="fill" color={theme.colors.base.white} />
							</S.Circle>
							<Flex direction="column">
								<S.AddressText>Pagamento na entrega</S.AddressText>
								<S.AddressText><strong>{getPaymentMethodLabel() || 'Não selecionado'}</strong></S.AddressText>
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
