import React from 'react'

export default function Chart({xValues, yMaxValues, yMinValues}) {
    return (
        <div>
            {
                new Chart("myChart", {
                    type: "line",
                    data: {
                        labels: xValues,
                        datasets: [{
                            data: yMaxValues,
                            borderColor: "red",
                            fill: false
                        },{
                            data: yMinValues,
                            borderColor: "green",
                            fill: false
                        }]
                    },
                    options: {
                        legend: {display: false}
                    }
                })
            }
        </div>
    )
}
