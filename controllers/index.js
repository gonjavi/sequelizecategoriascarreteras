const { Categoria, Carretera } = require('../models');

const createCategoria = async (req, res) => {
  try {
      const categoria = await Categoria.create(req.body);
      return res.status(201).json({
          categoria,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}

const Categorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    return res.status(201).json({
      categorias,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  } 
}

const Carreteras = async (req, res) => {
  try {
    const carreteras = await Carretera.findAll();
    return res.status(201).json({
      carreteras,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  } 
}

const Avenidas = async (req, res) => {
  try {
    const avenidas = await Carretera.findAll({
     include: {
       model: Categoria, 
     }
    });
    return res.status(201).json({
      avenidas,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  } 
}

const Locales = async (req, res) => {
  try {
    const avenidas = await Carretera.findAll({
      where: {
        categoriaId: '1'
      }
    });
    return res.status(201).json({
      avenidas,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  } 
}

module.exports = {
  createCategoria,
  Categorias,
  Carreteras,
  Avenidas,
  Locales,
}