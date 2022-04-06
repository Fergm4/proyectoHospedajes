const mongoose = require('mongoose');

const hospedarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    namePlace: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    huespedes: {
        type: Number,
        required: true,
        min: 1,
    },
    habitaciones: {
        type: Number,
        required: true,
        min: 1,
    },
    camas: {
        type: Number,
        required: true,
        min: 1,
    },
    bath: {
        type: Number,
        required: true,
        min: 1,
    },
    wifi: {
        type: Boolean,
    },
    tv: {
        type: Boolean,
    },
    cocina: {
        type: Boolean,
    },
    comentario: {
        type: String,
        required: true,
    },
    img:{
        type: String,
    }
});

const Hospedaje = mongoose.model('Hospedaje', hospedarSchema);

module.exports = Hospedaje;

















/* servicios: {
    bathOptions: {
        bathtub:{
            type: Boolean,
        },
        hotWater:{
            type: Boolean,
        }
    },
    laundry: {
        lavadora: {
            type: Boolean,
        },
        secadora: {
            type: Boolean,
        }
    },
    entretenimiento: {
        tv: {
            type: Boolean,
        },
        books:{
            type: Boolean,
        }
    },
    heatingAndCooling:{
        heating: {
            type: Boolean,
        },
        cooling: {
            type: Boolean,
        }
    },
    security: {
        fireExtinguisher: {
            type: Boolean,
        },
        medicalKit: {
            type: Boolean,
        }
    },
    workArea: {
        wifi: {
            type: Boolean,
        },
        workArea: {
            type: Boolean,
        }
    },
    kitchenAndFood: {
        cocina: {
            type: Boolean,
        },
        refrigerador: {
            type: Boolean,
        },
        microondas: {
            type: Boolean,
        }
    },
    exteriores: {
        campfire: {
            type: Boolean,
        },
        airelibre: {
            type: Boolean,
        },
        concinaExterior: {
            type: Boolean,
        }
    }
} */