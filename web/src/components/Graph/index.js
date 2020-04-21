import React from 'react';
import Chart from 'react-google-charts';

import { Title } from './styles';

export default function Graph() {
	return (
		<>
			<Title>Gráfico de suas presenças »</Title>
			<Chart
				width={'400px'}
				height={'200px'}
				chartType="PieChart"
				loader={<Title>Carregando o gráfico...</Title>}
				data={[
					['Task', 'Presenças em aulas'],
					['Presente', 90],
					['Ausente', 10],
				]}
				rootProps={{ 'data-testid': '1' }}
				options={{
    			pieStartAngle: 60,
					slices: {
						0: { color: 'e02041' },
						1: { color: '2aed58' },
					},
					is3D: true,
				}}
			/>
		</>
	);
}