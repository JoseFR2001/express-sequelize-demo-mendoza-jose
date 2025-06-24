import User from "../models/user.js";

export const createUser = async(req, res) =>{
    try{
        const create = await User.create(req.body)
        res.status(201).json(create)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const getAllUser = async(req, res) =>{
    try{
        const Users = await User.findAll()
        res.json(Users)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const getUserByID = async(req, res)=>{
    try{
        const userId = await User.findByPk(req.params.id)
        if (userId) res.json(userId)
        else res.status(404).json({message: 'User no encontrado'})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const updateUser = async(req, res) =>{
    try{
        const [update] = await User.update(req.body, {
            where: {id : req.params.id}
        })
        if (update) {
            const updateUser = await User.findByPk(req.params.id)
            res.json(updateUser)
        } else {
            res.status(404).json({message: 'User no encontrado'})
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const deleteUser = async(req,res)=>{
    try{
        const deledet = await User.destroy({where:{id: req.params.id}})
        if (deledet) res.json({message: 'User eliminado'})
        else res.status(404).json({message: 'User no encontado'})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}