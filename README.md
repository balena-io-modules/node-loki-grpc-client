# Loki GRPC Client

See `tests/` for examples how to use the `Pusher` and `Querier` clients.
  
## Test

#### Docker compose for ci

```
docker compose -f docker-compose.test.yml -f docker-compose.yml run sut
```

#### Locally for debugging

```
docker compose -f docker-compose.test.yml -f docker-compose.yml run --build sut
```

## Upgrading

Copy `logproto.proto` from the Loki repo and any dependencies to the `./proto` directly. 

Then run `npm run protoc:compile` and `npm run protoc:types` to generate updated clients.

Update loki image in docker-compose.yml to test against new versions.
