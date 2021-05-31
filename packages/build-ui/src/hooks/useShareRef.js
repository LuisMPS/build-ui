import {useRef, useEffect} from 'react';

const useShareRef = ref => {
    const innerRef = useRef(
        ref && ref.current
    );
    useEffect(() => {
        if (!ref) {
            return;
        }
        if (typeof ref === 'function') {
            ref(innerRef.current);
            return;
        }
        else {
            ref.current = innerRef.current;
        }
    });
    return innerRef;
}

export default useShareRef;