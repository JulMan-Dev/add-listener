const { isArray } = Array;

/** @param {Element | Element[]} _element  @param {function} cb @param {keyof WindowEventMap} event @param {{}} options */
module.exports = function (_element, cb, event, options = {}) {

    if (isArray(_element)) {
        for (let element of _element) {
            _element?.addEventListener?.(event, e => cb?.call?.(element, e), options);
        }
    } else {
        let element = _element;

        _element?.addEventListener?.(event, e => cb?.call?.(element, e), options);
    }
}

/** @param {[Element | Element[], (this: Element, ev: WindowEventMap[keyof WindowEventMap]) => void, keyof WindowEventMap, AddEventListenerOptions][]} array */
module.exports.array = function (...array) {
    if (!array || !isArray(array)) throw TypeError('At least 1 argument required, but only 0 passed');

    array.forEach(v => module.exports(v[0], v[1], v[2], v?.[3]));
}
