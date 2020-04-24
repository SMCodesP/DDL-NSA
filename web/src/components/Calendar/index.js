import React, { useState, useEffect } from 'react';
import zeroFill from 'zero-fill';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container, Title, Month, Day, Header, Names, Name } from './styles.js';

export default function Calendar() {
	const [date, setDate] = useState(new Date());
	const [year, setYear] = useState(date.getFullYear());
	const [month, setMonth] = useState(date.getMonth());
	const [dates, setDates] = useState([]);
	const week = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

	function getDaysInMonth(monthGet, yearGet) {
	 return new Date(yearGet, monthGet, 0).getDate();
	}
	

	function handleLeft() {
		setDate(new Date(year, month - 1, 1));
	}

	function handleRight() {
		setDate(new Date(year, month + 1, 1));
	}

	useEffect(() => {
		setDate(new Date(year, month, 1));
	}, [year, month]);

	useEffect(() => {
		setYear(date.getFullYear());
		setMonth(date.getMonth());
	}, [date]);

	useEffect(() => {
		const list = [];
		const daysOldMonth = getDaysInMonth(month, year);
		const days = daysOldMonth - (date.getDay()-1);
		for(let counter = days;counter <= daysOldMonth;counter++) {
			const dateLocale = new Date(year, month - 1, counter);
			list.push({ id: Math.random() * 5, value: counter, dateLocal: dateLocale, vef: true });
		}
		for(let counter = 1;counter <= getDaysInMonth(month+1, year);counter++) {
			const dateLocale = new Date(year, month, counter-3);
			list.push({ id: counter, value: counter, dateLocal: dateLocale, vef: false });
		}
		setDates([...list]);
	}, [year, month, date]);
	
	return (
		<Container>
			<Header>
				<FiChevronLeft onClick={handleLeft} color='#7159c1' size={24} />
				<Title>{year} - {zeroFill(2, month+1)}</Title>
				<FiChevronRight onClick={handleRight} color='#7159c1' size={24} />
			</Header>
			<Names>
				{week.map(day => <Name key={day}>{day}</Name>)}
			</Names>
			<Month>
				{dates.map(({ id, vef, value, dateLocal }) => (
					<Day
						key={id}
						selected={(value === new Date().getDate()) ? true : false}
						off={vef}
					>
						{value}
					</Day>
				))}
			</Month>
		</Container>
	);
}
