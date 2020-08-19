var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    Empleado.prototype.salarioFinal = function () {
        var AFP = 0.0725;
        var ISSS = 0.03;
        var descuento = this.salario * AFP + this.salario * ISSS;
        return ('Salario: ' +
            this.salario +
            ' || Descuentos: ' +
            descuento +
            ' || Salario final: ' +
            (this.salario - descuento));
    };
    return Empleado;
}());
var empleado1 = new Empleado('Andres Chapeton', 600);
empleado1.salarioFinal();
