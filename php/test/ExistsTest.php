<?php
declare(strict_types=1);

// RbfVpn SDK exists test

require_once __DIR__ . '/../rbfvpn_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = RbfVpnSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
