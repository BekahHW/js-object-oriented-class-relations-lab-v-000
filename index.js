let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;


class Driver {
  constructor(name){
    this.name = name;
    this.id  = ++driverId;
    store.drivers.push(this);
}
  trips() {
    return store.trips.filter(trip =>
  {
        return trip.driverId == this.id
      }
)
  }
  passengers() {
        return this.trips().map(trip =>
        {return trip.passenger()
        })
        // store.passengers.filter(passenger => {
        //         return passenger.driverId === this.id;
        //     }
        // );
    }
}

//
class Passenger {
  constructor(name, driver){
    this.name = name
    this.id = ++passengerId
    // if (driver) {
    //        this.driverId = driver.id;
    //    }
       store.passengers.push(this);
  }
  trips() {
        return store.trips.filter(trip => {
                return trip.passengerId == this.id;
            }
        );
    }

drivers() {
      return this.trips().map(trip =>
      {return trip.driver()
      })
}


}

class Trip {
  constructor(driver, passenger){
      this.id = ++tripId
      this.driverId = driver.id
      this.passengerId = passenger.id
      store.trips.push(this);

  }
  passenger() {
        return store.passengers.find(passenger => {
                return this.passengerId === passenger.id;
            }
        );
    }

    driver() {
      return store.drivers.find(driver =>
        {
          return this.driverId === driver.id
        }
      )
    }
}
