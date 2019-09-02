

const getHouses = (req,res) => {
res.status(200).send(houses)

}



const complete = (req,res,) => {
const {name, address, city, state, zip} = req.body
let id;
if(houses.length === 0) {
    id = 1
} else {
    id = houses[houses.length-1].id+1
}
const newHouse = {
    id,
    name,
    address,
    city,
    state,
    zip
}
houses.push(newHouse)
res.status(200).send(houses)
}

// const deleteHouse = (req, res) => {
//     const {id} = req.params
//     const db = req.app.get('db')
//     db.delete_House([id]).then(() => {
//         res.status(200).send(`House ${id} was deleted`)
//     })

// }



module.exports = {
    getHouses,
    complete,
    // deleteHouse
}