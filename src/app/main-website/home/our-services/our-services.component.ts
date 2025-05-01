import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
  cards = [
    {
      title: 'Prepaid Cards',
      img: 'assets/our-services/prepaid_cards.png'
    },
    {
      title: 'API For Developers',
      img: 'assets/api_for_developers.png'
    },
    {
      title: 'Merchant Acquisition Platform for Bank',
      img: 'assets/our-services/merchant_aquisition_platform.png'
    },
    {
      title: 'Payout Links',
      img: 'assets/our-services/gencash_payout_links.png'
    },
    {
      title: 'Payment Collection',
      img: 'assets/our-services/payment_collection.png'
    }
  ];

  // cards = [
  //   {
  //     title: 'Prepaid Cards',
  //     img: 'assets/prepaid_card.png' // Use your local or uploaded image path
  //   },
  //   {
  //     title: 'API For Developers',
  //     img: 'assets/api_for_developers.png'
  //   },
  //   {
  //     title: 'Merchant Acquisition Platform for Banks',
  //     img: 'assets/merchant_acquisition.png'
  //   }
  // ];
  
}
