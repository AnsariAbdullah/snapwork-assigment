import styled from "styled-components"

const color = {
	primary: '#7bdb9b',
	dark: '#333333',
	gray: '#808080',
	white: '#fff',
	lightGray: '#999999'
}

const Button = styled.button`
	background: ${color.primary};
	color: ${color.white};
	width: 350px;
	padding: 15px 0;
	border: none;
	border-radius: 10px;
	text-transform: uppercase;
	font-size: 18px;
	@media (max-width: 425px) {
		width: 100%;
	}
`

export {
	color,
	Button
}