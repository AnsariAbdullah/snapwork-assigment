import React from 'react';
import styled from 'styled-components';
import NavBar from './components/navBar';
import SecHeader from './components/secHeader';
import FormInput from './components/formInput';
import Footer from './components/footer';
import { Button } from './styles/variables';

const AppWrapper = styled.div`
	.container{
		width: 1024px;
		margin: 0 auto;
		.line{
			margin-top: 50px;
			margin-bottom: 20px;
			border-top: 0.2px solid rgba(153, 153, 153, 0.3);
		}
		.grid-model-3{
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-gap: 30px;
		}
		.sbmt-button{
			margin-top: 20px;
		}
	}
	@media (max-width: 768px) {
		.container{
			width: 100%;
			padding: 0 20px;
		}
	}
	@media (max-width: 425px) {
		.container{
			.grid-model-3{
				display: block;
			}
			.line{
				margin: 0;
				border-top: none;
			}
			.sbmt-button{
				margin-top: 50px;
			}
		}
	}
`

const App = () => {
	return (
		<AppWrapper>
			<NavBar />
			<SecHeader />
			<div className="container">
				<div className="grid-model-3">
					<FormInput type="text" placeholder="First Name" inputName="fname" />
					<FormInput type="text" placeholder="Middle Name" inputName="mname" />
					<FormInput type="text" placeholder="Last Name" inputName="lname" />
				</div>

				<div className="line" />

				<div className="grid-model-3">
					<FormInput type="text" placeholder="Date of Birth" inputName="date" />
					<FormInput type="text" placeholder="Residence Pincode" inputName="rpin" />
					<FormInput type="text" placeholder="Residence City" inputName="rcity" />
				</div>

				<div className="line" />
				
				<Button className="sbmt-button">Proceed</Button>
			</div>

			<Footer />
		</AppWrapper>
	);
}
 
export default App;