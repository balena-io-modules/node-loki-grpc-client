# Loki GRPC Client

See `tests/` for examples how to use the `Pusher` and `Querier` clients.
  
## Test

#### Docker compose for ci

```
docker-compose -f docker-compose.test.yml up
```

#### Locally for debugging

```
docker run --network host 'grafana/loki:1.5.0' '-auth.enabled=true' '-config.file=/etc/loki/local-config.yaml'
export LOKI_HOST=127.0.0.1  
npm test
```

## Upgrading

Copy `logproto.proto` from the Loki repo and any dependencies to the `./proto` directly. 

Then run `npm run protoc:compile` and `npm run protoc:types` to generate updated clients.

Update `LOKI_IMAGE` in `tests/00_setup.spec.ts` to test against new version.
