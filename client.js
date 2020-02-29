var socket = io( 'https://practice-nodejs-1.appspot.com' );

let info = null;

socket.on('connect', () => {
    console.log(socket.id); // 'G5p5...'
  });

  socket.on('connect', () => {
    console.log(socket.connected); // true
  });

  socket.on('hi', (data) => {
    console.log(data); // true
  });

  