var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;
var canvasElement = $("<canvas width='" + CANVAS_WIDTH + "' height='" + CANVAS_HEIGHT + "'></canvas");
var canvas;

function InitCanvas() {
    canvas = canvasElement.get(0).getContext("2d");
    canvasElement.appendTo('body');
}

function ClearCanvas() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
