"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    constructor() {
        this.repository = new Array();
    }
    GetAll() {
        return this.repository;
    }
    Add(item) {
        this.repository.push(item);
    }
    Update(item) {
        this.Remove(item);
        this.Add(item);
    }
    Remove(item) {
        for (let i = 0; i < this.repository.length; i++) {
            if (this.repository[i].compareUID(item.getUID())) {
                this.repository.splice(i, 1);
                return;
            }
        }
    }
    Find(UID) {
        this.repository.forEach((item) => {
            if (item.compareUID(UID))
                return item;
            return null;
        });
    }
    Length() {
        return this.repository.length;
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map