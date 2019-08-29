window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", // "light2", "dark1", "dark2"
        animationEnabled: true, // change to true		
        title:{
            text: "Visitor Count"
        },
        data: [
        {
            // Change type to "bar", "area", "spline", "pie",etc.
            type: "area",
            dataPoints: [
                { label: "HongKong",  y: 10  },
                { label: "Japan", y: 15  },
                { label: "China", y: 40  },
                { label: "Korea",  y: 30  },
                { label: "Philippines",  y: 28  }
            ]
        }
        ]
    });
    setTimeout(function(){
        chart.render();
    },2000);

    
    }