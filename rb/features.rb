# RbfVpn SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module RbfVpnFeatures
  def self.make_feature(name)
    case name
    when "base"
      RbfVpnBaseFeature.new
    when "test"
      RbfVpnTestFeature.new
    else
      RbfVpnBaseFeature.new
    end
  end
end
