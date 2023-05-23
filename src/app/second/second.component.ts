import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit{

  
  constructor(private route: ActivatedRoute,
              private router: Router){}
  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      console.log(data);
    });

    console.log(this.route.snapshot.params);

    this.route.queryParams.subscribe((data) => {
      console.log(data);
    });


    console.log(this.route.snapshot.queryParams)
  }


  routePage = () => {
    this.router.navigate(['/third'], {queryParams: {id:1,empID:1}});
  }

  toFirst = () => {
    this.router.navigate(['/second/firstchild']);
  }

  
  toSecond = () => {
    this.router.navigate(['/second/secondchild']);
  }
}
