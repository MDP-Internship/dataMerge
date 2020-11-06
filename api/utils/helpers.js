export default class Helpers {

    static dataMerge(_data, _callback) {
        let idList = new Set(_data.map(item => item.id));
        idList.forEach(id => {
            let merge = Object.assign({}, ..._data.filter(item => item.id == id))
            _callback(merge)
        });
    }

}