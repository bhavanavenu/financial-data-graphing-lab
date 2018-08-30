
axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
.then( response => {
    printTheChart(response.data)
})
   
// finData.get(`/chart`)
// .then(function (response) {
// printTheChart(response.data);
// })
// .catch(function (error) {
//     console.log(error);
// });

let printTheChart = ((finData) => {
//   let bpiTime = finData.map( data => data.bpi.bpiTime);
//   let bpiValue = finData.map(data => data.bpi.bpiValue);

  console.log(finData);
  console.log(Object.keys(finData.bpi));
  
  let ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Object.keys(finData.bpi),
      datasets: [{
        label: 'Bitcoin',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(finData.bpi)
      }]
    }
  });
});
