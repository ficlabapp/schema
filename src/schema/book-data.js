"use strict";module.exports = validate20;module.exports.default = validate20;const schema22 = {"$schema":"http://json-schema.org/draft-07/schema#","$id":"book-data","type":"object","required":["metadata","parts","cover"],"properties":{"id":{"type":"string","minLength":1},"metadata":{"type":"object","required":["publisher","source","author","authorID","title","tags","subject","status","rating","updated","published","lang"],"properties":{"publisher":{"type":"string","format":"uri"},"source":{"type":"string","format":"uri"},"author":{"type":"string","minLength":1},"authorID":{"type":"string","format":"uri"},"title":{"type":"string","minLength":1},"tags":{"type":"array","default":[],"items":{"type":"string"}},"subject":{"type":["string","boolean"],"default":""},"status":{"type":"string","default":"unknown","enum":["complete","in-progress","hiatus","abandoned"]},"rating":{"type":"string","default":"unknown","minLength":1},"updated":{"type":"number","minimum":1,"multipleOf":1},"published":{"type":"number","minimum":1,"multipleOf":1},"lang":{"type":"string","default":""},"description":{"type":"string"},"cover":{"type":"string","default":""}}},"parts":{"type":"array","default":[],"items":{"type":"object","required":["title"],"properties":{"title":{"type":"string"},"text":{"type":"string"}}}},"cover":{"type":"string","default":""}}};const func8 = require("ajv/dist/runtime/ucs2length").default;const func9 = Object.prototype.hasOwnProperty;const func0 = require("ajv/dist/runtime/equal").default;const formats0 = require("ajv-formats/dist/formats").fullFormats.uri;function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){/*# sourceURL="book-data" */;let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.parts === undefined){data.parts = [];}if(data.cover === undefined){data.cover = "";}let missing0;if((((data.metadata === undefined) && (missing0 = "metadata")) || ((data.parts === undefined) && (missing0 = "parts"))) || ((data.cover === undefined) && (missing0 = "cover"))){validate20.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!((((key0 === "id") || (key0 === "metadata")) || (key0 === "parts")) || (key0 === "cover"))){delete data[key0];}}if(_errs1 === errors){if(data.id !== undefined){let data0 = data.id;const _errs2 = errors;if(typeof data0 !== "string"){let dataType0 = typeof data0;let coerced0 = undefined;if(!(coerced0 !== undefined)){if(dataType0 == "number" || dataType0 == "boolean"){coerced0 = "" + data0;}else if(data0 === null){coerced0 = "";}else {validate20.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced0 !== undefined){data0 = coerced0;if(data !== undefined){data["id"] = coerced0;}}}if(errors === _errs2){if(typeof data0 === "string"){if(func8(data0) < 1){validate20.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.metadata !== undefined){let data1 = data.metadata;const _errs4 = errors;if(errors === _errs4){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){if(data1.tags === undefined){data1.tags = [];}if(data1.subject === undefined){data1.subject = "";}if(data1.status === undefined){data1.status = "unknown";}if(data1.rating === undefined){data1.rating = "unknown";}if(data1.lang === undefined){data1.lang = "";}if(data1.cover === undefined){data1.cover = "";}let missing1;if(((((((((((((data1.publisher === undefined) && (missing1 = "publisher")) || ((data1.source === undefined) && (missing1 = "source"))) || ((data1.author === undefined) && (missing1 = "author"))) || ((data1.authorID === undefined) && (missing1 = "authorID"))) || ((data1.title === undefined) && (missing1 = "title"))) || ((data1.tags === undefined) && (missing1 = "tags"))) || ((data1.subject === undefined) && (missing1 = "subject"))) || ((data1.status === undefined) && (missing1 = "status"))) || ((data1.rating === undefined) && (missing1 = "rating"))) || ((data1.updated === undefined) && (missing1 = "updated"))) || ((data1.published === undefined) && (missing1 = "published"))) || ((data1.lang === undefined) && (missing1 = "lang"))){validate20.errors = [{instancePath:instancePath+"/metadata",schemaPath:"#/properties/metadata/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {const _errs6 = errors;for(const key1 in data1){if(!(func9.call(schema22.properties.metadata.properties, key1))){delete data1[key1];}}if(_errs6 === errors){if(data1.publisher !== undefined){let data2 = data1.publisher;const _errs7 = errors;if(typeof data2 !== "string"){let dataType1 = typeof data2;let coerced1 = undefined;if(!(coerced1 !== undefined)){if(dataType1 == "number" || dataType1 == "boolean"){coerced1 = "" + data2;}else if(data2 === null){coerced1 = "";}else {validate20.errors = [{instancePath:instancePath+"/metadata/publisher",schemaPath:"#/properties/metadata/properties/publisher/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced1 !== undefined){data2 = coerced1;if(data1 !== undefined){data1["publisher"] = coerced1;}}}if(errors === _errs7){if(errors === _errs7){if(typeof data2 === "string"){if(!(formats0(data2))){validate20.errors = [{instancePath:instancePath+"/metadata/publisher",schemaPath:"#/properties/metadata/properties/publisher/format",keyword:"format",params:{format: "uri"},message:"must match format \""+"uri"+"\""}];return false;}}}}var valid1 = _errs7 === errors;}else {var valid1 = true;}if(valid1){if(data1.source !== undefined){let data3 = data1.source;const _errs9 = errors;if(typeof data3 !== "string"){let dataType2 = typeof data3;let coerced2 = undefined;if(!(coerced2 !== undefined)){if(dataType2 == "number" || dataType2 == "boolean"){coerced2 = "" + data3;}else if(data3 === null){coerced2 = "";}else {validate20.errors = [{instancePath:instancePath+"/metadata/source",schemaPath:"#/properties/metadata/properties/source/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced2 !== undefined){data3 = coerced2;if(data1 !== undefined){data1["source"] = coerced2;}}}if(errors === _errs9){if(errors === _errs9){if(typeof data3 === "string"){if(!(formats0(data3))){validate20.errors = [{instancePath:instancePath+"/metadata/source",schemaPath:"#/properties/metadata/properties/source/format",keyword:"format",params:{format: "uri"},message:"must match format \""+"uri"+"\""}];return false;}}}}var valid1 = _errs9 === errors;}else {var valid1 = true;}if(valid1){if(data1.author !== undefined){let data4 = data1.author;const _errs11 = errors;if(typeof data4 !== "string"){let dataType3 = typeof data4;let coerced3 = undefined;if(!(coerced3 !== undefined)){if(dataType3 == "number" || dataType3 == "boolean"){coerced3 = "" + data4;}else if(data4 === null){coerced3 = "";}else {validate20.errors = [{instancePath:instancePath+"/metadata/author",schemaPath:"#/properties/metadata/properties/author/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced3 !== undefined){data4 = coerced3;if(data1 !== undefined){data1["author"] = coerced3;}}}if(errors === _errs11){if(typeof data4 === "string"){if(func8(data4) < 1){validate20.errors = [{instancePath:instancePath+"/metadata/author",schemaPath:"#/properties/metadata/properties/author/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}}var valid1 = _errs11 === errors;}else {var valid1 = true;}if(valid1){if(data1.authorID !== undefined){let data5 = data1.authorID;const _errs13 = errors;if(typeof data5 !== "string"){let dataType4 = typeof data5;let coerced4 = undefined;if(!(coerced4 !== undefined)){if(dataType4 == "number" || dataType4 == "boolean"){coerced4 = "" + data5;}else if(data5 === null){coerced4 = "";}else {validate20.errors = [{instancePath:instancePath+"/metadata/authorID",schemaPath:"#/properties/metadata/properties/authorID/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced4 !== undefined){data5 = coerced4;if(data1 !== undefined){data1["authorID"] = coerced4;}}}if(errors === _errs13){if(errors === _errs13){if(typeof data5 === "string"){if(!(formats0(data5))){validate20.errors = [{instancePath:instancePath+"/metadata/authorID",schemaPath:"#/properties/metadata/properties/authorID/format",keyword:"format",params:{format: "uri"},message:"must match format \""+"uri"+"\""}];return false;}}}}var valid1 = _errs13 === errors;}else {var valid1 = true;}if(valid1){if(data1.title !== undefined){let data6 = data1.title;const _errs15 = errors;if(typeof data6 !== "string"){let dataType5 = typeof data6;let coerced5 = undefined;if(!(coerced5 !== undefined)){if(dataType5 == "number" || dataType5 == "boolean"){coerced5 = "" + data6;}else if(data6 === null){coerced5 = "";}else {validate20.errors = [{instancePath:instancePath+"/metadata/title",schemaPath:"#/properties/metadata/properties/title/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced5 !== undefined){data6 = coerced5;if(data1 !== undefined){data1["title"] = coerced5;}}}if(errors === _errs15){if(typeof data6 === "string"){if(func8(data6) < 1){validate20.errors = [{instancePath:instancePath+"/metadata/title",schemaPath:"#/properties/metadata/properties/title/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}}var valid1 = _errs15 === errors;}else {var valid1 = true;}if(valid1){let data7 = data1.tags;const _errs17 = errors;if(errors === _errs17){if(Array.isArray(data7)){var valid2 = true;const len0 = data7.length;for(let i0=0; i0<len0; i0++){let data8 = data7[i0];const _errs19 = errors;if(typeof data8 !== "string"){let dataType6 = typeof data8;let coerced6 = undefined;if(!(coerced6 !== undefined)){if(dataType6 == "number" || dataType6 == "boolean"){coerced6 = "" + data8;}else if(data8 === null){coerced6 = "";}else {validate20.errors = [{instancePath:instancePath+"/metadata/tags/" + i0,schemaPath:"#/properties/metadata/properties/tags/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced6 !== undefined){data8 = coerced6;if(data7 !== undefined){data7[i0] = coerced6;}}}var valid2 = _errs19 === errors;if(!valid2){break;}}}else {validate20.errors = [{instancePath:instancePath+"/metadata/tags",schemaPath:"#/properties/metadata/properties/tags/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid1 = _errs17 === errors;if(valid1){let data9 = data1.subject;const _errs21 = errors;if((typeof data9 !== "string") && (typeof data9 !== "boolean")){let dataType7 = typeof data9;let coerced7 = undefined;if(!(coerced7 !== undefined)){if(dataType7 == "number" || dataType7 == "boolean"){coerced7 = "" + data9;}else if(data9 === null){coerced7 = "";}else if(data9 === "false" || data9 === 0 || data9 === null){coerced7 = false;}else if(data9 === "true" || data9 === 1){coerced7 = true;}else {validate20.errors = [{instancePath:instancePath+"/metadata/subject",schemaPath:"#/properties/metadata/properties/subject/type",keyword:"type",params:{type: schema22.properties.metadata.properties.subject.type},message:"must be string,boolean"}];return false;}}if(coerced7 !== undefined){data9 = coerced7;if(data1 !== undefined){data1["subject"] = coerced7;}}}var valid1 = _errs21 === errors;if(valid1){let data10 = data1.status;const _errs23 = errors;if(typeof data10 !== "string"){let dataType8 = typeof data10;let coerced8 = undefined;if(!(coerced8 !== undefined)){if(dataType8 == "number" || dataType8 == "boolean"){coerced8 = "" + data10;}else if(data10 === null){coerced8 = "";}else {validate20.errors = [{instancePath:instancePath+"/metadata/status",schemaPath:"#/properties/metadata/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced8 !== undefined){data10 = coerced8;if(data1 !== undefined){data1["status"] = coerced8;}}}if(!((((data10 === "complete") || (data10 === "in-progress")) || (data10 === "hiatus")) || (data10 === "abandoned"))){validate20.errors = [{instancePath:instancePath+"/metadata/status",schemaPath:"#/properties/metadata/properties/status/enum",keyword:"enum",params:{allowedValues: schema22.properties.metadata.properties.status.enum},message:"must be equal to one of the allowed values"}];return false;}var valid1 = _errs23 === errors;if(valid1){let data11 = data1.rating;const _errs25 = errors;if(typeof data11 !== "string"){let dataType9 = typeof data11;let coerced9 = undefined;if(!(coerced9 !== undefined)){if(dataType9 == "number" || dataType9 == "boolean"){coerced9 = "" + data11;}else if(data11 === null){coerced9 = "";}else {validate20.errors = [{instancePath:instancePath+"/metadata/rating",schemaPath:"#/properties/metadata/properties/rating/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced9 !== undefined){data11 = coerced9;if(data1 !== undefined){data1["rating"] = coerced9;}}}if(errors === _errs25){if(typeof data11 === "string"){if(func8(data11) < 1){validate20.errors = [{instancePath:instancePath+"/metadata/rating",schemaPath:"#/properties/metadata/properties/rating/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];return false;}}}var valid1 = _errs25 === errors;if(valid1){if(data1.updated !== undefined){let data12 = data1.updated;const _errs27 = errors;if(!((typeof data12 == "number") && (isFinite(data12)))){let dataType10 = typeof data12;let coerced10 = undefined;if(!(coerced10 !== undefined)){if(dataType10 == "boolean" || data12 === null
              || (dataType10 == "string" && data12 && data12 == +data12)){coerced10 = +data12;}else {validate20.errors = [{instancePath:instancePath+"/metadata/updated",schemaPath:"#/properties/metadata/properties/updated/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}}if(coerced10 !== undefined){data12 = coerced10;if(data1 !== undefined){data1["updated"] = coerced10;}}}if(errors === _errs27){if((typeof data12 == "number") && (isFinite(data12))){if(data12 < 1 || isNaN(data12)){validate20.errors = [{instancePath:instancePath+"/metadata/updated",schemaPath:"#/properties/metadata/properties/updated/minimum",keyword:"minimum",params:{comparison: ">=", limit: 1},message:"must be >= 1"}];return false;}else {let res0;if((1 === 0 || (res0 = data12/1, res0 !== parseInt(res0)))){validate20.errors = [{instancePath:instancePath+"/metadata/updated",schemaPath:"#/properties/metadata/properties/updated/multipleOf",keyword:"multipleOf",params:{multipleOf: 1},message:"must be multiple of 1"}];return false;}}}}var valid1 = _errs27 === errors;}else {var valid1 = true;}if(valid1){if(data1.published !== undefined){let data13 = data1.published;const _errs29 = errors;if(!((typeof data13 == "number") && (isFinite(data13)))){let dataType11 = typeof data13;let coerced11 = undefined;if(!(coerced11 !== undefined)){if(dataType11 == "boolean" || data13 === null
              || (dataType11 == "string" && data13 && data13 == +data13)){coerced11 = +data13;}else {validate20.errors = [{instancePath:instancePath+"/metadata/published",schemaPath:"#/properties/metadata/properties/published/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}}if(coerced11 !== undefined){data13 = coerced11;if(data1 !== undefined){data1["published"] = coerced11;}}}if(errors === _errs29){if((typeof data13 == "number") && (isFinite(data13))){if(data13 < 1 || isNaN(data13)){validate20.errors = [{instancePath:instancePath+"/metadata/published",schemaPath:"#/properties/metadata/properties/published/minimum",keyword:"minimum",params:{comparison: ">=", limit: 1},message:"must be >= 1"}];return false;}else {let res1;if((1 === 0 || (res1 = data13/1, res1 !== parseInt(res1)))){validate20.errors = [{instancePath:instancePath+"/metadata/published",schemaPath:"#/properties/metadata/properties/published/multipleOf",keyword:"multipleOf",params:{multipleOf: 1},message:"must be multiple of 1"}];return false;}}}}var valid1 = _errs29 === errors;}else {var valid1 = true;}if(valid1){let data14 = data1.lang;const _errs31 = errors;if(typeof data14 !== "string"){let dataType12 = typeof data14;let coerced12 = undefined;if(!(coerced12 !== undefined)){if(dataType12 == "number" || dataType12 == "boolean"){coerced12 = "" + data14;}else if(data14 === null){coerced12 = "";}else {validate20.errors = [{instancePath:instancePath+"/metadata/lang",schemaPath:"#/properties/metadata/properties/lang/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced12 !== undefined){data14 = coerced12;if(data1 !== undefined){data1["lang"] = coerced12;}}}var valid1 = _errs31 === errors;if(valid1){if(data1.description !== undefined){let data15 = data1.description;const _errs33 = errors;if(typeof data15 !== "string"){let dataType13 = typeof data15;let coerced13 = undefined;if(!(coerced13 !== undefined)){if(dataType13 == "number" || dataType13 == "boolean"){coerced13 = "" + data15;}else if(data15 === null){coerced13 = "";}else {validate20.errors = [{instancePath:instancePath+"/metadata/description",schemaPath:"#/properties/metadata/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced13 !== undefined){data15 = coerced13;if(data1 !== undefined){data1["description"] = coerced13;}}}var valid1 = _errs33 === errors;}else {var valid1 = true;}if(valid1){let data16 = data1.cover;const _errs35 = errors;if(typeof data16 !== "string"){let dataType14 = typeof data16;let coerced14 = undefined;if(!(coerced14 !== undefined)){if(dataType14 == "number" || dataType14 == "boolean"){coerced14 = "" + data16;}else if(data16 === null){coerced14 = "";}else {validate20.errors = [{instancePath:instancePath+"/metadata/cover",schemaPath:"#/properties/metadata/properties/cover/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced14 !== undefined){data16 = coerced14;if(data1 !== undefined){data1["cover"] = coerced14;}}}var valid1 = _errs35 === errors;}}}}}}}}}}}}}}}}else {validate20.errors = [{instancePath:instancePath+"/metadata",schemaPath:"#/properties/metadata/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){let data17 = data.parts;const _errs37 = errors;if(errors === _errs37){if(Array.isArray(data17)){var valid3 = true;const len1 = data17.length;for(let i1=0; i1<len1; i1++){let data18 = data17[i1];const _errs39 = errors;if(errors === _errs39){if(data18 && typeof data18 == "object" && !Array.isArray(data18)){let missing2;if((data18.title === undefined) && (missing2 = "title")){validate20.errors = [{instancePath:instancePath+"/parts/" + i1,schemaPath:"#/properties/parts/items/required",keyword:"required",params:{missingProperty: missing2},message:"must have required property '"+missing2+"'"}];return false;}else {const _errs41 = errors;for(const key2 in data18){if(!((key2 === "title") || (key2 === "text"))){delete data18[key2];}}if(_errs41 === errors){if(data18.title !== undefined){let data19 = data18.title;const _errs42 = errors;if(typeof data19 !== "string"){let dataType15 = typeof data19;let coerced15 = undefined;if(!(coerced15 !== undefined)){if(dataType15 == "number" || dataType15 == "boolean"){coerced15 = "" + data19;}else if(data19 === null){coerced15 = "";}else {validate20.errors = [{instancePath:instancePath+"/parts/" + i1+"/title",schemaPath:"#/properties/parts/items/properties/title/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced15 !== undefined){data19 = coerced15;if(data18 !== undefined){data18["title"] = coerced15;}}}var valid4 = _errs42 === errors;}else {var valid4 = true;}if(valid4){if(data18.text !== undefined){let data20 = data18.text;const _errs44 = errors;if(typeof data20 !== "string"){let dataType16 = typeof data20;let coerced16 = undefined;if(!(coerced16 !== undefined)){if(dataType16 == "number" || dataType16 == "boolean"){coerced16 = "" + data20;}else if(data20 === null){coerced16 = "";}else {validate20.errors = [{instancePath:instancePath+"/parts/" + i1+"/text",schemaPath:"#/properties/parts/items/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced16 !== undefined){data20 = coerced16;if(data18 !== undefined){data18["text"] = coerced16;}}}var valid4 = _errs44 === errors;}else {var valid4 = true;}}}}}else {validate20.errors = [{instancePath:instancePath+"/parts/" + i1,schemaPath:"#/properties/parts/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid3 = _errs39 === errors;if(!valid3){break;}}}else {validate20.errors = [{instancePath:instancePath+"/parts",schemaPath:"#/properties/parts/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs37 === errors;if(valid0){let data21 = data.cover;const _errs46 = errors;if(typeof data21 !== "string"){let dataType17 = typeof data21;let coerced17 = undefined;if(!(coerced17 !== undefined)){if(dataType17 == "number" || dataType17 == "boolean"){coerced17 = "" + data21;}else if(data21 === null){coerced17 = "";}else {validate20.errors = [{instancePath:instancePath+"/cover",schemaPath:"#/properties/cover/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}if(coerced17 !== undefined){data21 = coerced17;if(data !== undefined){data["cover"] = coerced17;}}}var valid0 = _errs46 === errors;}}}}}}else {validate20.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate20.errors = vErrors;return errors === 0;}