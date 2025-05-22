import { ChartOptions } from 'chart.js';

export const chartOptions: ChartOptions<'radar'> & ChartOptions = {
  elements: {
    //데이터 속성.
    line: {
      borderWidth: 1,
      borderColor: '#ff0000',
    },
    //데이터 꼭짓점.
    // point: {
    //   pointBackgroundColor: '#ff0000',
    // },
  },
  scales: {
    r: {
      ticks: {
        stepSize: 1,
        display: false,
      },
      grid: {
        color: '#ececec',
      },
      //라벨 속성 지정.
      pointLabels: {
        font: {
          size: 12,
          weight: 200,
          family: 'Pretendard',
        },
        color: '#000000',
      },
      angleLines: {
        display: false,
      },
      suggestedMin: 0,
      suggestedMax: 5,
    },
  },
  responsive: true,
  //위에 생기는 데이터 속성 label 타이틀을 지워줍니다.
  plugins: {
    legend: {
      display: false,
    },
  },
  //기본 값은 가운데에서 펴져나가는 애니메이션 형태입니다.
  animation: {
    duration: 0,
  },
};
