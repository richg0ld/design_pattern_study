const Checker = class {
  constructor(f) {
    this._f = f;
  }
  check(json) {
    this._f(json);
  }
};