var Rombo = /** @class */ (function () {
    function Rombo(diagonal_Vertical, diagonal_Horizontal) {
        this.diagonalVertical = diagonal_Vertical;
        this.diagonalHorizontal = diagonal_Horizontal;
    }
    Rombo.prototype.area = function () {
        return ('El área del rombo es: ' + this.diagonalVertical * this.diagonalHorizontal);
    };
    return Rombo;
}());
var myRombo = new Rombo(4, 5);
// myRombo.diagonalVertical = 4;
// myRombo.diagonalHorizontal = 5;
console.log(myRombo.area());
