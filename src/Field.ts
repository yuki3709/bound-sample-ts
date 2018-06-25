import { Component } from './Component'

export class Field {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    size: {
        width: number,
        height: number
    };
    components: Component[];

    constructor(e) {
        this.canvas = e;
        this.context = this.canvas.getContext('2d');
        this.context.globalCompositeOperation = "source-over";
        this.size = { width: 0, height: 0 };
        this.components = [];
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
        const width = parent.clientWidth;
        const height = parent.clientHeight;
        this.size.width = width;
        this.canvas.width = width;
        this.size.height = height;
        this.canvas.height = height;
    }

    add(component) {
        this.components.push(component);
    }

    draw() {
        this.clear();
        if (this.components.length < 1) return;
        this.components.forEach(component => {
            component.move(this.size);
            component.draw(this.context);
        });
    }
}