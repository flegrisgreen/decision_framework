//Functions
const ingestion = {function:"ingestion", 
                    function_class:{type:"Common", agg:"pre-storage and post-storage"},
                    requirements:["Allow for multiple data sources",
                    "Allow for multiple data formats", 
                    "Allow for differing degrees of structure"],
                    methods:[]
                    };

const reduction = {function:"reduction", 
                    function_class:{type:"Common", agg:"pre-storage and post-storage"},
                    requirements:["Perform data reduction so that only necessary data is included"],
                    methods:["descriptive statistics", "selection", "conditional data-logging"]
                    };

const communication = {function:"communication", 
                    function_class:{type:"Common", agg:"pre-storage only"},
                    requirements:["Allow for communication with specified performance parameters"],
                    methods:["Fire-forget", "request-response", "publish-subscribe"]
                    };

const storage = {function:"storage", 
                    function_class:{type:"Common", agg:"pre-storage only"},
                    requirements:["Provide short-term storage for high value data or data that is required for local processing"],
                    methods:["SQL","NoSQL"]
                    };

const analytics = {function:"analytics", 
                    function_class:{type:"special", agg:"pre-storage and post-storage"},
                    requirements:["Requirements depend on the methods being employed"],
                    methods:["Dimentionality reduction","Descriptive statistics", "Edge analytics"]
                    };

const control = {function:"control", 
                    function_class:{type:"special", agg:"pre-storage and post-storage"},
                    requirements:["Requirements depend on the methods being employed"],
                    methods:["Rule-based decision-making", "User command propagation"]
                    }; 
                    
const cleaning = {function:"cleaning", 
                    function_class:{type:"special", agg:"pre-storage and post-storage"},
                    requirements:["Requirements depend on the methods being employed"],
                    methods:["Missing value handling", "out-of-range value handling",
                            "impossible data combination handling",
                            "Uncertainty flagging", "cross-validation"]
                    };
                    
const conformance = {function:"conformance", 
                    function_class:{type:"special", agg:"pre-storage and post-storage"},
                    requirements:["Convert data to correct data format", "Convert data to correct structure",
                    "convert data to correct units"],
                    methods:[]
                    };
                    
const coordination = {function:"coordination", 
                    function_class:{type:"special", agg:"pre-storage only"},
                    requirements:["Connect to the correct repository in the correct cloud platform"],
                    methods:[]
                    };
                    
// Note that conflict resolution is not mentioned here. 
// Latency advantages of pre-storage agg also not mentioned yet
const agg_functions = [ingestion, reduction, communication, storage, analytics, control, cleaning,
                    conformance, coordination];                   
// Benefits
const data_q = 
    {benefit: "Improved data quality",
    description: "Data quality can be improved through data homogenising and cleaning. For pre-storage aggregate this can be done real-time.",
    required_functions:[ingestion, reduction, communication, storage, analytics, cleaning, conformance],
    role: ["analytics"],
    type_of_agg: ["pre_storage aggregation", "post-storage aggregation"]
    }

const ST_storage = {};

const data_sync = {};

const control = {};

const cond_log = {};

const config_prop = {}

const multi = 
    {benefit: "multi-cloud, cloud-repo distribution of data",
    description: "The multi-cloud, multi-repository distribution of a cluster of data",
    required_functions:[ingestion, reduction, communication, storage, coordination],
    role: ["transport", "analytics"],
    type_of_agg: ["pre_storage aggregation"]
    }

const red_t_and_s = {};

const red_strain = {};

const dist_proc = {};

const edge_ana = {};

const benefits = {"multi": multi};