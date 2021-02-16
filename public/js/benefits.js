//Architectural choices

// Benefits
const data_q = {};

const ST_storage = {};

const data_sync = {};

const control = {};

const cond_log = {};

const config_prop = {}

const multi = 
    {"benefit": "multi distribution",
    "description": "The multi-cloud, multi-repository distribution of a cluster of data",
    "required_functions":["Ingestion", "Reduction", "Communication", "Storage", "Coordination"],
    "role": ["transport", "analytics"],
    "type_of_agg": ["pre_storage aggregation"]
    }

const red_t_and_s = {};

const red_strain = {};

const dist_proc = {};

const edge_ana = {};

const benefits = {"multi": multi};