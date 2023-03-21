import mongoose from 'mongoose'
import seedDb from './helper.js'

const db_uri = process.env.DB_URI

const dbConnect = () => {
  mongoose.connect(db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = mongoose.connection
  db.on('error', () => {
    console.log('Database connection error');
  });
  
  db.on('connected', () => {
    console.log('Database connection successful!');
  });

  seedDb().then(() => {
    console.log('seed data was added successfully')
  })
}

export default dbConnect
