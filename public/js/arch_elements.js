//-------------------- Aggregate ------------------------------
class Aggregate {
    constructor(name, role, location, benefits){
        this.name = name;           // unique id
        this.level = level;         // hierarchy level
        this.role = role;           // DTA role
        this.location = location;   // Cloud or local
        this.benefits = benefits;   // Desired benefits
        this.links = [];            // Connected DTIs/DTAs
        this.data = [];             // Available data
        this.linked_types = [];     // Types of DTIs connected
    }

    create_link(DT){
        this.links.push(DT.name)
        let data = {"type":DT.type, "data":DT.data}
        if(this.linked_types.includes(DT.role)){
            console.log('new link recorded');
        }else{
            this.linked_types.push(DT.type);
            this.data.push(data);
            console.log('New link recorded and new data available');
        }
    }
}


//-------------------- Instance ------------------------------
class instance {
    constructor(PT, name, role){
        this.name = name;
        this.PT = PT; //PT = physical twin
        this.links = [];
        this.role = role;
    }

    data(){
        return this.data;
    }

    data_avail(data){
        this.data = data;
    }
}

//-------------------- Database ------------------------------
class database{
    constructor(){

    }
}

//-------------------- Communications ------------------------------
class comm_channel{
    constructor(){

    }
}

//-------------------- Cloud ------------------------------
class cloud_platform{
    constructor(){

    }
}