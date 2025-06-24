import Product from "../models/product.js";

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product)
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

export const getAllProduct = async (req, res) =>{
    try{
        const products = await Product.findAll();
        res.json(products);
    } catch(error){
        res.status(500).json({error: error.message});
    }
}

export const getProductById = async (req, res) =>{
    try{
        const product = await Product.findByPk(req.params.id);
        if (product) res.json(product);
        else res.status(404).json({ messege: 'Producto no encontrado'});
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

export const updatePrduct = async (req, res) => {
    try{
        const [update] = await Product.update(req.body, {
            where: { id: req.params.id}
        });
        if (update) {
            const updatePrduct = await Product.findByPk(req.params.id);
            res.json(updatePrduct);
        } else{
            req.status(404).json({ message: 'Producto no encontrado'})
        }
    } catch(error){
        res.status(500).json({error: error.message});
    }
}
export const deleteProduct = async (req, res) =>{
    try{
        const deledet = await Product.destroy({ where: {id: req.params.id} });
        if (deledet) res.json({ message: 'Producto eliminado'});
        else res.status(404).json({ messege: 'Producto no encontrado'}
        )
    } catch(error){
        res.status(500).json({error: error.message});
    }
}