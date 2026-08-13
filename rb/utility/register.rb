# RbfVpn SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

RbfVpnUtility.registrar = ->(u) {
  u.clean = RbfVpnUtilities::Clean
  u.done = RbfVpnUtilities::Done
  u.make_error = RbfVpnUtilities::MakeError
  u.feature_add = RbfVpnUtilities::FeatureAdd
  u.feature_hook = RbfVpnUtilities::FeatureHook
  u.feature_init = RbfVpnUtilities::FeatureInit
  u.fetcher = RbfVpnUtilities::Fetcher
  u.make_fetch_def = RbfVpnUtilities::MakeFetchDef
  u.make_context = RbfVpnUtilities::MakeContext
  u.make_options = RbfVpnUtilities::MakeOptions
  u.make_request = RbfVpnUtilities::MakeRequest
  u.make_response = RbfVpnUtilities::MakeResponse
  u.make_result = RbfVpnUtilities::MakeResult
  u.make_point = RbfVpnUtilities::MakePoint
  u.make_spec = RbfVpnUtilities::MakeSpec
  u.make_url = RbfVpnUtilities::MakeUrl
  u.param = RbfVpnUtilities::Param
  u.prepare_auth = RbfVpnUtilities::PrepareAuth
  u.prepare_body = RbfVpnUtilities::PrepareBody
  u.prepare_headers = RbfVpnUtilities::PrepareHeaders
  u.prepare_method = RbfVpnUtilities::PrepareMethod
  u.prepare_params = RbfVpnUtilities::PrepareParams
  u.prepare_path = RbfVpnUtilities::PreparePath
  u.prepare_query = RbfVpnUtilities::PrepareQuery
  u.graphql_body = RbfVpnUtilities::GraphqlBody
  u.graphql_errors = RbfVpnUtilities::GraphqlErrors
  u.result_basic = RbfVpnUtilities::ResultBasic
  u.result_body = RbfVpnUtilities::ResultBody
  u.result_headers = RbfVpnUtilities::ResultHeaders
  u.transform_request = RbfVpnUtilities::TransformRequest
  u.transform_response = RbfVpnUtilities::TransformResponse
}
