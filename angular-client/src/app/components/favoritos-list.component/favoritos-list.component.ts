import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FavoritoService } from '../../services/favorito.service';
import { Favorito } from '../../models/favorito';


@Component({
    selector: 'favoritos-list',
    templateUrl: './favoritos-list.component.html',
    styleUrls: ['./favoritos-list.component.css'],
    providers: [FavoritoService]
})
export class FavoritosListComponent implements OnInit {
    public title: string;
    public favoritos: Favorito[];
    public errorMessage: any;
    constructor(private _favoritoService: FavoritoService) {
        this.title = 'Listado de marcadores:';
    }

    ngOnInit() {
        console.log("FavoritosListComponent cargado!!");
        this._favoritoService.getFavoritos().subscribe(
            result => {
                console.log(result);
                this.favoritos = result.favoritos;
            },
            error => {
                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    alert('Error en la petición');
                }
            }
        );
    }

}
