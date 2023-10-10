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

  // If the connection is not open, open it, or select other options
  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState

    if (mongoConnection.isConnected === 1) {
      console.log('=> ✅ using previous connection')
      return
    }

    // finish the connection
    await disconnect()
  }

  await mongoose.connect(process.env.MONGO_SRV ?? '')
  mongoConnection.isConnected = 1
  console.log('=> 🚀 connected to MongoDB', process.env.MONGO_SRV)
}

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return
  if (mongoConnection.isConnected === 0) return

  await mongoose.disconnect()
  mongoConnection.isConnected = 0
  console.log('=> ❌ disconnected from MongoDB')
}
