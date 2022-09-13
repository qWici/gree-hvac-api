import {PropertyTransformer} from "./index";
import {APP_PROPERTIES} from "../property/properties.data";

describe('toVendor', () => {
    const service = new PropertyTransformer();

    APP_PROPERTIES.map((item) => {
        it(`valid ${item.clientKey} key`, () => {
            const valuesKeys = Object.keys(item.valuesRelationship);

            const result = service.toVendor({
                [item.clientKey]: item.valuesRelationship[valuesKeys[0]],
            })
            expect(Object.keys(result).includes(item.vendorKey)).toBe(true)
        })

        it(`valid ${item.clientKey} values`, () => {
            for (const prop in item.valuesRelationship) {
                const result = service.toVendor({
                    [item.clientKey]: prop,
                })
                expect(result[item.vendorKey]).toBe(item.valuesRelationship[prop])
            }
        })
    })
})

describe('fromVendor', () => {
    const service = new PropertyTransformer();

    APP_PROPERTIES.map((item) => {
        it(`valid ${item.clientKey} key`, () => {
            const result = service.fromVendor({
                [item.vendorKey]: item.valuesRelationship[0],
            })

            expect(Object.keys(result).includes(item.clientKey)).toBe(true)
        })

        it(`valid ${item.clientKey} values`, () => {
            for (const prop in item.valuesRelationship) {
                const result = service.fromVendor({
                    [item.vendorKey]: item.valuesRelationship[prop],
                })

                expect(result[item.clientKey]).toBe(prop)
            }
        })
    })
})
