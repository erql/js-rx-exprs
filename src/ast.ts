import { StreamKeyType, ExpressionString } from "../src";

export interface ExpressionNode {
    type: 'EXPRESSION',
    content: ASTNode[]
}

export interface StreamNode {
    type: 'STREAM',
    content: StreamKeyType
}

export type ASTNode = ExpressionNode | StreamNode;

export interface AST {
    root: ExpressionNode;
}

// IMPLEMENTATION

export function parse(expression: ExpressionString): AST {
    throw 'not implemented yet';
}


// EXAMPLES

//  `A`
export const ast_A: AST = {
    root: {
        type: 'EXPRESSION',
        content: [{ type: 'STREAM', content: 'A' }]
    }
};

//  `ABC`
export const ast_ABC: AST = {
    root: {
        type: 'EXPRESSION',
        content:
            [ { type: 'STREAM', content: 'A' }
            , { type: 'STREAM', content: 'B' }
            , { type: 'STREAM', content: 'C' }
            ]
    }
};