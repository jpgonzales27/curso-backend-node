/*
  La vapa de servicio es la encargada de realizar
  el manejo de todoas las transacciones

  desligando de esta responsabilidad al router
*/
const faker = require('faker');

class ProductoService {
  constructor() {
    this.productos = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.productos.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }
  create(data) {
    const newProducto = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.productos.push(newProducto);
    return newProducto;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.productos);
      }, 5000);
    });
  }

  async findOne(id) {
    //generando error para ver el middlewares
    const total = this.productos.getTotal();
    return this.productos.find((item) => item.id === id);
  }

  async update(id, cambios) {
    const index = this.productos.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }

    const producto = this.productos[index];

    /*
      ...productos copia todo el arreglo de productos y despues
      ...cambios realiza los cambios necesarios
    */
    this.productos[index] = {
      ...producto,
      ...cambios,
    };
    return this.productos[index];
  }

  update2(id, cambios) {
    const newArray = this.productos.map((item) =>
      item.id !== id ? item : { id, ...cambios }
    );
    this.productos = newArray;
    return this.productos;
  }

  async delete(id) {
    const index = this.productos.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }

    this.productos.splice(index, 1);
    return { id };
  }

  delete2(id) {
    this.productos.filter((item) => item.id !== id);
    return this.productos;
  }
}

module.exports = ProductoService;
