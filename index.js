/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// draw a red square
ctx.beginPath();
ctx.rect(20, 40, 100, 100);
ctx.fillStyle = 'orange';
ctx.fill();
ctx.closePath();

// draw a green circle
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.closePath();

// draw a blue empty rectangle
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = 'rgb(0 0 255 / 50%)';
ctx.stroke();
ctx.closePath();
