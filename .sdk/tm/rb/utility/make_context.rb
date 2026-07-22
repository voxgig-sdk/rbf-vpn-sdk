# RbfVpn SDK utility: make_context
require_relative '../core/context'
module RbfVpnUtilities
  MakeContext = ->(ctxmap, basectx) {
    RbfVpnContext.new(ctxmap, basectx)
  }
end
