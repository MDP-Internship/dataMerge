# dataMerge

> Toplu halde gelen düzensiz verileri id numaralarına göre eşleştirerek verileri birleştiriyor ve mongodb kaydediyor.

### Link: https://peopledatamerge.herokuapp.com/

- "/irregular" veriler toplanıyor.
- "/regular" veriler gösteriliyor.

## Kurulumlar

> Eslint ile prettier kurulum [Integrating Prettier + ESLint + Airbnb Style Guide in VSCode Blog](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)

> Babel kurulum basit [The minimal Node.js with Babel Setup](https://www.robinwieruch.de/minimal-node-js-babel-setup)

## Gereksinimler

### VScode Eklenti

> GET işlemlerinin testleri burada yapıldı [RESTClient](https://github.com/Huachao/vscode-restclient)

### Paketler

- body-parser
- mongoose
- express

### TODO

> Object.assign() => objeleri birleştirebilmemizi sağlıyor.

> const spread = { ...first, ...second }

> [stackoverflow(Solved)](https://stackoverflow.com/questions/39844558/merge-json-arrays-by-matching-property-in-nodejs)

> Array özelliklerini araştır

> [medium](https://medium.com/@thrkardak/javascript-map-reduce-ve-filter-b%C3%B6l%C3%BCm-1-bfc7cd18f1e)

## Datalar

```json
[
  {
    "id": 1,
    "mail": "bgilstin0@wiley.com",
    "adress": "8 Park Meadow Terrace"
  },
  {
    "id": 1,
    "name": "Ulrick",
    "username": "umctrustrie0"
  }
]
```

> mongo db şemasına göre hazırlanmıştır.

```js
id;
mail;
adress;
name;
username;
```

### idlerine göre düzensiz veri modellerini birleştiriyor

```javascript
let idList = new Set(data.map((item) => item.id));
idList.forEach((id) => {
  let merge = Object.assign({}, ...data.filter((item) => item.id == id));
  console.log(merge);
});
```
