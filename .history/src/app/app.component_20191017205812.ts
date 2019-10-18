import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
//import { trigger, animate, style, transition, keyframes } from '@angular/animations';
import { TestService } from './test.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { FilterPipeModule } from 'ngx-filter-pipe';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit, OnInit {
  title = 'BrewDog Beer Catalog';
    limitNum: number = 20;
    cardObjects: Array<any> = [];
    favArray: Array<any> = [];
    selectedBeer: any;
    userFilter: any = { name: '' };
    
  constructor(private testService: TestService, public sanitizer: DomSanitizer, public toastr?: ToastrService) {}
ngOnInit(){
}
ngAfterViewInit(){
    this.getRestItems();
    console.log(this.cardObjects)

//Favorites switch controls
// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
}
  getRestItems(): any {
    this.testService.getAll()
      .subscribe(
        beerData => {
          beerData.forEach(element => {
              this.cardObjects.push(element);
          });
  });
}
starClicked(element){
    const starIcon = element.target//document.getElementById('starIcon');
    if(starIcon.innerHTML === 'star_border'){
    starIcon.innerHTML = 'star';
    starIcon.style.color = 'goldenrod';
    this.favArray.push(element.path[1]);
    this.toastr.success("BrewDog's " + element.path[1].childNodes[2].innerText + ' added to favorites!');
    } else if (starIcon.innerHTML === 'star') {
        starIcon.innerHTML = 'star_border';
        starIcon.style.color = 'black';
        delete this.favArray[this.favArray.indexOf(element.path[1])];
        var temp = [];
        for(let i of this.favArray){
            i && temp.push(i); // copy each non-empty value to the 'temp' array
}
    this.favArray = temp;
    this.toastr.info("BrewDog's " + element.path[1].childNodes[2].innerText + ' removed from favorites!');
    //element.classList.remove("newFav");
}
console.log(this.favArray);
}
getBeerDetails(beer){
    let beerName = beer.path[3].childNodes[2].innerText;
    this.cardObjects.forEach(element => {
        if(element.name === beerName){
            this.selectedBeer = element;
        }
    });
    console.log(this.selectedBeer)
}
filterSelection() {
    this.favArray.forEach(element => {
        console.log(element)
        if (!element.getElementsByClassName('star')){
            element.setAttribute('style', 'display:hidden');
        }
    }); 
    }

}