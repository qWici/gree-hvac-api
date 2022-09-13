"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const properties_data_1 = require("../property/properties.data");
describe('toVendor', () => {
    const service = new index_1.PropertyTransformer();
    properties_data_1.APP_PROPERTIES.map((item) => {
        it(`valid ${item.clientKey} key`, () => {
            const valuesKeys = Object.keys(item.valuesRelationship);
            const result = service.toVendor({
                [item.clientKey]: item.valuesRelationship[valuesKeys[0]],
            });
            expect(Object.keys(result).includes(item.vendorKey)).toBe(true);
        });
        it(`valid ${item.clientKey} values`, () => {
            for (const prop in item.valuesRelationship) {
                const result = service.toVendor({
                    [item.clientKey]: prop,
                });
                expect(result[item.vendorKey]).toBe(item.valuesRelationship[prop]);
            }
        });
    });
});
describe('fromVendor', () => {
    const service = new index_1.PropertyTransformer();
    properties_data_1.APP_PROPERTIES.map((item) => {
        it(`valid ${item.clientKey} key`, () => {
            const result = service.fromVendor({
                [item.vendorKey]: item.valuesRelationship[0],
            });
            expect(Object.keys(result).includes(item.clientKey)).toBe(true);
        });
        it(`valid ${item.clientKey} values`, () => {
            for (const prop in item.valuesRelationship) {
                const result = service.fromVendor({
                    [item.vendorKey]: item.valuesRelationship[prop],
                });
                expect(result[item.clientKey]).toBe(prop);
            }
        });
    });
});
