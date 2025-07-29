import CoffeeCard from "@/components/CoffeeCard";
import { Flex } from "@/components/Flex";
import OrderSummary from "@/components/OrderSummary";
import RemoveButton from "@/components/RemoveButton";
import Select from "@/components/Select";
import { Typography } from "@/components/Typography";
import { useApp } from "@/hooks";
import { theme } from "@/theme/theme";
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import type { Inputs } from "./types";

const Checkout = () => {
	const {
		items,
		removeFromCart,
		updateQuantity,
		clearCart,
		totalPrice,
		deliveryFee,
		total,
		setAddress,
		paymentMethod,
		setPaymentMethod
	} = useApp();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch
	} = useForm<Inputs>()

	// Watch form fields to validate address completion
	const watchedFields = watch()

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		// Set address data
		setAddress(data);

		// Navigate to success page only after form submission
		navigate('/checkout-filled');
	};

	const handleQuantityChange = (coffeeId: number, newQuantity: number) => {
		updateQuantity(coffeeId, newQuantity);
	};

	const handleRemoveItem = (coffeeId: number) => {
		removeFromCart(coffeeId);
	};

	const handleCancelOrder = () => {
		clearCart();
	};

	// Check if form is valid for enabling confirm button
	const isFormValid = () => {
		const requiredFields = ['zipCode', 'street', 'streetNumber', 'neighborhood', 'city', 'state']
		const isAddressValid = requiredFields.every(field =>
			watchedFields[field as keyof Inputs]?.trim() !== '' &&
			watchedFields[field as keyof Inputs] !== undefined
		)
		const hasItems = items.length > 0
		const hasPaymentMethod = paymentMethod !== null

		return isAddressValid && hasItems && hasPaymentMethod
	}

	return (
		<S.PageContainer>
			<S.Container onSubmit={handleSubmit(onSubmit)}>
				<S.LeftSection>
					<Typography fontFamily="title" color="subtitle" size="xlarge" weight="bold">
						Complete seu pedido
					</Typography>
					<S.Sections>
						<S.Card height="372px" gap="32px">
							<S.CardHeader>
								<MapPin size={22} color={theme.colors.brand.yellowDark} />
								<S.CardTitleContainer>
									<Typography color="subtitle" size="large">
										Endereço de Entrega
									</Typography>
									Informe o endereço onde deseja receber seu pedido
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

						<S.Card height="207px" gap="32px">
							<S.CardHeader>
								<CurrencyDollar size={22} color={theme.colors.brand.purple} />
								<S.CardTitleContainer>
									<Typography color="subtitle" size="large">
										Pagamento
									</Typography>
									O pagamento é feito na entrega. Escolha a forma que deseja pagar
								</S.CardTitleContainer>
							</S.CardHeader>

							<S.PaymentSection>
								<S.PaymentCard
									type="button"
									selected={paymentMethod === 'credit'}
									onClick={() => setPaymentMethod('credit')}
								>
									<CreditCard size={14} color={theme.colors.brand.purple} />
									Cartão de Crédito
								</S.PaymentCard>
								<S.PaymentCard
									type="button"
									selected={paymentMethod === 'debit'}
									onClick={() => setPaymentMethod('debit')}
								>
									<Bank size={14} color={theme.colors.brand.purple} />
									Cartão de Débito
								</S.PaymentCard>
								<S.PaymentCard
									type="button"
									selected={paymentMethod === 'cash'}
									onClick={() => setPaymentMethod('cash')}
								>
									<Money size={14} color={theme.colors.brand.purple} />
									Dinheiro
								</S.PaymentCard>
							</S.PaymentSection>
						</S.Card>
					</S.Sections>
				</S.LeftSection>

				<S.RightSection>
					<Typography fontFamily="title" color="subtitle" size="xlarge" weight="bold">
						Cafés selecionados
					</Typography>
					<S.Card height="auto" borderRadius="0.5rem 2.75rem">
						{items.length === 0 ? (
							`Nenhum café selecionado`
						) : (
							items.map((item) => (
								<CoffeeCard
									key={item.coffee.id}
									coffee={item.coffee}
									variant="checkout"
									quantity={item.quantity}
									actions={
										<>
											<Select
												value={item.quantity}
												onChange={(newQuantity) => handleQuantityChange(item.coffee.id, newQuantity)}
											/>
											<RemoveButton onClick={() => handleRemoveItem(item.coffee.id)} />
										</>
									}
								/>
							))
						)}
						{items.length > 0 && (
							<>
								<OrderSummary
									itemsTotal={totalPrice}
									deliveryFee={deliveryFee}
									total={total}
								/>
								<S.ButtonContainer>
									<S.CancelButton type="button" onClick={handleCancelOrder}>
										Cancelar
									</S.CancelButton>
									<S.ConfirmButton
										type="submit"
										disabled={!isFormValid()}
									>
										Confirmar Pedido
									</S.ConfirmButton>
								</S.ButtonContainer>
							</>
						)}
					</S.Card>
				</S.RightSection>
			</S.Container>
		</S.PageContainer>
	);
}

export default Checkout;
