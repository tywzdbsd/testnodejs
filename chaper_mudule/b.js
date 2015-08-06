/**
 * Created by tyw on 15/8/4.
 */
module.exports = function () {
    var outfunc = function(){
        console.log('outfunc');
    };
    return {
        say: function () {
            console.log("say Hello");
        }
    };
}();