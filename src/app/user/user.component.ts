// per creare component in maniera piu rapida scrivere n g c nome-componente

import {Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';
import {NgIf} from "@angular/common";

/*type User = {
    id: string;
    name: string;
    avatar: string;
}*/

interface User {
    id: string;
    name: string;
    avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    num = 0;
    // @Input({required: true}) avatar!: string; // Impostabile dell'esterno
    // @Input({required: true}) name!: string; // Impostabile dell'esterno

    avatar = input.required<String>(); // Impostabile dell'esterno con signal
    name = input<String>("no name"); // Impostabile dell'esterno con signal con default value
    id = input.required<String>();
    @Input() isSelected: boolean = false;

    //user = input<User>(); // Impostabile dell'esterno con signal


    // @Output() select = new EventEmitter<string>();
    select = output<string>(); // modo piu moderno di dichiarare un output

    /*get imagePath() {
        return 'assets/users/' + this.avatar();
    }*/
    imagePath = computed(() => { // Computed property
        return 'assets/users/' + this.avatar();
    });

    onSelectUser() {
        this.isSelected = true;
        this.select.emit(this.id().toString());
    }

}
