# Loki GRPC Client

See `tests/` for examples how to use the `Pusher` and `Querier` clients.
  
## Test
  
    npm run test

## Upgrading

Copy `logproto.proto` from the Loki repo and any dependencies to the `./src/proto` directly.

Run the following commands to generate javascript static modules and typescript definitions

    npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./src/compiled --grpc_out=./src/compiled --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` -I ./src/proto ./src/proto/**/*.proto
    
    npx grpc_tools_node_protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --ts_out=./src/compiled -I ./src/proto ./src/proto/**/*.proto

Update `LOKI_IMAGE` in `tests/00_setup.spec.ts` to test against new version.
