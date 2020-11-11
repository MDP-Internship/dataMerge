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
      if (isPersoneId(idList) !== true) {
        console.log(isPersoneId(idList))
        return res.send(isPersoneId(idList))
      }

      // console.log(result)
      // const dbIdList = IrregularServices.peopleDublicate();
      // if (personelInfoValidation(result)) {
      console.log(personelInfoValidation(result))
      // return res.send(personelInfoValidation(result))
      // }
      // IrregularServices.peopleAdd(result)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  })
}
