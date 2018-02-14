import { Component, OnInit } from '@angular/core';
import { Lion } from '../lion';

//Open the HeroesComponent class file and import the mock HEROES.
import { LionService } from '../lion.service';

@Component({
  selector: 'app-lions',
  templateUrl: './lions.component.html',
  styleUrls: ['./lions.component.css']
})
export class LionsComponent implements OnInit {
  //Add a heroes property to the class that exposes these heroes for binding.
  lions: Lion[];

  constructor(private lionService: LionService) { }

  ngOnInit() {
    this.getLions();
  }
  //If you neglect to subscribe(), the service will not send the delete request
  //to the server! As a rule, an Observable does nothing until something
  //subscribes!
  getLions(): void {
    this.lionService.getLions()
        .subscribe(lions => this.lions = lions);
  }

  add(name: string): void{
    name = name.trim();
    if(!name){return;}
    this.lionService.addLion({name} as Lion)
      .subscribe(lion => {
        this.lions.push(lion);
    });
  }

  delete(lion: Lion): void{
    this.lions = this.lions.filter(l => l !== lion);
    this.lionService.deleteLion(lion).subscribe();
  }
}
