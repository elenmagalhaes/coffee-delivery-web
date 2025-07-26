import styled from "styled-components";

interface IStyle {
	height?: string;
	borderRadius?: string;
}

export const PageContainer = styled.main`
	display: flex;
	flex-direction: column;
`;

export const Container = styled.section`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	padding: 2.5rem 10rem;
	gap: 2rem;
`;

export const Title = styled.div`
	font-family: ${({ theme }) => theme.typography.fonts.title};
	font-size: ${({ theme }) => theme.typography.size.xlarge};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const LeftSection = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 1rem;
`;

export const RightSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	gap: 1rem;
`;

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

export const Section = styled.div.withConfig({
	shouldForwardProp: (prop) => !['height', 'borderRadius'].includes(prop),
}) <IStyle>`
	display: flex;
	flex-direction: column;
	padding: 2.5rem;
	background-color: ${({ theme }) => theme.colors.base.card};
	height: ${({ height }) => height || "auto"};
	border-radius: ${({ borderRadius }) => borderRadius || "0.5rem"};
`;

export const SectionHeader = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;
`;

export const SectionTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const SectionTitle = styled.div`
	font-size: ${({ theme }) => theme.typography.size.large};
	color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const SectionSubtitle = styled.div`
	font-size: ${({ theme }) => theme.typography.size.medium};
	color: ${({ theme }) => theme.colors.base.text};
`;

