const Service = class{
  constructor(baseUrl){
    this._baseUrl = baseUrl;
    this._checkers = new Map();
  }
  addChecker(type, checker) {
    if (!(checker instanceof Checker)) throw 'invalid checker';
    this._checkers.set(type, checker);
  }
  async getData(type){
    if(!this._checkers.has(type)) throw 'no checker';
    const response = await fetch(this._baseUrl + '/' + type, {method:"GET", body:""});
    const json = await response.json();
    this._checkers.get(type).check(json);
  }
};