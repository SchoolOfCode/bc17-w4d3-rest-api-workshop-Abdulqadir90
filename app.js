import express from "express";

import {
  deleteAstronautById,
  updateAstronautById,
  getAstronautsByName,
  replaceAstronautById,
  getAstronauts,
  createAstronaut,
  getAstronautById,
} from "./models/astronauts.js";

const app = express(); // used to set up the server
app.use(express.json()); // enables JSON for incoming requests
const PORT = 3000;


  


app.listen(PORT, ()=> {
console.log(`Servers started on port ${PORT}`)
});


/* 

All json responses for this tasks should follow the pattern:

res.json({
  "success": boolean,
  "payload": returnedData
})

*/

// Task 1

/* Write a request handler to return the correct response when a `GET` request is received to `/astronauts`. Choose the appropriate 
function from the imported functions at the top of the `app.js` to get your data. */

app.get('/astronauts', async (req, res) => { // sets up the route handler for GET requests with path of /astronauts
  try {
    const astronautss = await getAstronautById(); // getastronauts is called to fetch the data
    res.json({
      success: true, 
      payload: astronautss
    });
  } catch (error) {
    res.status(500).json({ // if an error occurs, a 500 status is returned with error message
      success: false,
      payload: "Cant get astronauts data"
    });
    
  }
});

// Task 2

/* Write a request handler to return the correct response and perform the correct action when a `POST` request is received to 
`/astronauts`. Choose the appropriate function from the imported functions at the top of the `app.js` to perform the action. */

app.post('/astronauts', async (req, res) => { // sets up the route handler for GET requests with path of /astronauts
  try {
    const newAstronauts = await createAstronaut(req.body); // createastronaut is called to fetch the data sent in the body of a http request
    res.json({
      success: true, 
      payload: newAstronauts
    });
  } catch (error) {
    res.status(500).json({ // if an error occurs, a 500 status is returned with error message
      success: false,
      payload: "Cant get astronauts data"
    });
    
  }
});


// Task 3

/* Write the request handler to return the data from the function getAstronautById. Have this handler listen to requests at the 
appropriate path. */

app.get('/astronauts/:id', async (req, res) => { // sets up the route handler for GET requests with path of /astronauts
  try {
    const astroId = await getAstronautById(req.params.id); // req.params.id contains the value of the id, when a request is made to URL, astronauts/999, express extracts 999 and assigns it to req.params.id = 999
    res.json({
      success: true, 
      payload: astroId
    });
  } catch (error) {
    res.status(500).json({ // if an error occurs, a 500 status is returned with error message
      success: false,
      payload: "Cant get astronauts data"
    });
    
  }
});



// Task 4

/* Write the request handler to perform the action and return the data from the function replaceAstronautById. Have this handler 
listen to requests at the appropriate path. */

// Task 5

/* Write the request handler to perform the action and return the data from the function deleteAstronautById. Have this handler 
listen to requests at the appropriate path. */

// Task 6

/* Write the request handler to perform the action and return the data from the function updateAstronautById. Have this handler 
listen to requests at the appropriate path. */

export default app;
