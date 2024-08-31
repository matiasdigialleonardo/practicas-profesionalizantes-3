module.exports = io => {

    var line_history = [];

    io.on('connection', socket => {
        console.log('new User connected');

        const userColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        // Send the line history to the newly connected user
        for(let i in line_history){
            socket.emit('draw_line', {
                line: line_history[i].line, 
                color: line_history[i].color // Include color in the history
            });
        }

        
        // When the user draws a line, broadcast it to all users
        socket.on('draw_line', data => {
            const lineData = {
                line: data.line,
                color: userColor  // Attach the user's color
            };

            line_history.push(lineData);  // Store the line and color in history
            io.emit('draw_line', lineData);  // Broadcast the line and color
        });
    });

}