class CalcController {
    constructor(){
        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){
    
     this.setDisplayDateTime()
     setInterval(()=>{
        this.setDisplayDateTime()
     }, 1000);
    }

    //metodo para tratar multiplos eventos 
    addEventListenerAll(element, events, fn) {
        //Executa uma função para cada evento detectado    
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn, false)
        })
    }

    //Metodo para limpar os dados do display da calculadora
    clearAll() {
        this._operation = [];
    }
    //Metodo para tratar o evento CE (cancela a ultima entrada no display)
    cancelEntry() {
        this._operation.pop()
    }

    //Metodo para tratar a situação da ultima posição do array
    getLastOperation() {
        //retorna a ultima informação do array
        return this._operation[this._operation.length-1]
    }

    addOperation(value) {
        this._operation.push(value);
        console.log(this._operation)
    }

    //Motodo default 
    setError() {
        this.displayCalc = "Error";
    }

    //metodo para tratar ações de cada botao
    execBtn(value) {
        switch(value) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.cancelEntry();
                break;
            case 'soma':
            
                break;
            case 'subtracao':

                break;
            case 'divisao':
                break;
            case 'multiplicacao':
                break;
            case 'porcento':
                break;
            case 'igual':
                break;

                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    this.addOperation(parseInt(value));

            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach(btn=>{
          this.addEventListenerAll(btn, 'click drag',(e)=>{
                let textBtn = btn.className.baseVal.replace("btn-","");
                this.execBtn(textBtn);
          });

          this.addEventListenerAll(btn, 'mouseover mousedown mouseup', e=>{
            btn.style.cursor = 'pointer';
          });
        });
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }


}