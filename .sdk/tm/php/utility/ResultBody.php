<?php
declare(strict_types=1);

// RbfVpn SDK utility: result_body

class RbfVpnResultBody
{
    public static function call(RbfVpnContext $ctx): ?RbfVpnResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
