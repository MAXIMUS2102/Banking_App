"use client"
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement, Legend, Tooltip} from 'chart.js'
import { AlignCenter } from 'lucide-react';
Chart.register(ArcElement);


const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label:'Banks',
                data:[1250, 2500, 3750],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels:['Bank 1', 'Bank 2', 'Bank 3']
    }
  return (
    <div>
      <Doughnut data={data} 
        options={
            {
                cutout:'60%',
                // plugins: {
                //     legend: {
                //         display: true
                //     }
                // }
            }
        }
      />
    </div>
  )
}

export default DoughnutChart
