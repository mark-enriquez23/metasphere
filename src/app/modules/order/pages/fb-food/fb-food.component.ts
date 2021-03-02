import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fb-food',
  templateUrl: './fb-food.component.html',
  styleUrls: ['./fb-food.component.scss']
})
export class FbFoodComponent implements OnInit {

  items = [
    {
      name: 'English Breakfast',
      description: 'Organic Bacon, Scrambled Eggs, Tomatoes, and Toast',
      image: 'assets/images/order_-_f_b_-_food/u259.jpg',
      price: 12,
      quantity: 0
    },
    {
      name: 'Organic Musli',
      description: 'Musli with Strawberries, Raisins, and Crunchy flakes',
      image: 'assets/images/order_-_f_b_-_food/u259.jpg',
      price: 8,
      quantity: 0
    },
    {
      name: 'English Breakfast',
      description: 'Organic Bacon, Scrambled Eggs, Tomatoes, and Toast',
      image: 'assets/images/order_-_f_b_-_food/u259.jpg',
      price: 12,
      quantity: 0
    },
    {
      name: 'Organic Musli',
      description: 'Musli with Strawberries, Raisins, and Crunchy flakes',
      image: 'assets/images/order_-_f_b_-_food/u259.jpg',
      price: 8,
      quantity: 0
    },
    {
      name: 'English Breakfast',
      description: 'Organic Bacon, Scrambled Eggs, Tomatoes, and Toast',
      image: 'assets/images/order_-_f_b_-_food/u259.jpg',
      price: 12,
      quantity: 0
    },
    {
      name: 'Organic Musli',
      description: 'Musli with Strawberries, Raisins, and Crunchy flakes',
      image: 'assets/images/order_-_f_b_-_food/u259.jpg',
      price: 8,
      quantity: 0
    },
    {
      name: 'English Breakfast',
      description: 'Organic Bacon, Scrambled Eggs, Tomatoes, and Toast',
      image: 'assets/images/order_-_f_b_-_food/u259.jpg',
      price: 12,
      quantity: 0
    },
    {
      name: 'Organic Musli',
      description: 'Musli with Strawberries, Raisins, and Crunchy flakes',
      image: 'assets/images/order_-_f_b_-_food/u259.jpg',
      price: 8,
      quantity: 0
    },
    {
      name: 'English Breakfast',
      description: 'Organic Bacon, Scrambled Eggs, Tomatoes, and Toast',
      image: 'assets/images/order_-_f_b_-_food/u259.jpg',
      price: 12,
      quantity: 0
    },
    {
      name: 'Organic Musli',
      description: 'Musli with Strawberries, Raisins, and Crunchy flakes',
      image: 'assets/images/order_-_f_b_-_food/u259.jpg',
      price: 8,
      quantity: 0
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}