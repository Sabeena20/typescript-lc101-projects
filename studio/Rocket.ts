            import { Cargo } from './Cargo';
            import { Astronaut } from './Astronaut';
            import { Payload } from './Payload'
            export class Rocket{
            name:string;
            totalCapacityKg:number;
            cargoItems:Cargo[];
            astronauts:Astronaut[];
            constructor(name:string,totalCapacityKg:number){
                this.name = name;
                this.totalCapacityKg = totalCapacityKg;
            }
            sumMass( items:Payload[]):number{
                let sum =  0;
                items.forEach(element => {
                    sum =+ element.massKg
                });
                return sum;
            }
            currentMassKg():number{
                return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
                }
            canAdd(item: Payload): boolean{
                if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
                    return true;
                }
    }
            addCargo(cargo: Cargo): boolean{
                if(this.canAdd() == true){
                    this.cargoItems.push(cargo);
                    return true;
                } else {
                        return false;
                    }

                }
            addAstronaut(astronaut: Astronaut): boolean{
                if(this.canAdd() == true){
                    this.astronauts.push(astronaut);
                    return true;
                    } else {
                        return false;
                    }
            }
            }

             