const MemberServiceBuilder = class extends ServiceBuilder {
  constructor(baseUrl) {
    super();
    this._baseUrl = baseUrl;
  }
  getService() {
    const service = new Service(this._baseUrl);
    service.addChecker('member', new Checker(
      ({name, nick, email=M('email'), id=M('id')})=>({id, nick, name, email})
    ));
    service.addChecker('join', new Checker( ({error, isOK=M('isOK')})=>({isOK, error})
    ));
    return service;
  }
};