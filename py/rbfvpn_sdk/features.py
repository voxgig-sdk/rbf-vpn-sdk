# RbfVpn SDK feature factory

from rbfvpn_sdk.feature.base_feature import RbfVpnBaseFeature
from rbfvpn_sdk.feature.test_feature import RbfVpnTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RbfVpnBaseFeature(),
        "test": lambda: RbfVpnTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
