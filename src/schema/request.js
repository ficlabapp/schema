"use strict";module.exports = validate30;module.exports.default = validate30;const schema42 = {"$schema":"https://json-schema.org/draft/2020-12/schema","$id":"request","type":"object","required":["uuid","originator","url","sameOrigin"],"additionalProperties":false,"properties":{"uuid":{"$comment":"Uniquely identifies the request","type":"string","format":"uuid"},"originator":{"$comment":"Indicates the originator of the request","type":"string","enum":["user","archive"]},"url":{"$comment":"URL to fetch","type":"string","format":"uri"},"sameOrigin":{"$comment":"Whether to fetch this resource from the same origin context as the URL","type":"boolean","default":false}}};const formats0 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;const formats2 = require("ajv-formats/dist/formats").fullFormats.uri;const func0 = require("ajv/dist/runtime/equal").default;function validate30(data, {instancePath="", parentData, parentDataProperty, rootData=data, dynamicAnchors={}}={}){/*# sourceURL="request" */;let vErrors = null;let errors = 0;const evaluated0 = validate30.evaluated;if(evaluated0.dynamicProps){evaluated0.props = undefined;}if(evaluated0.dynamicItems){evaluated0.items = undefined;}if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.sameOrigin === undefined || data.sameOrigin === null || data.sameOrigin === ""){data.sameOrigin = false;}let missing0;if(((((data.uuid === undefined) && (missing0 = "uuid")) || ((data.originator === undefined) && (missing0 = "originator"))) || ((data.url === undefined) && (missing0 = "url"))) || ((data.sameOrigin === undefined) && (missing0 = "sameOrigin"))){validate30.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!((((key0 === "uuid") || (key0 === "originator")) || (key0 === "url")) || (key0 === "sameOrigin"))){delete data[key0];}}if(_errs1 === errors){if(data.uuid !== undefined){let data0 = data.uuid;const _errs2 = errors;if(typeof data0 !== "string"){let dataType0 = typeof data0;let coerced0 = undefined;if(!(coerced0 !== undefined)){if(dataType0 == "number" || dataType0 == "boolean"){coerced0 = "" + data0;}else if(data0 === null){coerced0 = "";}else {validate30.errors = [{instancePath:instancePath+"/uuid",schemaPath:"#/properties/uuid/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced0 !== undefined){data0 = coerced0;if(data !== undefined){data["uuid"] = coerced0;}}}if(errors === _errs2){if(errors === _errs2){if(typeof data0 === "string"){if(!(formats0.test(data0))){validate30.errors = [{instancePath:instancePath+"/uuid",schemaPath:"#/properties/uuid/format",keyword:"format",params:{format: "uuid"},message:"must match format \""+"uuid"+"\""}];return false;}}}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.originator !== undefined){let data1 = data.originator;const _errs5 = errors;if(typeof data1 !== "string"){let dataType1 = typeof data1;let coerced1 = undefined;if(!(coerced1 !== undefined)){if(dataType1 == "number" || dataType1 == "boolean"){coerced1 = "" + data1;}else if(data1 === null){coerced1 = "";}else {validate30.errors = [{instancePath:instancePath+"/originator",schemaPath:"#/properties/originator/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced1 !== undefined){data1 = coerced1;if(data !== undefined){data["originator"] = coerced1;}}}if(!((data1 === "user") || (data1 === "archive"))){validate30.errors = [{instancePath:instancePath+"/originator",schemaPath:"#/properties/originator/enum",keyword:"enum",params:{allowedValues: schema42.properties.originator.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs5 === errors;}else {var valid0 = true;}if(valid0){if(data.url !== undefined){let data2 = data.url;const _errs8 = errors;if(typeof data2 !== "string"){let dataType2 = typeof data2;let coerced2 = undefined;if(!(coerced2 !== undefined)){if(dataType2 == "number" || dataType2 == "boolean"){coerced2 = "" + data2;}else if(data2 === null){coerced2 = "";}else {validate30.errors = [{instancePath:instancePath+"/url",schemaPath:"#/properties/url/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced2 !== undefined){data2 = coerced2;if(data !== undefined){data["url"] = coerced2;}}}if(errors === _errs8){if(errors === _errs8){if(typeof data2 === "string"){if(!(formats2(data2))){validate30.errors = [{instancePath:instancePath+"/url",schemaPath:"#/properties/url/format",keyword:"format",params:{format: "uri"},message:"must match format \""+"uri"+"\""}];return false;}}}}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){let data3 = data.sameOrigin;const _errs11 = errors;if(typeof data3 !== "boolean"){let coerced3 = undefined;if(!(coerced3 !== undefined)){if(data3 === "false" || data3 === 0 || data3 === null){coerced3 = false;}else if(data3 === "true" || data3 === 1){coerced3 = true;}else {validate30.errors = [{instancePath:instancePath+"/sameOrigin",schemaPath:"#/properties/sameOrigin/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}}if(coerced3 !== undefined){data3 = coerced3;if(data !== undefined){data["sameOrigin"] = coerced3;}}}var valid0 = _errs11 === errors;}}}}}}else {validate30.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate30.errors = vErrors;return errors === 0;}validate30.evaluated = {"props":true,"dynamicProps":false,"dynamicItems":false};