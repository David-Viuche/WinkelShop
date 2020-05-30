const { Producto } = require('../models/index');
const controller = {};

controller.list = (req, res) => {
    Producto.findAll()
        .then((productos) => {
            res.render('productos', {
                data: productos
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error en el servidor, intente más tarde" });
        });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log("insert ", data);
    Producto.create(data)
        .then(producto => {
            console.log(producto);
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error en el servidor, intente más tarde" });
        });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    Producto.findOne({ where: { id: id } })
        .then((producto) => {
            res.render('productos_edit', {
                data: producto
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error en el servidor, intente más tarde" });
        });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newProducto = req.body;
    Producto.findOne({ where: { id: id } })
        .then(producto => {
            producto.update(newProducto)
                .then(productoNuevo => {
                    console.log("producto actualizado", productoNuevo);
                    res.redirect('/');
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({ error: "Error en el servidor, intente más tarde" });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error en el servidor, intente más tarde" });
        });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    Producto.destroy({ where: { id: id } })
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error en el servidor, intente más tarde" });
        });
}

module.exports = controller;