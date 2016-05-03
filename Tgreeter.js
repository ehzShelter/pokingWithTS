var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hellow, " + this.greeting;
    };
    return Greeter;
}());
