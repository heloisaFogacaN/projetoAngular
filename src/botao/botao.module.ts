import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
import { Button } from "protractor";
import { BotaoComponent } from "./botao.component";



@NgModule({
    imports: [
        CommonModule
    ], 
    declarations: [
        BotaoComponent
    ], 
    exports: [
        BotaoComponent
    ]
    
    
})
export class BotaoModule{}
