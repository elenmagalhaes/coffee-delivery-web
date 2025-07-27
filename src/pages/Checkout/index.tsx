import { Flex } from "@/components/Flex";
import { theme } from "@/theme/theme";
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as S from "./styles";

type Inputs = {
	zipCode: string
	street: string
	streetNumber: string
	complement: string
	neighborhood: string
	city: string
	state: string
}

const Checkout = () => {
	const {
		register,
		handleSubmit,
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	return (
		<S.PageContainer>
			<S.Container onSubmit={handleSubmit(onSubmit)}>
				<S.LeftSection>
					<S.Title>Complete seu pedido</S.Title>
					<S.Sections>
						<S.Card height="372px">
							<S.CardHeader>
								<MapPin size={22} color={theme.colors.brand.yellowDark} />
								<S.CardTitleContainer>
									<S.CardTitle>Endereço de Entrega</S.CardTitle>
									<S.CardSubtitle>
										Informe o endereço onde deseja receber seu pedido
									</S.CardSubtitle>
								</S.CardTitleContainer>
							</S.CardHeader>

							<S.SectionContent>
								<S.Input placeholder="CEP" {...register("zipCode")} width="30%" />
								<S.Input placeholder="Rua" {...register("street")} />
								<Flex gap="0.75rem">
									<S.Input placeholder="Número" {...register("streetNumber")} width="30%" />
									<S.Input placeholder="Complemento" {...register("complement")} width="70%" />
								</Flex>
								<Flex gap="0.75rem">
									<S.Input placeholder="Bairro" {...register("neighborhood")} width="30%" />
									<S.Input placeholder="Cidade" {...register("city")} width="60%" />
									<S.Input placeholder="UF" {...register("state")} width="10%" />
								</Flex>
							</S.SectionContent>
						</S.Card>

						<S.Card height="207px">
							<S.CardHeader>
								<CurrencyDollar size={22} color={theme.colors.brand.purple} />
								<S.CardTitleContainer>
									<S.CardTitle>Pagamento</S.CardTitle>
									<S.CardSubtitle>
										O pagamento é feito na entrega. Escolha a forma que deseja pagar
									</S.CardSubtitle>
								</S.CardTitleContainer>
							</S.CardHeader>

							<S.PaymentSection>
								<S.PaymentCard>
									<CreditCard size={14} color={theme.colors.brand.purple} />
									Cartão de Crédito
								</S.PaymentCard>
								<S.PaymentCard>
									<Bank size={14} color={theme.colors.brand.purple} />
									Cartão de Débito
								</S.PaymentCard>
								<S.PaymentCard>
									<Money size={14} color={theme.colors.brand.purple} />
									Dinheiro
								</S.PaymentCard>
							</S.PaymentSection>
						</S.Card>
					</S.Sections>
				</S.LeftSection>

				<S.RightSection>
					<S.Title>Cafés selecionados</S.Title>
					<S.Card height="182px" borderRadius="0.5rem 2.75rem">
						{/* <button type="submit" /> */}
					</S.Card>
				</S.RightSection>
			</S.Container>
		</S.PageContainer>
	);
}

export default Checkout;
