import CoffeeCard from "@/components/CoffeeCard";
import { Flex } from "@/components/Flex";
import OrderSummary from "@/components/OrderSummary";
import RemoveButton from "@/components/RemoveButton";
import Select from "@/components/Select";
import { useAddressStore } from "@/store/address";
import { useCartStore } from "@/store/cart";
import { theme } from "@/theme/theme";
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import type { Inputs } from "./types";

const Checkout = () => {
	const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice, deliveryFee } = useCartStore();
	const { setAddress } = useAddressStore();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		setAddress(data);
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

	return (
		<S.PageContainer>
			<S.Container onSubmit={handleSubmit(onSubmit)}>
				<S.LeftSection>
					<S.Title>Complete seu pedido</S.Title>
					<S.Sections>
						<S.Card height="372px" gap="32px">
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

						<S.Card height="207px" gap="32px">
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
					<S.Card height="auto" borderRadius="0.5rem 2.75rem">
						{items.length === 0 ? (
							<p>Nenhum café selecionado</p>
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
									itemsTotal={getTotalPrice()}
									deliveryFee={deliveryFee}
									total={getTotalPrice() + deliveryFee}
								/>
								<S.ButtonContainer>
									<S.CancelButton type="button" onClick={handleCancelOrder}>
										Cancelar
									</S.CancelButton>
									<S.ConfirmButton type="submit">
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
