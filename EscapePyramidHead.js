function escapePyramidHead(room) {
    const n = room.length;
    let start, target;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (room[i][j] === '▲') start = [i, j];
            if (room[i][j] === 'T') target = [i, j];
        }
    }

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    // BFS
    const queue = [[...start, 0]];
    const visited = new Set([`${start[0]}_${start[1]}`]);
    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();
        if (x === target[0] && y === target[1]) return steps;
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && room[nx][ny] !== '#' && !visited.has(`${nx}_${ny}`)) {
                queue.push([nx, ny, steps + 1]);
                visited.add(`${nx}_${ny}`);
            }
        }
    }
    return -1;
}

const room = [
    ['.', '.', '#', '.', '▲'],
    ['#', '.', '#', '.', '#'],
    ['.', '.', '.', '.', '.'],
    ['#', '#', '#', '.', '#'],
    ['T', '.', '.', '.', '.'],
]
escapePyramidHead(room) // -> 8

const room2 = [
    ['T', '.', '#', '.'],
    ['.', '.', '.', '.'],
    ['▲', '.', '.', '#'],
    ['.', '#', '#', '#'],
]
escapePyramidHead(room2) // -> 2

const room3 = [
    ['#', '#', '#'],
    ['▲', '.', '#'],
    ['.', '#', 'T'],
]
escapePyramidHead(room3) // -> -1