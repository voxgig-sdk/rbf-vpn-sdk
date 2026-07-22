-- RbfVpn SDK error

local RbfVpnError = {}
RbfVpnError.__index = RbfVpnError


function RbfVpnError.new(code, msg, ctx)
  local self = setmetatable({}, RbfVpnError)
  self.is_sdk_error = true
  self.sdk = "RbfVpn"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function RbfVpnError:error()
  return self.msg
end


function RbfVpnError:__tostring()
  return self.msg
end


return RbfVpnError
