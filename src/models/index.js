'use strict';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Sequelize, DataTypes } from 'sequelize';
import { config } from '../config/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// Inline config to avoid JSON import issues


const db = {};

let sequelize;
if (config[env].use_env_variable) {
  sequelize = new Sequelize(process.env[config[env].use_env_variable], config[env]);
} else {
  sequelize = new Sequelize(
    config[env].database, 
    config[env].username, 
    config[env].password, 
    config[env]
  );
}

const files = fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      (file.slice(-3) === '.js' || file.slice(-3) === '.ts') &&
      file !== 'index.js'
    );
  });

for (const file of files) {
  const modelPath = `file:///${path.join(__dirname, file).replace(/\\/g, '/')}`;
  const model = await import(modelPath);
  const modelDef = model.default(sequelize, DataTypes);
  db[modelDef.name] = modelDef;
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };