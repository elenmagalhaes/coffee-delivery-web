import { theme } from "@/theme/theme";
import { CurrencyDollar, MapPin } from "phosphor-react";
import * as S from "./styles";

const Checkout = () => {
	return (
		<S.PageContainer>
			<S.Container>
				<S.LeftSection>
					<S.Title>Complete seu pedido</S.Title>
					<S.SectionContainer>
						<S.Section height="372px">
							<S.SectionHeader>
								<MapPin size={22} color={theme.colors.brand.yellowDark} />
								<S.SectionTitleContainer>
									<S.SectionTitle>Endereço de Entrega</S.SectionTitle>
									<S.SectionSubtitle>
										Informe o endereço onde deseja receber seu pedido
									</S.SectionSubtitle>
								</S.SectionTitleContainer>
							</S.SectionHeader>
						</S.Section>
						<S.Section height="207px">
							<S.SectionHeader>
								<CurrencyDollar size={22} color={theme.colors.brand.purple} />
								<S.SectionTitleContainer>
									<S.SectionTitle>Pagamento</S.SectionTitle>
									<S.SectionSubtitle>
										O pagamento é feito na entrega. Escolha a forma que deseja pagar
									</S.SectionSubtitle>
								</S.SectionTitleContainer>
							</S.SectionHeader>
						</S.Section>
					</S.SectionContainer>
				</S.LeftSection>

				<S.RightSection>
					<S.Title>Cafés selecionados</S.Title>
					<S.Section height="182px" borderRadius="0.5rem 2.75rem">C</S.Section>
				</S.RightSection>
			</S.Container>
		</S.PageContainer>
	);
}

export default Checkout;
