
import { Context } from './Context'


class RbfVpnError extends Error {

  isRbfVpnError = true

  sdk = 'RbfVpn'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  RbfVpnError
}

