export class TravelFare {
	totalTravelFare(baseFare, taxPercentage) {
		var finalFare;
		finalFare = baseFare * (1 + taxPercentage / 100);
		return finalFare;
	}
}

export class TravelBooking {
	bookTravel(fare) {
		if (fare <= 9000) {
			console.log("Your fare is " + fare);
		}
		if (fare > 9000) {
			fare = fare - 500
			console.log("Your discounted fare is " + fare);
		}
		return fare;
	}
}