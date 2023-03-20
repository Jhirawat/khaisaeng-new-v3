/*=========================================================================================
    File Name: chart-chartjs.js
    Description: Chartjs Examples
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(window).on("load", function () {

  var $primary = '#7367F0';
  var $success = '#28C76F';
  var $danger = '#EA5455';
  var $warning = '#FF9F43';
  var $label_color = '#1E1E1E';
  var grid_line_color = '#dae1e7';
  var scatter_grid_color = '#f3f3f3';
  var $scatter_point_light = '#D1D4DB';
  var $scatter_point_dark = '#5175E0';
  var $white = '#fff';
  var $black = '#000';

  var themeColors = [$primary, $success, $danger, $warning, $label_color];

  // Line Chart
  // ------------------------------------------

  //Get the context of the Chart canvas element we want to select
  var lineChartctx = $("#line-chart");

  // Chart Options
  var linechartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top',
    },
    hover: {
      mode: 'label'
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          color: grid_line_color,
        },
        scaleLabel: {
          display: true,
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: grid_line_color,
        },
        scaleLabel: {
          display: true,
        }
      }]
    },
    title: {
      display: true,
      text: 'ประเภทการลา '
    }
  };

  // Chart Data
  var linechartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    datasets: [
    //     {
    //   label: "Africa",
    //   data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
    //   borderColor: $primary,
    //   fill: false
    // },
     {
      data: [1, 10, 20, 14, 0, 5, 7, 9, 16, 20 ,2,3,4,5,6,7,8,21,0,7,5,4,2,4,5,6,10,11,20,30],
      label: "ลากิจ",
      borderColor: $success,
      fill: false
    }, {
      data: [1, 3, 2, 10, 20, 26, 8, 37, 16, 34,1, 10, 20, 14, 0, 5, 7, 9, 16, 20,21,12,14,15,31,12,13,14,15,20 ],
      label: "ลาป่วย",
      borderColor: $danger,
      fill: false
    }, {
      data: [1, 20, 10, 16, 14, 28, 24, 17, 8, 14, 10, 20, 26, 8, 37, 16, 34,1, 10, 20, 14, 0, 5, 7,21,15,21,28,29,30],
      label: "ลาพักร้อน",
      borderColor: $warning,
      fill: false
    },
    //  {
    //   data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
    //   label: "North America",
    //   borderColor: $label_color,
    //   fill: false
    // }
]
  };

  var lineChartconfig = {
    type: 'line',

    // Chart Options
    options: linechartOptions,

    data: linechartData
  };

  // Create the chart
  var lineChart = new Chart(lineChartctx, lineChartconfig);




  // Bar Chart
  // ------------------------------------------

  //Get the context of the Chart canvas element we want to select
  var barChartctx = $("#bar-chart");

  // Chart Options
  var barchartOptions = {
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each bar to be 2px wide
    elements: {
      rectangle: {
        borderWidth: 2,
        borderSkipped: 'left'
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: { display: false },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          color: grid_line_color,
        },
        scaleLabel: {
          display: true,
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: grid_line_color,
        },
        scaleLabel: {
          display: true,
        },
        ticks: {
          stepSize: 1000
        },
      }],
    },
    title: {
      display: true,
      text: 'ประเภทการลา'
    },

  };

  // Chart Data
  var barchartData = {
    labels: [ "ลากิจ", "ลาป่วย", "ลาพักร้อน"],
    datasets: [{
      label: "Population (millions)",
      data: [2478, 5267, 734, 784, 433],
      backgroundColor: themeColors,
      borderColor: "transparent"
    }]
  };

  var barChartconfig = {
    type: 'bar',

    // Chart Options
    options: barchartOptions,

    data: barchartData
  };

  // Create the chart
  var barChart = new Chart(barChartctx, barChartconfig);



  // Horizontal Chart
  // -------------------------------------

  // Get the context of the Chart canvas element we want to select
  var horizontalChartctx = $("#horizontal-bar");

  var horizontalchartOptions = {
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      rectangle: {
        borderWidth: 2,
        borderSkipped: 'right',
        borderSkipped: 'top',
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          color: grid_line_color,
        },
        scaleLabel: {
          display: true,
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: grid_line_color,
        },
        scaleLabel: {
          display: true,
        }
      }]
    },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  };

  // Chart Data
  var horizontalchartData = {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "Population (millions)",
      data: [2478, 5267, 734, 784, 433],
      backgroundColor: themeColors,
      borderColor: "transparent"
    }]
  };

  var horizontalChartconfig = {
    type: 'horizontalBar',

    // Chart Options
    options: horizontalchartOptions,

    data: horizontalchartData
  };

  // Create the chart
  var horizontalChart = new Chart(horizontalChartctx, horizontalChartconfig);



  // Pie Chart
  // --------------------------------


  //Get the context of the Chart canvas element we want to select
  var pieChartctx = $("#simple-pie-chart");

  // Chart Options
  var piechartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  };

  // Chart Data
  var piechartData = {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "My First dataset",
      data: [2478, 5267, 734, 784, 433],
      backgroundColor: themeColors,
    }]
  };

  var pieChartconfig = {
    type: 'pie',

    // Chart Options
    options: piechartOptions,

    data: piechartData
  };

  // Create the chart
  var pieSimpleChart = new Chart(pieChartctx, pieChartconfig);



  // Doughnut Chart
  // ---------------------------------------------

  //Get the context of the Chart canvas element we want to select
  var doughnutChartctx = $("#simple-doughnut-chart");

  // Chart Options
  var doughnutchartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  };

  // Chart Data
  var doughnutchartData = {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "My First dataset",
      data: [2478, 5267, 734, 784, 433],
      backgroundColor: themeColors,
    }]
  };

  var doughnutChartconfig = {
    type: 'doughnut',

    // Chart Options
    options: doughnutchartOptions,

    data: doughnutchartData
  };

  // Create the chart
  var doughnutSimpleChart = new Chart(doughnutChartctx, doughnutChartconfig);


  // Radar Chart
  // ----------------------------------------

  //Get the context of the Chart canvas element we want to select
  var radarChartctx = $("#radar-chart");

  // Chart Options
  var radarchartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: {
      position: 'top',
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItems, data) {
          return data.datasets[tooltipItems.datasetIndex].label + ": " + tooltipItems.yLabel;
        }
      }
    },
    title: {
      display: true,
      text: 'Distribution in % of world population'
    },
    scale: {
      reverse: false,
      ticks: {
        beginAtZero: true,
        stepSize: 10
      }
    }
  };

  // Chart Data
  var radarchartData = {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "1950",
      fill: true,
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBorderColor: $white,
      pointBackgroundColor: "rgba(179,181,198,1)",
      data: [8.77, 55.61, 21.69, 6.62, 6.82],
    }, {
      label: "2050",
      fill: true,
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBorderColor: $white,
      pointBackgroundColor: "rgba(255,99,132,1)",
      data: [25.48, 54.16, 7.61, 8.06, 4.45],
    },]
  };

  var radarChartconfig = {
    type: 'radar',

    // Chart Options
    options: radarchartOptions,

    data: radarchartData
  };

  // Create the chart
  var polarChart = new Chart(radarChartctx, radarChartconfig);



  // Polar Chart
  // -----------------------------------

  //Get the context of the Chart canvas element we want to select
  var polarChartctx = $("#polar-chart");

  // Chart Options
  var polarchartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    },
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 2000
      },
      reverse: false
    },
    animation: {
      animateRotate: false
    }
  };

  // Chart Data
  var polarchartData = {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: themeColors,
      data: [2478, 5267, 734, 784, 433]
    }],
  };

  var polarChartconfig = {
    type: 'polarArea',

    // Chart Options
    options: polarchartOptions,

    data: polarchartData
  };

  // Create the chart
  var polarChart = new Chart(polarChartctx, polarChartconfig);




  // Bubble Chart
  // ---------------------------------------

  //Get the context of the Chart canvas element we want to select
  var bubbleChartctx = $("#bubble-chart");

  var randomScalingFactor = function () {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
  };

  // Chart Options
  var bubblechartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          color: grid_line_color,
        },
        scaleLabel: {
          display: true,
          labelString: "GDP (PPP)"
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: grid_line_color,
        },
        scaleLabel: {
          display: true,
          labelString: "Happiness"
        },
        ticks: {
          stepSize: 0.5
        },
      }]
    },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  };

  // Chart Data
  var bubblechartData = {
    animation: {
      duration: 10000
    },
    datasets: [{
      label: ["China"],
      backgroundColor: "rgba(255,221,50,0.2)",
      borderColor: "rgba(255,221,50,1)",
      data: [{
        x: 21269017,
        y: 5.245,
        r: 15
      }],
    }, {
      label: ["Denmark"],
      backgroundColor: "rgba(60,186,159,0.2)",
      borderColor: "rgba(60,186,159,1)",
      data: [{
        x: 258702,
        y: 7.526,
        r: 10
      }]
    }, {
      label: ["Germany"],
      backgroundColor: "rgba(0,0,0,0.2)",
      borderColor: $black,
      data: [{
        x: 3979083,
        y: 6.994,
        r: 15
      }]
    }, {
      label: ["Japan"],
      backgroundColor: "rgba(193,46,12,0.2)",
      borderColor: "rgba(193,46,12,1)",
      data: [{
        x: 4931877,
        y: 5.921,
        r: 15
      }]
    }]
  };

  var bubbleChartconfig = {
    type: 'bubble',

    // Chart Options
    options: bubblechartOptions,

    data: bubblechartData
  };

  // Create the chart
  var bubbleChart = new Chart(bubbleChartctx, bubbleChartconfig);



  // Scatter Chart
  // ------------------------------------

  //Get the context of the Chart canvas element we want to select
  var scatterChartctx = $("#scatter-chart");

  // Chart Options
  var scatterchartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 800,
    title: {
      display: false,
      text: 'Chart.js Scatter Chart'
    },
    scales: {
      xAxes: [{
        position: 'top',
        gridLines: {
          color: scatter_grid_color,
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'x axis'
        }
      }],
      yAxes: [{
        position: 'right',
        gridLines: {
          color: scatter_grid_color,
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'y axis'
        }
      }]
    }
  };

  // Chart Data
  var scatterchartData = {
    datasets: [{
      label: "My First dataset",
      data: [{
        x: 65,
        y: 28,
      }, {
        x: 59,
        y: 48,
      }, {
        x: 80,
        y: 40,
      }, {
        x: 81,
        y: 19,
      }, {
        x: 56,
        y: 86,
      }, {
        x: 55,
        y: 27,
      }, {
        x: 40,
        y: 89,
      }],
      backgroundColor: "rgba(209,212,219,.3)",
      borderColor: "transparent",
      pointBorderColor: $scatter_point_light,
      pointBackgroundColor: $white,
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    }, {
      label: "My Second dataset",
      data: [{
        x: 45,
        y: 17,
      }, {
        x: 25,
        y: 62,
      }, {
        x: 16,
        y: 78,
      }, {
        x: 36,
        y: 88,
      }, {
        x: 67,
        y: 26,
      }, {
        x: 18,
        y: 48,
      }, {
        x: 76,
        y: 73,
      }],
      backgroundColor: "rgba(81,117,224,.6)",
      borderColor: "transparent",
      pointBorderColor: $scatter_point_dark,
      pointBackgroundColor: $white,
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    }]
  };

  var scatterChartconfig = {
    type: 'scatter',

    // Chart Options
    options: scatterchartOptions,

    data: scatterchartData
  };

  // Create the chart
  var scatterChart = new Chart(scatterChartctx, scatterChartconfig);

});
