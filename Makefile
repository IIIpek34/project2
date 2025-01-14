# Makefile
install:
	npm ci
gendiff:
	node bin/diff.js
publish:
	npm publish --dry-run
link:
	npm link