export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;

  this.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  };
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;

  this.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
  };
}

export class ProgramWindow {
  screenSize = new Size(800, 600);
  size = new Size();
  position = new Position();

  resize(newSize) {
    let remainWidth = this.screenSize.width - this.position.x;
    let remainHeight = this.screenSize.height - this.position.y;

    this.size.resize(
      Math.max(1, Math.min(remainWidth, newSize.width)),
      Math.max(1, Math.min(remainHeight, newSize.height))
    );
  }

  move(newPosition) {
    let largestValidXPos = this.screenSize.width - this.size.width;
    let largestValidYPos = this.screenSize.height - this.size.height;

    this.position.move(
      Math.max(0, Math.min(largestValidXPos, newPosition.x)),
      Math.max(0, Math.min(largestValidYPos, newPosition.y)));
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}
