import Helpers from '../utils/helpers'
import IrregularServices from '../services/irregularServices'

export default function irregularController(_req, _res) {
  Helpers.dataMerge(_req.body, (result) => {
    IrregularServices.peopleAdd(result)
  })
}
