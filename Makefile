.PHONY: app dev lint

default:
	./node_modules/.bin/webpack --progress --profile --colors

app:
	NODE_ENV=development DEBUG=* ./node_modules/.bin/nodemon --exec ./node_modules/.bin/babel-node --stage 0 -- app/server.js

dev:
	./node_modules/.bin/webpack-dev-server --progress --colors

lint:
	./node_modules/.bin/esw --ext .js,.jsx --watch app/
