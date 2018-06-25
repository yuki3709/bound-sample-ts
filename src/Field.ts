import { Component } from './Component'

export class Field {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    size: {
        width: 0,
        height: 0
    };
    components: Component[];
    constructor(e) {
        this.canvas = e;
        this.context = this.canvas.getContext('2d');
        this.context.globalCompositeOperation = "source-over";
        setInterval(() => this.draw(), 33);
    }

    clear() {
        const context = this.context;
        if (!context) return;
        const size = this.size;
        context.fillStyle = "#000";
        context.fillRect(0, 0, size.width, size.height);
    }
    resize(parent) {
        this.size.width = this.canvas.width = parent.clientWidth;
        this.size.height = this.canvas.height = parent.clientHeight;
    }
    add(component) {
        this.components.push(component);
    }
    draw() {
        this.clear();
        this.components.forEach(component => {
            component.move(this.size);
            component.draw(this.context);
        });
    }
}
