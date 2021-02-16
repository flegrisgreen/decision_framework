class aggregate {
    constructor(name, level, role, location, benefits){
        this.name = name;
        this.level = level;
        this.role = role;
        this.location = location;
        this.benefits = benefits;
        this.links = [];
        this.data = [];
        this.linked_types = [];
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
class database{
    constructor(){

    }
}

class comm_channel{
    constructor(){

    }
}

class cloud_platform{
    constructor(){

    }
}