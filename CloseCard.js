function CloseCard(text, close) {


    this.text = text;
    this.close = close;


    this.partial = function () {

        // console.log(close.length)
        var partialText = text.slice(close.length)
        console.log(partialText)
    }
};


module.exports = CloseCard