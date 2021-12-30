import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/variables';

const InputWrapper = styled.div`
	.form__group {
		position: relative;
		padding: 15px 0 0;
		margin-top: 10px;
		width: 100%;
	}

	.form__field {
		font-family: inherit;
		width: 100%;
		border: 0;
		border-bottom: 2px solid rgba(123, 219, 155, 0.3);
		outline: 0;
		font-size: 22px;
		color: ${color.dark};
		padding: 7px 0;
		background: transparent;
		transition: border-color 0.2s;

		&::placeholder {
			color: transparent;
		}

		&:placeholder-shown ~ .form__label {
			font-size: 22px;
			cursor: text;
			top: 20px;
		}
	}

	.form__label {
		position: absolute;
		top: 0;
		display: block;
		transition: 0.2s;
		font-size: 16px;
		color: ${color.gray};
	}

	.form__field:focus {
		~ .form__label {
			position: absolute;
			top: 0;
			display: block;
			transition: 0.2s;
			font-size: 1rem;
			color: ${color.primary};
			font-weight:700;    
		}
		padding-bottom: 6px;  
		font-weight: 700;
		border-width: 3px;
		border-image: linear-gradient(to right, ${color.primary}, ${color.primary});
		border-image-slice: 1;
	}
	.form__field{
		&:required,&:invalid { box-shadow:none; }
	}
`

const FormInput = ({type, placeholder, inputName}) => {
	return (
		<InputWrapper>
			<div className="form__group field">
				<input type={type} className="form__field" placeholder={placeholder} name={inputName} required />
				<label for={inputName} className="form__label">{placeholder}</label>
			</div>
		</InputWrapper>
	);
}

export default FormInput;