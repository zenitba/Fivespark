import express from 'express'

// de basis url van de api
const url = 'https://api.fivespark.com/admin/content'

// maak een nieuwe express app
const server = express()

// Stel het poortnummer in
server.set('port', process.env.PORT || 8000)

// Stel de view engine in
server.set('view engine', 'ejs')
server.set('views', './views')

// Stel de public map in
server.use(express.static('public'))

// Maak een route voor de index /categories
server.get('/', (request, response) => {
 
    const categoriesUrl= url + `/categories`

    fetchJson(categoriesUrl).then((data) => {
      response.render('index', data)
    })
  })

  //  pinda-ei pagina producten
server.get("/pinda-ei", async (request, response) => {
  const query = request.query.categorieId;

  const productenUrl = url + `/producten?categorieId=${query}`;

  await fetchJson(productenUrl).then((data) => {
      response.render("pinda-ei", { data: data });
  });
});

// Route voor de producten pagina
server.get("/product-pagina", async (request, response) => {
  const query = request.query.id;

  const productenUrl = url + `/product?id=${query}`;

  await fetchJson(productenUrl).then((data) => {
      response.render("product-pagina", { data: data });
  });
});

// Route voor de checkout pagina
server.get("/checkout", async (request, response) => {
  const query = request.query.id;

  const productenUrl = url + `/product?id=${query}`;

  await fetchJson(productenUrl).then((data) => {
      response.render("checkout", { data: data });
  });
});



    // definieer de fetchJson functie
    async function fetchJson(url) {
        return await fetch(url)
          .then((response) => response.json())
          .catch((error) => error)
      }
      
      // Start met luisteren
    server.listen(server.get('port'), () => {
        console.log(`Application started on http://localhost:${server.get('port')}`)
      })
// import express from 'express';
// import fetch from 'node-fetch';

// const url = 'https://api.fivespark.com/admin/content';

// const server = express();
// server.set('port', process.env.PORT || 8000);
// server.set('view engine', 'ejs');
// server.set('views', './views');
// server.use(express.static('public'));

// server.get('/', (request, response) => {
//   const pillarsUrl = url + '/pillars';

//   fetchJson(pillarsUrl)
//     .then((data) => {
//       response.render('index', data);
//     })
//     .catch((error) => {
//       console.error(error);
//       response.sendStatus(500);
//     });
// });

// server.get("/pinda-ei", async (request, response) => {
//   const query = request.query.pillarsId;

//   const activitiesUrl = url + `/activities?pillarsId=${query}`;

//   await fetchJson(activitiesUrl)
//     .then((data) => {
//       response.render("pinda-ei", { data: data });
//     })
//     .catch((error) => {
//       console.error(error);
//       response.sendStatus(500);
//     });
// });
// async function fetchJson(url) {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const contentType = response.headers.get('content-type');
//     if (!contentType || !contentType.includes('application/json')) {
//       throw new Error('Response is not in JSON format!');
//     }

//     return await response.json();
//   } catch (error) {
//     throw error;
//   }
// }
//       // Start met luisteren
//       server.listen(server.get('port'), () => {
//         console.log(`Application started on http://localhost:${server.get('port')}`)
//       })