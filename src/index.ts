/**
 * @file blah blah blah
 * see ../spec for specification
 */

import { Observable, defer } from 'rxjs';
import { parse } from './ast';
import { compile } from './compile';

export type ExpressionString = string;
export type StreamKeyType = 'A'|'B'|'C'|'D'|'E'|'F';
export type Dependencies = Partial<Record<StreamKeyType, Observable<unknown>>>;

function exec(expression: ExpressionString, deps: Dependencies) {
    const ast = parse(expression);
    return defer(() => compile(ast, deps));
}

export { exec }