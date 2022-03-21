"use strict";

// schema definitions
import validateSettings from "./schema/settings.cjs";
import validateProvision from "./schema/provision.cjs";
import validateBookData from "./schema/book-data.cjs";
const schemas = {
    settings: validateSettings,
    provision: validateProvision,
    bookData: validateBookData,
};

export class Schema {
    constructor() {
        for (let s in schemas) {
            let camel = s[0].toUpperCase() + s.slice(1);
            Object.defineProperties(this, {
                [`validate${camel}`]: {
                    value: (data) => schemas[s](data),
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
