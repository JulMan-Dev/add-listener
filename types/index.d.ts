interface add_listener {
    <E extends Element | Element[], K extends keyof WindowEventMap>(element: E, cb: (this: E, ev: WindowEventMap[K]) => void, event: K, options?: AddEventListenerOptions): void;
    array<L extends [Element | Element[], (this: Element, ev: WindowEventMap[keyof WindowEventMap]) => void, keyof WindowEventMap, AddEventListenerOptions][]>(...array: L): void;
}

export = add_listener;
