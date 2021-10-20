const express= require ('express');
const router = express.Router()
const userData = require('../schemas/userDatabase')


router.get('/',async (req,res) =>{
    try{
        const routes = await userData.find()
        res.json(routes)
    }catch(error){
        res.send('uh-oh something went wrong' + error)
    }

})

router.get('/:id',async (req,res) =>{
    try{
        const singleUser = await userData.findById(req.params.id)
        res.json(singleUser)
    }catch(error){
        res.send('uh-oh something went wrong' + error)
    }

})
router.post('/',async (req,res) =>{
    const userPost = new userData({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    })
    try{
        const userSave = await userPost.save()
        res.json(userSave)
    }catch(error){
        res.send('error while saving the user into database' + error)
    }

})
router.patch('/:id',async (req,res) =>{
    try{
        const getUsers = await userData.findById(req.params.id)
        getUsers.name = req.body.name,
        getUsers.age = req.body.age,
        getUsers.email = req.body.email
        const saveUser = await getUsers.save()
        res.json(saveUser)
    }catch(error){
        res.send('error while updating the user into database' + error)
    }
})

router.delete('/:id',async (req,res) =>{
    try{
        const removeUsers = await userData.findById(req.params.id)
        removeUsers.name = req.body.name
        const deleteUser = await removeUsers.remove()
        res.json(deleteUser)
        console.log('user removed sucessfully')

    }catch(error){
        res.send('error while Deleting the user in database' + error)
    }
})

module.exports = router