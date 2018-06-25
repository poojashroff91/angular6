import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';

@Component({
  selector: 'follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {

  followers: any[];

  constructor(private service: FollowerService ) { }

  ngOnInit() {
    this.service.getAll().subscribe(followers => this.followers = followers);
  }

}
