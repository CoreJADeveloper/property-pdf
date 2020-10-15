import { Component, OnInit } from '@angular/core';

import { jsPDF } from "jspdf";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  property: any = {
    name: "58, EAST TOWERS",
    image: "assets/property.jpg",
    price: 592259,
    bedRooms: 4,
    currency: "€",
    features: [
      "Our bespoke Automated Valuation Model performs an indepth analysis",
      "Analyse expected Yield and Cashflow on any Buy2Let Investment",
      "Calculate your Return on Investment % on any Project using our Flip Analysis tool"
    ],
    rating: 5,
    propertyValuation:
    {
      avgPricePQM: 5875.58,
      valuationConfiedence: "high",
      solidPrice: 632000,
      rentalYield: "4%",
      priceChange: -67945
    },
    similarProperties: [
      {
        image: "https://lid.zoocdn.com/354/255/328ae21176e3c7495597f946b5ace1f15175c396.jpg",
        area: "Harrow, HA2",
        street: "Imperial Drive",
        address: "Imperial Drive, Harrow HA2",
        propertyType: "Semi-detached house",
        bedRooms: 4,
        listedOn: "13 Apr 2018",
        agentImage: "https://st.zoocdn.com/zoopla_static_agent_logo_(162943).png"
      },
      {
        image: "https://lid.zoocdn.com/354/255/ea5548faeed7b13431e289cf7920992f07702e36.jpg",
        area: "Pinner, HA5",
        street: "Wakehams Hill",
        address: "Wakehams Hill, Pinner HA5",
        propertyType: "Detached house",
        bedRooms: 5,
        listedOn: "06 Jun 2019",
        agentImage: "https://st.zoocdn.com/zoopla_static_agent_logo_(51105).jpeg"
      },
      {
        image: "https://lid.zoocdn.com/354/255/df8ae0095bc871338538040027965e111bc9f173.jpg",
        area: "Harrow, HA2",
        street: "North Harrow",
        address: "Lincoln Close, North Harrow, Middlesex HA2",
        propertyType: "Semi-detached bungalow",
        bedRooms: 2,
        listedOn: "06 Aug 2019",
        agentImage: "https://st.zoocdn.com/zoopla_static_agent_logo_(358212).png"
      }
    ],
    cashFlow: [
      {
        purchaseCosts: [
          {
            year: "Year1",
            cashflow: 10125,
            cashInDeal: 156278
          },
          {
            year: "Year2",
            cashflow: 10429,
            cashInDeal: 156278
          },
          {
            year: "Year3",
            cashflow: 10125,
            cashInDeal: 145849
          }
        ],
        costsBreakdown: [
          {
            year: "Year1",
            price: 14000
          },
          {
            year: "Year2",
            price: 12000
          },
          {
            year: "Year3",
            price: 10000
          }
        ]
      }
    ],
  }

  constructor() { }

  ngOnInit() {

  }

  generatePDF() {
    let doc = new jsPDF();

    doc.setFontSize(22);
    doc.text('Property Deals Insight', 15, 25);
    doc.line(15, 30, 100, 30);

    doc.addImage(this.property.image, "JPEG", 15, 40, 180, 150);

    doc = this._setPropertyInformation(doc);
    doc.addPage();
    doc = this._setPropertyValuation(doc, 15, 25);

    doc.save("a4.pdf");
  }

  private _setPropertyInformation(doc: any): any {
    doc.setFontSize(16);
    doc.text(this.property.name, 15, 220);
    doc.setFontSize(12);
    doc.text(`Bed rooms: ${this.property.bedRooms}, Price: ${this.property.price}`, 15, 230);
    doc.circle(15, 240, 1);
    doc.text(this.property.features[0], 18, 241);
    doc.circle(15, 250, 1);
    doc.text(this.property.features[1], 18, 251);
    doc.circle(15, 260, 1);
    doc.text(this.property.features[2], 18, 261);

    return doc;
  }

  private _setPropertyValuation(doc: any, initPointX: number, initPointY: number): any {
    doc.setFontSize(16);

    doc.text('Property Valuation', initPointX, initPointY);

    initPointY = initPointY + 10;

    doc.setFontSize(12);

    doc.text(`Average Price PQM: ${this.property.propertyValuation['avgPricePQM']}`, initPointX, initPointY);

    initPointY = initPointY + 10;

    doc.text(`Average Price PQM: ${this.property.propertyValuation['valuationConfiedence']}`, initPointX, initPointY);

    return doc;
  }
}
