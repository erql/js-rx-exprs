import { AST, ASTNode, ExpressionNode, RepeatNode } from './ast';
import { Dependencies } from '../src';
import { Subject } from 'rxjs';


function compile(ast: AST, deps: Dependencies) {
    let log = '';
    return runThrough(ast.root);

    function runThrough(ast: ASTNode) {
        const rootSubject = new Subject();

        if (ast.type != 'EXPRESSION') {
            throw 'root should be a group';
        }

        let currentEntryIndex = 0;

        const entries = ast.content.map(c => {
            //  && c.type !== 'REPEAT'
            if (c.type !== 'STREAM') {
                throw 'not handled'
            }

            const key = c.content;

            const subscription = deps[key].subscribe(value => {
                handleEmission(key, value);
            });

            return {
                key,
                subscription
            }
        });

        function handleEmission(key, value) {
            // update log
            log += key;

            const currentEntry = entries[currentEntryIndex];
            const matchesCurrentEntry = currentEntry.key == key;

            if (!matchesCurrentEntry) {
                return;
            }

            // push the value to the capturing group
            rootSubject.next(value);

            const shouldMoveOn = true;

            if (shouldMoveOn) {
                currentEntryIndex += 1;
            }

            // check if capturing group should be completed
            if (currentEntryIndex > entries.length - 1) {
                rootSubject.complete();
                entries.forEach(e => e.subscription.unsubscribe());
            }
        }

        return rootSubject;
    }
}

export { compile }