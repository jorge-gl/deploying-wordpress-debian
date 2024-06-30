describe("Checking Wordpress instalation", () => {
  var data
  
  beforeAll(() => {
    let fs = require("fs")
    require('dotenv').config();
    if (fs.existsSync('data.json')) {
      data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    } else {
      throw new Error('data.json not found. Please run the sh file on your virtual machine.');
    }
  });

  const siteDataStructure={
    "namespace": "wp-site-health/v1",
    "routes": {
      "/wp-site-health/v1": {
        "namespace": "wp-site-health/v1",
        "methods": ["GET"],
        "endpoints": [
          {
            "methods": ["GET"],
            "args": {
              "namespace": {
                "default": "wp-site-health/v1",
                "required": false
              },
              "context": { "default": "view", "required": false }
            }
          }
        ],
        "_links": {
          "self": [
            {
              "href": "http://localhost/wordpress/index.php/wp-json/wp-site-health/v1"
            }
          ]
        }
      },
      "/wp-site-health/v1/tests/background-updates": {
        "namespace": "wp-site-health/v1",
        "methods": ["GET"],
        "endpoints": [{ "methods": ["GET"], "args": [] }],
        "_links": {
          "self": [
            {
              "href": "http://localhost/wordpress/index.php/wp-json/wp-site-health/v1/tests/background-updates"
            }
          ]
        }
      },
      "/wp-site-health/v1/tests/loopback-requests": {
        "namespace": "wp-site-health/v1",
        "methods": ["GET"],
        "endpoints": [{ "methods": ["GET"], "args": [] }],
        "_links": {
          "self": [
            {
              "href": "http://localhost/wordpress/index.php/wp-json/wp-site-health/v1/tests/loopback-requests"
            }
          ]
        }
      },
      "/wp-site-health/v1/tests/https-status": {
        "namespace": "wp-site-health/v1",
        "methods": ["GET"],
        "endpoints": [{ "methods": ["GET"], "args": [] }],
        "_links": {
          "self": [
            {
              "href": "http://localhost/wordpress/index.php/wp-json/wp-site-health/v1/tests/https-status"
            }
          ]
        }
      },
      "/wp-site-health/v1/tests/dotorg-communication": {
        "namespace": "wp-site-health/v1",
        "methods": ["GET"],
        "endpoints": [{ "methods": ["GET"], "args": [] }],
        "_links": {
          "self": [
            {
              "href": "http://localhost/wordpress/index.php/wp-json/wp-site-health/v1/tests/dotorg-communication"
            }
          ]
        }
      },
      "/wp-site-health/v1/tests/authorization-header": {
        "namespace": "wp-site-health/v1",
        "methods": ["GET"],
        "endpoints": [{ "methods": ["GET"], "args": [] }],
        "_links": {
          "self": [
            {
              "href": "http://localhost/wordpress/index.php/wp-json/wp-site-health/v1/tests/authorization-header"
            }
          ]
        }
      },
      "/wp-site-health/v1/directory-sizes": {
        "namespace": "wp-site-health/v1",
        "methods": ["GET"],
        "endpoints": [{ "methods": ["GET"], "args": [] }],
        "_links": {
          "self": [
            {
              "href": "http://localhost/wordpress/index.php/wp-json/wp-site-health/v1/directory-sizes"
            }
          ]
        }
      },
      "/wp-site-health/v1/tests/page-cache": {
        "namespace": "wp-site-health/v1",
        "methods": ["GET"],
        "endpoints": [{ "methods": ["GET"], "args": [] }],
        "_links": {
          "self": [
            {
              "href": "http://localhost/wordpress/index.php/wp-json/wp-site-health/v1/tests/page-cache"
            }
          ]
        }
      }
    },
    "_links": {
      "up": [{ "href": "http://localhost/wordpress/index.php/wp-json/" }]
    }
  }

  test('The apache server must be running', async () => {
    expect(data.apacheStatus.trim()).toMatch(/Active: active \(running\)/g);
  })
  test('The mariadb server must be running', async () => {
    expect(data.databaseStatus.trim()).toMatch(/Active: active \(running\)/g);
  })
  test('The mariadb server must be running', async () => {
    expect(data.siteData).toMatchObject(siteDataStructure);
  })
  
})