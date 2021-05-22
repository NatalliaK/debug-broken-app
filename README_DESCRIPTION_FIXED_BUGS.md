# Debug-broken-app

## Найденные ошибки компиляции
- controllers/usercontroller.js -> 1 строка -> нет require для express

- controllers/usercontroller.js -> 1 строка -> инстанс Router'а должен быть вызван из express. Исправлено на *const router = require('express').Router();*

- controllers/usercontroller.js -> 2 строка -> вместо bcryptjs импортируется bcrypt. Исправлено на *const bcrypt = require('bcryptjs');*

- controllers/usercontroller.js -> 5 строка -> используется import вместе с require. Исправлено на *const User = require('../models/user');*

- controllers/gamecontroller.js -> 2 строка -> неверный импорт *var Game = require('../db').import('../models/game');*  Исправлено на *const Game = require('../models/game');*

- controllers/gamecontroller.js -> 116 строка -> ошибка экспорта *module.exports = routers;* вместо *router* Исправлено на *module.exports = router;*

- models/game.js -> 1 строка -> нет экспорта функции *function(sequelize, DataTypes)*  Исправлено на *module.exports = function(sequelize, DataTypes)*

- middleware/validate-session.js -> 2 строка -> неверный импорт *var User = require('sequelize').import('../models/user');* Исправлено на *const User = require('../models/user');*

- app.js -> 8 строка -> неверно вызван метод sync *db.sync();* Исправлено на *db.sequelize.sync();*

- db.js -> 19 строка -> отсутствует экспорт из db.js Исправлено *module.exports = { sequelize, DataTypes: Sequelize.DataTypes };*

## Найденные ошибки логики приложения


## Рефактор кода

- отсутствуют ; в конце некоторых строк
- var вместо const и let

