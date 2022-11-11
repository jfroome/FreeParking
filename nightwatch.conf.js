// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: "tests",
  "webdriver": {
    // Path to chromedriver which got installed via the buildpack.
    "start_process": true,
    "server_path": "./node_modules/.bin/chromedriver",
    "cli_args": [ 
      "--verbose"
    ],
    "port": 9090
  },

  "test_settings": {
    "default": {
      "desiredCapabilities": {
        "browserName": "chrome",
        // Path to the chrome binary which got installed via the buildpack. 
        // This environment variable is set automatically by the buildpack itself.
        "binary": process.env.GOOGLE_CHROME_SHIM
      }
    }
  }
};