

export function func1(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;

    var s = Math.abs(Math.sin(rel_y * height / 2));
    s = s * (height - abs_y);
    
    mesh.scale.set(s, 1.0, s);
    mesh.position.set(0, abs_y, 0);
}


export function func2(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;
    var frequency = settings.frequency;

    var layer_height = height / frequency;
    var s = (1 - (abs_y / layer_height - Math.floor(abs_y / layer_height))) * (height - abs_y);
    //var s = height - abs_y;

    mesh.scale.set(s, 1.0, s);
    mesh.position.set(0, abs_y, 0);
}

export function func3(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;
    var frequency = settings.frequency;
    var amplitude = settings.amplitude;

    var triangle = Math.abs((rel_y * frequency) % amplitude - (0.5 * amplitude));
    var s = triangle * (height - abs_y);

    mesh.position.set(0, abs_y, 0);
    mesh.scale.set(s, 1.0, s);
}

export function func4(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;
    var frequency = settings.frequency;
    var amplitude = settings.amplitude;

    mesh.position.set(0, abs_y, 0);
}



export function sawtooth(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;
    var frequency = settings.frequency;
    var amplitude = settings.amplitude;

    var sawtooth = rel_y * frequency - Math.floor(rel_y * frequency) * amplitude;

    mesh.scale.set(sawtooth, 1.0, sawtooth);
    mesh.position.set(0, abs_y, 0);
}

export function triangle(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;
    var frequency = settings.frequency;
    var amplitude = settings.amplitude;

    var triangle = Math.abs((rel_y * frequency) % amplitude - (0.5 * amplitude));
    mesh.position.set(0, abs_y, 0);
    mesh.scale.set(triangle, 1.0, triangle);
}

export function step(mesh, settings) {
    var abs_y = settings.pos;
    var height = settings.max - settings.min;
    var rel_y = (settings.pos - settings.min) / height;
    var frequency = settings.frequency;
    var amplitude = settings.amplitude;

    var s = Math.abs(Math.floor(rel_y * frequency) % 2.0 * amplitude);
    if (s <= 0.0) {
        s = amplitude * 0.50;
    }

    mesh.scale.set(step, 1.0, step);
    mesh.position.set(0, abs_y, 0);
}
