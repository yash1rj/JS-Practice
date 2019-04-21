import { TravelFare, TravelBooking } from "./fare.js";

var calFare = new TravelFare();
var newBooking = new TravelBooking();

var fare = calFare.totalTravelFare(10100, 20);

console.log("Total fare is " + fare);

newBooking.bookTravel(fare);