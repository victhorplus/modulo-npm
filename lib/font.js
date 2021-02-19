var _level = 0;

function changeFontSize(level, context = this.document, exclude = ''){
    let diference = level - _level;
    this._changeFontSize(diference, context, exclude);
    _level = level;
}

function _changeFontSize(level, context = this.document/*, exclude = ''*/){
    // Fator de multiplicação do tamanho da fonte
    var fator = 0.02 * level;
    var not = '';
    console.log('oi')
    /*
    if(Array.isArray(exlude)){
        exclude.forEach( node => not += `:not(${node})` );
    }else{
        not = `:not(${exclude})`;
    }
    */
    Array.from(context.querySelectorAll('*')).forEach( node => {
        let currentSize = window.getComputedStyle(node).fontSize.split('px')[0];
        let newSize = parseFloat(currentSize) + parseFloat(currentSize*fator);
        node.style.setProperty('font-size', `${newSize}px`)
    })
}

function resetFontSize(context=document){
    if(_level>0){
        var fator = 1 - (Math.pow(1.02, _level) - 1)
    }
    else if(_level < 0){
        var fator = Math.pow(1.02, Math.abs(_level));
    }else{ return; }
    //let fator = (Math.pow(1.1, Math.abs(_level)) * (_level/Math.abs(_level) || 1) -1)  * -1;

    Array.from(context.querySelectorAll('*')).forEach( node => {
        let currentSize = window.getComputedStyle(node).fontSize.split('px')[0];

        let newSize = parseFloat(currentSize) * fator;
        node.style.setProperty('font-size', `${newSize}px`)
    });
    _level = 0;
}

export default{
    changeFontSize,
    _changeFontSize,
    resetFontSize
}