/* eslint-disable no-useless-return */
import mongoose from 'mongoose'

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongoConnection = {
  isConnected: 0
}

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log('=> ✅ using an existing database connection')
    return
  }

  try {
    await mongoose.connect(process.env.MONGO_SRV ?? '')
    mongoConnection.isConnected = 1
    console.log('=> 🚀 connected to MongoDB', process.env.MONGO_SRV)
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development' || mongoConnection.isConnected === 0) return

  try {
    await mongoose.disconnect()
    mongoConnection.isConnected = 0
    console.log('=> ❌ disconnected from MongoDB')
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error)
  }
}
