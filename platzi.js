class PlatziReactive {
    constructor(options){
        this.origen = options.data()

        // Destino 
        this.$data = new Proxy(this.origen, {
            get(target, name){
                console.log(target, name)
            }
        })
    }

    mount(){
        document.querySelectorAll("*[p-text]").forEach(el => {
            this.pText(el, this.$data, el.getAttribute("p-text"))
        })
    }
    
    pText(el, target, name) {
        el.innerText = target[name]
    }

    pMPdel() {}
}

var Platzi = {
    createApp(options) {
        return new PlatziReactive( options );
    }
}