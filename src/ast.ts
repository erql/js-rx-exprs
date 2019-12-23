import { StreamKeyType, ExpressionString } from "../src";

export interface ExpressionNode {
    type: 'EXPRESSION',
    content: ASTNode[]
}

export interface StreamNode {
    type: 'STREAM',
    content: StreamKeyType
}

export interface RepeatNode {
    type: 'REPEAT',
    content: StreamNode
}

export type ASTNode = ExpressionNode | StreamNode | RepeatNode;

export interface AST {
    root: ExpressionNode;
}

// IMPLEMENTATION

export function parse(expression: ExpressionString): AST {
    throw 'not implemented yet';
}