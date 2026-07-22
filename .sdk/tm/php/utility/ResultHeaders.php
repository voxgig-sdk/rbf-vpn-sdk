<?php
declare(strict_types=1);

// RbfVpn SDK utility: result_headers

class RbfVpnResultHeaders
{
    public static function call(RbfVpnContext $ctx): ?RbfVpnResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
