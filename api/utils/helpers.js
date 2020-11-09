export default class Helpers {
  static dataMerge(_data, _callback) {
    const idList = new Set(_data.map((item) => item.id))
    idList.forEach((id) => {
      const merge = Object.assign({}, ..._data.filter((item) => item.id === id))
      _callback(merge)
    })
  }
}
