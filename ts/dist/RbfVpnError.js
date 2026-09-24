"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RbfVpnError = void 0;
class RbfVpnError extends Error {
    isRbfVpnError = true;
    sdk = 'RbfVpn';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.RbfVpnError = RbfVpnError;
//# sourceMappingURL=RbfVpnError.js.map