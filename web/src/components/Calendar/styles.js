import styled from 'styled-components';

export const Container = styled.div`
	background: #f5f5f5;
	margin: 0 25px;
	padding: 5px 20px 20px 20px;
`;

export const Header = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 5px;

	& > svg {
		cursor: pointer;
		transition: .2s filter;
	}

	& > svg:hover {
		filter: brightness(60%);
	}
`;

export const Title = styled.h1`
	text-align: center;
	font-family: 'Roboto', sans-serif;
`;

export const Month = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-gap: 5px;
`;

export const Day = styled.li`
	color: ${props => (props.selected) ? '#4aff74'
		: (props.off) ? '#999'
		: (props.vef) ? '#e02041'
		: '#333'};
	cursor: ${props => (props.selected) ? 'normal'
		: 'pointer'};
	font-weight: ${props => (props.selected) ? 'bold'
		: (props.vef) ? 'bold'
		: 'normal'};
	text-align: center;
	border-radius: 4px;
	border: ${props => props.selected ? '2px solid green'
		: props.vef ? '2px solid transparent'
		: '1px solid transparent'};
	transition: .2s filter;
	
	&:hover {
		filter: brightness(80%);
		border: ${props => props.selected ? '2px solid #4aff74'
			: props.vef ? '2px solid #e02041'
			: '1px solid #444'};
		color: ${props => props.selected ? '#4aff74'
			: props.vef ? '#e02041'
			: 'lightblue'};
	}
`;

export const Names = styled.ul`
	width: 100%;
	display: flex;
	list-style: none;
	justify-content: space-between;
`;

export const Name = styled.li`
	color: #333;
	font-weight: 600;
`;

export const Footer = styled.nav`
	display: flex;
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 0 50px;
	list-style: none;
	margin: 15px 15px 0 20px;
`;

export const Item = styled.li`
	display: flex;
	flex-direction: row;
`;


export const Circle = styled.div`
	width: 7.5px;
	height: 7.5px;
	background: ${props => props.color ? props.color
		: '#333'};
	margin: 5px 7.5px 0 7.5px;
	border-radius: 50%;
`;

export const NameForDay = styled.label`
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	color: #333;
	font-weight: 600;
`;
