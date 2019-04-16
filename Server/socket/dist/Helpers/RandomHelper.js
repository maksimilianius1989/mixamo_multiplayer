"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RandomHelper {
    static guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substr(1);
        }
        return s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4();
    }
    static number(max, min = 0) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    static guidForList(list) {
        let uid = this.guid();
        if (list.length) {
            for (let item of list) {
                if (item.compareUID(uid)) {
                    return this.guidForList(list);
                }
            }
        }
        return uid;
    }
}
exports.RandomHelper = RandomHelper;
//# sourceMappingURL=RandomHelper.js.map