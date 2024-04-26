import { Component, Input } from '@angular/core';
import { CmmUtilsService } from 'src/app/common/services/utils.service';

@Component({
  selector: 'cmp-cmm-product-detail-v1',
  templateUrl: './cmm-product-detail-v1.component.html',
  styleUrls: ['./cmm-product-detail-v1.component.scss']
})
export class CmmProductDetailV1Component {

  @Input() product: any

  @Input() currency: string = 'REF.'

  constructor(
    public utilsService: CmmUtilsService
  ){}

}
