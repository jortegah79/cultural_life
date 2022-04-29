const migrafico1 = document.getElementById("migrafico1").getContext("2d");
const datosActuales = {
    label: "Uso de navegadores ",
    data: [63.59, 19.14, 3.76, 3.41, 3.31, 2.19, 4.6],
    backgroundColor: ["#6699dd", "#f00", "#0f0", "#00f", "#f77", "#77f", "#a44"],
    borderColor: "#333333",
    borderWidth: 2
};
const generaGrafico1 = new Chart(migrafico1, {
    type: 'doughnut',
    data: {
        labels: ["Google Chrome", "Safari", "Mozilla Firefox", "Edge", "Samsung Internet", "Opera", "Otros"],
        datasets: [
            datosActuales
        ]
    },
    options: {
        title: {
            display: true,
            text: "Utilización de navegadores"
        }
    }
});
const migrafico = document.getElementById("migrafico2").getContext("2d");

const generaGrafico2 = new Chart(migrafico2, {
    type: 'bar',
    data: {
        labels: ["Google Chrome", "Safari", "Mozilla Firefox", "Edge", "Samsung Internet", "Opera", "Otros"],
        datasets: [
            datosActuales
        ]
    },
    options: {
        title: {
            display: true,
            text: "Utilización de navegadores"
        }
    }
});