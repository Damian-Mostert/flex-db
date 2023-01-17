let connect = async function(mainURL,call1,call2){
    if(!mainURL.startsWith("http://")&&!mainURL.startsWith("https://")){
      mainURL = "http://"+mainURL
    }
      let config = {}
      let done = {}
      if(typeof port == "object"){
        config = port;
        port = config.port
        done = call1
      }else{
      if(typeof call1 == "object"){
        config = call1
      }
      if(typeof call2 == "object"){
        config = call2
      }
      if(typeof call1 == "function"){
        done = call1
      }
      if(typeof call2 == "function"){
        done = call2
      }
      }
    let request = async function(surl,data){
      if((surl.startsWith("/"))){
      surl = surl.slice(1);
      }
      if((mainURL.startsWith("/"))){
      mainURL = mainURL.slice(1);
      }
      let url = function(extra){
        return mainURL+"/"+extra
      };
      async function post(url,data){
        return new Promise(Return=>{
          const Http = new XMLHttpRequest();
          Http.open("POST", url);
          Http.send(JSON.stringify(data));

          Http.onreadystatechange = (e) => {
            try{
              Return(JSON.parse(Http.responseText))
            }catch(s){
            }
          }
        })
      }
      if(typeof data == "object"){data.key=config.key};
      let response = await post(url(surl),data)
      if(response.error){throw (response.error)};
      return response
    }
    let SYNC_ATTEMPT = await request("SyncObject",{})
    if(SYNC_ATTEMPT.success){
    if(SYNC_ATTEMPT.success.database_type == "joined"){
    let cJOIN = function(request,schema){
      function obj(miniJSON,url){
        let make = function(objname){
          return async function(data,done){
            let response = await request(objname+"/make",{
              newdata:data
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let makeOne = function(objname){
          return async function(data,done){
            let response = await request(objname+"/makeOne",{
              newdata:data
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let updateOne = function(objname){
          return async function(data,newdata,done){
            let response = await request(objname+"/updateOne",{
              data:data,
              newdata:newdata
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let updateById= function(objname){
          return async function(id,newdata,done){
            let response = await request("updateById",{
              "object name":objname,
              id:id,
              newdata:newdata
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let updateMult = function(objname){
          return async function(data,newdata,done){
            let response = await request(objname+"/updateMult",{
              data:data,
              newdata:newdata
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let updateAll = function(objname){
          return async function(newdata,done){
            let response = await request(objname+"updateAll",{
              newdata:newdata
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let deleteOne = function(objname){
          return async function(data,done){
            let response = await request(objname+"/deleteOne",{
              "object name":objname,
              data:data
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let deleteMult = function(objname){
          return async function(data,done){
            let response = await request(objname+"/deleteMult",{
              data:data
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let deleteById = function(objname){
          return async function(id,done){
            let response = await request(objname+"/deleteById",{
              id:id
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let getAll = function(objname){
          return async function(done){
            let response = await request(objname+"/getAll",{})
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let deleteAll = function(objname){
          return async function(done){
            let response = await request(objname+"/deleteAll",{})
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let find = function(objname){
          return async function(data,done){
            let response = await request(objname+"/find",{
              data:data
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let findOne = function(objname){
          return async function(data,done){
            let response = await request(objname+"/findOne",{
              data:data
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let findById = function(objname){
          return async function(id,done){
            let response = await request(objname+"/findById",{
              id:id
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let search = function(objname){
          return async function(data,done){
            let response = await request(objname+"/search",{
              data:data
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let searchOne = function(objname){
          return async function(data,done){
            let response = await request(objname+"/searchOne",{
              data:data
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        let searchById = function(objname){
          return async function(id,done){
            let response = await request(objname+"/searchById",{
              id:id
            })
            if(typeof done == "function"){
              await done(response.success)
            }
            return response.success
          }
        }
        miniJSON.makeOne = makeOne(url)
        miniJSON.updateOne = updateOne(url)
        miniJSON.updateById = updateById(url)
        miniJSON.updateMult = updateMult(url)
        miniJSON.updateAll = updateAll(url)
        miniJSON.getAll = getAll(url)
        miniJSON.findById = findById(url)
        miniJSON.find = find(url)
        miniJSON.findOne = findOne(url)
        miniJSON.searchById = searchById(url)
        miniJSON.search = search(url)
        miniJSON.searchOne = searchOne(url)
        miniJSON.deleteById = deleteById(url)
        miniJSON.delete = deleteOne(url)
        miniJSON.deleteMult = deleteMult(url)
        miniJSON.deleteAll = deleteAll(url)
        return miniJSON
      }
      function joinWeb(schema,scemaName,last){
        let miniJSON = {}
        for(let object in schema){
          if(!(object == 'joined flex-db object')){
            if(!scemaName){
              miniJSON["joined flex-db object"] = true
              miniJSON[object] = joinWeb(schema[object],object,"")
              newminiJSON = obj(miniJSON,"")
              miniJSON = newminiJSON
            }else if(schema['joined flex-db object']&&scemaName){
              miniJSON[object] = joinWeb(schema[object],object,last+"/"+scemaName)
              miniJSON["joined flex-db object"] = true
              newminiJSON = obj(miniJSON,last+"/"+scemaName)
              miniJSON = newminiJSON
            }
          }
        }
        if(schema['basic flex-db object']){
          miniJSON['basic flex-db object'] = true
          newminiJSON = obj(miniJSON,last+"/"+scemaName)
          miniJSON = newminiJSON
        }else{
          miniJSON['remote joined flex-db object'] = true
        }
        return miniJSON
      }
      return joinWeb(schema)
    }
    let actions = cJOIN(request,SYNC_ATTEMPT.success.databaseScema)
    if(typeof done == "function"){await done(actions)}
    return actions
    }else if(SYNC_ATTEMPT.success.database_type == "basic"){
    let c = function(request){
      return {
        'basic flex-db object':true,
        makeOne:async function(newdata,done){
          let response = await request("makeOne",{newdata:newdata})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        updateOne:async function(filter,newdata,done){
          let response = await request("updateOne",{filter:filter,newdata:newdata})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        updateById:async function(id,newdata,done){
          let response = await request("updateByID",{id:id,newdata:newdata})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        updateMult:async function(filter,newdata,done){
          let response = await request("updateMult",{filter:filter,newdata:newdata})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        updateAll:async function(newdata,done){
          let response = await request("updateAll",{newdata:newdata})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        getAll:async function(done){
          let response = await request("getAll",{})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        find:async function(fliter,done){
          let response = await request("find",{filter:filter})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        findById:async function(id,done){
          let response = await request("find",{id:id})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        findOne:async function(filter,done){
          let response = await request("findOne",{filter:filter})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        search:async function(filter,done){
          let response = await request("search",{filter:filter})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        searchById:async function(id,done){
          let response = await request("searchById",{id:id})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        searchOne: async function(filter,done){
          let response = await request("search",{filter:filter})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        deleteById:async function(id,done){
          let response = await request("deleteById",{id:id})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        deleteOne:async function(filter,done){
          let response = await request("deleteOne",{filter:filter})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        deleteMult:async function(filter,done){
          let response = await request("deleteMult",{filter:filter})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
        deleteAll:async function(done){
          let response = await request("deleteAll",{})
          if(typeof done == "function"){
            done(response.success)
          }
          return response.success
        },
      }
    }
    let actions = c(request)
    if(typeof done == "function"){await done(actions)}
    return actions
    }
    }
}
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
  }
  for(let o in array){mainC[o] = array[o]}
  return mainC
}
let slice = function(database,item){
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
flexDb = {
  connect:connect,
  join:join,
  slice:slice
}
