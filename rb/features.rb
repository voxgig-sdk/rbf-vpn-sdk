# RbfVpn SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RbfVpnFeatures
  def self.make_feature(name)
    case name
    when "base"
      RbfVpnBaseFeature.new
    when "ratelimit"
      RbfVpnRatelimitFeature.new
    when "retry"
      RbfVpnRetryFeature.new
    when "test"
      RbfVpnTestFeature.new
    when "timeout"
      RbfVpnTimeoutFeature.new
    else
      RbfVpnBaseFeature.new
    end
  end
end
