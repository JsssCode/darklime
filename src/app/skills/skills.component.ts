import { Component, OnInit } from '@angular/core';
import { SkillItem } from './../data_backend/skill_model';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  skills: SkillItem[];
  widthVar = '10%';

  constructor(
    private skillsService: SkillsService
  ) { }

  ngOnInit() {
    this.getSkills()
  }
  getSkills(){
    this.skillsService
        .getSkillItems()
        .then(skills =>this.skills = skills);
    
  }
}
