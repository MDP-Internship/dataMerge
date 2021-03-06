export default class Helpers {
  static dataMerge(_data, _callback) {
    const idList = Array.from(new Set(_data.map((item) => item.id.toString())))

    const merge = []
    idList.forEach((id) => {
      const data = Object.assign(
        {},
        ..._data.filter((item) => item.id.toString() === id)
      )
      merge.push(data)
    })
    _callback(merge, idList)
  }
}
