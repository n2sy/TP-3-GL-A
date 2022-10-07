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

  onConvert() {
    let chaine = `USD${this.valueCurrency}`;
    console.log(chaine);
    this.exchange.getAllCurrencies().subscribe({
      next: (data) => {
        console.log(data['quotes'][chaine]);
        this.message = `Today, 1 USD worths ${data['quotes'][chaine]} ${this.valueCurrency}`;
        this.ShowMessage = true;
      },
    });
  }
}
