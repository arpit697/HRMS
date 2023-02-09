import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { CONTENT_TYPE, MAT_DIALOG_RESPONSE } from 'src/app/constant/enums';
import { FormatDatePipe } from 'src/app/pipes/date/format-date.pipe';
import { ContentTypePipe } from 'src/app/pipes/content-type/content-type.pipe';
import { SafePipe } from 'src/app/pipes/safe/safe.pipe';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TooltipPopupComponent } from 'src/app/modules/common/components/tooltip-popup/tooltip-popup/tooltip-popup.component';

@Directive({
  selector: '[appTooltipInfo]'
})
export class TooltipInfoDirective {

  @Input('appTooltipInfo') appTooltipInfo;
  @Input() placement: string = 'top';
  @Input() delay: number = 300;

  @Input() grabClass:string;
  @Input() self:boolean = false;


  tooltip: HTMLElement;
  offset = 10;

  

  constructor(

    private el: ElementRef,
    private renderer: Renderer2,
    private datePipe: FormatDatePipe,
    private contentTypePipe: ContentTypePipe,
    private router: Router,
    private dialog: MatDialog
  ) { }


  @HostListener('click',['$event']) onClick(event) {
    // if (!this.tooltip) { this.show(); }
    if(event.target.classList.contains('cross-icon')){
      this.onMouseLeave()
      return
    }


  


    if(this.self){
      this.renderer.addClass(this.el.nativeElement, 'border-hightlight');
    }else{
      this.renderer.addClass(this.el.nativeElement.lastChild, 'border-hightlight');
    }
    if(window.innerWidth <=768){
      this.openToolTipPopup()
      return;
    }
    this.renderer.addClass(this.el.nativeElement.firstChild, 'show');

  }

  @HostListener('mouseleave',['$event']) onMouseLeave() {

    this.renderer.removeClass(this.el.nativeElement.firstChild, 'show');
    if(this.self){
      this.renderer.removeClass(this.el.nativeElement, 'border-hightlight');
    }else{
      this.renderer.removeClass(this.el.nativeElement.lastChild, 'border-hightlight');
    }

    // if (this.tooltip) { this.hide(); }
  }



  openToolTipPopup(){
    const diaolog = this.dialog.open(TooltipPopupComponent, {
      width:"520px",
      height:"360px",
      autoFocus:false,
      maxHeight:"360px",
      data:this.appTooltipInfo
    })

    diaolog.afterClosed().subscribe(res=>{
      if(res === MAT_DIALOG_RESPONSE.CLOSE){
        this.onMouseLeave()
      }
    })
  }

  show() {
    this.create();
    this.setPosition();
    this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
  }

  hide() {
    this.renderer.removeClass(this.tooltip, 'ng-tooltip-show');
    this.renderer.removeChild(document.body, this.tooltip);
    this.tooltip = null;
  }

  create() {
    this.tooltip = this.renderer.createElement('div');
    const dateValue = this.datePipe.transform(this.appTooltipInfo.createdAt)
    const duration =  this.appTooltipInfo.moduleName ==='SERIESCONTENT' ? `${this.appTooltipInfo.duration} mins` : `${this.appTooltipInfo.minduration} - ${this.appTooltipInfo.maxduration} mins` ;
    const contentType = this.contentTypePipe.transform(this.appTooltipInfo.contenttype, "contentLabel");
    let imageSrc;
    let description:any  = this.appTooltipInfo.resourceData && this.appTooltipInfo.resourceData.length ? this.appTooltipInfo.resourceData[0].shortdesc : this.appTooltipInfo.postcontent;

    if(this.appTooltipInfo.contenttype === CONTENT_TYPE.IMAGE){
      imageSrc = "assets/images/icons/book-icon.svg";
      // htmlString.concat(`<img src="assets/images/icons/book-icon.svg" alt="Icon" />`)
    }
     if(this.appTooltipInfo.contenttype === CONTENT_TYPE.VIDEO){
       imageSrc = "assets/images/icons/video.svg";
      // htmlString.concat(`<img  src="assets/images/icons/video.svg" alt="Icon" />`)
    }if(this.appTooltipInfo.contenttype === CONTENT_TYPE.QUESTION){
      imageSrc = "assets/images/icons/graduation-cap.svg";
      // htmlString.concat(`<img   src="assets/images/icons/graduation-cap.svg" alt="Icon" />`)
    }


    let htmlString =  `<div><div class="hover-content">
    <div class="top-section">
      <h3>${this.appTooltipInfo.title}</h3>
    </div>
    <div class="sub-info">
      <div class="top-info">
        <div class="book-icon">
        <img
              src=${imageSrc}
              alt="Icon"
            />
        <span class="small-content">${dateValue} | ${duration} ${contentType}  </span>
        </div>
      </div>
    </div>
    <div class="content-description"> <p id="description"  class="ck-content description-tooltip"></p></div>
     <div class="btn-wrap">
        <button id="btn" type="button" class="primary-btn">
           Let's Go
        </button>
      </div>
    </div></div>`;




    this.tooltip.innerHTML = htmlString;

    let descElem = this.tooltip.getElementsByClassName('description-tooltip');
    descElem[0].innerHTML = description;

    // this.tooltip.querySelector('#btn').addEventListener('click',this.goToDetails.bind(this))
    

    this.renderer.appendChild(document.body, this.tooltip);
    // this.renderer.appendChild(this.el.nativeElement, this.tooltip);

    this.renderer.addClass(this.tooltip, 'ng-tooltip');
    this.renderer.addClass(this.tooltip, `ng-tooltip-${this.placement}`);

    // delay 설정
    this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);
  }

  setPosition() {
    // 호스트 요소의 사이즈와 위치 정보
    const hostPos = this.el.nativeElement.getBoundingClientRect();

    // tooltip 요소의 사이즈와 위치 정보
    const tooltipPos = this.tooltip.getBoundingClientRect();

    // window의 scroll top
    // getBoundingClientRect 메소드는 viewport에서의 상대적인 위치를 반환한다.
    // 스크롤이 발생한 경우, tooltip 요소의 top에 세로 스크롤 좌표값을 반영하여야 한다.
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top, left;

    if (this.placement === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.placement === 'bottom') {
      top = hostPos.bottom + this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.placement === 'left') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset;
    }

    if (this.placement === 'right') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset;
    }

    // 스크롤이 발생한 경우, tooltip 요소의 top에 세로 스크롤 좌표값을 반영하여야 한다.
    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos +50}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }

}
