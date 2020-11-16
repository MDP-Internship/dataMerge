# dataMerge

> Toplu halde gelen düzensiz verileri id numaralarına göre eşleştirerek verileri birleştiriyor ve mongodb kaydediyor.

## Link: https://peopledatamerge.herokuapp.com/

## Route
- POST "/irregular" veriler toplanıyor.
- GET "/" MongoDB datalar geliyor.
- GET "/remove" tüm dataları siler.


## Yapılanlar
- Başarılı kaydetme response mesajı

- 404 Not Found hatası döndürme

- gelen datalarda id kontrolü
```json
 {
    "id": "1f",
    "mail": "bgilstin0@wiley.com",
    "adress": "8 Park Meadow Terrace"
  },

  // output: id should be in string not number => value: "1f" key: "0"
```

- gelen dataların doğruluğunu kontrol ediyor

> mail kontrolü 
```json
{
    "id": "1",
    "mail": "bgilstin0wiley.com",
    "adress": "8 Park Meadow Terrace"
}

  //output: 
  {
    "message": "\"[0].mail\" must be a valid email",
    "value": "bgilstin0wiley.com"
  }
```

> min-max karakter kontrolü

```json
{
    "id": "1",
    "name": "Ul",
    "username": "umctrustrie0"
}

  //output: 
  {
    
    "message": "\"[0].name\" length must be at least 3 characters long",
    "value": "Ul"
  }
```


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

### input

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

### output

```json
[
  {
    "id": 1,
    "mail": "bgilstin0@wiley.com",
    "adress": "8 Park Meadow Terrace",
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
});

```
