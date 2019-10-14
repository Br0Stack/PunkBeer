import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

@Component({
  selector: 'ngbd-modal-options',
  templateUrl: './modal-options.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal-options.scss'],
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class NgbdModalOptions {
  closeResult: string;

  constructor(private modalService: NgbModal, public dataModal: AppComponent) {}

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) { this.modalService.open(content, {size: 'xl'}); }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    //   let details = this.dataModal.selectedBeer
    //   console.log(details)
    this.modalService.open(longContent, { scrollable: true });
  }
}