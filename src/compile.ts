import { AST, ASTNode } from './ast';
import { Dependencies } from '../src';
import { Subject } from 'rxjs';

function compile(ast: AST, deps: Dependencies) {
    const subject = runThrough(ast.root);

    let values = '';

    return subject;

    function runThrough(ast: ASTNode) {
        const rootSubject = new Subject();

        if (ast.type == 'EXPRESSION') {
            ast.content.forEach(c => {
                if (c.type !== 'STREAM') {
                    return;
                }

                const key = c.content;

                deps[key].subscribe(v => {
                    // update log
                    values += c;

                    // check if theres a capturing group -- push the value
                    rootSubject.next(v);

                    // check if capturing group should be completed
                    rootSubject.complete();
                });
            });
        }

        return rootSubject;
    }
}

export { compile }