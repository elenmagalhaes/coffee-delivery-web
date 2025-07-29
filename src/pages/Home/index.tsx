import CartButton from "@/components/CartButton";
import Select from "@/components/Select";
import Tag from "@/components/Tag";
import { Typography } from "@/components/Typography";
import { COFFEES_LIST, FILTER_OPTIONS } from "@/constants";
import { useApp } from "@/hooks";
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
	const { addToCart } = useApp();

	const handleQuantityChange = (id: number, value: number) => {
		setQuantities((prev) => ({ ...prev, [id]: value }));
	};

	const handleTagClick = (name: string) => {
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
							<Typography fontFamily="title" color="title" size="xxhuge" weight="extrabold">
								Encontre o café perfeito para qualquer hora do dia
							</Typography>
							<Typography color="subtitle" size="xxlarge" lineHeight="expanded">
								Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
							</Typography>
						</S.Header>

						<S.Features>
							<S.Feature>
								<S.FeatureIcon colorType="brand" color="yellowDark">
									<ShoppingCart size={16} weight="fill" color={theme.colors.base.white} />
								</S.FeatureIcon>
								<Typography size="large">Compra simples e segura</Typography>
							</S.Feature>
							<S.Feature>
								<S.FeatureIcon colorType="base" color="text">
									<Package size={16} weight="fill" color={theme.colors.base.white} />
								</S.FeatureIcon>
								<Typography size="large">Embalagem mantém o café intacto</Typography>
							</S.Feature>
							<S.Feature>
								<S.FeatureIcon colorType="brand" color="yellow">
									<Timer size={16} weight="fill" color={theme.colors.base.white} />
								</S.FeatureIcon>
								<Typography size="large">Entrega rápida e rastreada</Typography>
							</S.Feature>
							<S.Feature>
								<S.FeatureIcon colorType="brand" color="purple">
									<Coffee size={16} weight="fill" color={theme.colors.base.white} />
								</S.FeatureIcon>
								<Typography size="large">O café chega fresquinho até você</Typography>
							</S.Feature>
						</S.Features>
					</S.TextSection>

					<S.ImageSection>
						<img src="/assets/banner.svg" alt="Coffee" width={476} height={360} />
					</S.ImageSection>
				</S.Banner>
			</S.Container>

			<S.CoffeesContainer>
				<S.CoffeesHeader>
					<Typography fontFamily="title" color="subtitle" size="xhuge" weight="extrabold">
						Nossos cafés
					</Typography>
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
								<Typography fontFamily="title" color="title" size="xxlarge" weight="bold">{coffee.name}</Typography>
								<Typography color="label">{coffee.description}</Typography>
							</S.CardContainer>
							<S.CardFooter>
								<S.CardPrice>
									<Typography>R$</Typography>
									<Typography fontFamily="title" size="huge" weight="extrabold">{currencyMasker(coffee.price)}</Typography>
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
										onClick={() => addToCart(coffee, quantities[coffee.id])}
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