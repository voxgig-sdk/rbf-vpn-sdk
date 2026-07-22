# RbfVpn SDK utility: prepare_body
module RbfVpnUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
