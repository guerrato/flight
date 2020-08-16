const aircrafts = [
    {
        "id": 1,
        "model": "Airbus A330-200",
        "first_flight": 1997,
        "seats": 241,
        "sector_nmi": 6.000,
        "sector_km": 11.000,
        "fuel_burn_kgkm": 6.4,
        "fuel_burn_lbmi": 23,
        "fuel_per_seat_l_per_100km": 3.32,
        "fuel_per_seat_mpg": 71,
        "image": "//upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Turkish_Airlines%2C_Airbus_A330-300_TC-JNL_NRT_%2823708073592%29.jpg/300px-Turkish_Airlines%2C_Airbus_A330-300_TC-JNL_NRT_%2823708073592%29.jpg"
    },
    {
        "id": 2,
        "model": "Airbus A330neo-800",
        "first_flight": 2017,
        "seats": 248,
        "sector_nmi": 4.650,
        "sector_km": 8.610,
        "fuel_burn_kgkm": 5.45,
        "fuel_burn_lbmi": 19.3,
        "fuel_per_seat_l_per_100km": 2.75,
        "fuel_per_seat_mpg": 86
    },
    {
        "id": 3,
        "model": "Airbus A330neo-900",
        "first_flight": 2017,
        "seats": 300,
        "sector_nmi": 4.650,
        "sector_km": 8.610,
        "fuel_burn_kgkm": 5.94,
        "fuel_burn_lbmi": 21.1,
        "fuel_per_seat_l_per_100km": 2.48,
        "fuel_per_seat_mpg": 95
    },
    {
        "id": 4,
        "model": "Airbus A340-300",
        "first_flight": 1992,
        "seats": 262,
        "sector_nmi": 6.000,
        "sector_km": 11.000,
        "fuel_burn_kgkm": 7.32,
        "fuel_burn_lbmi": 26.0,
        "fuel_per_seat_l_per_100km": 3.49,
        "fuel_per_seat_mpg": 67.4
    },
    {
        "id": 5,
        "model": "Airbus A350-900",
        "first_flight": 2013,
        "seats": 315,
        "sector_nmi": 4.972,
        "sector_km": 9.208,
        "fuel_burn_kgkm": 6.03,
        "fuel_burn_lbmi": 21.4,
        "fuel_per_seat_l_per_100km": 2.39,
        "fuel_per_seat_mpg": 98
    },
    {
        "id": 6,
        "model": "Airbus A350-900",
        "first_flight": 2013,
        "seats": 315,
        "sector_nmi": 6.542,
        "sector_km": 12.116,
        "fuel_burn_kgkm": 7.07,
        "fuel_burn_lbmi": 25.1,
        "fuel_per_seat_l_per_100km": 2.81,
        "fuel_per_seat_mpg": 84
    },
    {
        "id": 7,
        "model": "Airbus A380",
        "first_flight": 2005,
        "seats": 525,
        "sector_nmi": 7.200,
        "sector_km": 13.300,
        "fuel_burn_kgkm": 13.78,
        "fuel_burn_lbmi": 48.9,
        "fuel_per_seat_l_per_100km": 3.27,
        "fuel_per_seat_mpg": 72
    },
    {
        "id": 8,
        "model": "Airbus A380",
        "first_flight": 2005,
        "seats": 544,
        "sector_nmi": 6.000,
        "sector_km": 11.000,
        "fuel_burn_kgkm": 13.78,
        "fuel_burn_lbmi": 48.9,
        "fuel_per_seat_l_per_100km": 3.16,
        "fuel_per_seat_mpg": 74
    },
    {
        "id": 9,
        "model": "Boeing 747-400",
        "first_flight": 1988,
        "seats": 416,
        "sector_nmi": 6.000,
        "sector_km": 11.000,
        "fuel_burn_kgkm": 11.11,
        "fuel_burn_lbmi": 39.4,
        "fuel_per_seat_l_per_100km": 3.34,
        "fuel_per_seat_mpg": 70
    },
    {
        "id": 10,
        "model": "Boeing 747-8",
        "first_flight": 2011,
        "seats": 467,
        "sector_nmi": 6.000,
        "sector_km": 11.000,
        "fuel_burn_kgkm": 10.54,
        "fuel_burn_lbmi": 37.4,
        "fuel_per_seat_l_per_100km": 2.82,
        "fuel_per_seat_mpg": 83
    },
    {
        "id": 11,
        "model": "Boeing 747-8",
        "first_flight": 2011,
        "seats": 405,
        "sector_nmi": 7.200,
        "sector_km": 13.300,
        "fuel_burn_kgkm": 10.9,
        "fuel_burn_lbmi": 39,
        "fuel_per_seat_l_per_100km": 3.35,
        "fuel_per_seat_mpg": 70
    },
    {
        "id": 12,
        "model": "Boeing 777-200ER",
        "first_flight": 1996,
        "seats": 301,
        "sector_nmi": 6.000,
        "sector_km": 11.000,
        "fuel_burn_kgkm": 7.42,
        "fuel_burn_lbmi": 26.3,
        "fuel_per_seat_l_per_100km": 3.08,
        "fuel_per_seat_mpg": 76
    },
    {
        "id": 13,
        "model": "Boeing 777-200ER",
        "first_flight": 1996,
        "seats": 301,
        "sector_nmi": 6.000,
        "sector_km": 11.000,
        "fuel_burn_kgkm": 7.44,
        "fuel_burn_lbmi": 26.4,
        "fuel_per_seat_l_per_100km": 3.09,
        "fuel_per_seat_mpg": 76
    },
    {
        "id": 14,
        "model": "Boeing 777-200LR",
        "first_flight": 2005,
        "seats": 291,
        "sector_nmi": 4.972,
        "sector_km": 9.208,
        "fuel_burn_kgkm": 7.57,
        "fuel_burn_lbmi": 26.9,
        "fuel_per_seat_l_per_100km": 3.25,
        "fuel_per_seat_mpg": 72
    },
    {
        "id": 15,
        "model": "Boeing 777-300ER",
        "first_flight": 2003,
        "seats": 365,
        "sector_nmi": 6.000,
        "sector_km": 11.000,
        "fuel_burn_kgkm": 8.49,
        "fuel_burn_lbmi": 30.1,
        "fuel_per_seat_l_per_100km": 2.91,
        "fuel_per_seat_mpg": 81
    },
    {
        "id": 16,
        "model": "Boeing 777-300ER",
        "first_flight": 2003,
        "seats": 344,
        "sector_nmi": 7.200,
        "sector_km": 13.300,
        "fuel_burn_kgkm": 8.58,
        "fuel_burn_lbmi": 30.4,
        "fuel_per_seat_l_per_100km": 3.11,
        "fuel_per_seat_mpg": 76
    },
    {
        "id": 17,
        "model": "Boeing 777-9X",
        "first_flight": 2020,
        "seats": 395,
        "sector_nmi": 7.200,
        "sector_km": 13.300,
        "fuel_burn_kgkm": 7.69,
        "fuel_burn_lbmi": 27.3,
        "fuel_per_seat_l_per_100km": 2.42,
        "fuel_per_seat_mpg": 97
    },
    {
        "id": 18,
        "model": "Boeing 787-8",
        "first_flight": 2011,
        "seats": 243,
        "sector_nmi": 4.650,
        "sector_km": 8.610,
        "fuel_burn_kgkm": 5.38,
        "fuel_burn_lbmi": 19.1,
        "fuel_per_seat_l_per_100km": 2.77,
        "fuel_per_seat_mpg": 85
    },
    {
        "id": 19,
        "model": "Boeing 787-9",
        "first_flight": 2013,
        "seats": 294,
        "sector_nmi": 4.650,
        "sector_km": 8.610,
        "fuel_burn_kgkm": 5.85,
        "fuel_burn_lbmi": 20.8,
        "fuel_per_seat_l_per_100km": 2.49,
        "fuel_per_seat_mpg": 94
    },
    {
        "id": 20,
        "model": "Boeing 787-9",
        "first_flight": 2013,
        "seats": 304,
        "sector_nmi": 4.972,
        "sector_km": 9.208,
        "fuel_burn_kgkm": 5.63,
        "fuel_burn_lbmi": 20.0,
        "fuel_per_seat_l_per_100km": 2.31,
        "fuel_per_seat_mpg": 102
    },
    {
        "id": 21,
        "model": "Boeing 787-9",
        "first_flight": 2013,
        "seats": 291,
        "sector_nmi": 6.542,
        "sector_km": 12.116,
        "fuel_burn_kgkm": 7.18,
        "fuel_burn_lbmi": 25.5,
        "fuel_per_seat_l_per_100km": 3.08,
        "fuel_per_seat_mpg": 76
    }
]

const initSelector = selectEl => {
    const select = document.getElementById(selectEl)
    aircrafts.forEach(air => {
        const opt = document.createElement('option')
        opt.value = air.id
        opt.text = air.model

        select.appendChild(opt)
    })

    return select
}

const getAircraft = id => {
    return aircrafts.find(a => a.id === parseInt(id))
}