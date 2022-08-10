import { Component } from '@angular/core'

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent {

    public nome: string;
    public clientes: Cliente[];

    constructor() {
        this.nome = "consta";

        this.clientes = [new Cliente("jess", 25), new Cliente("ivanilde", 56), new Cliente("constantino", 53)];
    }

}

class Cliente {

    constructor(public nome: string, public idade: number) { }

}
