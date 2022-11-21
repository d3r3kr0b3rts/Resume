import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  page:string = '';
  code:string = '';

  renderModal(){
    this.page = window.location.pathname.slice(1);
    this.page = this.page.charAt(0).toUpperCase() + this.page.slice(1)
    if(this.page == 'Profile'){
      this.code = `
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade my-3" data-bs-ride="carousel">
          <div>
            <h3>BMX</h3>
          </div>
          <div class="carousel-indicators">
            <button *ngFor="let img of imgs; let i = index" type="button" data-bs-target="#carouselExampleIndicators" attr.data-bs-slide-to="{{i}}" [ngClass]="{'active': i === 0}" attr.aria-current="{{i === 0 ? true : false}}" attr.aria-label="Slide {{i}}"></button>
          </div>
          <div class="carousel-inner">
            <ng-container *ngFor="let img of imgs; let i = index">
              <div class="carousel-item" [ngClass]="{'active': i === 0}">
                <a href="{{img}}" target="_blank">
                  <img src="{{img}}" class="d-block w-100" alt="..." >
                </a>
              </div>
            </ng-container>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="text-center">
          <p>Click an image to open in new tab</p>
        </div>
      `;
    }else if(this.page == 'Employment'){
      this.code = `
      <div *ngFor="let job of history | keyvalue; let i = index" class="py-3 border-info" [ngClass]="{'border-1, border-bottom': i < len}">
        <div *ngFor="let entry of job.value | keyvalue;">
          <ng-container *ngIf="!isArray(entry.value)">
            <div class="row">
              <div class="div col-5 col-sm-3 text-end">
                {{entry.key}} :
              </div>
              <div class="div col-7 col-sm-9">
                {{entry.value}}
              </div>
            </div>
          </ng-container>
          <ng-container *ngIf="isArray(entry.value)">
            <div class="row">
              <div class="col-5 col-sm-3 text-end">
                {{entry.key}} :
              </div>
              <div class="col-7 col-sm-9">
                <ul>
                  <li *ngFor="let row of entry.value | keyvalue;">{{row.value}}</li>
                </ul>
              </div>
            </div>
          </ng-container>
        </div>
      </div>
      `;
    }
  }
}