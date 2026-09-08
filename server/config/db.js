// server/config/db.js
// MongoDB connection using Mongoose. The connection string comes from the
// MONGO_URI environment variable (never hardcoded keys/credentials).
import mongoose from 'mongoose'

export async function connectDB() {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/pen_academy'

  mongoose.set('strictQuery', true)
  mongoose.set('debug', false)

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000,
  })

  return mongoose.connection
}

export async function disconnectDB() {
  await mongoose.disconnect()
}

export default mongoose