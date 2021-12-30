import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/variables';

const SubHeaderWrapper = styled.div`
	background: #f7f7f7;
	padding: 25px 0;
	.container{
		width: 1024px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		.title-wrapper {
    	margin-left: 35px;
			.title{
				font-family: "Lato-Black";
    		font-size: 32px;
				padding-bottom: 5px;
			}
			.sub-title{
				font-size: 22px;
				color: ${color.gray}
			}
		}
	}
	@media (max-width: 768px) {
		.container{
			width: 100%;
			padding: 0 20px;
		}
	}
	@media (max-width: 425px) {
		background: transparent;
		.container{
			display: block;
			text-align: center;
			.person{
				display: none;
			}
			.title-wrapper{
				margin-left: 0;
				.title{
					text-align: center;
				}
				.sub-title{
					display: none
				}
			}
		}
	}
`

const SecHeader = () => {
	return (
		<SubHeaderWrapper>
			<div className="container">
				<div className="person">
					<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
						<g fill="none" fillRule="evenodd" stroke="#F51556" strokeLinecap="round" strokeWidth="2.267" transform="translate(24.023 6.347)">
							<path d="M.074 26.171V14.748c0-2.494 2.029-4.516 4.531-4.516h1.773c2.503 0 4.532 2.022 4.532 4.516v11.288M2.81 27.22v16.944M7.97 27.22v16.944"/>
							<ellipse cx="5.489" cy="3.951" rx="3.727" ry="3.714"/>
						</g>
					</svg>
				</div>

				<div className="title-wrapper">
					<p className="title">Your Details</p>
					<p className="sub-title">Let us know your details</p>
				</div>
			</div>
		</SubHeaderWrapper>
	);
}
 
export default SecHeader;