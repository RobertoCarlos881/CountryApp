import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country[];

  constructor( 
    private activateRoute: ActivatedRoute, 
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorAlpha(id) ),
        tap(console.log)
      )
      .subscribe( pais => {
        this.pais = pais;
      });

    //this.activateRoute.params
    //  .subscribe( ({ id }) => {
    //    console.log(id);
    //    
    //    this.paisService.getPaisPorAlpha(id).subscribe( pais => {
    //      console.log(pais);
    //      
    //    })
    //  });
  }

}
