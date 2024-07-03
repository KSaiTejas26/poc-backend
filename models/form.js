const mongoose = require('mongoose');
 
const formSchema = new mongoose.Schema({
    product:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    Observability:{
        total_servers:{
            type:Number,
            required:true
        },
        infra_health_coverage:{
            type:Number,
            required:true
        },
        web_health_coverage:{
            type:Number,
            required:true
        }
    },
    CRITS:{
        total_crits:{
            type:Number,
            required:true
        },
        MTTR:{
            type:Number,
            required:true
        },
        crits_avoided:{
            type:Number,
            required:true
        }


    },
    SCOM_Alerts:{
        total_alerts:{
            type:Number,
            required:true
        },
        reduction_percent:{
            type:Number,
            required:true
        }
    },
    Capacity_planning:{
        CPU:{
            type:Number,
            required:true
        },
        Memory:{
            type:Number,
            required:true
        },
        Swap:{
            type:Number,
            required:true
        },
        Disk:{
            type:Number,
            required:true
        }
    },
    Certificates:{
        Certificates_Monitored:{
            type:Number,
            required:true
        }
    }
  
 
});
 
const Form = mongoose.model('form', formSchema);
 
module.exports = Form;