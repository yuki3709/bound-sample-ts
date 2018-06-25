const defaults = {
    location: {
        x: 200,
        y: 150
    },
    speed: {
        x: 6.0,
        y: 6.0
    },
    color: '#3399FF',
    size: 4
};

export class Component {
    props: {
        location: {
            x: number,
            y: number
        },
        speed: {
            x: number,
            y: number
        },
        color: string,
        size: number
    }
    constructor(props) {
        this.props = { ...JSON.parse(JSON.stringify(defaults)), ...(props || {}) };
    }
    move(size) {
        const props = this.props;
        const location = props.location;
        const speed = props.speed;
        location.x += speed.x;
        location.y += speed.y;
        if (location.x < 0 || location.x > size.width) {
            speed.x *= -1;
        }
        if (location.y < 0 || location.y > size.height) {
            speed.y *= -1;
            if (location.y < 0) location.y = 0;
            if (location.y > size.height) location.y = size.height;
        }
        if (location.x < 0) location.x = 0;
        if (location.x > size.width) location.x = size.width;
        if (location.y < 0) location.y = 0;
        if (location.y > size.height) location.y = size.height;
    }
    draw(context) {
        const props = this.props;
        const location = props.location;
        context.beginPath();
        context.fillStyle = props.color;
        context.arc(location.x, location.y, props.size, 0, Math.PI * 2.0);
        context.fill();
    }
}

