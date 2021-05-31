import {getContentClientRect} from "./dom";

// Extracts number from string
// i.e. from a given string 
// it matches numerical values.
// Example: -31.87px -> -31.87.
export const extractNumber = obj => {
    if (typeof obj !== 'string') {
        return null;
    }
    const match = obj.match(/^[+-]?\d+(\.\d+)?/);
    if (!match) {
        return null;
    }
    return Number.parseFloat(match.shift())
}

// Extracts unit from string
// i.e. from a given string 
// it matches non-numerical values
// at the end trail of string.
// Example: -31.87px -> px.
export const extractUnits = obj => {
    if (typeof obj !== 'string') {
        return null;
    }
    const match = obj.match(/^[+-]?\d+(\.\d+)?/);
    if (!match) {
        return null;
    }
    return obj.replace(match.shift(), '');
}

// Converts from any unit to 
// pixels. Measure arg is some
// string with units to be
// converted, i.e. 24rem.
export const convertToPx = (
    measure, 
    options = {}
) => {
    // Extract options
    const {
        target = document,
        targetAsContainer = true,
        rectProperty = 'width',
        withProperties = {},
    } = options;
    // Create document element and
    // append according to options.
    const element = document.createElement('div');
    element.style.visibility = 'hidden';
    element.style.overflow = 'hidden';
    const appendingToElement = (
        targetAsContainer 
        ? target 
        : target.parentElement
    );
    appendingToElement.appendChild(element);
    // Extract numerical value
    // and units from measure.
    const value = extractNumber(measure);
    const units = extractUnits(measure);
    // Perform calculations.
    // Baseline can be any number.
    const baseline = 10;
    element.style[rectProperty] = baseline + units;
    Object.keys(withProperties).forEach(property => (
        element.style[property] = withProperties[property]
    ));
    // Calculate offset values
    // for rect properties
    // since offset[Prop] will
    // not be high-precision. 
    // (DOM API will round up
    // value to integer)
    const defaultOffsetParentRect = {
        left: 0,
        right: 0,
        width: 0,
        height: 0,
    };
    const calculatedOffsetParentRect = (
        element.offsetParent && 
        getContentClientRect(element.offsetParent)
    );
    const offsetParentRect = (
        calculatedOffsetParentRect ||
        defaultOffsetParentRect
    );
    const offsetParent = element.offsetParent;
    const offsetParentScroll = {
        top: offsetParent ? offsetParent.scrollTop : 0,
        left: offsetParent ? offsetParent.scrollLeft : 0,        
    }
    const elementRect = element.getBoundingClientRect();
    const rect = {
        top: (
            elementRect.top + 
            offsetParentScroll.top -
            offsetParentRect.top
        ),
        left: (
            elementRect.left + 
            offsetParentScroll.left - 
            offsetParentRect.left
        ),
        width: elementRect.width,
        height: elementRect.height,
    };
    const conversion = rect[rectProperty] / baseline;
    // Clean up temporal
    // element from DOM.
    appendingToElement.removeChild(element);
    // Return conversion
    return value * conversion;
}