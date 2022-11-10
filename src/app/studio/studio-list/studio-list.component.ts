import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio-list',
  templateUrl: './studio-list.component.html',
  styleUrls: ['./studio-list.component.scss']
})
export class StudioListComponent implements OnInit {
  public studioList: any[] = [
    {
      id:1,
      name:"Magical Studio",
      description: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      imageSrc:"../../assets/images/stuidio1.png"
    }, 
    {
      id:2,
      name:"Classic Studio",
      description: "2972 Westheimer Rd. Santa Ana, Illinois 85486  ",
      imageSrc:"../../assets/images/studio2.png"
    },
    {
      id:3,
      name:"Imperial Studios",
      description: "3973 Westheimer Rd. Santa Ana, Illinois 85486  ",
      imageSrc:"../../assets/images/studio3.png"
    },
    {
      id:4,
      name:"Magical Studio",
      description: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      imageSrc:"../../assets/images/stuidio1.png"
    }, 
    {
      id:5,
      name:"Classic Studio",
      description: "2972 Westheimer Rd. Santa Ana, Illinois 85486  ",
      imageSrc:"../../assets/images/studio2.png"
    },
    {
      id:6,
      name:"Imperial Studios",
      description: "3973 Westheimer Rd. Santa Ana, Illinois 85486  ",
      imageSrc:"../../assets/images/studio3.png"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
