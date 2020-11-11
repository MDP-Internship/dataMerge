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
      if (!isPersoneId(idList).res) {
        console.log(isPersoneId(idList).err)
        res.send(isPersoneId(idList).err)
      }
      if (!personelInfoValidation(...result).res) {
        console.log(personelInfoValidation(...result).err)
        res.send(personelInfoValidation(result).err)
      }
      if (isPersoneId(idList).res && personelInfoValidation(...result).res)
        IrregularServices.peopleAdd(result)
    } catch (error) {
      util.setError(400, error)
      util.send(res)
    }
  })
}
