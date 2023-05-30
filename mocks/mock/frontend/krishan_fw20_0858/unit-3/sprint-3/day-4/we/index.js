class Vehicle{
    constructor(type,rn){
        this.type=type;
        this.regNumber=rn;
    }
}

class Car extends Vehicle{
    constructor(type,rn){
        super(type,rn);
    }
    
}
class Truck extends Vehicle{
    constructor(type,rn){
        super(type,rn);
    }
    
}
class Bike extends Vehicle{
    constructor(type,rn){
        super(type,rn);
    }
    
}

//do the same things for trucks and bike

//slot -> florr -> parking lot
let c1= new Bike('car','hr13')

console.log(c1);

class Slot{
    constructor(number,type) {
        this.number=number;
        this.type=type;
        this.isbooked=false;// we need to change based on booking   
    }

    //which is the value we need to set? -> isbooked

    get _isbooked(){
        return this.isbooked;
    }

    set _isbooked(bool){
        this.isbooked=bool;
    }
}

class Parkingfloor{
    constructor(floornumber,maxSlots) {
        this.floornumber=floornumber;
        this.parkingspots=[];

        for(let x=0;x<maxSlots;x++){
            if(x===0){
                this.parkingspots.push(new Slot(x,'Truck'))
            }
            else if(x===1){
                this.parkingspots.push(new Slot (x,'Bike'));

            }
            else{
                this.parkingspots.push(new Slot (x,'Car'))
            }
        }
    }


}

class ParkingLot{
    constructor(numberoffloors) {

        this.numberoffloors=numberoffloors; 
        this.floors=[];

        for(let i=0;i<numberoffloors;i++){
            this.floors.push(new ParkingLot(i,numberoffloors))
        }
    }

    findSlot(type){
        for(let i=0;i<this.numberoffloors;i++){
            for(let slot of this.floors[i].parkingspots){

                if(slot.type===type && !slot._isbooked){
                    return {floornumber:i,found_slot:slot};
                }

            }
        }
    }

    parkVehicle(Vehicle){
        //
        let slot=this.findSlot(Vehicle.type)
        console.log(slot);
        slot.found_slot._isbooked=true;
    }
}
// class Ticket{

// }

function park(){
    let pl=new ParkingLot(3);

    if(type==='Car'){
        var c1=new Car(name,regnumber)
    }
    
    pl.parkVehicle(c1)
}
let c=new Car('car','mh29')
let pf=new ParkingLot(3)
pf.parkVehicle(c)
