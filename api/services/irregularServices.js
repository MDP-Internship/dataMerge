import People from '../model/people'

export default class IrregularServices {
  static peopleAdd(body) {
    /*  const peopleAdd = People({
      id: body.id,
      mail: body.mail,
      adress: body.adress,
      name: body.name,
      username: body.username,
    })

    peopleAdd
      .save()
      .then(() => {})
      .catch(() => {}) */
    console.log('yazdır')
  }

  static async peopleDublicate() {
    try {
      return await People.findAll({ id: { $exists: true } })
    } catch (error) {
      throw error
    }
  }
}
