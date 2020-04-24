import React, { useState, useEffect } from 'react';
import zeroFill from 'zero-fill';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container, Title, Month, Day, Header, Names, Name, Footer, List, Item, Circle, NameForDay } from './styles.js';

export default function Calendar() {
	const [date, setDate] = useState(new Date());
	const [year, setYear] = useState(date.getFullYear());
	const [month, setMonth] = useState(date.getMonth());
	const [dates, setDates] = useState([]);
	const week = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
	const months = ["Janeiro",
		"Fevereiro",
		"Marco",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Septembro",
		"Outubro",
		"Novembro",
		"Dezembro"]

	function getDaysInMonth(monthGet, yearGet) {
	 return new Date(yearGet, monthGet, 0).getDate();
	}
	

	function handleLeft() {
		const newDate = new Date(year, month - 1, 1);
		if(newDate.getFullYear() !== year) return;
		setDate(newDate);
	}

	function handleRight() {
		const newDate = new Date(year, month + 1, 1);
		if(newDate.getFullYear() !== year) return;
		setDate(newDate);
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
		
		// Calculate days of the month at this time
		const dayLastThisTime = getDaysInMonth(month+1, year)

		// Calculate days of the last month
		const dayLastOldMonth = getDaysInMonth(month, year);
		const daysOldMonthCount = dayLastOldMonth - (date.getDay()-1);

		// days of the last month
		for(let counter = daysOldMonthCount;counter <= dayLastOldMonth;counter++) {
			const dateLocale = new Date(year, month - 1, counter);
			list.push({ id: Math.random() * 5, value: counter, dateLocale, vef: false, off: true });
		}
		
		// Days of the month
		for(let counter = 1;counter <= dayLastThisTime;counter++) {
			const dateLocale = new Date(year, month, counter);
			const dateWeek = dateLocale.getDay();
			const vef = dateWeek === 0 || dateWeek === 6 || month+1 === 1 || month+1 === 6 || month+1 === 6 || month+1 === 7 || month+1 === 12;
			list.push({ id: counter, value: counter, dateLocale, vef, off: false });
		}
		
		setDates([...list]);
	}, [date, year, month]);
	
	return (
		<Container>
			<Title>Mês: {months[month].toLowerCase()}</Title>
			<Header>
				<FiChevronLeft onClick={handleLeft} color='#7159c1' size={24} />
				<Title>{year} - {zeroFill(2, month+1)}</Title>
				<FiChevronRight onClick={handleRight} color='#7159c1' size={24} />
			</Header>
			<Names>
				{week.map(day => <Name key={day}>{day}</Name>)}
			</Names>
			<Month>
				{dates.map(({ id, off, vef, value, dateLocale }) => (
					<Day
						key={id}
						selected={(value === new Date().getDate()) ? true : false}
						off={off}
						vef={vef}
					>
						{value}
					</Day>
				))}
			</Month>
			<Footer>
				<List>
					<Item>
						<Circle color="#4aff74" />
						<NameForDay>Hoje</NameForDay>
					</Item>
					<Item>
						<Circle color="#e02041" />
						<NameForDay>Não letívo</NameForDay>
					</Item>
					<Item>
						<Circle color="#bbb" />
						<NameForDay>Mês anterior</NameForDay>
					</Item>
					<Item>
						<Circle color="#333" />
						<NameForDay>Letívo</NameForDay>
					</Item>
				</List>
			</Footer>
		</Container>
	);
}
