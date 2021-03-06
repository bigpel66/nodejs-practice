// SEQUELIZE PRODUCT
// const Sequelize = require('sequelize');

// const sequelize = require('../helpers/database');

// const Product = sequelize.define('product', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true,
//     },
//     title: { type: Sequelize.STRING, allowNull: false },
//     price: {
//         type: Sequelize.DOUBLE,
//         allowNull: false,
//     },
//     imageUrl: { type: Sequelize.STRING, allowNull: false },
//     description: { type: Sequelize.STRING, allowNull: false },
// });

// module.exports = Product;

// MONGODB PRODUCT
// const mongodb = require('mongodb');
// const getDb = require('../helpers/database').getDb;

// class Product {
//     constructor(title, price, description, imageUrl, id, userId) {
//         this.title = title;
//         this.price = price;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this._id = id ? new mongodb.ObjectId(id) : null;
//         this.userId = userId;
//     }

//     save() {
//         const db = getDb();
//         let dbOp;

//         if (this._id) {
//             dbOp = db
//                 .collection('products')
//                 .updateOne({ _id: this._id }, { $set: this });
//         } else {
//             dbOp = db.collection('products').insertOne(this);
//         }
//         return dbOp
//             .then((results) => {})
//             .catch((error) => {
//                 if (error) {
//                     console.log(error);
//                 }
//             });
//     }

//     static fetchAll() {
//         const db = getDb();
//         return db
//             .collection('products')
//             .find()
//             .toArray()
//             .then((products) => {
//                 return products;
//             })
//             .catch((error) => {
//                 if (error) {
//                     console.log(error);
//                 }
//             });
//     }

//     static findById(productId) {
//         const db = getDb();
//         return db
//             .collection('products')
//             .find({ _id: new mongodb.ObjectId(productId) })
//             .next()
//             .then((product) => {
//                 return product;
//             })
//             .catch((error) => {
//                 if (error) {
//                     console.log(error);
//                 }
//             });
//     }

//     static deleteById(productId) {
//         const db = getDb();
//         return db
//             .collection('products')
//             .deleteOne({ _id: new mongodb.ObjectId(productId) })
//             .then()
//             .catch((error) => {
//                 if (error) {
//                     console.log(error);
//                 }
//             });
//     }
// }

// module.exports = Product;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: { type: Number, required: true },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = mongoose.model('Product', productSchema);
