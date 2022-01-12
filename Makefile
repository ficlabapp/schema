AJV := node_modules/.bin/ajv compile --spec=draft2020 --strict=true --allow-union-types -c ajv-formats
PRETTIER := node_modules/.bin/prettier --write
WEBPACK := node_modules/.bin/webpack

SCHEMA_FILES := $(wildcard src/schema/*.json)

.PHONY: all
all: prettier validate

.PHONY: prettier
prettier:
	$(PRETTIER) **/*.js **/*.json

.PHONY: validate
validate:
	$(MAKE) -B $(SCHEMA_FILES)

.PHONY: src/schema/%.json
src/schema/%.json:
	$(AJV) -s $@

.PHONY: src/schema/provision.json
src/schema/provision.json: src/schema/settings.json
	$(AJV) -r src/schema/settings.json -s $@
