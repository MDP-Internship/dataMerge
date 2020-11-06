# dataMerge

[[TOC]]

## Kurulumlar

> Eslint ile prettier kurulum [Integrating Prettier + ESLint + Airbnb Style Guide in VSCode Blog](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)

> Babel kurulum basit [The minimal Node.js with Babel Setup](https://www.robinwieruch.de/minimal-node-js-babel-setup)

## Gereksinimler

### Paketler

- body-parser
  mongoose

Object.assign()

const spread = { ...first, ...second }

[stackoverflow(Solved)](https://stackoverflow.com/questions/39844558/merge-json-arrays-by-matching-property-in-nodejs)

node js performans ölçme

Array özelliklerini araştır

[medium](https://medium.com/@thrkardak/javascript-map-reduce-ve-filter-b%C3%B6l%C3%BCm-1-bfc7cd18f1e)

## Path

- "/irregular" veriler toplanıyor.
- "/regular" veriler gösteriliyor.

> GET ve POST çalışacak şekilde gönderim body şeklinde

## Datalar

### https://jsonplaceholder.typicode.com/posts

```json
{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
```

### https://jsonplaceholder.typicode.com/albums

```json
{
"userId": 1,
"id": 1,
"title": "quidem molestiae enim"
},
```

### https://jsonplaceholder.typicode.com/todos

```json
{
"userId": 1,
"id": 1,
"title": "delectus aut autem",
"completed": false
},
```

```javascript
let idList = new Set(data.map(item => item.id));
idList.forEach(id=>{
let merge = Object.assign({}, ...data.filter(item=> item.id ==id))
console.log(merge);
});
```
