package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewSubscriptionEntityFunc func(client *RbfVpnSDK, entopts map[string]any) RbfVpnEntity

