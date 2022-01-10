AJV := node_modules/.bin/ajv compile --coerce-types --use-defaults --remove-additional all -c ajv-formats --allow-union-types
AJV_VALIDATE := node_modules/.bin/ajv validate --use-defaults
PRETTIER := node_modules/.bin/prettier

CLEAN_FILES := dist $(wildcard src/schema/*.js)

.PHONY: all
all: schema prettier

.PHONY: schema
schema: \
	src/main.js \
	src/schema/provision.js \
	src/schema/settings.js \
	src/schema/book-data.js

.PHONY: prettier
prettier:
	$(PRETTIER) --write **/*.js **/*.json


.PHONY: clean
clean:
	rm -rfv $(CLEAN_FILES)


src/schema/%.js: src/schema/%.json
	$(AJV) -s $< -o $@

src/schema/provision.js: src/schema/provision.json src/schema/settings.json
	$(AJV) -s src/schema/provision.json -r src/schema/settings.json -o $@

