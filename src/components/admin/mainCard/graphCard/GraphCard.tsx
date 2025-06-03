import React from 'react';
import * as S from './GraphCard.styled';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChartData, ChartOptions } from 'chart.js';

const GraphCard = () => {
  return (
    <S.Container>
      <Line data={data} options={options} />
    </S.Container>
  );
};

const data: ChartData<'line'> = {
  labels: [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ],
  datasets: [
    {
      label: '방문자 수',
      data: [8, 6, 4, 0, 7, 5, 3],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      tension: 0.3,
      pointRadius: 5,
      pointBackgroundColor: '#ffffff',
      pointBorderColor: 'rgba(54, 162, 235, 1)',
      pointBorderWidth: 2,
      pointHoverRadius: 6,
    },
  ],
};

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        borderDash: [5, 5],
        color: 'rgba(0,0,0,0.1)',
      },
      ticks: {
        font: {
          size: 14,
        },
        color: '#333',
      },
    },
    y: {
      grid: {
        display: true,
        drawBorder: false,

        borderDash: [5, 5],
        color: 'rgba(0,0,0,0.1)',
      },
      ticks: {
        stepSize: 2,
        font: {
          size: 14,
        },
        color: '#333',
        callback: (value) => `${value}`,
      },
      beginAtZero: true,
      suggestedMax: 8,
    },
  },
  animation: {
    duration: 800,
    easing: 'easeOutQuart',
  },
};

export default GraphCard;
