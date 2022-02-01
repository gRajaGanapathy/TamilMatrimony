import { style } from "@angular/animations";

export const profile_details = [
  {
    "userImage": "assets/images/user1.jpeg",
    "name": "nazriya",
    "age": "29 yrs,",
    "height": "5.2'ft,",
    "language": "tamil",
    "caste": "nair,",
    "state": "Tamil Nadu",
    "city": "chennai,",
    "country": "india",
    "Education": "MBBS,",
    "profession": "Doctor,",
    "zodiac_star": "Aries,",
    "Religion": "Hindu"
  },
  {
    "userImage": "assets/images/user2.jpeg",
    "name": "andera",
    "age": "32 yrs,",
    "height": "5.7'ft,",
    "language": "tamil",
    "caste": "Brahmins,",
    "state": "Tamil Nadu",
    "city": "chennai,",
    "country": "india",
    "Education": "MBBS,",
    "profession": "Doctor,",
    "zodiac_star": "Taurus,",
    "Religion": "Hindu"
  },
  {
    "userImage": "assets/images/user3.jpeg",
    "name": "Nayanthara",
    "age": "45 yrs,",
    "height": "5.9'ft,",
    "language": "tamil",
    "caste": "Kshatriya,",
    "state": "Tamil Nadu",
    "city": "chennai,",
    "country": "india",
    "Education": "MBBS,",
    "profession": "Doctor,",
    "zodiac_star": "Gemini,",
    "Religion": "Hindu"
  },
  {
    "userImage": "assets/images/user4.jpeg",
    "name": "angel",
    "age": "23 Yrs,",
    "height": "5.2'ft,",
    "language": "tamil",
    "caste": "Vaisya,",
    "state": "Tamil Nadu",
    "city": "chennai,",
    "country": "india",
    "Education": "MBBS,",
    "profession": "Doctor,",
    "zodiac_star": "Leo,",
    "Religion": "Hindu"
  },
  {
    "userImage": "assets/images/user5.jpeg",
    "name": "liviya",
    "age": "23 Yrs,",
    "height": "5.2'ft,",
    "language": "tamil",
    "caste": "Sudras,",
    "state": "Tamil Nadu",
    "city": "chennai,",
    "country": "india",
    "Education": "MBBS,",
    "profession": "Doctor,",
    "zodiac_star": "Virgo,",
    "Religion": "Hindu"
  },
  {
    "userImage": "assets/images/user6.jpeg",
    "name": "keerthana",
    "age": "23 Yrs,",
    "height": "5.2'ft,",
    "language": "tamil",
    "caste": "nair,",
    "state": "Tamil Nadu",
    "city": "chennai,",
    "country": "india",
    "Education": "MBBS,",
    "profession": "Doctor,",
    "zodiac_star": "Libra,",
    "Religion": "Hindu"
  },
  {
    "userImage": "assets/images/user7.jpeg",
    "name": "swathi",
    "age": "23 Yrs,",
    "height": "5.2'ft,",
    "language": "tamil",
    "caste": "Chamar,",
    "state": "Tamil Nadu",
    "city": "chennai,",
    "country": "india",
    "Education": "MBBS,",
    "profession": "Doctor,",
    "zodiac_star": "Aquarius,",
    "Religion": "Hindu"
  },
  {
    "userImage": "assets/images/user8.jpeg",
    "name": "swathi",
    "age": "23 Yrs,",
    "height": "5.2'ft,",
    "language": "tamil",
    "caste": "nair,",
    "state": "Tamil Nadu",
    "city": "chennai,",
    "country": "india",
    "Education": "MBBS,",
    "profession": "Doctor,",
    "zodiac_star": "Sagittarius,",
    "Religion": "Hindu"
  },
  {
    "userImage": "assets/images/user9.jpeg",
    "name": "swathi",
    "age": "23 Yrs,",
    "height": "5.2'ft,",
    "language": "tamil",
    "caste": "Kshatriya,",
    "state": "Tamil Nadu",
    "city": "chennai,",
    "country": "india",
    "Education": "MBBS,",
    "profession": "Doctor,",
    "zodiac_star": "Capricorn,",
    "Religion": "Hindu"
  },
  {
    "userImage": "assets/images/user10.jpeg",
    "name": "swathi",
    "age": "23 Yrs,",
    "height": "5.2'ft,",
    "language": "tamil",
    "caste": "nair,",
    "state": "Tamil Nadu",
    "city": "chennai,",
    "country": "india",
    "Education": "MBBS,",
    "profession": "Doctor,",
    "zodiac_star": "Aquarius,",
    "Religion": "Hindu"
  },
];

export const swiperight = [
  style({ opacity: 1 }),
  style({ transform: 'translate3d(200%, 0, 0) rotate3d(0, 0, 1, 120deg)', opacity: 0 }),
]

export const swipeleft = [
  style({ opacity: 1 }),
  style({ transform: 'translate3d(-200%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: 0 }),
]
export interface User {
  id: number;
  picture: string;
  age: number;
  name: string;
  gender: string;
}