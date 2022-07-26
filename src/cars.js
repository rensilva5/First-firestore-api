import { dbConnect } from "./dbConnect.js";

export function getAllCars(req, res) {
    // connect to db
    const db = dbConnect();
    // get all docs from cars collection
    db.collection('cars').get()
      .then(collection => {
        // reshape collection to array
        const cars = collection.docs.map(doc => doc.data())
        // send array to response
        res.send(cars);
      })
      .catch( err => res.status(500).send(err))
}
export function createCar(req, res) {
    // get a new car from request body
    const newCar = req.body
    // connect to database
    const db = dbConnect();
    // add that car to cars collection
    db.collection('cars').add(newCar)
      .then(doc => {
        res.status(201).send({
            success: true,
            id: doc.id
        })

      
      })
      .catch(err => handleError(err, res))
    // send back new doc id
}

function handleError(err, res) {
    console.error(err)
    res.status(500).send(err)
}