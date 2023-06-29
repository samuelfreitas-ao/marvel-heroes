import { styled } from 'styled-components'

export const Container = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 6fr 4fr;
	justify-content: center;
	align-items: center;
	grid-gap: 16px;
	flex-direction: column;
	min-height: 100px;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`
export const ImageContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	position: relative;
	min-height: 100px;
	& > :not(img) {
		position: absolute;
		z-index: 1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #666;
	}
`
export const Image = styled.img<{ unavailable?: string }>`
	opacity: ${(props) => (props?.unavailable ? 0.6 : 0.8)};
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
	width: 80%;
	border-radius: 32px;

	@media (max-width: 1000px) {
		width: 100%;
	}
`
export const BioContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	justify-content: center;
`
export const BioTitle = styled.h2``

export const BioBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`
