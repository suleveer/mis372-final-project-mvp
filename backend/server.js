import express from 'express';
import cors from 'cors';
import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();


const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',               // for Render.com PostgreSQL
  logging: false,
 dialectOptions: {
     ssl: { require: true, rejectUnauthorized: false }  // for Render.com PostgreSQL
 }
});

const app = express();
app.use(cors());
app.use(express.json());

const Account = sequelize.define('accounts', {
  account_id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },

  user_id: { 
    type: DataTypes.TEXT, 
    allowNull: false 
  },

  account_number: { 
    type: DataTypes.STRING(30), 
    allowNull: false,
    unique: true
  },

  account_type: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      isIn: [['savings', 'checking', 'debit', 'credit']]
    }
  },

  name: { 
    type: DataTypes.STRING(100), 
    allowNull: false 
  },

  created_at: { 
    type: DataTypes.DATE, 
    allowNull: false, 
    defaultValue: Sequelize.NOW 
  },

  is_locked: { 
    type: DataTypes.BOOLEAN, 
    allowNull: false, 
    defaultValue: false 
  },

  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 'active',
    validate: {
      isIn: [['active', 'closed']]
    }
  },

  closed_at: { 
    type: DataTypes.DATE, 
    allowNull: true 
  },

  routing_number: { 
    type: DataTypes.STRING(9),
    allowNull: true 
  }

}, { 
  tableName: 'accounts',
  timestamps: false,
  underscored: true
});


const Transaction = sequelize.define('transactions', {
  transaction_id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },

  account_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false
  },

  amount: { 
    type: DataTypes.DECIMAL(12, 2), 
    allowNull: false 
  },

  transaction_type: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      isIn: [['withdraw', 'transfer', 'deposit', 'charge', 'payoff']]
    }
  },

  transaction_date: { 
    type: DataTypes.DATE, 
    allowNull: false 
  },

  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      isIn: [['denied', 'succeeded']]
    }
  },

  created_at: { 
    type: DataTypes.DATE, 
    allowNull: false, 
    defaultValue: Sequelize.NOW 
  },

  description: { 
    type: DataTypes.TEXT,
    allowNull: true 
  }

}, { 
  tableName: 'transactions',
  timestamps: false,
  underscored: true
});






