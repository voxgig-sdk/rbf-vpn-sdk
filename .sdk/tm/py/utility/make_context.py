# RbfVpn SDK utility: make_context

from core.context import RbfVpnContext


def make_context_util(ctxmap, basectx):
    return RbfVpnContext(ctxmap, basectx)
