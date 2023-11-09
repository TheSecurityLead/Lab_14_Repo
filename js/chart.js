'use strict';

let chartData = [];
console.log(chartData);

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */


function renderChart() {
  const data = {
    labels: imageNames,
    datasets: [
      {
        label: 'Votes',
        data: imageVotes,
        backgroundColor: ['green']

      },
      {
        label: 'Views',
        data: imageViews,
        backgroundColor: ['rebeccapurple']
      }
    ]
  }
  let config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
  let myChart = new Chart(canvasElem, config);

}

renderChart();
