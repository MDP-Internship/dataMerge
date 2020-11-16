/* eslint-disable spaced-comment */
/* eslint-disable consistent-return */
import Helpers from '../utils/helpers'
import IrregularServices from '../services/irregularServices'
import { personelInfoValidation, isPersoneId } from '../utils/validation'
import Util from '../utils/utils'

const util = new Util()

export default function irregularController(req, res) {
  const personelData = req.body

  Helpers.dataMerge(personelData, (result, idList) => {
    try {
      //id string kontrolü
      if (!isPersoneId(idList).res) {
        console.log(isPersoneId(idList).err)
        res.send(isPersoneId(idList).err)
      }
      // verilerin genel kurallara uygunluğu
      if (!personelInfoValidation(result).res) {
        res.send(personelInfoValidation(result).err)
      }
      //db yazdırılma işlemi
      if (isPersoneId(idList).res && personelInfoValidation(result).res) {
        result.forEach(async (item) => {
          const people = await IrregularServices.peopleAdd(item)
          if (!people) {
            util.setError(200, 'people not found')
            return util.send(res)
          }
          if (people) {
            util.setSuccess(200, 'people all save')
            return util.send(res)
          }
        })
      }
    } catch (error) {
      util.setError(400, error)
      util.send(res)
    }
  })
}
