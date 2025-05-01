const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');
const path = require('path');

module.exports = {
  packagerConfig: {
    asar: true,
    prune: true,
    icon: './icon.icns',
    ignore: [
      "^/node_modules/.cache",
      "^/temp-electron-deps",
      "^/.git",
      "^/.github",
      "^/.next",
      "^/.vercel",
      "^/out",
      ".map$"
    ],
    osxSign: {
      identity: "Developer ID Application: Thomas Stubblefield (2H4LMN3ZLG)",
      hardenedRuntime: true,
      entitlements: path.resolve(__dirname, 'entitlements.plist'),
      entitlementsInherit: path.resolve(__dirname, 'entitlements.plist'),
      'gatekeeper-assess': false
    },
    extraResource: [path.resolve(__dirname, 'entitlements-minimal.plist')]
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux', 'win32']
    },
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'Neighborhood'
      }
    },
    {
      name: '@electron-forge/maker-deb',
      config: {}
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {}
    }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {}
    },
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: false,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true
    })
  ]
};
