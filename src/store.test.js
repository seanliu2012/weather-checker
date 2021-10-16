const store = require("./store")
// @ponicode
describe("store.default", () => {
    test("0", () => {
        let callFunction = () => {
            store.default(11)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            store.default(1000)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            store.default(80)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            store.default(2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            store.default(128)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            store.default(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
