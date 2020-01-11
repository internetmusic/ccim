// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * ccim Component
 */
@Component({
    selector: 'app-ccim',
    templateUrl : './ccim.component.html',
    styleUrls: ['./ccim.component.css']
})
export class CcimComponent {

    constructor(
        private location: Location
        ) {

    }
}
