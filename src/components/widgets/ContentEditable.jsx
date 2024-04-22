import React, { useRef, useEffect } from 'react';

const ContentEditable = (props) => {
    // The onChange must happen on a different hierarchy level to not cause a rerender !!!
    const { onChange } = props;
    // Tracking cloned element
    const element = useRef();

    let elements = React.Children.toArray(props.children);
    if (elements.length > 1) {
        throw Error("Can't have more than one child");
    }

    // every time the user types, we update the value
    const onMouseUp = () => {
        const value = element.current?.value || element.current?.innerText;
        if (onChange) {
            onChange(value);
        }
    };
    // Do on the first pass
    useEffect(() => {
        const value = element.current?.value || element.current?.innerText;
        if (onChange) {
            onChange(value);
        }
    }, []);
    // Creating the contentEditable element
    elements = React.cloneElement(elements[0], {
        contentEditable: true,
        suppressContentEditableWarning: true,
        ref: element,
        onKeyUp: onMouseUp,
    });
    return elements;
};

export default ContentEditable;
