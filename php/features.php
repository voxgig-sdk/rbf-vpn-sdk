<?php
declare(strict_types=1);

// RbfVpn SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class RbfVpnFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new RbfVpnBaseFeature();
            case "test":
                return new RbfVpnTestFeature();
            default:
                return new RbfVpnBaseFeature();
        }
    }
}
