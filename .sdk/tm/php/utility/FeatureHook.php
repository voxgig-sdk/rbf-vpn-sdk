<?php
declare(strict_types=1);

// RbfVpn SDK utility: feature_hook

class RbfVpnFeatureHook
{
    public static function call(RbfVpnContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
