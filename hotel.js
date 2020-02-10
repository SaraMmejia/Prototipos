/*Hotel

1. Escribe una función constructora llamada `Room` que recibe un número e inicializa un atributo llamado `number`. También debería inicializar un atributo llamada `available` con el valor de `true` y el atributo `guests` con el valor `0`.

```javascript
var r1 = new Room(101);
r1.number; // 101
r1.available; // true
r1.guests; // 0 */ 

class Hotel{
	constructor(hotelRooms){
		this.hotelRooms = hotelRooms;
		this.rooms = [];
		for(let i = 1; i <= this.hotelRooms; i++){
			this.rooms.push(new Room(i));
		};
	}

	checkin(number,guestsNum = 1){
		if(number > 0 && number <= this.hotelRooms){
			if (this.rooms[number-1].available === true){
				this.rooms[number-1].available = false;
				this.rooms[number-1].guests = guestsNum;
				return true;
			} else {
				return false;
			}; 
		} else {
			return false;
		};
	};

	checkout(number){
		if(number > 0 && number <= this.hotelRooms){
			if (this.rooms[number-1].available === false){
				this.rooms[number-1].available = true;
				this.rooms[number-1].guests = 0;
				return true;
			} else {
				return false;
			};
		} else {
			return false;
		};
	};

	getAvailableRooms(){
		return this.rooms.filter(elem => elem.available === true);
	};

	getOccupiedRooms(){
		return this.rooms.filter(elem => elem.available === false);
	};

};

module.exports = {Room, Hotel};

