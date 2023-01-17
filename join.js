let join = function(earray){
  const array = earray
  let mainC = {
    "joined flex-db object":true,
    makeOne:async function(data,done){
      let results = {}
      for(let i in array){
        if(typeof array[i] == "object"){
        if(typeof array[i].makeOne == "function"||typeof array[i].make == "function"){
        results[i] =await array[i].makeOne(data)
        }
        }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    updateOne:async function(data,newdata,done){
      let results = {}
      for(let i in array){
          if(typeof array[i] == "object"){
          if(typeof array[i].updateOne == "function"||typeof array[i].update == "function"){
              results[i] =await array[i].updateOne(data,newdata)
          }
        }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    updateMult:async function(filter,newdata,done){
      let results = {}
      for(let i in array){
          if(typeof array[i] == "object"){
          if(typeof array[i].updateMult == "function"){
          results[i] =await array[i].updateMult(filter,newdata)
          }
        }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    updateAll:async function(newdata,done){
      let results = {}
      for(let i in array){
          if(typeof array[i] == "object"){
          if(typeof array[i].updateAll == "function"){
          results[i] =await array[i].updateAll(newdata)
          }
        }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    updateById:async function(id,newdata,done){
      let results = {}
      for(let i in array){
          if(typeof array[i] == "object"){
          if(typeof array[i].updateById == "function"){
          results[i] =await array[i].updateById(id,newdata)
          }
        }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    deleteOne:async function(data,done){
      let results = {}
      for(let i in array){
          if(typeof array[i] == "object"){
          if(typeof array[i].deleteOne == "function"){
          results[i] =await array[i].deleteOne(data)
          }
        }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    deleteById:async function(id,done){
      let results = {}
      for(let i in array){
          if(typeof array[i] == "object"){
          if(typeof array[i].deleteById == "function"){
          results[i] =await array[i].deleteById(id)
          }
        }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    deleteMult:async function(filter,done){
      let results = {}
      for(let i in array){
          if(typeof array[i] == "object"){
          if(typeof array[i].deleteMult == "function"){
          results[i] =await array[i].deleteMult(filter)
          }
        }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    deleteAll:async function(done){
      let results = {}
      for(let i in array){
          if(typeof array[i] == "object"){
          if(typeof array[i].deleteAll == "function"){
          results[i] =await array[i].deleteAll()
          }
        }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    findOne:async function(data,done){
      let results = {}
      for(let i in array){
          if(typeof array[i] == "object"){
          if(typeof array[i].findOne == "function"){
            results[i] =await array[i].findOne(data)
            }
          }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    find:async function(data,done){
      let results = {}
      for(let i in array){
          if(typeof array[i] == "object"){
          if(typeof array[i].find == "function"){
          results[i] =await array[i].find(data)
          }
        }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    findById:async function(id,done){
      let results = {}
      for(let i in array){
          if(typeof array[i] == "object"){
          if(typeof array[i].findById == "function"){
          results[i] =await array[i].findById(id)
          }
        }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    searchOne:async function(data,done){
      let results = {}
      for(let i in array){
        if(typeof array[i] == "object"){
          if(typeof array[i].searchOne == "function"){
            results[i] = await array[i].searchOne(data)
          }
        }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    search:async function(data,done){
      let results = {}
      for(let i in array){
        if(typeof array[i] == "object"){
          if(typeof array[i].search == "function"){
            results[i] =await array[i].search(data)
          }
        }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    searchById:async function(id,done){
      let results = {}
      for(let i in array){
          if(typeof array[i] == "object"){
          if(typeof array[i].searchById == "function"){
          results[i] =await array[i].searchById(id)
          }
        }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    getAll:async function(done){
      let results = {}
      for(let i in array){
      if(typeof array[i] == "object"){
        if(typeof array[i].getAll == "function"){
          results[i] =await array[i].getAll()
        }
      }
      }
      if(typeof done == "function"){await done(results)}
      return results
    },
    listen:require("./listen(join).js")(array),
    router:require("./router(join).js")(array),
  }
  for(let o in array){mainC[o] = array[o]}
  return mainC
}
module.exports = join
