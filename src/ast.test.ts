import { parse } from "./ast"


describe('Ast', () => {
    test('A', () => {
        const ast = parse('A');

        expect(ast).toEqual({
            root: {
                type: 'EXPRESSION',
                content: [
                    { type: 'STREAM', content: 'A' }
                ]
            }
        });
    })

    test('AB', () => {
        const ast = parse('AB');

        expect(ast).toEqual({
            root: {
                type: 'EXPRESSION',
                content: [
                    { type: 'STREAM', content: 'A' },
                    { type: 'STREAM', content: 'B' }
                ]
            }
        });
    })

    test('AB*C', () => {
        const ast = parse('AB*C');

        expect(ast).toEqual({
            root: {
                type: 'EXPRESSION',
                content: [
                    { type: 'STREAM', content: 'A' },
                    {
                        type: 'REPEAT', content:
                            { type: 'STREAM', content: 'B' }
                    },
                    { type: 'STREAM', content: 'C' }
                ]
            }
        });
    })
})