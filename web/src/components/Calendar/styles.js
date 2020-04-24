import styled from 'styled-components';

export const Container = styled.div`
	background: #f5f5f5;
	margin: 0 25px;
	padding: 20px;
`;

export const Header = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: -12.5px;
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
`;

export const Day = styled.li`
	color: ${props => {
		if(props.selected) return '#e02041';
		if(props.off) return '#999';
		return '#333';
	}};
	cursor: ${props => props.selected ? 'normal' : 'pointer'};
	text-align: center;
	border-radius: 2px;
	border: 1px solid ${props => props.selected ? 'red' : 'transparent'};
	transition: .2s border, .2s color;
	
	&:hover {
		border: 1px solid ${props => props.selected ? 'red' : '#444'};
		color: ${props => props.selected ? '#e02041' : 'lightblue'};
	}
`;

export const Names = styled.ul`
	width: 100%;
	display: flex;
	list-style: none;
	justify-content: space-between;
`;

export const Name = styled.li`
`;
