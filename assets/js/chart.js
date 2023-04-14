$(function () {
  alertMessage();
  $('#trade-by-seller, label[for="trade-by-seller"]').hide();
  const ctx = document.getElementById("firstChart").getContext("2d");
  let myChart, datax, labels, backgroundColor, data, displayOption;
  let title = $("#display-option").val().toUpperCase();
  $("#chart-type").on("change", function () {
    let type = $(this).val();
    myChart.destroy();
    datax = display(labels, data, backgroundColor, type, title);
    myChart = new Chart(ctx, datax);
  });
  $("#trade-by-seller").on("change", function () {
    $("#display-option").trigger("change");
  });
  $.getJSON("data.php?sellers", function (sellers) {
    $("#trade-by-seller").empty();
    sellers.forEach((seller) => {
      const option = $(
        `<option value="${seller.username}">${seller.username}</option>`
      );
      $("#trade-by-seller").append(option);
    });
  });
  $("#display-option").on("change", function () {
    displayOption = $(this).val();
    title = displayOption.toUpperCase();
    if (displayOption == "trade-by") {
      $('#trade-by-seller, label[for="trade-by-seller"]').show();
      let seller = $("#trade-by-seller").val();
      displayOption += "=" + seller;
      title = title + "-" + seller.toUpperCase();
    } else {
      $('#trade-by-seller, label[for="trade-by-seller"]').hide();
    }
    myChart.destroy();
    refresh("data.php", displayOption);
  });
  displayOption = $("#display-option").val();
  refresh("data.php", displayOption);

  function refresh(url, parameter) {
    $.getJSON(url, parameter, function (drugs) {
      labels = [];
      data = [];
      backgroundColor = [];
      drugs.forEach((drug) => {
        labels.push(drug.name);
        data.push(drug.quantity);
      });
      for (let i = 0; i < drugs.length; ++i) {
        backgroundColor.push(getColor());
      }
      let type = $("#chart-type").val();
      datax = display(labels, data, backgroundColor, type, title);
      myChart = new Chart(ctx, datax);
    });
  }

  function getColor() {
    let color = "#";
    let chain = "0123456789abcdef";
    for (let i = 0, indice; i < 6; ++i) {
      indice = Math.floor(16 * Math.random());
      color += chain[indice];
    }
    return color;
  }

  function display(labels, data, backgroundColor, type, title) {
    return {
      type,
      data: {
        labels,
        datasets: [
          {
            label: "Quantity",
            data,
            backgroundColor,
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
});
