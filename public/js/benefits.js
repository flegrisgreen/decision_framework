//Functions
const Ingestion = {function:"Ingestion", 
                    function_class:{type:"Common", agg:"pre-storage and post-storage"},
                    requirements:["Allow for multiple data sources",
                    "Allow for multiple data formats", 
                    "Allow for differing degrees of structure"],
                    methods:[]
                    };

const Reduction = {function:"Reduction", 
                    function_class:{type:"Common", agg:"pre-storage and post-storage"},
                    requirements:["Perform data reduction so that only necessary data is included"],
                    methods:["descriptive statistics", "selection", "conditional data-logging"]
                    };

const Communication = {function:"Communication", 
                    function_class:{type:"Common", agg:"pre-storage only"},
                    requirements:["Allow for communication with specified performance parameters"],
                    methods:["Fire-forget", "request-response", "publish-subscribe"]
                    };

const Local_Storage = {function:"Local_Storage", 
                    function_class:{type:"Common", agg:"pre-storage only"},
                    requirements:["Provide short-term storage for high value data or data that is required for local processing"],
                    methods:["SQL","NoSQL"]
                    };

const Analytics = {function:"Analytics", 
                    function_class:{type:"special", agg:"pre-storage and post-storage"},
                    requirements:["Requirements depend on the methods being employed"],
                    methods:["Dimentionality reduction","Descriptive statistics", "Edge analytics"]
                    };

const Control = {function:"Control", 
                    function_class:{type:"special", agg:"pre-storage and post-storage"},
                    requirements:["Requirements depend on the methods being employed"],
                    methods:["Rule-based decision-making", "User command propagation"]
                    }; 
                    
const Cleaning = {function:"Cleaning", 
                    function_class:{type:"special", agg:"pre-storage and post-storage"},
                    requirements:["Requirements depend on the methods being employed"],
                    methods:["Missing value handling", "Out-of-range value handling",
                            "Impossible data combination handling",
                            "Uncertainty flagging", "Cross-validation"]
                    };
                    
const Conformance = {function:"Conformance", 
                    function_class:{type:"special", agg:"pre-storage and post-storage"},
                    requirements:["Convert data to correct data format", "Convert data to correct structure",
                    "Convert data to correct units"],
                    methods:[]
                    };
                    
const Coordination = {function:"Coordination", 
                    function_class:{type:"special", agg:"pre-storage only"},
                    requirements:["Connect to the correct repository in the correct cloud platform"],
                    methods:[]
                    };
                    
// Note that conflict resolution is not mentioned here. 
// Latency advantages of pre-storage agg also not mentioned yet
const agg_functions = {Ingestion:Ingestion, Reduction:Reduction, Communication:Communication,
                        Local_Storage:Local_Storage, Analytics:Analytics, Control:Control, 
                        Cleaning:Cleaning, Conformance:Conformance, Coordination:Coordination};                   
// Benefits
const data_q = 
    {tag: "data_q",
    benefit: "Improved data quality",
    description: "Data quality can be improved through data homogenising and cleaning. For pre-storage aggregate this can be done real-time.",
    related_functions:[Ingestion, Reduction, Communication, Local_Storage, Analytics, Cleaning, Conformance],
    role: ["Analytics"],
    type_of_agg: ["pre-storage aggregation", "post-storage aggregation"]
    }

const ST_storage = 
    {tag: "ST_storage",
    benefit: "Short-term storage",
    description: "Short-term storage for high-value data or for other functions such as analytics",
    related_functions:[Ingestion, Reduction, Communication, Local_Storage],
    role: ["Transport", "Analytics"],
    type_of_agg: ["pre-storage aggregation", "post-storage aggregation"]
    };

const data_sync = 
    {tag: "data_sync",
    benefit: "Data synchronisation",
    description: "Synchronisation of otherwise separate and intermittent data",
    related_functions:[Ingestion, Reduction, Communication, Local_Storage, Conformance],
    role: ["Transport", "Analytics"],
    type_of_agg: ["pre-storage aggregation", "post-storage aggregation"]
    };

const sup_control = 
    {tag: "sup_control",
    benefit: "Supervisory control",
    description: "The propagation of command messages based on user inputs, rule-based systems and certain conditions",
    related_functions:[Ingestion, Reduction, Communication, Local_Storage, Control],
    role: ["Supervision"],
    type_of_agg: ["pre-storage aggregation", "post-storage aggregation"]
    };

const cond_log = 
    {tag: "cond_log",
    benefit: "Conditional logging",
    description: "Perform data logging only when certain conditions are true",
    related_functions:[Ingestion, Reduction, Communication, Local_Storage, Control],
    role: ["Supervision"],
    type_of_agg: ["pre-storage aggregation", "post-storage aggregation"]
    };

const config_prop = 
    {tag: "config_prop",
    benefit: "Configuration propagation",
    description: "Send configuration information to single, subsets or full groups of digital twins",
    related_functions:[Ingestion, Reduction, Communication, Local_Storage, Control],
    role: ["Supervision"],
    type_of_agg: ["pre-storage aggregation", "post-storage aggregation"]
    };

const multi = 
    {tag: "multi",
    benefit: "Multi-cloud, cloud-repo distribution of data",
    description: "The multi-cloud, multi-repository distribution of a cluster of data",
    related_functions:[Ingestion, Reduction, Communication, Local_Storage, Coordination],
    role: ["Transport", "Analytics"],
    type_of_agg: ["pre-storage aggregation"]
    }

const red_t_and_s = 
    {tag: "red_t_and_s",
    benefit: "Reduced transfer and storage",
    description: "Reduced resource usage for data transfer and reduced storage requirements",
    related_functions:[Ingestion, Reduction, Communication, Local_Storage, Cleaning],
    role: ["Transport"],
    type_of_agg: ["pre-storage aggregation"]
    }

const red_strain = 
    {tag: "red_strain",
    benefit: "Reduced load on constrained devices",
    description: "Reduce resource usage of constrained devices by performing any processing on an aggregate.",
    related_functions:[Ingestion, Reduction, Communication, Local_Storage],
    role: ["Transport"],
    type_of_agg: ["pre-storage aggregation"]
    }

const dist_proc = 
    {tag: "dist_proc",
    benefit: "Enable distributed processing",
    description: "Provide multiple nodes that are able to perform processing functions",
    related_functions:[Ingestion, Reduction, Communication, Local_Storage, Analytics,Cleaning,Conformance],
    role: ["Analytics"],
    type_of_agg: ["pre-storage aggregation"]
    }

const edge_ana = 
    {tag: "edge_ana",
    benefit: "Enable edge analytics",
    description: "Functions related to edge analytics can be performed on an local aggregate.",
    related_functions:[Ingestion, Reduction, Communication, Local_Storage, Analytics,Cleaning,Conformance],
    role: ["Analytics"],
    type_of_agg: ["pre-storage aggregation"]
    };

const security = 
    {tag: "security",
    benefit: "Security",
    description: "Provide increased security by limiting the number of external connections and by making those connection with more secure devices.",
    related_functions:[Ingestion, Reduction, Communication, Local_Storage],
    role: ["Analytics", "Transport", "Supervision"],
    type_of_agg: ["pre-storage aggregation"]
    };

const data_man = 
    {tag: "data_man",
    benefit: "Data warehouse management",
    description: "Maintain a datawarehouse by proving up-to-date cleaned data",
    related_functions:[Ingestion, Reduction, Communication, Local_Storage, Conformance, Cleaning],
    role: ["Analytics"],
    type_of_agg: ["pre-storage aggregation", "post-storage aggregation"]
    };

const benefits = {multi: multi, data_q: data_q, ST_storage: ST_storage,
                    data_sync: data_sync, config_prop: config_prop, cond_log:cond_log,
                    sup_control:sup_control, red_t_and_s: red_t_and_s, red_strain: red_strain,
                    edge_ana: edge_ana, security: security, data_man: data_man};