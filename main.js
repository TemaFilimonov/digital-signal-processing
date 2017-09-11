      google.charts.load('current', {'packages':['annotationchart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var mas1 = [['X', 'y1','y2','y3','y4','y5']];
        var mas2 = [['X', 'y1','y2','y3','y4','y5']];
        var mas3 = [['X', 'y1','y2','y3','y4','y5']];
        var mas4 = [['X', 'y1']];

        function go1(){
          //alert("Старт");
          var A = 5;
          var f = 1;
          var phi = [Math.PI/4,Math.PI/2,3*Math.PI/4, 0, Math.PI];

          var y1 = [];
          var y2 = [];
          var y3 = [];
          var y4 = [];
          var y5 = [];
          for(var i=0;i<2048;i++){
            y1.push(A*Math.sin((2*Math.PI*f*i)/2048+phi[0]));
            y2.push(A*Math.sin((2*Math.PI*f*i)/2048+phi[1]));
            y3.push(A*Math.sin((2*Math.PI*f*i)/2048+phi[2]));
            y4.push(A*Math.sin((2*Math.PI*f*i)/2048+phi[3]));
            y5.push(A*Math.sin((2*Math.PI*f*i)/2048+phi[4]));
            mas1.push([i,y1[i],y2[i],y3[i],y4[i],y5[i]]);
          }
        }


        function go2(){
          //alert("Старт");
          var A = 1;
          var phi = Math.PI;
          var f = [1,3,2, 4, 10];

          var y1 = [];
          var y2 = [];
          var y3 = [];
          var y4 = [];
          var y5 = [];
          for(var i=0;i<2048;i++){
            y1.push(A*Math.sin((2*Math.PI*f[0]*i)/2048+phi));
            y2.push(A*Math.sin((2*Math.PI*f[1]*i)/2048+phi));
            y3.push(A*Math.sin((2*Math.PI*f[2]*i)/2048+phi));
            y4.push(A*Math.sin((2*Math.PI*f[3]*i)/2048+phi));
            y5.push(A*Math.sin((2*Math.PI*f[4]*i)/2048+phi));
            mas2.push([i,y1[i],y2[i],y3[i],y4[i],y5[i]]);
          }
        }


        function go3(){
          var f = 4;
          var phi = Math.PI;
          var A = [3,5,10, 4, 8];

          var y1 = [];
          var y2 = [];
          var y3 = [];
          var y4 = [];
          var y5 = [];
          for(var i=0;i<2048;i++){
            y1.push(A[0]*Math.sin((2*Math.PI*f*i)/2048+phi));
            y2.push(A[1]*Math.sin((2*Math.PI*f*i)/2048+phi));
            y3.push(A[2]*Math.sin((2*Math.PI*f*i)/2048+phi));
            y4.push(A[3]*Math.sin((2*Math.PI*f*i)/2048+phi));
            y5.push(A[4]*Math.sin((2*Math.PI*f*i)/2048+phi));
            mas3.push([i,y1[i],y2[i],y3[i],y4[i],y5[i]]);
        }
      }


        function go4(){
          var f = [1,2,3,4,5];
          var phi = [Math.PI/9,Math.PI/4,Math.PI/3, Math.PI/6, 0];
          var A = 5;

          var y1 = [];

          for(var i=0;i<2048;i++){
            var sum=0;
            for(var j=0;j<5;j++){
              sum += A*Math.sin(((2*Math.PI*f[j]*i)/2048)+phi[j]);
            }
            y1.push(sum);
            mas4.push([i,y1[i]]);
        }
      }




        go1();
        go2();
        go3();
        go4();


        var data1 = google.visualization.arrayToDataTable(mas1);
        var data2 = google.visualization.arrayToDataTable(mas2);
        var data3 = google.visualization.arrayToDataTable(mas3);
        var data4 = google.visualization.arrayToDataTable(mas4);

        var options = {
          title: 'Graph 1',
          curveType: 'function',
          legend: { position: 'bottom' },
        };
        //go();
        var chart1 = new google.visualization.LineChart(document.getElementById('chart1'));
        var chart2 = new google.visualization.LineChart(document.getElementById('chart2'));
        var chart3 = new google.visualization.LineChart(document.getElementById('chart3'));
        var chart4 = new google.visualization.LineChart(document.getElementById('chart4'));
        
        chart1.draw(data1, options);
        chart2.draw(data2, options);
        chart3.draw(data3, options);
        chart4.draw(data4, options);
      }

      