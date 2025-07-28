import CoffeeCard from "@/components/CoffeeCard";
import { Flex } from "@/components/Flex";
import OrderSummary from "@/components/OrderSummary";
import RemoveButton from "@/components/RemoveButton";
import Select from "@/components/Select";
import { useCartStore } from "@/store/cart";
import { theme } from "@/theme/theme";
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { useEffect, useState } from "react";
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
	const { items, removeFromCart } = useCartStore();
	const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

	const {
		register,
		handleSubmit,
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	// Inicializar quantities com base nos items do carrinho
	useEffect(() => {
		const initialQuantities: { [key: number]: number } = {};
		items.forEach(item => {
			initialQuantities[item.coffee.id] = item.quantity;
		});
		setQuantities(initialQuantities);
	}, [items]);

	const handleQuantityChange = (coffeeId: number, newQuantity: number) => {
		setQuantities(prev => ({
			...prev,
			[coffeeId]: newQuantity
		}));
	};

	const handleRemoveItem = (coffeeId: number) => {
		removeFromCart(coffeeId);
	};

	const handleCancelOrder = () => {
		// Lógica para cancelar o pedido
		console.log('Pedido cancelado');
	};

	const handleConfirmOrder = () => {
		// Lógica para confirmar o pedido
		console.log('Pedido confirmado');
	};

	// Calcular totais
	const itemsTotal = items.reduce((total, item) => {
		const quantity = quantities[item.coffee.id] || item.quantity;
		return total + (item.coffee.price * quantity);
	}, 0);

	const deliveryFee = 3.50;
	const totalAmount = itemsTotal + deliveryFee;

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
					<S.Card height="auto" borderRadius="0.5rem 2.75rem">
						{items.length === 0 ? (
							<p>Nenhum café selecionado</p>
						) : (
							items.map((item) => (
								<CoffeeCard
									key={item.coffee.id}
									coffee={item.coffee}
									variant="checkout"
									quantity={quantities[item.coffee.id] || item.quantity}
									actions={
										<>
											<Select
												value={quantities[item.coffee.id] || item.quantity}
												onChange={(newQuantity) => handleQuantityChange(item.coffee.id, newQuantity)}
											/>
											<RemoveButton onClick={() => handleRemoveItem(item.coffee.id)} />
										</>
									}
								/>
							))
						)}
						{items.length > 0 && (
							<OrderSummary
								itemsTotal={itemsTotal}
								deliveryFee={deliveryFee}
								total={totalAmount}
								onCancel={handleCancelOrder}
								onConfirm={handleConfirmOrder}
							/>
						)}
					</S.Card>
				</S.RightSection>
			</S.Container>
		</S.PageContainer>
	);
}

export default Checkout;
