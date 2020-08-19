var Calculadora = /** @class */ (function () {
    function Calculadora(num1, num2) {
        this.numero1 = num1;
        this.numero2 = num2;
    }
    Calculadora.prototype.operaciones = function () {
        var suma = this.numero1 + this.numero2;
        var resta = this.numero1 - this.numero2;
        var multi = this.numero1 * this.numero2;
        var div = this.numero1 / this.numero2;
        return ('Suma: ' +
            suma +
            ' || Resta: ' +
            resta +
            ' || Multiplicación: ' +
            multi +
            ' || División: ' +
            div);
    };
    return Calculadora;
}());
var operacion1 = new Calculadora(8, 5);
operacion1.operaciones();
