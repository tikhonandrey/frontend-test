import React from 'react';

export const svgX = (props) =>
    <svg {...props} width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <path
                d="M9.1,8.1 L16.1,15.1 L15.1,16.1 L8.1,9.1 L1.1,16.1 L0,15.1 L7,8.1 L0,1.1 L1.1,0 L8.1,7 L15.1,0 L16.1,1.1 L9.1,8.1 Z"
                id="path-1"/>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <mask id="mask-1" fill="white">
                <use xlinkHref="#path-1"/>
            </mask>
            <use id="icon" fill="#000000" fillRule="nonzero" xlinkHref="#path-1"/>
        </g>
    </svg>;

export const svgDownArrow = (props) =>
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6"
         xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <polygon points="7 0.8 7.8 1.5 4 5.3 0.3 1.5 1 0.8 4 3.7" id='path-2'/>
        </defs>
        <g strokeWidth="1" fillRule="evenodd" fill="none">
            <g transform="translate(-319 -236)translate(0 42)translate(25 183)translate(78 4)translate(216 7)">
                <mask fill="white"/>
                <use fillRule="nonzero" xlinkHref="#path-2" fill="#969696"/>
            </g>
        </g>
    </svg>;

export const svgCheckedCircle = (props) => <svg {...props} width="16px" height="16px" viewBox="0 0 16 16" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-26, -477)">
            <g transform="translate(24, 341)">
                <g transform="translate(2, 72)">
                    <g transform="translate(0, 64)">
                        <circle fill="#000" cx="8" cy="8" r="8"/>
                        <polygon fill="#fff" fillRule="nonzero"
                                 points="7.21 10.07 12.54 4.55 13.46 5.45 7.21 11.93 3.54 8.11 4.46 7.22"/>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>;

export const svgUncheckedCircle = (props) => <svg {...props} width="16px" height="16px" viewBox="0 0 16 16"
                                                  version="1.1"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-26, -477)">
            <g transform="translate(24, 341)">
                <g transform="translate(2, 72)">
                    <g transform="translate(0, 64)">
                        <circle fill="#ccc" cx="8" cy="8" r="8"/>
                        <circle fill="#fff" cx="8" cy="8" r="7"/>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>;


export const escapeHandler = (onPress) => window.addEventListener('keydown', event => {
    if (event.defaultPrevented) {
        return; // Should do nothing if the default action has been cancelled
    }

    const {key, keyIdentifier, keyCode} = event;
    let handled = false;
    if (key !== undefined && key.toLowerCase() === 'escape') {
        // Handle the event with KeyboardEvent.key and set handled true.
        handled = true;
    } else if (keyIdentifier !== undefined && keyIdentifier === 'U+001B') {
        // Handle the event with KeyboardEvent.keyIdentifier and set handled true.
        handled = true;
    } else if (keyCode !== undefined && keyCode === 27) {
        // Handle the event with KeyboardEvent.keyCode and set handled true.
        handled = true;
    }

    if (handled) {
        // Suppress "double action" if event handled
        onPress();
        event.preventDefault();
    }
}, true);

export const safeInvoke = function* (func) {
    try {
        yield func();
    } catch (e) {
        console.error(e);
    }
};

export const buildFilterString = (filters) => {
    let filterString = '';
    const addComma = (f) => (f && f.length && filterString && filterString.length ? ', ' : '') + f;
    if (filters.category) filterString += filters.category;
    if (filters.price) filterString += addComma(filters.price);
    if (filters.open) filterString += addComma(filters.open ? 'Open Now' : '');
    return filterString === '' ? 'All' : filterString;
};
