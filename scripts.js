





// literacy rate data
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['व्यक्ति शिक्षितताअनुसार', '२०२३'],
          ['शिक्षित',     11513],
          ['अशिक्षित',     7956],
        ]);

        var options = {
          title: 'शिक्षाको दर',
          
          fontSize: 20,
          fontName: 'Nepali' // Replace 'Poppins' with the Nepali font you want to use
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }



      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['वर्ग', 'मानिसहरूको संख्या'],
          ["नर्सरी/केजी",213],
          ["कक्षा २", 125],
          ["कक्षा ३ ",151],
          ['कक्षा ४', 195],
          ["कक्षा ५", 417],
          ["कक्षा ७", 333],
          ["कक्षा ८", 694],
          ["कक्षा ९",572],
          ['कक्षा १० (टेष्टपास)', 1158],
          ["एस.एल.सी./एस.ई.ई.", 1720],
          ["१० जोड २ वा सो सरह", 1356],
          ["स्नातकोत्तर वा सो सरह", 126],
          ['स्नातकोत्तर वा सो सरह', 126],
          
        ]);

        var options = {
          width: 800,
          legend: { position: 'none' },
          chart: {
            title: 'शैक्षिक योग्यता',
            
          
          },
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
      };




      const labels = ['पढ्ने-खर्च-नभएर', 'पढ्ने-इच्छा-नभएर', 'शैक्षिक-संस्था-टाढा-भएर', 'बसाई-सरेकोले',  'विवाह-भएर', 'अन्य'];
            const data = {
                labels: labels,
                datasets: [{
                    label: 'विद्यालय बिचैमा छोडेको कारण',
                    backgroundColor: 'blue',
                    borderColor: 'skyblue',
                    data: [488, 379, 49,  7, 226, 101],
                    fill: false,
                }]
            };

            // Configuration options
            const config = {
                type: 'line',
                data: data,
                options: {
                    responsive: true,
                    title: {
                        display: true,
                       

                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: 'प्रकार'
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: 'संख्या'
                            }
                        }
                    }
                }
            };

            // Create the chart
            var myChart = new Chart(
                document.getElementById('myChart'),
                config
            );
       
     
      


            