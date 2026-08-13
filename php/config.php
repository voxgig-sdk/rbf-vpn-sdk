<?php
declare(strict_types=1);

// RbfVpn SDK configuration

class RbfVpnConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "RbfVpn",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://rbf1.info",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "subscription" => [],
                ],
            ],
            "entity" => [
        'subscription' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'protocol',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'server',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
          ],
          'name' => 'subscription',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/demo',
                  'parts' => [
                    'api',
                    'demo',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.config`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return RbfVpnFeatures::make_feature($name);
    }
}
