const exp = require('express')
const {
    createData,
    getAllData,
    getSingleData,
    updateData,
    deleteData
} = require('../controllers/workoutControllers');
const router = exp.Router()

router.post('/', createData)
router.get('/', getAllData)
router.get('/:id', getSingleData)
router.patch('/:id', updateData)
router.delete('/:id', deleteData)

//To Test the Router
// router.post('/', (req, res) => {
//     res.json({mssg: "Post"})
// })
// router.get('/', (req, res) => {
//     res.json({mssg: "get"})
// })
// router.get('/:id', (req, res) => {
//     res.json({mssg: "get 1"})
// })
// router.patch('/:id', (req, res) => {
//     res.json({mssg: "update"})
// })
// router.delete('/:id', (req, res) => {
//     res.json({mssg: "delete"})
// })

module.exports = router