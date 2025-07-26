import CartButton from "@/components/Button/CartButton";
import Select from "@/components/Select";
import Tag from "@/components/Tag";
import { COFFEES_LIST, FILTER_OPTIONS } from "@/constants";
import { theme } from "@/theme/theme";
import { currencyMasker } from "@/utils/masker";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useState } from "react";
import * as S from "./styles";


const Home = () => {
	const [coffeesList, setCoffeesList] = useState(COFFEES_LIST);
	const [activeFilter, setActiveFilter] = useState<string | null>(null);
	const [quantities, setQuantities] = useState(() =>
		Object.fromEntries(COFFEES_LIST.map((coffee) => [coffee.id, 1]))
	);

	const handleQuantityChange = (id: number, value: number) => {
		setQuantities((prev) => ({ ...prev, [id]: value }));
	};

	const handleTagClick = (name: string) => {
		console.log(`Tag clicked: ${name}`);

		if (activeFilter === name) {
			setActiveFilter(null);
			setCoffeesList(COFFEES_LIST);
		} else {
			setActiveFilter(name);
			const filteredCoffees = COFFEES_LIST.filter((coffee) => coffee.tags.includes(name));
			setCoffeesList(filteredCoffees);
		}
	};

	return (
		<S.PageContainer>
			<S.Container>
				<S.Banner>
					<S.TextSection>
						<S.Header>
							<S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>
							<S.Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</S.Subtitle>
						</S.Header>

						<S.Features>
							<S.Feature>
								<S.FeatureIcon colorType="brand" color="yellowDark">
									<ShoppingCart size={16} weight="fill" color={theme.colors.base.white} />
								</S.FeatureIcon>
								<S.FeatureText>Compra simples e segura</S.FeatureText>
							</S.Feature>
							<S.Feature>
								<S.FeatureIcon colorType="base" color="text">
									<Package size={16} weight="fill" color={theme.colors.base.white} />
								</S.FeatureIcon>
								<S.FeatureText>Embalagem mantém o café intacto</S.FeatureText>
							</S.Feature>
							<S.Feature>
								<S.FeatureIcon colorType="brand" color="yellow">
									<Timer size={16} weight="fill" color={theme.colors.base.white} />
								</S.FeatureIcon>
								<S.FeatureText>Entrega rápida e rastreada</S.FeatureText>
							</S.Feature>
							<S.Feature>
								<S.FeatureIcon colorType="brand" color="purple">
									<Coffee size={16} weight="fill" color={theme.colors.base.white} />
								</S.FeatureIcon>
								<S.FeatureText>O café chega fresquinho até você</S.FeatureText>
							</S.Feature>
						</S.Features>
					</S.TextSection>

					<S.ImageSection>
						<img src="src/assets/banner.svg" alt="Coffee" width={476} height={360} />
					</S.ImageSection>
				</S.Banner>
			</S.Container>

			<S.CoffeesContainer>
				<S.CoffeesHeader>
					<S.CoffeesTitle>Nossos cafés</S.CoffeesTitle>
					<S.FiltersContainer>
						{FILTER_OPTIONS.map((item) => (
							<Tag
								key={item}
								name={item}
								variant="outlined"
								color="yellow"
								active={activeFilter === item}
								onClick={handleTagClick}
							/>
						))}
					</S.FiltersContainer>
				</S.CoffeesHeader>
				<S.CoffeesList>
					{coffeesList.map((coffee) => (
						<S.CoffeeCard key={coffee.id}>
							<S.CardHeader>
								<img src={coffee.image} alt={coffee.name} width={120} height={120} />
								<S.TagsContainer>
									{coffee.tags.map((tag) => (
										<Tag
											key={tag}
											name={tag}
											variant="filled"
											color="yellowDark"
										/>
									))}
								</S.TagsContainer>
							</S.CardHeader>
							<S.CardContainer>
								<S.CardTitle>{coffee.name}</S.CardTitle>
								<S.CardDescription>{coffee.description}</S.CardDescription>
							</S.CardContainer>
							<S.CardFooter>
								<S.CardPrice>
									<S.CardPriceType>R$</S.CardPriceType>
									<S.CardPriceValue>{currencyMasker(coffee.price)}</S.CardPriceValue>
								</S.CardPrice>
								<S.CardActions>
									<S.ProductCounter>
										<Select
											value={quantities[coffee.id]}
											onChange={(value) => handleQuantityChange(coffee.id, value)}
											min={1}
											max={99}
										/>
									</S.ProductCounter>
									<CartButton
										backgroundColor="purpleDark"
										onClick={() => console.log(`Add ${coffee.id} to cart, qty: ${quantities[coffee.id]}`)}
									>
										<ShoppingCart size={22} weight="fill" color={theme.colors.base.white} />
									</CartButton>
								</S.CardActions>
							</S.CardFooter>
						</S.CoffeeCard>
					))}
				</S.CoffeesList>
			</S.CoffeesContainer>
		</S.PageContainer>
	);
}

export default Home;