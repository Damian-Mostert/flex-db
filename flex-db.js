const fs = require("fs");
let flexDBJS = function(path){
  if(!path){path="flex-db";
  console.log(new Error("WARNING, no path set, so defualt path set","DONE IS NOT A FUNCTION"))}
  if(!fs.existsSync(path)){fs.mkdirSync(path)}
  function database(){
    let json = {};
    for(var i in database){
      if(!fs.existsSync(path+"/"+i)){fs.mkdirSync(path+"/"+i)}
      json[i] = {
        "basic flex-db object":true,
        makeOne:function(data,done){
          function mk(){
            const newId = function (length) {var result = '';var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';var charactersLength = characters.length;for ( var i = 0; i < length; i++ ) {result += characters.charAt(Math.floor(Math.random() * charactersLength));}return result;}(75);
            if(!fs.existsSync(path+"/"+i+"/"+newId)){
              fs.writeFileSync(path+"/"+i+"/"+newId, JSON.stringify(data))
            }else{
              mk()
            }
          }
          if(typeof database[i] == "boolean"&&(database[i]==true)){
            if(data.id){
              console.log(new Error("items cant't contain a ID as ids are set by defualt"));
              result = {error:"cant set id"}
            }else{
              result = {success:"item made"};mk()
            }
          }else if(typeof database[i]=="object"){
            if(data.id){
              console.log(new Error("items cant't contain a ID as ids are set by defualt"));
              result = {error:"cant set id"}
            }else{
              let oldData = data;
              data = {};
              ok = true;
              for(let s in database[i]){
                if(typeof database[i][s] == "boolean"){
                  if(database[i][s]){
                    data[s] = oldData[s]
                  }
                }else{
                  if(ok){
                    if(database[i][s].require&&!oldData[s]){
                      if(database[i][s].defualt){
                        oldData[s] = database[i][s].defualt
                      }else{
                        ok = false;
                        result = {error:"missing "+s}
                      }
                    }
                    if(oldData[s]){
                      if(database[i][s].type && !(typeof oldData[s] == database[i][s].type)){
                        ok = false;
                        result = {error:s+" is not a"+database[i][s].type}
                      }
                    }
                    if(oldData[s]){
                      if(database[i][s].size){
                        if(typeof oldData[s] == "number"){
                          if(!(database[i][s].size == oldData[s])){
                            ok = false;
                            result = {error:"size not ok at "+s}
                          }
                        }else{
                          if(!(database[i][s].size == oldData[s].length)){
                            ok = false;
                            result = {error:"size not ok at "+s}
                          }
                        }
                      }
                    }
                    if(oldData[s]){
                      if(database[i][s].minSize){
                        if(typeof oldData[s] == "number"){
                          if(!(database[i][s].minSize <= oldData[s])){
                            ok = false;
                            result = {error:s+" is to small"}
                          }
                        }else{
                          if(!(database[i][s].minSize <= oldData[s].length)){
                            ok = false;
                            result = {error:s+" is to small"}
                          }
                        }
                      }
                    }
                    if(oldData[s]){
                      if(database[i][s].maxSize){
                        if(typeof oldData[s] == "number"){
                          if(!(database[i][s].maxSize >= oldData[s])){
                            ok = false;
                            result = {error:s+" is to big"}
                          }
                        }else{
                          if(!(database[i][s].maxSize >= oldData[s].length)){
                            ok = false;
                            result = {error:s+" is to big"}
                          }
                        }
                      }
                      if(oldData[s]){
                        if(database[i][s].unique){
                          const allData = database()[i].getAll();
                          for(g in allData){
                            if(oldData[s]==allData[g][s]){
                              ok = false;
                              result = {error:s+" is taken"}
                            }
                          }
                        }
                      }
                    }
                    if(oldData[s]){
                      if(database[i][s].match){
                        if(!(oldData[s].match(database[i][s].match))){
                          ok=false;
                          result={error:s+" no match"}
                        }
                      }
                    }
                    if(oldData[s]){
                      if(oldData[s]){
                        if(database[i][s].lowerCase){
                          data[s] = oldData[s].toLowerCase()
                        }else if(database[i][s].upperCase){
                          data[s] = oldData[s].toUpperCase()
                        }else{
                          data[s] = oldData[s]
                        }
                      }
                    }
                    }
                  }
                }
                if(ok){
                  result ={success:"item made"};
                  mk()
                }
              }
            }else{
              result = {success:"item made"};
              mk()
            }
            if(done){
              if(typeof done == "function"){
                done(result)
              }else{
                throw new Error("done is not a function")
              }
            };
            return result
        },
        updateOne:function(filter,newdata,done){
          data = database()[i].findOne(filter);
          function mk(){
            contin = true;
            for(let c in data){
              if(contin){
                if(newdata[c]){
                  if(typeof database[i] == "boolean" && database[i]){
                    data[c]=newdata[c]
                  }else{
                    if(database[i][c].type){
                      if(database[i][c].type == typeof newdata[c]){

                      }else{
                        contin=false;
                        result={error:c+" is not a"+database[i][c].type}
                      }
                    }
                    if(database[i][c].match){
                      if(newdata[c].match(database[i][c].match)){

                      }else{
                        contin=false;
                        result={error:c+" no match"}
                      }
                    }
                    if(database[i][c].unique){
                      const allData = database()[i].getAll();
                      for(g in allData){
                        if(newdata[c]==allData[g][c]){
                          contin = false;
                          result = {error:c+" is taken"}
                        }
                      }
                    }
                    if(database[i][c].size){
                      if(typeof newdata[c] == "number"){
                        if(database[i][c].size == newdata[c]){

                        }else{
                          contin=false;
                          result={error:"size not ok at "+c}
                        }
                      }else{
                        if(database[i][c].size == newdata[c].length){

                        }else{
                          contin=false;
                          result={error:"size not ok at "+c}
                        }
                      }
                    }
                    if(database[i][c].minSize){
                      if(typeof newdata[c] == "number"){
                        if(database[i][c].minSize <= newdata[c]){

                        }else{
                          contin=false;
                          result={error:c+" is to small"}
                        }
                      }else{
                        if(database[i][c].minSize <= newdata[c].length){

                        }else{
                          contin=false;result={error:c+" is to small"}
                        }
                      }
                    }
                    if(database[i][c].maxSize){
                      if(typeof newdata[c] == "number"){
                        if(database[i][c].maxSize >= newdata[c]){

                        }else{
                          contin=false;
                          result={error:c+" is to big"}
                        }
                      }else{
                        if(database[i][c].maxSize >= newdata[c].length){

                        }else{
                          contin=false;
                          result={error:c+" is to big"}
                        }
                      }
                    }
                  }
                  if(contin){data[c]=newdata[c]}
                }
              }
            }
            if(contin){result = {success:"item updated"};
            newId = data.id;
            fs.writeFileSync(path+"/"+i+"/"+newId, JSON.stringify(data))
          }
        }
        if(data){
          mk()
        }else{
          result = {success:"no result"}
        }
        if(done){
          if(typeof done == "function"){
            done(result)
          }else{
            throw new Error("done is not a function")
          }
        };
        return result
      },
        updateById:function(id,newdata,done){
          let finResult = {}
          let result = database()[i].updateOne({id:id},newdata);
          if(!result){
            finResult.error = "no item found"
          }else{
            if(result.success){
              finResult.success = result.success
            }else{
              finResult.error = result.error
            }
          }
        },
        updateMult:function(filter,newdata,done){
          let datas = database()[i].find(filter);
          let result = []
          for(let uuu in datas){
            result[uuu] = datas[uuu].update(newdata)
          }
          if(done){
            if(typeof done =="function"){
              done(result)
            }else{
              throw new Error("done is not a function")
            }
          };
          return result
        },
        updateAll:function(newdata,done){
          let datas = database()[i].getAll();
          let result = []
          for(let uuu in datas){
            result[uuu] = datas[uuu].update(newdata)
          }
          if(done){
            if(typeof done =="function"){
              done(result)
            }else{
              throw new Error("done is not a function")
            }
          };
          return result
        },
        getAll:function(done){
        let files=[];
        fs.readdirSync(path+"/"+i).forEach((item)=>{files.push(item)});
        let result = [];
        for(let file in files){
          let miniRes = JSON.parse(fs.readFileSync(path+"/"+i+"/"+files[file],{encoding:'utf8', flag:'r'}));
          miniRes.id=files[file];
          miniRes.update=function(data){
            let resoa = database()[i].updateOne({id:miniRes.id},data)
            if(typeof done == "function"){
              done(resoa)
            }
            return resoa
          }
          miniRes.delete=function(done){
            let resoa = database()[i].deleteOne({id:miniRes.id})
            if(typeof done == "function"){
              done(resoa)
            }
            return resoa
          }
          result.push(miniRes);
        };
          if(done){
            if(typeof done == "function"){
              done(result)
            }else{
              throw new Error("done is not a function")
            }
          }
          ;return result
      },
        find:function(filter,done){
          const allData = database()[i].getAll();
          let result = [];
          for(let i in allData){
            for(let e in filter){
              if(allData[i][e]==filter[e]){
                ok = true;
                for(s in result){
                  if(result[s] == allData[i]){
                    ok=false
                  }
                }
                if(ok){
                  result.push(allData[i])
                }
              }
            }
          };
          if(done){
            if(typeof done == "function"){
              done(result)
            }else{
              throw new Error("done is not a function")
            }
          };return result
        },
        findById:function(id,done){
          let result =  database()[i].findOne({id:id});
          if(done){
            if(typeof done =="function"){
              done(result)
            }else{
              throw new Error("done is not a function")
            }
          };
          return result
        },
        findOne:function(filter,done){
          let result =  database()[i].find(filter)[0];
          if(done){
            if(typeof done == "function"){
              done(result)
            }else{
              throw new Error("done is not a function")
            }
          };
          return result
        },
        search:function(filter,done){
          const allData = database()[i].getAll();
          let result = [];
          for(let i in allData){
            for(let e in filter){
              if( allData[i][e].toString().toUpperCase().startsWith(filter[e].toString().toUpperCase(), 0)){
                ok = true;
                for(s in result){
                  if(result[s] == allData[i]){
                    ok=false
                  }
                }
                if(ok){
                  result.push(allData[i])
                }
              }
            }
          };
          if(done){
            if(typeof done == "function"){
              done(result)
            }else{
              throw new Error("done is not a function")
            }
          };return result
        },
        searchById:function(id,done){
          let result =  database()[i].searchOne({id:id});
          if(done){
            if(typeof done =="function"){
              done(result)
            }else{
              throw new Error("done is not a function")
            }
          };
          return result
        },
        searchOne:function(filter,done){
          let result = database()[i].search(filter)[0]  ;
          if(done){
            if(typeof done =="function"){
              done(result)
            }else{
              throw new Error("done is not a function")
            }
          };
          return result
        },
        deleteById:function(id,done){
          let finResult = {}
          let result = database()[i].findOne({id:id});
          if(!result){
            finResult.error = "no item found"
          }else{
            if(result.success){
            finResult.success = result.success
            }else{
            finResult.error = result.error
            }
          }
        },
        deleteOne:function(filter,done){
          let presult=database()[i].findOne(filter);
          let result = {}
          if(presult){
            fs.unlinkSync(path+"/"+i+"/"+presult.id);
            result.success="item removed"
          }else{
            result.error="no item found"
          };
          if(done){
            if(typeof done == "function"){
              done(result)
            }else{
              throw new Error("done is not a function")
            }
          };
          return result
        },
        deleteMult:function(filter,done){
          let presult=database()[i].find(filter);
          let result = []
          for(let min in presult){
              result[min] = presult[min].delete()
          }
          if(done){
            if(typeof done == "function"){
              done(result)
            }else{
              throw new Error("done is not a function")
            }
          };
          return result
        },
        deleteAll:function(done){
          let presult=database()[i].getAll();
          let result = []
          for(let min in presult){
              result[min] = presult[min].delete()
          }
          if(done){
            if(typeof done == "function"){
              done(result)
            }else{
              throw new Error("done is not a function")
            }
          };
          return result
        },
        }
      }
      return json
    }
  return database
}
module.exports = function(mainpath){
  function mkmodels(){
  let json_mdls = {};
  for(let u in mkmodels){
    if(typeof mkmodels[u] == "object"){
      for(let I in mkmodels[u]){
        if(typeof mkmodels[u][I] == "object"){
            for(let config in mkmodels[u][I]){
              if(!((
                  config=="unique")
                ||(config=="require")
                ||(config=="type")
                ||(config=="defualt")
                ||(config=="minSize")
                ||(config=="maxSize")
                ||(config=="size")
                ||(config=="match")
                ||(config=="lowerCase")
                ||(config=="upperCase")
              )){
                throw new Error(`${config} is an invalid flex-db database setting`)
              }
          }
        }
      }
    }
    let database = flexDBJS(mainpath);
    database[u]=mkmodels[u];json_mdls[u]=database()[u];
    json_mdls[u].listen = require("./listen(basic)")(json_mdls[u]);
    json_mdls[u].router = require("./router(basic)")(json_mdls[u])
    };
    for(i in mkmodels){mkmodels[i]=null};
    return require("./join")(json_mdls)};
    return mkmodels
}
