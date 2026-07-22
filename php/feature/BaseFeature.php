<?php
declare(strict_types=1);

// RbfVpn SDK base feature

class RbfVpnBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(RbfVpnContext $ctx, array $options): void {}
    public function PostConstruct(RbfVpnContext $ctx): void {}
    public function PostConstructEntity(RbfVpnContext $ctx): void {}
    public function SetData(RbfVpnContext $ctx): void {}
    public function GetData(RbfVpnContext $ctx): void {}
    public function GetMatch(RbfVpnContext $ctx): void {}
    public function SetMatch(RbfVpnContext $ctx): void {}
    public function PrePoint(RbfVpnContext $ctx): void {}
    public function PreSpec(RbfVpnContext $ctx): void {}
    public function PreRequest(RbfVpnContext $ctx): void {}
    public function PreResponse(RbfVpnContext $ctx): void {}
    public function PreResult(RbfVpnContext $ctx): void {}
    public function PreDone(RbfVpnContext $ctx): void {}
    public function PreUnexpected(RbfVpnContext $ctx): void {}
}
