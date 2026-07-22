<?php
declare(strict_types=1);

// RbfVpn SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class RbfVpnMakeContext
{
    public static function call(array $ctxmap, ?RbfVpnContext $basectx): RbfVpnContext
    {
        return new RbfVpnContext($ctxmap, $basectx);
    }
}
