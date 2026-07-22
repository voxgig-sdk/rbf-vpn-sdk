# RbfVpn SDK exists test

require "minitest/autorun"
require_relative "../RbfVpn_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = RbfVpnSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
