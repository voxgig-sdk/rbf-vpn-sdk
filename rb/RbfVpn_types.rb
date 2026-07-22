# frozen_string_literal: true

# Typed models for the RbfVpn SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Subscription entity data model.
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] expiry
#   @return [String, nil]
#
# @!attribute [rw] subscription
#   @return [String, nil]
Subscription = Struct.new(
  :config,
  :expiry,
  :subscription,
  keyword_init: true
)

# Request payload for Subscription#load.
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] expiry
#   @return [String, nil]
#
# @!attribute [rw] subscription
#   @return [String, nil]
SubscriptionLoadMatch = Struct.new(
  :config,
  :expiry,
  :subscription,
  keyword_init: true
)

