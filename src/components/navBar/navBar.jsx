import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/variables';

const NavBarWrapper = styled.header`
	padding: 0 20px;
	text-align: center;
	position: relative;
	color: ${color.dark};
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 0.2px solid rgba(153, 153, 153, 0.3);
	.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
		.logo{
			display: block;
			width: 160px;
    	margin-left: 20px;
			svg{
				width: 100%;
			}
		}
		.logout{
			display: block;
			position: absolute;
			top: 0;
			right: 210px;
			background: ${color.primary};
			padding: 10px 30px;
			color: ${color.white};
			text-transform: uppercase;
			font-size: 20px;
			border-bottom-left-radius: 10px;
			border-bottom-right-radius: 10px;
		}
		.tel{
			display: block;
			color: ${color.dark};
    	text-decoration: none;
			text-align: right;
			font-family: "Lato-Black";
			font-size: 22px;
			.tel-txt{
				display: block;
				font-family: "Lato-Medium";
				color: ${color.gray};
				font-size: 16px;
			}
		}
		.tel-mobile{
			display: none;
		}
	}
	@media (max-width: 425px) {
		border-bottom: none;
		padding: 15px;
		.flex-container{
			.logo{
				display: none;
			}
			.logout{
				display: none;
			}
			.tel{
				display: none;
			}
			.tel-mobile{
				display: block;
			}
		}
	}
`

const NavBar = () => {
	return (
		<NavBarWrapper className="nav">
			<div className="left flex-container">
				<div className="hamburg-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path fill="#2FD99B" fillRule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
					</svg>
				</div>
				<div className="logo">
					<svg xmlns="http://www.w3.org/2000/svg" width="239" height="104" viewBox="0 0 239 104">
						<g fill="none" fillRule="evenodd">
							<path fill="#00AB4F" d="M228.835 53.953l-3.798-1.627c-1.14-.488-1.86-1.262-1.86-2.524 0-1.629 1.44-2.957 3.554-2.957 3.366 0 4.328 2.347 4.328 4.219l6.91-1.295c-.2-3.388-2.395-8.881-11.006-8.881-6.796 0-11.3 4.573-11.3 9.81 0 3.61 1.803 6.376 6.308 8.302l3.31 1.441c1.75.785 2.227 1.804 2.227 2.89 0 1.505-1.142 2.955-3.666 2.955-2.89 0-4.693-2.114-4.693-4.638 0-.122 0-.301.054-.544l-6.794 1.274c.02 3.269 1.748 9.92 11.556 9.92 7.692 0 11.422-5.17 11.422-9.688 0-3.61-1.98-6.677-6.552-8.657M214.29 3.938L199.84 71.39h7.937l14.77-69zM202.053 6.23l-13.895 65.16h7.936l14.318-66.725zM190.749 41.776l-4.942 23.601c-.474 2.171-.649 3.853-.649 5.36v.655h-7.64c-.066-.354-.066-1.02-.066-1.265 0-.475 0-.897.066-1.803-1.573 2.47-4.694 3.795-7.408 3.795-6.307 0-9.682-4.148-9.682-9.684 0-1.086.121-2.228.607-4.398l3.162-14.725 8.27-1.55-3.442 16.03c-.297 1.33-.418 2.228-.418 2.838 0 2.646 1.382 4.452 4.449 4.452 3.312 0 5.302-2.717 6.022-6.082l3.398-15.672 8.273-1.552zM147.431 41.134c-3.364 0-6.31 1.26-7.936 3.065l5.826-27.34-8.058 1.508-4.838 22.637-6.523 30.387h7.758l.898-4.153c1.029 2.414 4.275 4.881 8.9 4.881 8.911 0 15.522-7.76 15.522-18.586 0-6.864-3.908-12.4-11.549-12.4m-4.745 23.881c-3.492 0-6.024-2.579-6.024-6.798 0-5.646 3.496-10.043 8.002-10.043 3.678 0 6.253 2.227 6.253 6.62 0 6.731-4.45 10.221-8.231 10.221M128.9 41.813l-8.082 1.514-.394 1.835a6.094 6.094 0 0 0-1.184-1.582c-1.303-1.277-3.599-2.503-7.415-2.503-8.545 0-15.101 7.641-15.101 17.68 0 7.285 4.272 13.174 11.545 13.174 3.975 0 6.554-2.102 7.936-4.149-.052.72-.108 1.625-.108 2.223 0 .422 0 .91.056 1.385l7.391.001c-.053-.544-.053-.898-.053-1.141 0-1.684.174-3.61.54-5.35l4.87-23.087zM110.44 65.015c-3.552 0-5.777-2.46-5.777-6.556 0-4.816 2.709-10.23 7.825-10.23 3.544 0 5.644 2.415 5.644 6.321 0 6.556-3.61 10.465-7.692 10.465zM90.716 43.032l-1.621.293-5.983 28.066h7.936l6.325-29.616-6.657 1.257zm5.33-16.928c-2.953 0-5.412 2.403-5.412 5.348 0 2.467 1.858 4.341 4.384 4.341 2.832 0 5.478-2.24 5.478-5.36 0-2.403-1.804-4.33-4.45-4.33zM89.093 27.39l-8.388 1.57-3.351 15.97c-.964-1.695-3.418-3.854-8.411-3.854-8.546 0-15.102 7.642-15.102 17.68 0 7.34 4.276 13.118 11.55 13.175 3.974 0 6.55-2.1 7.935-4.149-.056.662-.121 1.503-.121 2.101 0 .488 0 .963.065 1.507h7.274c-.058-.235-.058-.719-.058-1.263.058-1.382.244-3.365.667-5.226l7.94-37.51zM67.56 65.014c-3.555 0-5.777-2.459-5.777-6.555 0-4.816 2.71-10.23 7.814-10.23 3.551 0 5.656 2.415 5.656 6.32 0 6.556-3.608 10.465-7.693 10.465zM43.33 41.01c-3.064 0-6.375 1.085-8.3 3.797.166-1.15.176-2.415.176-2.944l-7.892 1.476c.135.938-.234 2.42-.466 3.505l-5.17 24.545h7.938l3.73-17.139c.72-3.31 2.823-6.144 6.254-6.144 2.945 0 4.506 1.75 4.506 4.395 0 .543-.055 1.142-.177 1.75l-3.663 17.138h7.991l3.852-17.925c.243-1.085.365-2.102.365-3.12 0-5.36-3.254-9.334-9.143-9.334M18.517 30.625L9.894 71.366h8.423l8.968-42.39z"/>
							<path fill="#231F20" d="M17.73 100.842l2.06-9.774h-9.472l-2.063 9.774H3.668l4.987-23.57h4.587l-1.994 9.474h9.473l1.994-9.475h4.62l-4.985 23.571zM41.963 76.774c6.282 0 10.404 4.255 10.404 10.538 0 8.943-6.248 14.029-12.63 14.029-6.25 0-10.437-4.289-10.437-10.54 0-8.941 6.249-14.027 12.663-14.027m-.265 4.354c-4.387 0-7.713 4.189-7.713 9.341 0 3.99 2.36 6.45 5.952 6.45 4.22 0 7.645-3.823 7.71-9.341 0-3.956-2.26-6.45-5.949-6.45M75.938 100.842l3.456-16.423-10.004 16.423h-3.624l-3.49-16.224-3.456 16.224h-4.39l4.987-23.57h5.618l3.722 16.921 10.138-16.922h6.55l-4.986 23.571zM87.177 100.842l4.985-23.57h14.693l-.931 4.322H95.851l-1.162 5.385h9.14l-.864 4.089h-9.14l-1.165 5.451h10.105l-.897 4.323zM119.423 100.843l4.984-23.571h4.587l-4.055 19.183h10.237l-.929 4.388zM150.237 76.774c6.282 0 10.403 4.256 10.403 10.538 0 8.943-6.25 14.03-12.63 14.03-6.25 0-10.438-4.29-10.438-10.54 0-8.941 6.25-14.028 12.665-14.028m-.267 4.354c-4.385 0-7.71 4.19-7.71 9.342 0 3.99 2.36 6.45 5.95 6.45 4.22 0 7.645-3.823 7.71-9.341 0-3.956-2.26-6.451-5.95-6.451M177.397 95.457h-9.108l-3.023 5.386h-5.154l13.795-23.572h5.251l3.757 23.572h-4.755l-.763-5.386zm-6.748-4.188h6.15l-1.23-8.844-4.92 8.844zM201.697 100.843l-6.815-16.655-3.522 16.655h-4.554l4.986-23.571h5.285l6.25 15.724 3.357-15.724h4.587l-4.986 23.571zM225.167 94.46c0-1.097-.532-1.995-1.995-2.627l-2.856-1.263c-2.993-1.33-4.555-3.39-4.555-6.316 0-4.422 3.789-7.446 8.342-7.446 6.249 0 8.012 4.321 8.012 6.814l-4.288.732c0-.898-.4-3.557-3.924-3.557-2.093 0-3.523 1.428-3.523 2.992 0 1.262.799 2.127 1.861 2.594l2.727 1.195c3.49 1.529 4.919 3.69 4.919 6.516 0 3.69-3.09 7.246-8.309 7.246-6.516 0-8.876-4.42-8.876-7.711 0-.134 0-.464.067-.698l4.286-.732c-.03.3-.03.432-.03.7 0 2.193 1.295 4.386 4.486 4.452 2.26 0 3.624-1.195 3.656-2.892"/>
						</g>
					</svg>
				</div>
			</div>

			<div className="right flex-container">
				<div className="logout">
					Logout
				</div>

				<a className="tel" href="tel:1800-200-7777">
					<span className="tel-txt">Helpline</span>
					1800-200-7777
				</a>

				<a className="tel-mobile" href="tel:1800-200-7777">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<g fill="#2FD99B" fillRule="nonzero" opacity=".85" transform="translate(2 3)">
							<path d="M18.423 5.993H16.97c-.036 0-.07.009-.107.012-.57-3.363-3.409-5.927-6.818-5.927-3.41 0-6.25 2.565-6.82 5.928-.041-.003-.081-.013-.124-.013H1.648c-.8 0-1.45.672-1.45 1.501v3.034c0 .83.65 1.501 1.45 1.501h1.453l.019-.002v.193c0 2.276 1.722 4.14 3.887 4.28 0 .828.65 1.5 1.45 1.5h2.932c.801 0 1.45-.672 1.45-1.501v-1.503c0-.83-.649-1.501-1.45-1.501H8.458c-.801 0-1.45.672-1.45 1.5v.003c-1.366-.136-2.438-1.33-2.438-2.778V7.245c0-3.125 2.456-5.666 5.475-5.666 3.018 0 5.474 2.542 5.474 5.666v3.001h.001v.282c0 .83.65 1.501 1.45 1.501h1.453c.8 0 1.45-.672 1.45-1.5V7.493c0-.829-.65-1.5-1.45-1.5zM3.101 10.528H1.65V7.494H3.1v3.034zm5.357 4.468h2.931v1.503H8.458V14.996zm9.965-4.468H16.97V7.494h1.453v3.034z"/>
							<ellipse cx="12.222" cy="8.646" rx="1.024" ry="1.06"/>
							<ellipse cx="8.048" cy="8.646" rx="1.024" ry="1.06"/>
						</g>
					</svg>
				</a>

			</div>
		</NavBarWrapper>
	);
}
 
export default NavBar;