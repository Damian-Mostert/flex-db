# <label style="color:#315354">flex-db version (3.0.2) documentation</label>

<div style="color:#701b1b">

### a powerful, flexible and easy to use JSON database built just for node.js 💪

</div>

```cmd
npm i flex-db
```

<div style="color:#701b1b">

#### <label style="color:#315354">why flex-db?</label>
&bull; 🚀fast.
<br>&bull; fully Synchronous functions & Asynchronous scripting with callbacks.
<br>&bull; simple to learn and use 📚.
<br>&bull; with flex-db you can store your files locally on your server or remotly .
</div>

### <label style="color:#315354">example</label>
```js
const flexDb = require("flex-db")
let database = flexDb("database")
database.user = {
  username:{
    type:"string",
    require:true,
    },
  email:{
    type:"string",
    require:true,
    unique:true,
    match:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},
}
const users = database().user
users.makeOne({
  username:"jhon",
  email:"jhon@example.com"
},(result)=>{
  console.log(result)
})
database().getAll((result)=>{
  console.log(result)
})
```
### <label style="color:#315354">output</label>
```cmd
{ success: 'item made' }
```
```cmd
{
  users:[
    {
      username: 'jhon',
      email: 'jhon@example.com',
      id: 'dzVW4zOykzxaJNkAD7cQbOFNvG5D3jQctBWbjSwdUA2WnRvC8WbhRvgOIlB5ChKOKdE0CuYrzYb',
      update: [Function], // only avadible localy
      delete: [Function], // only avadible localy
    }
  ]
}
```
# <label style="color:#1b7057">flex-db santax { }</label>
#### <div style="color:#701b1b">starting a database</div>
```js
const flexDb = require("flex-db")
// set base path
let databaseSchema = flexDb("path of database files")
```
<div style="color:#701b1b"><b>please note!!!</b> if <b>path</b> is is same as other object's files, results can overlap, you can use this to <b>backup</b> things or <b>merge</b> results, but <b>stear away from doing so if you plan on using multiple databases and objects that have the same name.</b>
<br>if no path set defualt path is "flex-db"
</div>

#### <div style="color:#701b1b">making database objects</div>
##### <div style="color:#701b1b">flex-db object configuration list :</div>
```js
databaseSchema.users = {
  subItem:{
    unique:true, // means it wont make duplicates in this subItem if true
    require:true, // wont make an item without subItem if true
    type:"string",//type is object type, types are "object"(for JSON) "string" (for normal string) "number" (for numbers)
    defualt:"test",// defualt will set item automaticly if require also true
    minSize:10,// if number number must be 10, if string or object subItem.length must be <= 10,
    maxSize:10,// if number number must be 10, if string or object subItem.length must be >= 10,
    size:10,// if number number must be 10, if string or object subItem.length must be 10,
    match:/test/, // for strings, same as subItem.match(/test/)
    lowerCase:true, // for strings, automaticly makes all subItems lowerCase if true
    upperCase:false, // for strings, automaticly makes all subItems upperCase if true
  }
}
```
#### <div style="color:#701b1b">for a fully open storage object you can just do</div>
```js
databaseSchema.users = true
```
#### <div style="color:#701b1b">you can also have a sub database object that is open</div>
```js
databaseSchema.users = {
    name:true,
    surname:true,
}
```
#### <div style="color:#701b1b">using a database</div>
```js
let database = databaseSchema()
database.users.makeOne({username:"JHON"})
console.log(database.users.getAll())
```
# <label style="color:#1b7057">flex-db tools 🔨</label>
### <label style="color:#1b7057"> object tools list </label><b style="color:#701b1b">
&bull; getAll </b>(gets all objects across a database)<b style="color:#701b1b"><br>&bull; makeOne </b>(for making objects inside a database)<b style="color:#701b1b"><br>&bull; updateOne </b>(for updating objects inside a database)<b style="color:#701b1b"><br>&bull; upadteMult </b>(for updating multiple objects across a database)<b style="color:#701b1b"><br>&bull; updateAll </b>(for updating all objects across a database)<b style="color:#701b1b"><br>&bull; updateById </b>(updates items in database by id)<b style="color:#701b1b"><br>&bull; deleteOne </b>(for deleting objects across database)<b style="color:#701b1b"><br>&bull; deleteById </b>(for deleteing object s by there id)<b style="color:#701b1b"><br>&bull; deleteMult </b>(for deleting objects across a database)<b style="color:#701b1b"><br>&bull; deleteAll </b>(for deleting all objects across a database)<b style="color:#701b1b"><br>&bull; findOne </b>(for making objects across a database)<b style="color:#701b1b"><br>&bull; find </b>(for finding an array of objects across a database)<b style="color:#701b1b"><br>&bull; findById </b>(for finding object's by id)<b style="color:#701b1b"><br>&bull; searchOne </b>(used to search for one object in a database or database object)<b style="color:#701b1b"><br>&bull; search </b>(used to search for an array of objects in database or database object)<b style="color:#701b1b"><br>&bull; searchById </b>(for searching objects across a database by id)<b style="color:#701b1b">
### <label style="color:#1b7057"> network tools list </label>
&bull; connect </b>(for connecting to a database)<b style="color:#701b1b">
<br>&bull; listen </b>(for making database objects remotely available)<b style="color:#701b1b">
<br>&bull; router </b>(for making objects in a database work inside express server)<b style="color:#701b1b">
### <label style="color:#1b7057"> database tool list </label>
&bull; join </b>(for joining flex-db database objects and databases)
<br>&bull; slice </b>(for slicing flex-db database objects)
### <span style="color:#701b1b"><div style="background:#ebe359">PLEASE NOTE!!!</div>flex-db functions are synchronouse, if you are using a non remote sub object await is not required for a return, if the object is joined or remote, await is required for a return, otherwise you can just use a callback function for more asynchronouse scripting.</span>
# <label style="color:#54a130">flex-db object tools usage ⚒️</label>
<div style="color:#701b1b">

&bull; all databases are joined by defualt.
<br>&bull; flexdb.join only works with flexdb databases and sub objects.
<br>&bull; <b>please note! once objects are joined they are async functions that require await.</b>

</div>

## <label style="color:#54a130">getAll</label>
<div style="color:#701b1b">
&bull; getAll is used to get all objects in a joined database or basic database object.
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let items = database.subObject.getAll()
for(let item in items){
  console.log(items[item])
}
```

<div style="color:#701b1b">

##### all flexDb functions have a callback function so you can also use

</div>

```js
database.subObject.getAll((items)=>{
  for(let item in items){
    console.log(items[item])
  }
})
```

<div style="color:#701b1b">

##### if you wish to getAll in an entire database you'd use something like this

</div>

```js
let items = await database.getAll() // becuase it is a joined object
for(let item in items.subItem){
  console.log(items[item])
}
```
<div style="color:#701b1b">

##### items will return like this if you getAll in joined database

</div>

```js
{subObject:[sub object data array]}
```
<div style="color:#701b1b">

##### if you use a sub object your data will simply return a array

</div>

<div style="color:#701b1b">

##### if you are using getAll for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.getAll((result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be

</div>

```cmd
{
  db1: { sub1: [ [Object], [Object] ], sub2: [ [Object], [Object] ] },
  db2: { sub1: [ [Object], [Object] ], sub2: [ [Object], [Object] ] }
}
```







## <label style="color:#54a130">makeOne +</label>

<div style="color:#701b1b">
&bull; makeOne is can make subItems across a database.
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>


```js
let result = database.subObject.makeOne({
  //NEW DATA HERE
})
```
<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.makeOne({
  //NEW DATA HERE
  // you can not use id, as all objects have a unique id assigned automaticly
},(result)=>{
  console.log(result)
})
```

<div style="color:#701b1b">

result will return with <b>error</b> or <b>success</b> inside a <b>JSON oject</b>

</div>

```js
{success:"item made"}
```

<div style="color:#701b1b">

or

</div>

```js
{error:"error message"}
```

<div style="color:#701b1b">

handeling response message

</div>

```js
if(result.success){
  // item made
}else if(result.error){
  // error
}
```

<div style="color:#701b1b">

##### if you are using makeOne for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.makeOne({randomdata:"blahblah"},(result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be

</div>

```cmd
{
  db1: { sub1: { success: 'item made' }, sub2: { success: 'item made' } },
  db2: { sub1: { success: 'item made' }, sub2: { success: 'item made' } }
}

```

## <label style="color:#54a130">updateOne 🔀</label>

<div style="color:#701b1b">
&bull; updateOne is used to update one object in a database.
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let result = database.subObject.updateOne({/*find data*/},{/*new data*/})
```

<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.updateOne({/*find data*/},{/*new data*/},(result)=>{
  console.log(result)
})
```

<div style="color:#701b1b">

result will return a object with success or error</b>

</div>

```js
  {
    success:"item updated"
  },
```

<div style="color:#701b1b">

or if no object or error result will return

</div>

```js
{
  error:"error message"
},
```

<div style="color:#701b1b">

##### if you are using  updateOne for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.updateOne({randomdata:"blahblah"},{randomdata:"test"},(result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be something like this

</div>

```cmd
{
  db1: { sub1:[Object], sub2: [Object] },
  db2: { sub1: [Object], sub2: [Object] }
}

```

## <label style="color:#54a130">updateMult 🔀</label>

<div style="color:#701b1b">
&bull; updateMult is used to update multiple items in a database,
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let result = database.subObject.updateMult({/*find data*/},{/*new data*/})
```

<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.updateMult({/*find data*/},{/*new data*/},(result)=>{
  console.log(result)
})
```

<div style="color:#701b1b">

result will return a array</b>

</div>

```js
  [
    {
      success:"item updated"
    },
    {
      error:"item updated"
    },
  ]
```

<div style="color:#701b1b">

##### if you are using updateMult for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.updateMult({randomdata:"blahblah"},{randomdata:"blublu"},(result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be something like this

</div>

```cmd
{
  db1: { sub1: [ [Object], [Object] ], sub2: [ [Object], [Object] ] },
  db2: { sub1: [], sub2: [] }
}

```
## <label style="color:#54a130">updateAll 🔀</label>

<div style="color:#701b1b">
&bull; updateAll is used to update all objects in a database,
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let result = database.subObject.updateAll({/*new data*/})
```

<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.updateAll({
 /*new data*/
},(result)=>{
  console.log(result)
})
```

<div style="color:#701b1b">

result will return a array</b>

</div>

```js
  [
    {
      success:"item updated"
    },
    {
      error:"error message"
    },
  ]
```

<div style="color:#701b1b">

##### if you are using updateAll for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.updateAll({randomdata:"blahblah"},(result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be something like this

</div>

```cmd
{
  db1: { sub1: [ [Object], [Object] ], sub2: [ [Object], [Object] ] },
  db2: { sub1: [[Object], [Object] ], sub2: [[Object], [Object] ] }
}

```

## <label style="color:#54a130">updateById 🔀</label>

<div style="color:#701b1b">
&bull; updateById used to update an by its id,
<b>updateById is will return a json object with .success or . error.</b>
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let result = database.subObject.updateById("id of object",{ /*new data*/ })
```

<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.updateById("id of object",{ /*new data*/ },(result)=>{
  console.log(result)
})
```

<div style="color:#701b1b">

result will return a object with success or error</b>

</div>

```js
  {
    success:"item updated"
  },
```

<div style="color:#701b1b">

or if no object or error result will return

</div>

```js
{
  error:"error message"
},
```
<div style="color:#701b1b">

##### if you are using updateById for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.updateById("id of object",{ /*new data*/ },(result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be something like this

</div>

```cmd
{
  db1: { sub1:[Object] , sub2: [Object] },
  db2: { sub1:[Object] , sub2: [Object]  }
}

```

## <label style="color:#54a130">deleteOne ❌</label>

<div style="color:#701b1b">
&bull; deleteOne is used to delete an object in database,
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let result = database.subObject.deleteOne({/*findOne data*/})
```

<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.deleteOne({/*findOne data*/},(result)=>{
  console.log(result)
})
```

```js
  {
    success:"item removed"
  },
```

<div style="color:#701b1b">

or if no object or error result will return

</div>

```js
{
  error:"error message"
},
```

<div style="color:#701b1b">

##### if you are using deleteOne for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.deleteOne({randomdata:"blahblah"},(result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be something like this

</div>

```cmd
{
  db1: { sub1:[Object], sub2: [Object] },
  db2: { sub1: undefined, sub2: undefined }
}

```


## <label style="color:#54a130">deleteMult ❌</label>

<div style="color:#701b1b">
&bull; deleteMult is used to delete multiple objects in a database
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let result = database.subObject.deleteMult({/*find data*/})
```

<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.deleteMult({/*find data*/},(result)=>{
  console.log(result)
})
```

<div style="color:#701b1b">

result will return a array</b>

</div>

```js
  [
    {
      success:"item removed"
    },
    {
      success:"item removed"
    },
  ]
```

<div style="color:#701b1b">

##### if you are using find for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.deleteMult({randomdata:"blahblah"},(result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be something like this

</div>

```cmd
{
  db1: { sub1: [ [Object], [Object] ], sub2: [ [Object], [Object] ] },
  db2: { sub1: [ [Object], [Object] ], sub2: [ [Object], [Object] ] },
}

```

## <label style="color:#54a130">deleteAll ❌</label>

<div style="color:#701b1b">
&bull; deleteAll is used to delete all items inside a database
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let result = database.subObject.deleteAll()
```

<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.deleteAll((result)=>{
  console.log(result)
})
```

<div style="color:#701b1b">

result will return a object</b>

</div>

```js
  [
    {
      success:"item removed"
    },
    {
      success:"item removed"
    },
  ]
```

<div style="color:#701b1b">

##### if you are using deleteAll for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.deleteAll((result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be something like this

</div>

```cmd
{
  db1: { sub1: [Object], sub2: [Object] },
  db2: { sub1: [Object], sub2: [Object] }
}

```


## <label style="color:#54a130">deleteById ❌</label>

<div style="color:#701b1b">
&bull; deleteById is used to delete an item by its id,
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let result = database.subObject.deleteById("id of object")
```

<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.deleteById("id of object",(result)=>{
  console.log(result)
})
```

<div style="color:#701b1b">

result will return a object</b>

</div>

```js
  {
    success:"item removed"
  },
```

<div style="color:#701b1b">

or if no object or error result will return

</div>

```js
  {
    error:"error message"
  },
```

<div style="color:#701b1b">

##### if you are using deleteById for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.deleteById("id of object",(result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be something like this

</div>

```cmd
{
  db1: { sub1: [Object], sub2: [Object] },
  db2: { sub1: [Object], sub2: [Object] }
}

```

## <label style="color:#54a130">findOne 🔍</label>

<div style="color:#701b1b">
&bull; findOne used to find a <b>item</b> in a database,
<b>you can only findOne by one variabal. findOne only returns results if they are an exact match.</b>
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let result = database.subObject.findOne({/*data*/})
```

<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.findOne({
 /*data*/
},(result)=>{
  console.log(result)
})
```

<div style="color:#701b1b">

result will return a object</b>

</div>

```js
  {
    /object data/
  },
```

<div style="color:#701b1b">

or if no result result will return <b>undefined</b>

</div>

```js
undefined
```

<div style="color:#701b1b">

##### if you are using findOne for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.findOne({randomdata:"blahblah"},(result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be something like this

</div>

```cmd
{
  db1: { sub1:[Object], sub2: [Object] },
  db2: { sub1: undefined, sub2: undefined }
}

```
## <label style="color:#54a130">find 🔍</label>

<div style="color:#701b1b">
&bull; find used to find an <b>array</b> of items in a database,
<b>you can only find by one variabal. find only returns results if they are an exact match.</b>
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let result = database.subObject.find({/*data*/})
```

<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.find({
 /*data*/
},(result)=>{
  console.log(result)
})
```

<div style="color:#701b1b">

result will return a array</b>

</div>

```js
  [
    {
    /object data/
    },
  ]
```

<div style="color:#701b1b">

or

</div>

```js
[]
```

<div style="color:#701b1b">

##### if you are using find for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.find({randomdata:"blahblah"},(result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be something like this

</div>

```cmd
{
  db1: { sub1: [ [Object], [Object] ], sub2: [ [Object], [Object] ] },
  db2: { sub1: [], sub2: [] }
}

```


## <label style="color:#54a130">findById 🔍</label>

<div style="color:#701b1b">
&bull; findById is used to <b>find a item by its a id</b>
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let result = database.subObject.findById("id of object")
```

<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.findById("id of object",(result)=>{
  console.log(result)
})
```

<div style="color:#701b1b">

result will return a object</b>

</div>

```js
  {
    /object data/
  },
```

<div style="color:#701b1b">

or if no result result will return <b>undefined</b>

</div>

```js
undefined
```
<div style="color:#701b1b">

##### if you are using findById for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.findById("id of object",(result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be something like this

</div>

```cmd
{
  db1: { sub1:undefined, sub2: [Object] },
  db2: { sub1: undefined, sub2: undefined }
}

```

## <label style="color:#54a130">searchOne 🔍</label>

<div style="color:#701b1b">
&bull; searchOne used to search for a <b>item</b> in a database,
<b>you can only searchOne by one variabal. searchOne returns a result that matches or startwith search, also it isnt case sensitive.</b>
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let result = database.subObject.searchOne({/*data*/})
```

<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.searchOne({
 /*data*/
},(result)=>{
  console.log(result)
})
```

<div style="color:#701b1b">

result will return a object</b>

</div>

```js
  {
    /object data/
  },
```

<div style="color:#701b1b">

or if no result result will return <b>undefined</b>

</div>

```js
undefined
```

<div style="color:#701b1b">

##### if you are using searchOne for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.searchOne({randomdata:"blA"},(result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be something like this

</div>

```cmd
{
  db1: { sub1:[Object], sub2: [Object] },
  db2: { sub1: undefined, sub2: undefined }
}

```
## <label style="color:#54a130">search 🔍</label>

<div style="color:#701b1b">
&bull; search used to search for a <b>array of items</b> in a database,
<b>you can only search by one variabal. search returns results that match or startwith search, also it isnt case sensitive.</b>
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let result = database.subObject.search({/*data*/})
```

<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.search({
 /*data*/
},(result)=>{
  console.log(result)
})
```

<div style="color:#701b1b">

result will return a array</b>

</div>

```js
  [
    {
    /object data/
    },
  ]
```

<div style="color:#701b1b">

or

</div>

```js
[]
```

<div style="color:#701b1b">

##### if you are using search for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.search({randomdata:"bla"},(result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be something like this

</div>

```cmd
{
  db1: { sub1: [ [Object], [Object] ], sub2: [ [Object], [Object] ] },
  db2: { sub1: [], sub2: [] }
}

```


## <label style="color:#54a130">searchById 🔍</label>

<div style="color:#701b1b">
&bull; searchById used to search for a an item by its id,
<b>searchById returns results that match or startwith search, also it isnt case sensitive.</b>
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

</div>

```js
let result = database.subObject.searchById("id of object")
```

<div style="color:#701b1b">

##### all flexDb functions have a <b>callback function</b> so you can also use

</div>

```js
database.subObject.searchById("id of object",(result)=>{
  console.log(result)
})
```

<div style="color:#701b1b">

result will return a object</b>

</div>

```js
  {
    /object data/
  },
```

<div style="color:#701b1b">

or if no result result will return <b>undefined</b>

</div>

```js
undefined
```
<div style="color:#701b1b">

##### if you are using searchById for a joined object like this

</div>

```js
const flexDb = require("flex-db")
let db1 = flexDb("db1")
db1.sub1 = true
db1.sub2 = true
let db2 = flexDb("db2")
db2.sub1 = true
db2.sub2 = true
let database = flexDb.join({
    db1:db1(),
    db2:db2()
})
database.searchById("id of object",(result)=>{
console.log(result)
})
```

<div style="color:#701b1b">

##### your output will be something like this

</div>

```cmd
{
  db1: { sub1:undefined, sub2: [Object] },
  db2: { sub1: undefined, sub2: undefined }
}

```


# <label style="color:#54a130">flex-db network tools usage ᯤ</label>

<div style="color:#701b1b">

&bull; all databases are joined by defualt.
<br>&bull; flexdb.join only works with flexdb databases and sub objects.
<br>&bull; <b>please note! once objects are joined they are async functions that require await.</b>

</div>


## <label style="color:#54a130">listen ᯤ</label>

<div style="color:#701b1b">

&bull; all database objects, even remote ones can be used as remote servers for flex-db connect.
<br>&bull; server is built with <b>express</b>.
<br>&bull; <b>please note! once objects are joined or remote they are async functions that require await.</b>

to use listen you must first make a database object

</div>

```js
const flexDB = require("flex-db")
const database = flexDb("my database")

database.openDB = true
```

<div style="color:#701b1b">

you can use listen on both joined objects and sub objects

</div>


```js
database().listen(8080)

```
```js
database().openDB.listen(8080)
```

<div style="color:#701b1b">


### <label style="color:#54a130">listen santax ᯤ  { }</label>
flex-db listen can be used in multiple ways

</div>

```js
let server = database().listen(/*port*/,/*config*/,/*server callback function*/)
```

```js
let server = database().listen(/*port*/,/*server callback function*/)
```

```js
let server = database().listen(/*config port must now be in config*/,/*server callback function*/)
```


### <label style="color:#54a130">listen config options</label>

<div style="color:#701b1b">

#### https
https is used to encrypt database

</div>

```js
database().listen(8080,{
    https:{
        key:"path to key file",
        cert:"path to cert file"
    }
})
```



<div style="color:#701b1b">

#### key
a key is used as a password to the server functions

</div>

```js
database().listen(8080,{
    key:"P@$$W0RD"
})
```

<div style="color:#701b1b">

#### whiteList
the whiteList option blocks all ip addresses that are not on the list

</div>

```js
database().listen(8080,{
    whiteList:[
    "172.0.0.1",
    ]
})
```

<div style="color:#701b1b">

#### blackList
a blackList is used to block ip addresses

</div>

```js
database().listen(8080,{
    blackList:[
    "8.8.8.8"
    ]
})
```

<div style="color:#701b1b">

#### port
port sets the server port number

</div>

```js
database().listen({
    port:8080
})
```

## <label style="color:#54a130">router ᯤ</label>

<div style="color:#701b1b">

&bull; router can be used to embed a database listen on a express app, <b>santax same as listen,config same as listen</b>.
<br>&bull; <b>please note! remote functions are async functions that require await.</b>

#### example

</div>

```js
//make express app
const express = require("express")
const app = express()

// make flex-db database
const flexDb = require("flex-db")
let database = flexDb("database")
database.test = true
database.test2 = true
let db = database()

// to include make flex-db.js avadible on your server :
app.get("/flex-db.js",flexDb.browserScript)

// make some client side scripting
app.get("/",(req,res)=>{res.send(`
  <script src="/flex-db.js"></script>
  <script>
  flexDb.connect("localhost:8080/database",async(db)=>{
    console.log(await db.makeOne({name:"jhon"}))
    console.log(await db.getAll())
    console.log(await db.deleteMult({name:"jhon"}))
  })
  </script>
`)})

// use db.router to embed database intoo server
app.use("/database",db.router({whiteList:["127.0.0.1"]}))

// start app
app.listen(8080)
```

## <label style="color:#54a130">connect ᯤ</label>

<div style="color:#701b1b">

&bull; connect is used to connect to a flex-db database that is listening.
<br>&bull; <b>please note! remote functions are async functions that require await.</b>

</div>

```js
flexDb.connect(url,{key:"server key"},async(database)=>{
console.log(await database.getAll())
})
```

### <label style="color:#54a130">connect santax ᯤ  { }  </label>

```js
let flexDb = reqiure("flex-db")
```
<div style="color:#701b1b">

flex-db connect can be used in multiple ways

</div>

```js
let database = await flexDb.connect(/*url*/,/*config*/,/*server callback function*/)
```

```js
let database = await flexDb.connect(/*url*/,/*server callback function*/)
```


<div style="color:#701b1b">

using flex-db connect with web browser example

</div>

```js
//make express app
const express = require("express")
const app = express()

// make flex-db database server
const flexDb = require("flex-db")
let database = flexDb("database")
database.test = true
database.test2 = true
let db = database()
db.listen(8081)
// to include make flex-db.js avadible on your server :

// make some client side scripting
app.get("/",(req,res)=>{res.send(`
  <script src="/flex-db.js"></script>
  <script>
  flexDb.connect("http://localhost:8081/",async(db)=>{
    console.log(await db.makeOne({name:"jhon"}))
    console.log(await db.getAll())
    console.log(await db.deleteMult({name:"jhon"}))
  })
  </script>
`)})


// start app
app.listen(8080)

```


<div style="color:#54a130">

#### remote databases can be joined with normal databases using flex-db join

</div>

# <label style="color:#54a130">flex-db database building tools 🏗️</label>

<div style="color:#701b1b">

&bull; all databases are joined by defualt.
<br>&bull; flexdb.join only works with flexdb databases and sub objects.
<br>&bull; <b>please note! once objects are joined they are async functions that require await.</b>

</div>

## <label style="color:#54a130">join 🔗</label>

<div style="color:#701b1b">

&bull; all databases are joined by defualt.
<br>&bull; flexdb.join only works with flexdb databases and sub objects.
<br>&bull; <b>please note! once objects are joined they are async functions that require await.</b>

</div>

#### <label style="color:#54a130">first, make a database</label>
```js
const flexDb = require("flex-db")
const databaseScema1 = flexDb("database1")
databaseScema1.bikes=true
let database1 = databaseScema1()
```
#### <label style="color:#54a130">now make a second database</label>
```js
const databaseScema2 = flexDb("database2")
databaseScema2.cars=true
let database2 = databaseScema2()
```
#### <label style="color:#54a130">now we are going to join the 2 databases so that we can use them at the same time</label>
```js
let joinedDB = flexDb.join({
  db1:database,
  db2:database2,
})
```

#### <label style="color:#54a130">you can now do things like</label>

```js
console.log(await joinedDB.findOne({model:"Mazda"}))
console.log(await joinedDB.getAll())
```

#### <label style="color:#54a130">flex-db join can also be used for just sub objects</labe>


```js
let carsAndUsers = flexDb.join({
  cars:database2.cars,
  users:database1.users
})
carsAndUsers.search({username:"J"},(results)=>{
console.log(results)
})
```

## <label style="color:#54a130">slice 🔗</label>

flex-db slice can cut a item out of a database object

```js
let databaseNoUsers = flexDb.slice(database,"users")
```

# <label style="color:#1b7057">flex-db database structure examples</label>

## <label style="color:#886a99">example 1</label>

#### <label style="color:#41a6ab">input</label>
```js
const flexDb = require("flex-db")
const database = flexDb("database")
database.openDB1 = true
database.openDB2 = true;
database.openDB3 = true;
database.openDB4 = true;
console.log(database())
```
#### <label style="color:#41a6ab">output</label>
```js
{
  'joined flex-db object': true,
  makeOne: [AsyncFunction: makeOne],
  updateOne: [AsyncFunction: updateOne],
  updateMult: [AsyncFunction: updateMult],
  updateAll: [AsyncFunction: updateAll],
  updateById: [AsyncFunction: updateById],
  deleteOne: [AsyncFunction: deleteOne],
  deleteById: [AsyncFunction: deleteById],
  deleteMult: [AsyncFunction: deleteMult],
  deleteAll: [AsyncFunction: deleteAll],
  findOne: [AsyncFunction: findOne],
  find: [AsyncFunction: find],
  findById: [AsyncFunction: findById],
  searchOne: [AsyncFunction: searchOne],
  search: [AsyncFunction: search],
  searchById: [AsyncFunction: searchById],
  getAll: [AsyncFunction: getAll],
  listen: [Function],
  openDB1: {
    'basic flex-db object': true,
    makeOne: [Function: makeOne],
    updateOne: [Function: updateOne],
    updateById: [Function: updateById],
    updateMult: [Function: updateMult],
    updateAll: [Function: updateAll],
    getAll: [Function: getAll],
    find: [Function: find],
    findById: [Function: findById],
    findOne: [Function: findOne],
    search: [Function: search],
    searchById: [Function: searchById],
    searchOne: [Function: searchOne],
    deleteById: [Function: deleteById],
    deleteOne: [Function: deleteOne],
    deleteMult: [Function: deleteMult],
    deleteAll: [Function: deleteAll],
    listen: [Function]
  },
  openDB2: {
    'basic flex-db object': true,
    makeOne: [Function: makeOne],
    updateOne: [Function: updateOne],
    updateById: [Function: updateById],
    updateMult: [Function: updateMult],
    updateAll: [Function: updateAll],
    getAll: [Function: getAll],
    find: [Function: find],
    findById: [Function: findById],
    findOne: [Function: findOne],
    search: [Function: search],
    searchById: [Function: searchById],
    searchOne: [Function: searchOne],
    deleteById: [Function: deleteById],
    deleteOne: [Function: deleteOne],
    deleteMult: [Function: deleteMult],
    deleteAll: [Function: deleteAll],
    listen: [Function]
  },
  openDB3: {
    'basic flex-db object': true,
    makeOne: [Function: makeOne],
    updateOne: [Function: updateOne],
    updateById: [Function: updateById],
    updateMult: [Function: updateMult],
    updateAll: [Function: updateAll],
    getAll: [Function: getAll],
    find: [Function: find],
    findById: [Function: findById],
    findOne: [Function: findOne],
    search: [Function: search],
    searchById: [Function: searchById],
    searchOne: [Function: searchOne],
    deleteById: [Function: deleteById],
    deleteOne: [Function: deleteOne],
    deleteMult: [Function: deleteMult],
    deleteAll: [Function: deleteAll],
    listen: [Function]
  },
  openDB4: {
    'basic flex-db object': true,
    makeOne: [Function: makeOne],
    updateOne: [Function: updateOne],
    updateById: [Function: updateById],
    updateMult: [Function: updateMult],
    updateAll: [Function: updateAll],
    getAll: [Function: getAll],
    find: [Function: find],
    findById: [Function: findById],
    findOne: [Function: findOne],
    search: [Function: search],
    searchById: [Function: searchById],
    searchOne: [Function: searchOne],
    deleteById: [Function: deleteById],
    deleteOne: [Function: deleteOne],
    deleteMult: [Function: deleteMult],
    deleteAll: [Function: deleteAll],
    listen: [Function]
  }
}
```
## <label style="color:#886a99">example 2</label>
#### <label style="color:#41a6ab">input</label>
```js
const flexDb = require("flex-db")
const database = flexDb("database")
database.openDB1 = true
database.openDB2 = true;
const database2 = flexDb("database2")
database2.openDB1 = true
database2.openDB2 = true;

let joined_database = flexDb.join({
    database:database(),
    database2:database2()
})

console.log(joined_database)
```
#### <label style="color:#41a6ab">output</label>
```js
{
  'joined flex-db object': true,
  makeOne: [AsyncFunction: makeOne],
  updateOne: [AsyncFunction: updateOne],
  updateMult: [AsyncFunction: updateMult],
  updateAll: [AsyncFunction: updateAll],
  updateById: [AsyncFunction: updateById],
  deleteOne: [AsyncFunction: deleteOne],
  deleteById: [AsyncFunction: deleteById],
  deleteMult: [AsyncFunction: deleteMult],
  deleteAll: [AsyncFunction: deleteAll],
  findOne: [AsyncFunction: findOne],
  find: [AsyncFunction: find],
  findById: [AsyncFunction: findById],
  searchOne: [AsyncFunction: searchOne],
  search: [AsyncFunction: search],
  searchById: [AsyncFunction: searchById],
  getAll: [AsyncFunction: getAll],
  listen: [Function],
  database: {
    'joined flex-db object': true,
    makeOne: [AsyncFunction: makeOne],
    updateOne: [AsyncFunction: updateOne],
    updateMult: [AsyncFunction: updateMult],
    updateAll: [AsyncFunction: updateAll],
    updateById: [AsyncFunction: updateById],
    deleteOne: [AsyncFunction: deleteOne],
    deleteById: [AsyncFunction: deleteById],
    deleteMult: [AsyncFunction: deleteMult],
    deleteAll: [AsyncFunction: deleteAll],
    findOne: [AsyncFunction: findOne],
    find: [AsyncFunction: find],
    findById: [AsyncFunction: findById],
    searchOne: [AsyncFunction: searchOne],
    search: [AsyncFunction: search],
    searchById: [AsyncFunction: searchById],
    getAll: [AsyncFunction: getAll],
    listen: [Function],
    openDB1: {
      'basic flex-db object': true,
      makeOne: [Function: makeOne],
      updateOne: [Function: updateOne],
      updateById: [Function: updateById],
      updateMult: [Function: updateMult],
      updateAll: [Function: updateAll],
      getAll: [Function: getAll],
      find: [Function: find],
      findById: [Function: findById],
      findOne: [Function: findOne],
      search: [Function: search],
      searchById: [Function: searchById],
      searchOne: [Function: searchOne],
      deleteById: [Function: deleteById],
      deleteOne: [Function: deleteOne],
      deleteMult: [Function: deleteMult],
      deleteAll: [Function: deleteAll],
      listen: [Function]
    },
    openDB2: {
      'basic flex-db object': true,
      makeOne: [Function: makeOne],
      updateOne: [Function: updateOne],
      updateById: [Function: updateById],
      updateMult: [Function: updateMult],
      updateAll: [Function: updateAll],
      getAll: [Function: getAll],
      find: [Function: find],
      findById: [Function: findById],
      findOne: [Function: findOne],
      search: [Function: search],
      searchById: [Function: searchById],
      searchOne: [Function: searchOne],
      deleteById: [Function: deleteById],
      deleteOne: [Function: deleteOne],
      deleteMult: [Function: deleteMult],
      deleteAll: [Function: deleteAll],
      listen: [Function]
    }
  },
  database2: {
    'joined flex-db object': true,
    makeOne: [AsyncFunction: makeOne],
    updateOne: [AsyncFunction: updateOne],
    updateMult: [AsyncFunction: updateMult],
    updateAll: [AsyncFunction: updateAll],
    updateById: [AsyncFunction: updateById],
    deleteOne: [AsyncFunction: deleteOne],
    deleteById: [AsyncFunction: deleteById],
    deleteMult: [AsyncFunction: deleteMult],
    deleteAll: [AsyncFunction: deleteAll],
    findOne: [AsyncFunction: findOne],
    find: [AsyncFunction: find],
    findById: [AsyncFunction: findById],
    searchOne: [AsyncFunction: searchOne],
    search: [AsyncFunction: search],
    searchById: [AsyncFunction: searchById],
    getAll: [AsyncFunction: getAll],
    listen: [Function],
    openDB1: {
      'basic flex-db object': true,
      makeOne: [Function: makeOne],
      updateOne: [Function: updateOne],
      updateById: [Function: updateById],
      updateMult: [Function: updateMult],
      updateAll: [Function: updateAll],
      getAll: [Function: getAll],
      find: [Function: find],
      findById: [Function: findById],
      findOne: [Function: findOne],
      search: [Function: search],
      searchById: [Function: searchById],
      searchOne: [Function: searchOne],
      deleteById: [Function: deleteById],
      deleteOne: [Function: deleteOne],
      deleteMult: [Function: deleteMult],
      deleteAll: [Function: deleteAll],
      listen: [Function]
    },
    openDB2: {
      'basic flex-db object': true,
      makeOne: [Function: makeOne],
      updateOne: [Function: updateOne],
      updateById: [Function: updateById],
      updateMult: [Function: updateMult],
      updateAll: [Function: updateAll],
      getAll: [Function: getAll],
      find: [Function: find],
      findById: [Function: findById],
      findOne: [Function: findOne],
      search: [Function: search],
      searchById: [Function: searchById],
      searchOne: [Function: searchOne],
      deleteById: [Function: deleteById],
      deleteOne: [Function: deleteOne],
      deleteMult: [Function: deleteMult],
      deleteAll: [Function: deleteAll],
      listen: [Function]
    }
  }
}
```


# <label style="color:#1b7057">flex-db examples</label>
##### <label style="color:#1b7057">&bull; making a normal database 1</label>
```js
const flexDb = require("flex-db")
const database = flexDb("database")
database.openDB1 = true
database.openDB2 = true;
let _db = database()
```
##### <label style="color:#1b7057">&bull; joining local and remote databases</label>
```js
const flexDb = require("flex-db")
const database = flexDb("database")
database.openDB1 = true
database.openDB2 = true;
database.openDB3 = true;
database.openDB4 = true;
const database2 = flexDb("database2")
database2.openDB1 = true
database2.openDB2 = true;
database2.openDB3 = true;
database2.openDB4 = true;
let connection = database2().listen(8080)
let main = async function(){

  let joined_database = flexDb.join({
      database:database(),
      database2:await flexDb.connect(8080)
  })

console.log(await joined_database.makeOne({name:"jhon"}))
console.log(await joined_database.getAll())
console.log(await joined_database.updateMult({name:"jhon"},{name:"sam"}))
console.log(await joined_database.database.updateOne({name:"sam"},{name:"Samis"}))
console.log(await joined_database.getAll())
console.log(await joined_database.deleteMult({name:"sam"}))
console.log(await joined_database.getAll())
}()
```
##### <label style="color:#1b7057">expected output :</label>

```cmd
{
  database: {
    openDB1: { success: 'item made' },
    openDB2: { success: 'item made' },
    openDB3: { success: 'item made' },
    openDB4: { success: 'item made' }
  },
  database2: {
    openDB1: { success: 'item made' },
    openDB2: { success: 'item made' },
    openDB3: { success: 'item made' },
    openDB4: { success: 'item made' }
  }
}
{
  database: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  },
  database2: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  }
}
{
  database: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  },
  database2: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  }
}
{
  openDB1: { success: 'item updated' },
  openDB2: { success: 'item updated' },
  openDB3: { success: 'item updated' },
  openDB4: { success: 'item updated' }
}
{
  database: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  },
  database2: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  }
}
{
  database: { openDB1: [], openDB2: [], openDB3: [], openDB4: [] },
  database2: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  }
}
{
  database: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  },
  database2: { openDB1: [], openDB2: [], openDB3: [], openDB4: [] }
}
```
##### <label style="color:#1b7057">&bull; joining databases</label>
```js
const flexDb = require("flex-db")
const database = flexDb("database")
database.openDB1 = true
database.openDB2 = true;
database.openDB3 = true;
database.openDB4 = true;
const database2 = flexDb("database2")
database2.openDB1 = true
database2.openDB2 = true;
database2.openDB3 = true;
database2.openDB4 = true;
let joined_database = flexDb.join({
    database:database(),
    database2:database2()
})
let main = async function(){
console.log(await joined_database.makeOne({name:"jhon"}))
console.log(await joined_database.getAll())
console.log(await joined_database.updateMult({name:"jhon"},{name:"sam"}))
console.log(await joined_database.database.updateOne({name:"sam"},{name:"Samis"}))
console.log(await joined_database.getAll())
console.log(await joined_database.deleteMult({name:"sam"}))
console.log(await joined_database.getAll())
}()

```

##### <label style="color:#1b7057">expected output :</label>

```cmd
{
  database: {
    openDB1: { success: 'item made' },
    openDB2: { success: 'item made' },
    openDB3: { success: 'item made' },
    openDB4: { success: 'item made' }
  },
  database2: {
    openDB1: { success: 'item made' },
    openDB2: { success: 'item made' },
    openDB3: { success: 'item made' },
    openDB4: { success: 'item made' }
  }
}
{
  database: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  },
  database2: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  }
}
{
  database: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  },
  database2: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  }
}
{
  openDB1: { success: 'item updated' },
  openDB2: { success: 'item updated' },
  openDB3: { success: 'item updated' },
  openDB4: { success: 'item updated' }
}
{
  database: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  },
  database2: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  }
}
{
  database: { openDB1: [], openDB2: [], openDB3: [], openDB4: [] },
  database2: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  }
}
{
  database: {
    openDB1: [ [Object] ],
    openDB2: [ [Object] ],
    openDB3: [ [Object] ],
    openDB4: [ [Object] ]
  },
  database2: { openDB1: [], openDB2: [], openDB3: [], openDB4: [] }
}
```

# <label style="color:#1b7057">future updates for flex-db 3.0.3</label>

<div style="color:#701b1b">

#### &bull; web browser connect script

#### &bull; mongoose to flex-db object

#### &bull; flex-db console control
</div>
<br>
<br>

##### <label style="color:#1b7057"> auther : Damian Mostert</label>
##### <label style="color:#1b7057"> email : damianmostert86@gmail.com</label>

###### <div style="color:#3bb35b">if you wish to contrubute to the project, share ideas for improvement, share problems and sulutions to my project, please feel free to send me a email 😄 .</div>
<br>

<div style="color:#912bcc">

dependencies
<br><small>
&bull; express (for flex-db listen and flex-db router)
</small>
</div>
<br>
<br>
