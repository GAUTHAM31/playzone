$(".profile").addClass("pre-enter");
setTimeout(function(){
	$(".profile").addClass("on-enter");
}, 500);
setTimeout(function(){
	$(".profile").removeClass("pre-enter on-enter");
}, 3000);

var Selectize = /** @class */ (function () {
    function Selectize() {
        this.init();
    }
    Selectize.prototype.init = function () {
        var initValue;
        $('.action-box').selectric({
            onInit: function (element) {
                initValue = $(this).val();
            },
            onChange: function (element) {
                if ($(this).val() !== initValue)
                    $(element).parents('form').submit();
            }
        });
    };
    return Selectize;
}());
new Selectize();
