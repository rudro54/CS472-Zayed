   function Vehicle(make, model, year, mileage){

     this.make=make;
     this.model=model;
     this.year=year;
     this.mileage=mileage;

   
}

Vehicle.prototype.drive = function(distance){this.mileage+=distance}
Vehicle.prototype.toString=function(){return this.year+this.make+this.model+this.mileage+"miles"}

Object.setPrototypeOf(Car.prototype,Vehicle.prototype)

 function Car(make, model, year, mileage, numDoors, speed, topSpeed){
	Vehicle.call(this, make, model, year, mileage) //super
  this.numDoors=numDoors;
  this.speed=speed;
  this.topSpeed=topSpeed;

}

Car.prototype.accelerate=function(){this.speed+=10}
Car.prototype.brake=function(){this.spee-=10}
Car.prototype.toString=function(){
	return  Vehicle.prototype.toString.call(this) + this.numDoors
}




let bmw = new Vehicle("amar","bmw",2025,1600)
console.log(bmw.mileage)
bmw.drive(34)
console.log(bmw.mileage)
bmw.toString();


let honda = new Car("abc","accord",2025,16000,4,70,250);
console.log(honda.numDoors)
