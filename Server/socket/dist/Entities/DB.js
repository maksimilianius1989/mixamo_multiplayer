"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DB {
    constructor() { }
    static init() {
        if (this.instance === null)
            this.instance = new DB();
        return this.instance;
    }
}
exports.DB = DB;
//# sourceMappingURL=DB.js.map