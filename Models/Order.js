const mongoose = require('mongoose');

// Helper function to generate a random 6-character alphanumeric string
const generateRandomSubOrderId = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let subOrderId = '';
    for (let i = 0; i < 6; i++) {
        subOrderId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return subOrderId;
};

// Define the product description schema
const ProductDescriptionSchema = new mongoose.Schema({
    pid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    vid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Payment Done', 'Shipping Done', 'In Warehouse', 'Out for Delivery', 'Delivered'],
        default: 'Pending',
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    deliverDate: {
        type: Date,
        required: true,
        default: function () {
            const defaultDate = new Date(this.date);
            defaultDate.setDate(defaultDate.getDate() + 7);
            return defaultDate;
        }
    },
    subOrderId: {
        type: String,
        required: true,
        unique: true
    }
});

const OrderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    productDescription: [ProductDescriptionSchema],
    global_status: {
        type: String,
        enum: ['Pending', 'Delivered'],
        required: true,
        default: 'Pending'
    },
    cid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    order_date: {
        type: Date,
        required: true,
        default: Date.now
    },
    final_date: {
        type: Date,
        required: true,
        default: function () {
            const defaultDate = new Date(this.order_date);
            defaultDate.setDate(defaultDate.getDate() + 7);
            return defaultDate;
        }
    },
});

// Middleware to generate unique subOrderId for each product
OrderSchema.pre('save', async function (next) {
    const order = this;

    // Function to ensure a unique subOrderId
    const ensureUniqueSubOrderId = async () => {
        let uniqueSubOrderId;
        let isUnique = false;

        while (!isUnique) {
            // Generate a new subOrderId
            uniqueSubOrderId = generateRandomSubOrderId();
            // Check if the generated subOrderId already exists in any document
            const existingSubOrder = await mongoose.models.OrderTracking.findOne({
                'productDescription.subOrderId': '#' + uniqueSubOrderId
            });

            // If no document with the subOrderId exists, it's unique
            if (!existingSubOrder) {
                isUnique = true;
            }
        }
        return uniqueSubOrderId;
    };

    // Loop through each product and assign a unique subOrderId
    for (let product of order.productDescription) {
        // If subOrderId is not already set, generate and set a unique one
        if (!product.subOrderId) {
            product.subOrderId = await ensureUniqueSubOrderId();
        }
    }

    next();
});

const Order = mongoose.model('OrderTracking', OrderSchema);
module.exports = Order;
