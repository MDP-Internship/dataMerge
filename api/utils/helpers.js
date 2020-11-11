export default class Helpers {
  static dataMerge(_data, _callback) {
    // eslint-disable-next-line prettier/prettier
    let merge;
    const idList = Array.from(new Set(_data.map((item) => item.id)))

    idList.forEach((id) => {
      merge = Object.assign({}, ..._data.filter((item) => item.id === id))
      _callback(merge, idList)
    })
  }
}
