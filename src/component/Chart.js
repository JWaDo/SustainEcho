import React, { useEffect, useState } from 'react';
import ChartJS from 'chart.js';
import config from '../config/index';
import { Button, Box, Typography } from '@material-ui/core';
import 'chartjs-plugin-labels';

function Chart() {

    const [data, setData] = useState(config);
    const [step, setStep] = useState(1);    

    useEffect(() => {
        const currentCanva = document.getElementById("chart");
        const parentDiv = document.getElementById("parent");
        parentDiv.removeChild(currentCanva);

        const newCanva = document.createElement("canvas");
        newCanva.setAttribute("id", "chart");
        parentDiv.appendChild(newCanva);

        new ChartJS(newCanva, {
        type: 'pie',
        data: {
            labels: data.map(poste => poste.name),
            datasets: [{
                data: data.map(poste => poste.weight),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],  
                borderWidth: 1
            }]
        },
        options: {
            onClick: (event, element) => {
                    if(step < 2 ) {
                        const { _index } = element[0];
                        console.log(element[0])
                        console.log(element)    
                        if(!!data[_index].parts) {
                            setData(data[_index].parts);
                            setStep(step + 1);
                        } 
                    }    
            },
            animation: {
                duration: 1000,
            },
            plugins: {
                labels: {
                  render: ({percentage, value}) => `${percentage}% (${value}kgCO2)`
                },
            }
        }
    });
    }, [data])

    return (
        <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center" 
            alignItems="center"
            height="600px"
            id="parent"
        >
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    setStep(1);
                    setData(config);
                }}
            >
            Restart</Button>
            <canvas id="chart"></canvas>    
      
        </Box>
    )
}

export default Chart
