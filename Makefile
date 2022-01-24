AJV := node_modules/.bin/ajv compile --spec=draft2020 --strict=true --allow-union-types --remove-additional=all --use-defaults=empty --coerce-types=true -c ajv-formats
PRETTIER := node_modules/.bin/prettier --write
WEBPACK := node_modules/.bin/webpack

SCHEMA_FILES := $(wildcard src/schema/*.json)

.PHONY: all
all: prettier validate $(patsubst %.json,%.cjs,$(SCHEMA_FILES))

.PHONY: prettier
prettier:
	$(PRETTIER) **/*.js **/*.json

.PHONY: clean
clean:
	rm -rfv src/schema/*.cjs

.PHONY: validate
validate:
	$(MAKE) -B $(SCHEMA_FILES)

src/schema/%.cjs: src/schema/%.json
	$(AJV) $(patsubst %,-r %,$(filter-out $<,$(SCHEMA_FILES))) -s $< -o $@
