const {Circle, Square, Triangle} = require('./shapes');

// Circle tests
    test('shows correct output', () => {
    const shape = new Circle();       
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
    });


// Square tests
    test('shows correct output', () => {
    const shape = new Square();       
    shape.setColor("red");
    expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="red"/>');
    });

    // Triangle tests
    test('shows correct output', () => {
    const shape = new Triangle();       
    shape.setColor("green");
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="green"/>');
    });
