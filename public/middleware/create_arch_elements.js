// var elements = require('../js/arch_elements.js');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

// Function to create various architecture elements

class Aggregate {
    constructor(name, role, location, benefits){
        this.name = name;           // unique id
        this.level = 1;         // hierarchy level
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

const create_agg = function (req,res,next){
    console.log('create_agg invoked')
    data = req.body;
    var agg = new Aggregate(data.name, data.role, data.location, data.benefits)
    console.log(agg);
    MongoClient.connect(url, function(err, client){
        if(err) throw err;
        console.log('Database available');
        var db = client.db('arc_elements');
        // let collections;
        console.log(db.admin().listDatabases());

        // if (collections.includes('aggregates')){
            db.collection('aggregates').insertOne(agg, function(err, res){
                if (err) throw err;
                console.log('Aggregate '+ agg.name +' inserted')
            })
        //     })
        // }else{
        //     db.createCollection("aggregates", function(err, res){
        //         if (err) throw err;
        //         console.log('collection aggregates available')
        //         })
            
        //     db.collection('aggregates').insertOne(agg, function(err, res){
        //         if (err) throw err;
        //         console.log('Aggregate '+ agg.name +' inserted')
        //     })
        // }
        
        client.close();
        next();
     });
};

module.exports = create_agg;