// Convert Apache status to JSON
var lines = value.split('\n');
var output = {},
    workers = {
        '_': 0, 'S': 0, 'R': 0, 'W': 0,
        'K': 0, 'D': 0, 'C': 0, 'L': 0,
        'G': 0, 'I': 0, '.': 0
    };

// Get all "Key: Value" pairs as an object
for (var i = 0; i < lines.length; i++) {
    var line = lines[i].match(/([A-z0-9 ]+): (.*)/);

    if (line !== null) {
        output[line[1]] = isNaN(line[2]) ? line[2] : Number(line[2]);
    }
}

// Multiversion metrics
output.ServerUptimeSeconds = output.ServerUptimeSeconds || output.Uptime;
output.ServerVersion = output.Server || output.ServerVersion;

// Parse "Scoreboard" to get worker count.
if (typeof output.Scoreboard === 'string') {
    for (var i = 0; i < output.Scoreboard.length; i++) {
        var char = output.Scoreboard[i];

        workers[char]++;
    }
}

// Add worker data to the output
output.Workers = {
    waiting: workers['_'], starting: workers['S'], reading: workers['R'],
    sending: workers['W'], keepalive: workers['K'], dnslookup: workers['D'],
    closing: workers['C'], logging: workers['L'], finishing: workers['G'],
    cleanup: workers['I'], slot: workers['.']
};

// Return JSON string
return JSON.stringify(output);