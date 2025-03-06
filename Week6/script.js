function myLoadFunction() {
    const ctx = document.getElementById('myChart').getContext('2d');
    var myChartConfig = {
        type: 'bar',
        data: {
            labels: ['NES', 'SNES', 'N64', 'GCN', 'Wii', 'Wii U', 'NSW'],
            /* The two datasets are given below as twi items in an array of json objects, i.e. [{}, {}]*/
            datasets: [
            {
                label: 'Nintendo Hardware',
                data: [61, 49, 32, 21, 101, 13, 151],
                backgroundColor: [
                    "grey",
                    "purple",
                    "yellow",
                    'rgba(153, 102, 255, 1)',
                    "lightgrey",
                    'rgb(10, 182, 255)',
                    "red"
                ],
                borderColor: [
                    'rgb(61, 61, 61)',
                    'rgb(151, 108, 216)',
                    'rgba(255, 206, 86, 1)',
                    'rgb(130, 75, 192)',
                    'rgb(60, 60, 60)',
                    'rgb(64, 204, 255)',
                    'rgb(215, 69, 101)'
                ],
                borderWidth: 1
            },
            {
                label: 'Nintendo Software',
                data: [50, 37.9, 22.4, 20.8, 92.1, 10.3, 135.9],
                backgroundColor: [
                    'rgb(61, 61, 61)',
                    'rgba(130, 54, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(135, 75, 192, 0.2)',
                    'rgba(53, 53, 53, 0.67)',
                    'rgba(64, 150, 255, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgb(143, 143, 143)',
                    'rgb(142, 54, 235)',
                    'rgba(255, 206, 86, 1)',
                    'rgb(126, 75, 192)',
                    'rgb(194, 194, 194)',
                    'rgb(64, 179, 255)',
                    'rgb(255, 99, 133)'
                ],
                borderWidth: 1
            }        
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    const myChart = new Chart(ctx, myChartConfig);
}

function myClickFunction() {
    const ctx = document.getElementById('myChart').getContext('2d');
    var myChartConfig = {
        type: 'bar',
        data: {
            labels: ['NES', 'SNES', 'N64', 'GCN', 'Wii', 'Wii U'],
            /* The two datasets are given below as twi items in an array of json objects, i.e. [{}, {}]*/
            datasets: [
            {
                label: 'Nintendo Hardware',
                data: [61, 49, 32, 21, 101, 13],
                backgroundColor: [
                    "grey",
                    "purple",
                    "yellow",
                    'rgba(153, 102, 255, 1)',
                    "lightgrey",
                    'rgb(10, 182, 255)'
                ],
                borderColor: [
                    'rgb(61, 61, 61)',
                    'rgb(151, 108, 216)',
                    'rgba(255, 206, 86, 1)',
                    'rgb(130, 75, 192)',
                    'rgb(60, 60, 60)',
                    'rgb(64, 204, 255)'
                ],
                borderWidth: 1
            },
            {
                label: 'Nintendo Software',
                data: [50, 37.9, 22.4, 20.8, 92.1, 10.3],
                backgroundColor: [
                    'rgb(61, 61, 61)',
                    'rgba(130, 54, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(135, 75, 192, 0.2)',
                    'rgba(53, 53, 53, 0.67)',
                    'rgba(64, 150, 255, 0.2)'
                ],
                borderColor: [
                    'rgb(143, 143, 143)',
                    'rgb(142, 54, 235)',
                    'rgba(255, 206, 86, 1)',
                    'rgb(126, 75, 192)',
                    'rgb(194, 194, 194)',
                    'rgb(64, 179, 255)'
                ],
                borderWidth: 1
            }        
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    const myChart = new Chart(ctx, myChartConfig);
}

var button10 = document.getElementById('year-button-10');
document.addEventListener('DOMContentLoaded', myLoadFunction);
button10.addEventListener('click', myClickFunction);