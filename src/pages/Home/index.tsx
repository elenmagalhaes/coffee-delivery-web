import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import Tag from "../../components/Tag";
import { FILTER_OPTIONS } from "../../constants";
import { theme } from "../../theme/theme";
import * as S from "./styles";

const Home = () => {
	return (
		<S.PageContainer>
			<S.Banner>
				<S.Container>
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
				</S.Container>
			</S.Banner>

			<S.CoffeesContainer>
				<S.CoffeesHeader>
					<S.CoffeesTitle>Nossos cafés</S.CoffeesTitle>
					<S.TagsContainer>
						{FILTER_OPTIONS.map((item) => (
							<Tag
								key={item}
								name={item}
								config={{
									colorType: "brand",
									color: "yellowDark",
									borderColorType: "brand",
									borderColor: "yellow",
								}}
								onClick={(name) => console.log(`Tag clicked: ${name}`)}
							/>
						))}
					</S.TagsContainer>
				</S.CoffeesHeader>
			</S.CoffeesContainer>
		</S.PageContainer>
	);
}

export default Home;