module.exports = function(database,item){
  let json = {}
  for(let i in database){
    if(
      item == "getAll" ||
      item == "makeOne" ||
      item == "updateOne" ||
      item == "updateMult" ||
      item == "updateAll" ||
      item == "updateById" ||
      item == "deleteOne" ||
      item == "deleteById" ||
      item == "deleteMult" ||
      item == "deleteAll" ||
      item == "findOne" ||
      item == "find" ||
      item == "findById" ||
      item == "searchOne" ||
      item == "search" ||
      item == "searchById"
    ){}else{
    if(i == item){}else{
      json[i] = database[i]
    }
    }
  }
return json
}
