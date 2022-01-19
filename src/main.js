"use strict";

import Ajv from "ajv";
import ajvFormats from "ajv-formats";

// schema definitions
import requestSchema from "./schema/request.json";
import settingsSchema from "./schema/settings.json";
import provisionSchema from "./schema/provision.json";
import bookDataSchema from "./schema/book-data.json";
const schemas = {
    request: requestSchema,
    settings: settingsSchema,
    provision: provisionSchema,
    bookData: bookDataSchema,
};

export class Schema extends Ajv {
    constructor() {
        super({
            schemas,
            strict: true,
            validateSchema: false,
            useDefaults: true,
            coerceTypes: true,
            removeAdditional: "all",
            allowUnionTypes: true,
        });
        ajvFormats(this);

        for (let s in schemas) {
            let camel = s[0].toUpperCase() + s.slice(1);
            Object.defineProperties(this, {
                [`validate${camel}`]: {
                    value: (data) => this.validate(schemas[s], data),
                    writable: false,
                    enumerable: true,
                },
                [`clamp${camel}`]: {
                    value: (data) => this._clamp(schemas[s], data, `Invalid ${s}`),
                    writable: false,
                    enumerable: true,
                },
            });
        }
    }

    _clamp(schema, data, message) {
        if (!this.validate(schema, data)) {
            const err = this.errors[0];
            throw new Error(`${message} (${err.instancePath || "/"}): ${err.message}`);
        }
    }
}
