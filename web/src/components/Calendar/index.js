import React, { useState, useEffect } from 'react';
import zeroFill from 'zero-fill';

import { Container, Title, Month, Day } from './styles.js';

export default function Calendar() {
	const [year] = useState(new Date().getFullYear());
	const [month] = useState(new Date().getMonth());
	const [day] = useState(new Date().getDate());
	const [dates, setDates] = useState([]);

	function getDaysInMonth(monthGet, yearGet) {
	 return new Date(yearGet, monthGet, 0).getDate();
	};
	
	useEffect(() => {
		const list = [];
		for(let counter = 1;counter <= getDaysInMonth(month+1, year);counter++) {
			list.push(counter);
		}
		setDates([...list]);
	}, [year, month]);
	
	return (
		<Container>
			<Title>{year} - {zeroFill(2, month)}</Title>
			<Month>
				{dates.map((date) => (
					<Day selected={(date === day) ? true : false}>{date}</Day>
				))}
			</Month>
		</Container>
	);
}
