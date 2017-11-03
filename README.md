# Resto Client

Resto Client is a Vue application intended to be used with Resto API

## Installation

Clone the Git repo

```
git clone git@github.com:zeulb/resto-client.git
cd resto-client
```

Install the dependencies

```
npm install
```

## Sandbox

### Setting Up

Resto client is intended to be used with Resto API.
Configure your resto api authentication token in `config/default.json`

```
{
  "api": {
    "url": "http://localhost:3000",
    "token": "7c3959f341c12cc05499ede976fcb4ce"
  }
}
```

### Running Server
Start the server

```
npm run dev
```

A server will be run in port 8080 by default.
