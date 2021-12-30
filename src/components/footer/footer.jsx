import React from 'react';
import styled from 'styled-components';
import FooterImage from '../../assets/images/img-footer-art.png';

const FooterWrapper = styled.footer`
	display: none;
	@media (max-width: 425px) {
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		display: block;
		position: fixed;
		img{
			width: 100%;
		}
	}
`

const Footer = () => {
	return (
		<FooterWrapper className="footer">
			<img src={FooterImage} alt="" />
		</FooterWrapper>
	);
}
 
export default Footer;