$(function () {
  let type, labels, data, backgroundColor, title, chart, datax, seller;
  let ctx = document.getElementById("mytrade").getContext("2d");
  seller = $("#seller-name").text().toLowerCase();
  alertMessage();
  refresh();

  $("#chart-type").on("change", function () {
    type = $(this).val();
    datax = display(type, labels, backgroundColor, data, title);
    myChart.destroy();
    myChart = new Chart(ctx, datax);
  });

  function refresh() {
    $.getJSON("data.php?mytrades", function (trades) {
      labels = [];
      data = [];
      backgroundColor = [];
      trades.forEach((item) => {
        labels.push(item.name);
        data.push(item.quantity);
      });
      for (let i = 0; i < trades.length; ++i) {
        backgroundColor.push(getOtherColor());
      }
      title = $("#display-option").val().toUpperCase();
      let type = $("#chart-type").val();
      datax = display(type, labels, backgroundColor, data, title);
      myChart = new Chart(ctx, datax);
    });
  }

  function alertMessage() {
    $.getJSON("data.php?alert", function (drugs) {
      $("#alert-span").text(drugs.length);
      $("#alert-list").empty();
      drugs.forEach((drug) => {
        $(`<div class="notification">
		<div class="notification-content">${drug.name} <i class="badge bg-red" >${drug.quantity}</i></div>
		</div>`).appendTo($("#alert-list"));
      });
    });
  }

  function getOtherColor() {
    let color = "#";
    let chain = "0123456789abcdef";
    for (let indice, i = 0; i < 6; ++i) {
      indice = Math.floor(16 * Math.random(chain));
      color = color + chain[indice];
    }
    return color;
  }

  function display(type, labels, backgroundColor, data, title) {
    return {
      type,
      data: {
        labels,
        datasets: [
          {
            label: "My First dataset",
            backgroundColor,
            data,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          display: true,
          labels: {
            fontColor: "rgb(132, 0, 132)",
          },
        },
        title: {
          display: true,
          text: title,
        },
      },
    };
  }
});
