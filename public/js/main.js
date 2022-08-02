import primitiveTypes from './other/primitive-types.js';
import eventListener from './other/event-listener.js';
const compilation = () => {
    console.group('Task 1');
    console.log('sveikas pasauli');
    console.groupEnd();
};
const init = () => {
    compilation();
    primitiveTypes();
    eventListener();
};
init();
//# sourceMappingURL=main.js.map