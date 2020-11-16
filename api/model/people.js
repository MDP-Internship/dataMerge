import { Schema, model } from 'mongoose'

const newsSchema = Schema({
  id: {
    type: String,
    required: true,
  },
  mail: {
    required: true,
    type: String,
  },
  adress: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
})

export default model('People', newsSchema)
