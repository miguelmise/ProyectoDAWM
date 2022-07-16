let myChart
let image

  function peticion() {

    let imagen = document.getElementById('fotografia');
    if (imagen) {
      padre = imagen.parentNode;
      padre.removeChild(imagen);
    }
    document.getElementById('tarjeta').style.display = 'none'; // hide
    document.getElementById('tabla').style.display = 'none'; // show
    document.getElementById('pokemon').style.display = 'block'; // hide


    let texto = document.getElementById('textBusqueda').value;
    let body = ''
    let foto = ''

    url = `https://pokeapi.co/api/v2/pokemon/${texto}`

    fetch(url)//funcion fech para consumir el API
      .then(response => response.json())//recibe la respuesta y proceso como json
      .then(data => mostrarData(data))//envio la data a una funcion mostrarData
      .catch(error => console.log(error))//en caso de erro lo muestro por consola

    const mostrarData = (data) => {//funcion para mostrar los datos

      body += `<tr><td>${data.types[0].type.name}</td>
            <td>${data.name}</td>
            <td><img src="${data.sprites.front_shiny}"></td></tr>`

      document.getElementById('pokemones').innerHTML = body;

      document.getElementById('titulo').innerHTML = data.name;
      document.getElementById('tipopok').innerHTML = "Tipo: " + data.types[0].type.name;
      document.getElementById('tamanopok').innerHTML = "Tamaño: " + data.height;
      document.getElementById('ataquepok').innerHTML = "Ataque: " + data.stats[0].base_stat;
      image = document.createElement('img')
      image.src = data.sprites.other.dream_world.front_default
      image.id = 'fotografia'
      image.className = "card-img-top"
      document.querySelector('#foto').appendChild(image)


    }

  }

  function listar(tipo) {

    document.getElementById('tarjeta').style.display = 'block'; // hide
    document.getElementById('tabla').style.display = 'block'; // show
    document.getElementById('pokemon').style.display = 'none'; // hide

    

    let body = ''
    let label = [];
    let dataset = [];
    let ataque = [];
    let indice = 0
    for (let index = 1; index < 151; index++) {

      url = `https://pokeapi.co/api/v2/pokemon/${index}`

      fetch(url)//funcion fech para consumir el API
        .then(response => response.json())//recibe la respuesta y proceso como json
        .then(data => mostrarData(data))//envio la data a una funcion mostrarData
        .catch(error => console.log(error))//en caso de erro lo muestro por consola

      const mostrarData = (data) => {//funcion para mostrar los datos



        if (data.types[0].type.name == tipo) {
          label[indice] = data.name;
          dataset[indice] = data.height;
          ataque[indice] = data.stats[0].base_stat;
          body += `<tr><td>${data.types[0].type.name}</td>
                <td>${data.name}</td>
                <td><img src="${data.sprites.front_shiny}"></td></tr>`
          indice++
        }

        document.getElementById('pokemones').innerHTML = body;
      }
    }
  
  grafico(label, dataset, ataque)
}

function grafico(nombres, datos, datos2) {
  var ctx = document.getElementById("myChart").getContext("2d");
  if (myChart) {
    myChart.destroy();
  }
  myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: nombres,
      datasets: [{
        label: 'Tamaño',
        data: datos,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'Ataque',
        data: datos2,
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
        }
      },
      interaction: {
        intersect: false,
        mode: 'index',
      },

      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5]
          },
          ticks: {
            display: true,
            padding: 10,
            color: '#fbfbfb',
            font: {
              size: 11,
              family: "Open Sans",
              style: 'normal',
              lineHeight: 2
            },
          }
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5]
          },
          ticks: {
            display: true,
            color: '#ccc',
            padding: 20,
            font: {
              size: 11,
              family: "Open Sans",
              style: 'normal',
              lineHeight: 2
            },
          }
        },
      }

    }
  });
}

window.onload = function () {

  document.getElementById('textBusqueda').addEventListener("keyup", peticion)
  document.getElementById('planta').addEventListener('click', function () { listar("grass") })
  document.getElementById('fuego').addEventListener('click', function () { listar("fire") })
  document.getElementById('agua').addEventListener('click', function () { listar("water") })
  document.getElementById('piedra').addEventListener('click', function () { listar("rock") })

}