import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../exchange.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})
export class CurrencyPage implements OnInit {
  tabCurrencies = ['TND', 'EUR', 'GBP', 'EGP', 'CNY', 'JPY'];
  message = '';
  ShowMessage = false;
  valueCurrency = 'TND';
  constructor(private exchange: ExchangeService) {}

  ngOnInit() {}

  onConvert(curr2) {
    let chaine = `USD${curr2}`;
    console.log(chaine);
    this.exchange.getAllCurrencies().subscribe({
      next: (data) => {
        console.log(data['quotes'][chaine]);
        this.message = `Today, 1 USD worths ${data['quotes'][chaine]} ${curr2}`;
        this.ShowMessage = true;
      },
    });
  }

  nidhal(c) {
    console.log('Nidhal', c);
  }
}
