import { style } from "@angular/animations";


export const swiperight = [
  style({ opacity: 1 }),
  style({ transform: 'translate3d(200%, 0, 0) rotate3d(0, 0, 1, 120deg)', opacity: 0 }),
]

export const swipeleft = [
  style({ opacity: 1 }),
  style({ transform: 'translate3d(-200%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: 0 }),
]
export interface User {
  userImage: string,
  name: string,
  age: string,
  height: string,
  language: string,
  caste: string,
  state: string,
  city: string,
  country: string,
  Education: string,
  profession: string,
  zodiac_star: string,
  Religion: string
}