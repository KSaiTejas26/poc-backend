
const mongoose = require('mongoose');
 
const CriticsSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true
 
    },
    info:[{
        Date:{
            type:Date,
            required:true
        },
        number_of_servers:{
            type:Number,
            required:true,
            default:0
        },
        infra_health_coverage:{
            type:Number,
            required:true,
            default:0
        },
        web_health_coverage:{
            type:Number,
            required:true,
            default:0
        },
        crits:{
            total_crits:{
                type:Number,
                required:true,
                default:0
            },
            crits_by_sre:{
                type:Number,
                required:true,
                default:0
            },
            mttr_by_sre:{
                type:Number,
                required:true,
                default:0
            },
            crits_by_nonsre:{
                type:Number,
                required:true,
                default:0
            },
            mttr_by_nonsre:{
                type:Number,
                required:true,
                default:0
            }
        },
        scom_alerts:{
            total_critical:{
                type:Number,
                required:true,
                default:0
            },
            total_warnings:{
                type:Number,
                required:true,
                default:0
            }
           
        }
       
    }]
 
 
});
 
const Critics = mongoose.model('Critics', CriticsSchema);
 
module.exports = Critics;
 