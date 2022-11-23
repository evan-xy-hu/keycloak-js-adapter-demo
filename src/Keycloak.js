import Keycloak from "keycloak-js";

const keycloak = new Keycloak(
  {
    "realm": "China-OP",
    "url": "https://172.16.8.27/auth/",
    "clientId": 'example-web-service-gin',
    "auth-server-url": "https://172.16.8.27/auth/",
    "ssl-required": "external",
    "resource": "example-web-service-gin",
    "public-client": true,
    "confidential-port": 0
  }
);

export default keycloak;