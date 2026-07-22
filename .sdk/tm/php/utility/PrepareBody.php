<?php
declare(strict_types=1);

// RbfVpn SDK utility: prepare_body

class RbfVpnPrepareBody
{
    public static function call(RbfVpnContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
