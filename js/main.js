var FPS = 30;

var testBox = {
    color: "#FF0000",
    x: 0,
    y: 0,
    width: 10,
    height: 10,
    move: function() {
        if(this.x < 20) {
            this.x++;
        }
        else {
            this.x = 0;
        }
    },
    draw: function() {
        canvas.fillStyle = this.color;
        canvas.fillRect(this.x,this.y,this.width,this.height);
    }
}

function Draw() {
    ClearCanvas();
    DrawObjects();
}

function Update() {
    UpdateObjects();
}

function RunGame() {
    setInterval(GameLoop, 1000/FPS);
}

function UpdateObjects() {
    testBox.move();
}

function DrawObjects() {
    testBox.draw();
}

function GameLoop() {
    Update();
    Draw();
}
