/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');
var Catalog = require('../api/catalog/catalog.model');
var mainCatalog, gitare, bas, oprema;

User.find({}).removeAsync()
  .then(function() {
    User.createAsync({
      provider: 'local',
      name: 'Test',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    })
    .then(function() {
      console.log('finished populating users');
    });
  });

Catalog
  .find({})
  .remove()
  .then(function () {
    return Catalog.create({name: 'SvE'});  
  })
  .then(function (catalog) {
    mainCatalog = catalog;
    return mainCatalog.addChild({name: 'Gitare'});
  })
  .then(function (category) {
    gitare = category._id;
    return mainCatalog.addChild({name: 'Bas'})
  })
  .then(function (category) {
    bas = category._id;
    return mainCatalog.addChild({name: 'Oprema'});
  })
  .then(function (category) {
    oprema = category._id;
    return Product.find({}).remove({});
  })
  
  .then(function() {
    return Product.create({
      title: 'G1',
      imageUrl: 'assets/uploads/gitra/g1.png',
      price: 1000,
      stock: 250,
      categories: [gitare],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    }, {
      title: 'G2',
      imageUrl: '/assets/uploads/gitra/g2.png',
      price: 1000,
      stock: 100,
      categories: [gitare],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    }, {
      title: 'G3',
      imageUrl: '/assets/uploads/gitra/g3.png',
      price: 1000,
      stock: 50,
      categories: [gitare],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    }, {
      title: 'G1',
      imageUrl: 'assets/uploads/gitra/g1.png',
      price: 1000,
      stock: 250,
      categories: [gitare],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    }, {
      title: 'G2',
      imageUrl: '/assets/uploads/gitra/g2.png',
      price: 1000,
      stock: 100,
      categories: [gitare],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    }, {
      title: 'G3',
      imageUrl: '/assets/uploads/gitra/g3.png',
      price: 1000,
      stock: 50,
      categories: [gitare],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    }, {
      title: 'G1',
      imageUrl: 'assets/uploads/gitra/g1.png',
      price: 1000,
      stock: 250,
      categories: [gitare],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    }, {
      title: 'G2',
      imageUrl: '/assets/uploads/gitra/g2.png',
      price: 1000,
      stock: 100,
      categories: [gitare],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    }, {
      title: 'G3',
      imageUrl: '/assets/uploads/gitra/g3.png',
      price: 1000,
      stock: 50,
      categories: [gitare],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    }, {
      title: 'B1',
      imageUrl: '/assets/uploads/bas/b1.png',
      price: 1000,
      stock: 50,
      categories: [bas],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    }, {
      title: 'B2',
      imageUrl: '/assets/uploads/bas/b2.png',
      price: 1000,
      stock: 50,
      categories: [bas],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    }, {
      title: 'B3',
      imageUrl: '/assets/uploads/bas/b3.png',
      price: 1000,
      stock: 50,
      categories: [bas],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    }, {
      title: 'T1',
      imageUrl: '/assets/uploads/oprema/t1.png',
      price: 5,
      stock: 50,
      categories: [oprema],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    }, {
      title: 'T2',
      imageUrl: '/assets/uploads/oprema/t2.png',
      price: 5,  
      stock: 50,
      categories: [oprema],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    }, {
      title: 'G3',
      imageUrl: '/assets/uploads/gitra/g3.png',
      price: 1000,
      stock: 50,
      categories: [gitare],
      description: 'Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace. Due to Deans commitment to ongoing research and development, product specifications are subject to change without notice. In some instancethe product pictured here might vary slightly from our products in the marketplace'
    });
  })
  .then(function () {
    console.log('Finished populating Products with categories');
  })
  .then(null, function (err) {
    console.error('Error populating Products & categories: ', err);
});

/*
      title: 'ZLATNI MEDVJED',
      imageUrl: '/assets/uploads/pivo_boce_zlatni_medvjed_big.png',
      price: 15,
      stock: 250,
      description: 'Zlatni medvjed je premium lager pivo. Karakteristične zlatno žute boje, osvježavajućeg okusa i blago gorke arome. Vrlo je pitko i osvježavajuće. Služi se na 5 stupnjeva uz bijelu kompaktnu pjenu.'
    }, {
      title: 'FAKIN IPA',
      imageUrl: '/assets/uploads/Fakin-boca-v02.png',
      price: 15,
      stock: 100,
      description: 'Fakin IPA je svijetli ale bogatog okusa, prekrasne boje i pripitomljene gorčine. Kuha se od tri vrste slada i tri vrste hmelja, a ugodna aroma postiže se suhim hmeljenjem.'
    }, {
      title: 'AGRAM STOUT',
      imageUrl: '/assets/uploads/agram-stout-u-boci.png',
      price: 15,
      stock: 50,
      description: 'Crni, kremasti stout, neodoljivog okusa prženog ječma i slada, bogate arome, te ugodne slatkoće koja završava laganom gorčinom. Prema legendi, još u 19.stoljeću, kuhao se Agram stout i čuvao u bačvama Mije Budickog, najpoznatijeg zagrebačkog bačvara'
    })
    .then(function() {
      console.log('finished populating products');
    });
});
*/