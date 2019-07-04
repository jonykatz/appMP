var app = new Vue({
    el: '#app',
    data:{
        titulo:' Calculador de Precios para MercadoPago',
        efectivo: "",
        total:0,
        
    },
    methods:{
        pagoInstantaneo(){
            this.total = Math.floor(this.efectivo/(1-0.0549*1.21)) ;
            return this.total;
            },
        pago14Dias(){
            this.total = Math.floor(this.efectivo/(1-0.0349*1.21)) ;
            return this.total;
            },
        pago30Dias(){
            this.total = Math.round(this.efectivo/(1-0.0199*1.21)) ;
            return this.total ;
            },    
        
    }
})