export default class{
    constructor(){
        this.level = 0;
    }

    changeFontSize(level, context = this.document, exclude = ''){
        let diference = level - this.level;
        this._changeFontSize(diference, context, exclude);
        this.level = level;
    }

    _changeFontSize(level, context = this.document/*, exclude = ''*/){
        // Fator de multiplicação do tamanho da fonte
        var fator = 0.1 * level;
        var not = '';
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

    resetFontSize(context=document){
        let fator = Math.pow(0.1, Math.abs(this.level)) * level/Math.abs(this.level);

        Array.from(context.querySelectorAll('*')).forEach( node => {
            let currentSize = window.getComputedStyle(node).fontSize.split('px')[0];

            let newSize = parseFloat(currentSize) + parseFloat(currentSize*fator);
            node.style.setProperty('font-size', `${newSize}px`)
        });
        this.level = 0;
    }
}