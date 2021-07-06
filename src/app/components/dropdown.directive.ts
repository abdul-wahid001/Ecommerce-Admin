import {Directive, HostListener, HostBinding} from '@angular/core';


@Directive({
    selector:'[applicationDropdown]',
    exportAs:'applicationDropdown'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}