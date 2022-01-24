"use strict";

// schema definitions
import validateRequest from "./schema/request.js";
import validateSettings from "./schema/settings.js";
import validateProvision from "./schema/provision.js";
import validateBookData from "./schema/book-data.js";
const schemas = {
    request: validateRequest,
    settings: validateSettings,
    provision: validateProvision,
    bookData: validateBookData,
};

export class Schema {
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
                    value: (data) => this.schemas[s](data),
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

    _clamp(validateFn, data, message) {
        if (!validateFn(data)) {
            const err = validateFn.errors[0];
            throw new Error(`${message} (${err.instancePath || "/"}): ${err.message}`);
        }
    }
}
