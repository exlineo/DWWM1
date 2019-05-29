import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from 'src/app/services/etudiants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {

  index:number = 0;

  constructor(public etuService:EtudiantsService, private aroute:ActivatedRoute) {}
  
  ngOnInit() {
    this.aroute.params.subscribe(params => {
      console.log(params);
      this.index = params.index;
    })
  }

}
