import { Component, Defaults } from './Component'
import { Field } from './Field'

window.onload = () => {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const field = new Field(canvas);
    const outputArea = document.getElementById('output-area');
    const resize = () => field.resize(outputArea);
    const getInputElementById = id => <HTMLInputElement>document.getElementById(id);
    resize();
    field.add(new Component());
    window.addEventListener('resize', resize);
    const inputs = {
        locationX: getInputElementById("location-x"),
        locationY: getInputElementById("location-y"),
        speedX: getInputElementById("speed-x"),
        speedY: getInputElementById("speed-y"),
        color: getInputElementById("color"),
        size: getInputElementById("size")
    };
    const setValue = props => {
        inputs.locationX.value = props.location.x;
        inputs.locationY.value = props.location.y;
        inputs.speedX.value = props.speed.x;
        inputs.speedY.value = props.speed.y;
        inputs.color.value = props.color;
        inputs.size.value = props.size;
    };
    const getValue = () => {
        return {
            location: {
                x: parseInt(inputs.locationX.value),
                y: parseInt(inputs.locationY.value)
            },
            speed: {
                x: parseInt(inputs.speedX.value),
                y: parseInt(inputs.speedY.value)
            },
            color: inputs.color.value,
            size: parseInt(inputs.size.value)
        };
    };
    const addComponent = props => field.add(new Component(props));
    setValue(Defaults);
    document.getElementById("add-button").addEventListener('click', () => addComponent(getValue()));
    canvas.addEventListener('click', ev => {
        inputs.locationX.value = ev.clientX.toString();
        inputs.locationY.value = ev.clientY.toString();
        addComponent(getValue());
    })
};
