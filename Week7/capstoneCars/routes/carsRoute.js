const express = require("express")
const carRouter = express.Router()
const {v4: uuid} = require("uuid")

let cars = [

    {
        time: "6:38.835",
        vehicle: "Porsche 911 GT2 RS (991.2)",
        driver: "Lars Kern",
        date: "June 14 2021",
        tires: "Michelin Pilot Sport Cup 2 R",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Porsche_991_GT2_RS_%2841654760692%29.jpg/280px-Porsche_991_GT2_RS_%2841654760692%29.jpg",
        _id: uuid()
    },
    {
        time: "6:43.616",
        vehicle: "Mercedes-AMG GT Black Series",
        driver: "Mario Engel",
        date: "November 4 2020",
        tires: "Michelin Pilot Sport Cup 2 R",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg/280px-Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg",
        _id: uuid()
    },
    {
        time: "6:44.97",
        vehicle: "Lamborghini Aventador SVJ LP770-4 (2018)",
        driver: "Marco Mapelli",
        date: "July 26 2018",
        tires: "Pirelli P Zero Trofeo R",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/2015_Lamborghini_Aventador_LP700-4_Pirelli_Edition_6.5_Front.jpg/280px-2015_Lamborghini_Aventador_LP700-4_Pirelli_Edition_6.5_Front.jpg",
        _id: uuid()
    },
    {
        time: "6:47.25",
        vehicle: "Porsche 911 GT2 RS (991.2)",
        driver: "Lars Kern",
        date: "September 20 2017",
        tires: "Michelin Pilot Sport Cup 2 N2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Porsche_991_GT2_RS_%2841654760692%29.jpg/280px-Porsche_991_GT2_RS_%2841654760692%29.jpg",
        _id: uuid()
    },
    {
        time: "6:48.28",
        vehicle: "Radical SR8 LM",
        driver: "Michael Vergers",
        date: "August 19 2009",
        tires: "Dunlop Direzza DZ03",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Radical_SR8.jpg/280px-Radical_SR8.jpg",
        _id: uuid()
    },
    {
        time: "6:52.01",
        vehicle: "Lamborghini Huracan Performante LP640-4 (2017)",
        driver: "Marco Mapelli",
        date: "October 5 2016",
        tires: "Pirelli Trofeo R",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Lamborghini_Huracan_20150525_7811.jpg/280px-Lamborghini_Huracan_20150525_7811.jpg",
        _id: uuid()
    },
    {
        time: "6:55",
        vehicle: "Radical SR8",
        driver: "Michael Vergers",
        date: "September 28 2005",
        tires: "Dunlop Direzza DZ03",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Radical_SR8.jpg/280px-Radical_SR8.jpg",
        _id: uuid()
    },
    {
        time: "6:55.34",
        vehicle: "Porsche 911 GT3 (992, 2022)",
        driver: "Lars Kern",
        date: "September 15 2020",
        tires: "Michelin Pilot Sport Cup 2 R",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Porsche_911_992_GT3.jpg/280px-Porsche_911_992_GT3.jpg",
        _id: uuid()
    },
    {
        time: "6:56.4",
        vehicle: "Porsche 911 GT3 RS (991.2)",
        driver: "Kevin Estre",
        date: "April 16 2018",
        tires: "Michelin Pilot Sport Cup 2 R N0",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Porsche_911_992_GT3.jpg/280px-Porsche_911_992_GT3.jpg",
        _id: uuid()
    },
    {
        time: "6:57",
        vehicle: "Porsche 918 Spyder",
        driver: "Marc Lieb",
        date: "September 4 2013",
        tires: "Michelin Pilot Sport Cup 2 R N0",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Porsche_918_Spyder_IAA_2013.jpg/480px-Porsche_918_Spyder_IAA_2013.jpg",
        _id: uuid()
    },
    {
        time: "6:58.28",
        vehicle: "Porsche 911 GT2 RS (991.2)",
        driver: "Christian Gebhardt",
        date: "April 17 2018",
        tires: "Michelin Pilot Sport Cup 2 R",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Porsche_991_GT2_RS_%2841654760692%29.jpg/480px-Porsche_991_GT2_RS_%2841654760692%29.jpg",
        _id: uuid()
    },
    {
        time: "6:59.73",
        vehicle: "Lamborghini Aventador SuperVeloce LP750-4 (2015)",
        driver: "Marco Mapelli",
        date: "May 18 2015",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/2015_Lamborghini_Aventador_LP700-4_Pirelli_Edition_6.5_Front.jpg/480px-2015_Lamborghini_Aventador_LP700-4_Pirelli_Edition_6.5_Front.jpg",
        _id: uuid()
    },
    {
        time: "7:00.03",
        vehicle: "Ferrari 488 Pista",
        driver: "Christian Gebhardt",
        date: "May 16 2019",
        tires: "Michelin Pilot Sport Cup 2 R K1",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/2017_Ferrari_488_GTB_Automatic_3.9.jpg/480px-2017_Ferrari_488_GTB_Automatic_3.9.jpg",
        _id: uuid()
    },
    {
        time: "7:01.3",
        vehicle: "Dodge Viper ACR (2017)",
        driver: "Lance David Arnold",
        date: "September 1 2017",
        tires: "Kumho Ecsta V720 ACR",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Aewroi.jpg/480px-Aewroi.jpg",
        _id: uuid()
    },
    {
        time: "7:04.511",
        vehicle: "Porsche Cayman GT4 RS (982)",
        driver: "Jorg Bermeister",
        date: "",
        tires: "Michelin Pilot Sport Cup 2 R",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Porsche_718_Cayman_GT4_at_IAA_2019_IMG_0257.jpg/480px-Porsche_718_Cayman_GT4_at_IAA_2019_IMG_0257.jpg",
        _id: uuid()
    },
    {
        time: "7:04.632",
        vehicle: "Mercedes-AMG GT R Pro",
        driver: "Maro Engel",
        date: "November 2018",
        tires: "Michelin Pilot Sport Cup 2 ZP",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg/480px-Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg",
        _id: uuid()
    },
    {
        time: "7:05.41",
        vehicle: "Porsche 911 GT3 RS (991.2)",
        driver: "Christian Gebhardt",
        date: "April 18 2018",
        tires: "Michelin Pilot Sport Cup 2 ZP",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Porsche_911_992_GT3.jpg/480px-Porsche_911_992_GT3.jpg",
        _id: uuid()
    },
    {
        time: "7:06.60",
        vehicle: "Mercedes-AMG GT R Pro",
        driver: "Christian Gebhardt",
        date: "May 22 2019",
        tires: "Michelin Pilot Sport Cup 2 ZP",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg/480px-Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg",
        _id: uuid()
    },
    {
        time: "7:08.34",
        vehicle: "McLaren 720S",
        driver: "Christian Gebhardt",
        date: "June 28 2018",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2018_McLaren_720S_V8_S-A_4.0.jpg/480px-2018_McLaren_720S_V8_S-A_4.0.jpg",
        _id: uuid()
    },
    {
        time: "7:08.82",
        vehicle: "McLaren 600LT",
        driver: "Christian Gebhardt",
        date: "June 06 2019",
        tires: "Pirelli P Zero Trofeo R MC",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/2017_McLaren_570S%2C_blue%2C_front_left.jpg/480px-2017_McLaren_570S%2C_blue%2C_front_left.jpg",
        _id: uuid()
    },
    {
        time: "7:10.92",
        vehicle: "Mercedes-AMG GT R (2017)",
        driver: "Christian Gebhardt",
        date: "November 4 2016",
        tires: "Michelin Pilot Sport Cup 2 ZP",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg/480px-Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg",
        _id: uuid()
    },
    {
        time: "7:11.57",
        vehicle: "Gumpert Apollo Sport",
        driver: "Florian Gruber",
        date: "August 13 2009",
        tires: "Michelin Pilot Sport Cup",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Gumpert_Apollo_3.jpg/480px-Gumpert_Apollo_3.jpg",
        _id: uuid()
    },
    {
        time: "7:12.13",
        vehicle: "Dodge Viper ACR (2010)",
        driver: "Dominik Farnbacher",
        date: "September 14 2011",
        tires: "Michelin Pilot Sport Cup",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Aewroi.jpg/480px-Aewroi.jpg",
        _id: uuid()
    }, 
    {
        time: "7:12.7",
        vehicle: "Porsche 911 GT3 (991.2)",
        driver: "Lars Kern",
        date: "May 4 2017",
        tires: "Michelin Pilot Sport Cup 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Aewroi.jpg/480px-Aewroi.jpg",
        _id: uuid()
    },
    {
        time: "7:13.90",
        vehicle: "Chevrolet Corvette C7 Z06",
        driver: "Christian Gebhardt",
        date: "April 24 2017",
        tires: "Michelin Pilot Sport Cup 2 ZP",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Salon_de_l%27auto_de_Gen%C3%A8ve_2014_-_20140305_-_Chevrolet_Corvette_Stingray_Z06.jpg/480px-Salon_de_l%27auto_de_Gen%C3%A8ve_2014_-_20140305_-_Chevrolet_Corvette_Stingray_Z06.jpg",
        _id: uuid()
    },
    {
        time: "7:13",
        vehicle: "Porsche 918 Spyder",
        driver: "Horst Von Saurma",
        date: "June 2014",
        tires: "Michelin Pilot Sport Cup 2 N0",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Porsche_918_Spyder_IAA_2013.jpg/480px-Porsche_918_Spyder_IAA_2013.jpg",
        _id: uuid()
    },
    {
        time: "7:14.64",
        vehicle: "Lexus LFA Nurburgring Package",
        driver: "Akira Iida",
        date: "August 31 2011",
        tires: "Bridgestone Potenza RE070",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Lexus_LFA_Yellow_Las_Vegas.jpg/480px-Lexus_LFA_Yellow_Las_Vegas.jpg",
        _id: uuid()
    },
    {
        time: "7:14.89",
        vehicle: "Donkervoot D8 RS",
        driver: "Michael Duchting",
        date: "2006",
        tires: "Dunlop Sportmaxx",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Nationale_oldtimerdag_Zandvoort_2010%2C_DONKERVOORT%28JD%29_D8_GT%2C_12-JLD-1_pic1.JPG/220px-Nationale_oldtimerdag_Zandvoort_2010%2C_DONKERVOORT%28JD%29_D8_GT%2C_12-JLD-1_pic1.JPG",
        _id: uuid()
    },
    {
        time: "7:16.04",
        vehicle: "Chevrolet Camaro ZL1 1LE (2018)",
        driver: "Bill Wise",
        date: "2017",
        tires: "Goodyear Eagle F1 Supercar 3R",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2019_Chevrolet_Camaro_2SS_6.2L_front_3.16.19.jpg/480px-2019_Chevrolet_Camaro_2SS_6.2L_front_3.16.19.jpg",
        _id: uuid()
    },
    {
        time: "7:17.11",
        vehicle: "Porsche 911 Turbo S (991.2)",
        driver: "Christian Gebhardt",
        date: "August 24 2017",
        tires: "Pirelli P Zero Corsa N1",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2013_Porsche_911_Carrera_4S_%28991%29_%289626546987%29.jpg/480px-2013_Porsche_911_Carrera_4S_%28991%29_%289626546987%29.jpg",
        _id: uuid()
    },
    {
        time: "7:18",
        vehicle: "Porsche 911 GT2 RS (997.2)",
        driver: "Timo Kluck",
        date: "2010",
        tires: "Michelin Pilot Sport Cup N2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Porsche_991_GT2_RS_%2841654760692%29.jpg/480px-Porsche_991_GT2_RS_%2841654760692%29.jpg",
        _id: uuid()
    },
    {
        time: "7:18.1",
        vehicle: "Donkervoort D8 RS",
        driver: "Michael Duchting",
        date: "October 24 2004",
        tires: "Michelin Pilot Sport Cup 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Donkervoort_D8_Wide_Track.jpg/220px-Donkervoort_D8_Wide_Track.jpg",
        _id: uuid()
    },
    {
        time: "7:19.1",
        vehicle: "Nissan GT-R (2013)",
        driver: "",
        date: "2012",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg/480px-2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg",
        _id: uuid()
    },
    {
        time: "7:19.63",
        vehicle: "Chevrolet Corvette C6 ZR1 (2012)",
        driver: "Jim Mero",
        date: "June 9 2011",
        tires: "Michelin Pilot Sport Cup ZP",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chevrolet_Corvette_Z06_-_Flickr_-_Alexandre_Pr%C3%A9vot_%287%29_%28cropped%29.jpg/480px-Chevrolet_Corvette_Z06_-_Flickr_-_Alexandre_Pr%C3%A9vot_%287%29_%28cropped%29.jpg",
        _id: uuid()
    },
    {
        time: "7:21.63",
        vehicle: "Ferrari 488 GTB",
        driver: "Christian Gebhardt",
        date: "November 2016",
        tires: "Michelin Pilot Sport Cup 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/2017_Ferrari_488_GTB_Automatic_3.9.jpg/480px-2017_Ferrari_488_GTB_Automatic_3.9.jpg",
        _id: uuid()
    },
    {
        time: "7:22.1",
        vehicle: "Dodge Viper ACR (2009)",
        driver: "Tom Coronel",
        date: "August 18 2008",
        tires: "Michelin Pilot Sport Cup",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Aewroi.jpg/480px-Aewroi.jpg",
        _id: uuid()
    },
    {
        time: "7:22.68",
        vehicle: "Chevrolet Corvette C6 Z06 (2012)",
        driver: "Jim Mero",
        date: "June 23 2011",
        tires: "Michelin Pilot Sport Cup ZP",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chevrolet_Corvette_Z06_-_Flickr_-_Alexandre_Pr%C3%A9vot_%287%29_%28cropped%29.jpg/480px-Chevrolet_Corvette_Z06_-_Flickr_-_Alexandre_Pr%C3%A9vot_%287%29_%28cropped%29.jpg",
        _id: uuid()
    },
    {
        time: "7:23.009",
        vehicle: "Mercedes-AMG GT 4-Door Coupe GT 63 S 4Matic+ (2021)",
        driver: "Demian Schaffert",
        date: "November 10 2020",
        tires: "Michelin Pilot Sport Cup 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Geneva_International_Motor_Show_2018%2C_Le_Grand-Saconnex_%281X7A1872%29.jpg/480px-Geneva_International_Motor_Show_2018%2C_Le_Grand-Saconnex_%281X7A1872%29.jpg",
        _id: uuid()
    },
    {
        time: "7:23.164",
        vehicle: "Jaguar XE SV Project 8 (2018)",
        driver: "Vincent Radermecker",
        date: "July 2019",
        tires: "Michelin Pilot Sport Cup 2 R",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/2017_Jaguar_XE_Portfolio_Diesel_Automatic_2.0_Front.jpg/480px-2017_Jaguar_XE_Portfolio_Diesel_Automatic_2.0_Front.jpg",
        _id: uuid()
    },
    {
        time: "7:23.77",
        vehicle: "Porsche 911 Carrera GTS (991.2)",
        driver: "Christian Gebhardt",
        date: "May 2017",
        tires: "Pirelli P Zero Corsa N0",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2013_Porsche_911_Carrera_4S_%28991%29_%289626546987%29.jpg/480px-2013_Porsche_911_Carrera_4S_%28991%29_%289626546987%29.jpg",
        _id: uuid()
    },
    {
        time: "7:24",
        vehicle: "Gumpert Apollo Sport",
        driver: "Horst von Saurma",
        date: "November 2010",
        tires: "Michelin Pilot Sport Cup",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Gumpert_Apollo_3.jpg/480px-Gumpert_Apollo_3.jpg",
        _id: uuid()
    },
    {
        time: "7:24",
        vehicle: "Porsche 911 GT2 RS (997.2)",
        driver: "Horst von Saurma",
        date: "2010",
        tires: "Michelin Pilot Sport Cup",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Porsche_991_GT2_RS_%2841654760692%29.jpg/480px-Porsche_991_GT2_RS_%2841654760692%29.jpg",
        _id: uuid()
    },
    {
        time: "7:24.22",
        vehicle: "Nissan GT-R (2011)",
        driver: "Toshio Suzuki",
        date: "October 1 2010",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Porsche_991_GT2_RS_%2841654760692%29.jpg/480px-Porsche_991_GT2_RS_%2841654760692%29.jpg",
        _id: uuid()
    },
    {
        time: "7:24.29",
        vehicle: "Maserati MC12",
        driver: "Marc Basseng",
        date: "August 2008",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Porsche_991_GT2_RS_%2841654760692%29.jpg/480px-Porsche_991_GT2_RS_%2841654760692%29.jpg",
        _id: uuid()
    },
    {
        time: "7:24.44",
        vehicle: "Pagani Zonda F Clubsport",
        driver: "Marc Basseng",
        date: "August 2008",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pagani_Zonda_C12_%27chassis_001%27_Genf_2019_1Y7A5539.jpg/480px-Pagani_Zonda_C12_%27chassis_001%27_Genf_2019_1Y7A5539.jpg",
        _id: uuid()
    },
    {
        time: "7:25",
        vehicle: "Lamborghini Aventador LP700-4",
        driver: "Horst von Saurma",
        date: "2012",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/2015_Lamborghini_Aventador_LP700-4_Pirelli_Edition_6.5_Front.jpg/480px-2015_Lamborghini_Aventador_LP700-4_Pirelli_Edition_6.5_Front.jpg",
        _id: uuid()
    },
    {
        time: "7:25.21",
        vehicle: "Enzo Ferrari",
        driver: "Marc Basseng",
        date: "2008",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Orange_Enzo_Ferrari_%287191948164%29.jpg/480px-Orange_Enzo_Ferrari_%287191948164%29.jpg",
        _id: uuid()
    },
    {
        time: "7:25.21",
        vehicle: "Mercedes-AMG GT 4-Door Coupé 63 S 4MATIC+",
        driver: "Demian Schaffert",
        date: "October 2018",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Geneva_International_Motor_Show_2018%2C_Le_Grand-Saconnex_%281X7A1872%29.jpg/480px-Geneva_International_Motor_Show_2018%2C_Le_Grand-Saconnex_%281X7A1872%29.jpg",
        _id: uuid()
    },
    {
        time: "7:25.67",
        vehicle: "Mercedes-Benz SLS AMG Black Series",
        driver: "",
        date: "August 2013",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg/480px-Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg",
        _id: uuid()
    },
    {
        time: "7:25.72",
        vehicle: "KTM X-Bow RR",
        driver: "Christopher Haase",
        date: "2012",
        tires: "Michelin Pilot Sport Cup",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/KTMX-Bow.jpg/480px-KTMX-Bow.jpg",
        _id: uuid()
    },
    {
        time: "7:26.4",
        vehicle: "Chevrolet Corvette C6 ZR1 (2009)",
        driver: "Jim Mero",
        date: "June 27 2008",
        tires: "Michelin Pilot Sport 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chevrolet_Corvette_Z06_-_Flickr_-_Alexandre_Pr%C3%A9vot_%287%29_%28cropped%29.jpg/480px-Chevrolet_Corvette_Z06_-_Flickr_-_Alexandre_Pr%C3%A9vot_%287%29_%28cropped%29.jpg",
        _id: uuid()
    },
    {
        time: "7:26.70",
        vehicle: "Nissan GT-R (2009)",
        driver: "Toshio Suzuki",
        date: "April 23 2009",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg/480px-2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg",
        _id: uuid()
    },
    {
        time: "7:27.48",
        vehicle: "Ferrari 812 Superfast",
        driver: "Christian Gebhardt",
        date: "June 20 2018",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2019_Ferrari_812_Superfast_S-A_6.5.jpg/480px-2019_Ferrari_812_Superfast_S-A_6.5.jpg",
        _id: uuid()
    },
    {
        time: "7:27.82",
        vehicle: "Pagani Zonda F Clubsport (2005)",
        driver: "Marc Basseng",
        date: "September 2007",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pagani_Zonda_C12_%27chassis_001%27_Genf_2019_1Y7A5539.jpg/480px-Pagani_Zonda_C12_%27chassis_001%27_Genf_2019_1Y7A5539.jpg",
        _id: uuid()
    },
    {
        time: "7:27.88",
        vehicle: "BMW M4 GTS",
        driver: "Joerg Weidinger",
        date: "September 2015",
        tires: "Michelin Pilot Sport Cup 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/2016_BMW_M4_%28UK%29_front_view.jpg/480px-2016_BMW_M4_%28UK%29_front_view.jpg",
        _id: uuid()
    },
    {
        time: "7:28.0",
        vehicle: "Porsche Carrera GT (980)",
        driver: "Walter Röhrlr",
        date: "July 2 2004",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg/480px-Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg",
        _id: uuid()
    },
    {
        time: "7:28.0",
        vehicle: "McLaren MP4-12C",
        driver: "Horst von Saurma",
        date: "2011",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/McLaren_MP4-12C_%E2%80%93_Frontansicht_%284%29%2C_30._August_2012%2C_D%C3%BCsseldorf.jpg/480px-McLaren_MP4-12C_%E2%80%93_Frontansicht_%284%29%2C_30._August_2012%2C_D%C3%BCsseldorf.jpg",
        _id: uuid()
    },
    {
        time: "7:28.0",
        vehicle: "Lamborghini Huracán LP610-4",
        driver: "Christian Gebhardt",
        date: "July 2016",
        tires: "Pirelli P Zero Trofeo R",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Lamborghini_Huracan_20150525_7811.jpg/480px-Lamborghini_Huracan_20150525_7811.jpg",
        _id: uuid()
    },
    {
        time: "7:28.71",
        vehicle: "Porsche Carrera GT (980)",
        driver: "Marc Basseng",
        date: "August 2008",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg/480px-Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg",
        _id: uuid()
    },
    {
        time: "7:29.03",
        vehicle: "Nissan GT-R (2009)",
        driver: "Toshio Suzuki",
        date: "April 17 2008",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg/480px-2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg",
        _id: uuid()
    },
    {
        time: "7:29.60",
        vehicle: "Chevrolet Camaro ZL1 (2017)",
        driver: "Drew Cattell",
        date: "October 24 2016",
        tires: "Goodyear Eagle F1",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2019_Chevrolet_Camaro_2SS_6.2L_front_3.16.19.jpg/480px-2019_Chevrolet_Camaro_2SS_6.2L_front_3.16.19.jpg",
        _id: uuid()
    },
    {
        time: "7:29.81",
        vehicle: "Porsche Panamera Turbo (2020)",
        driver: "Lars Kern",
        date: "July 24 2020",
        tires: "Michelin Pilot Sport Cup 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg/480px-Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg",
        _id: uuid()
    },
    {
        time: "7:29.90",
        vehicle: "Chevrolet Corvette (C8) (2020)",
        driver: "Oliver Gavin",
        date: "July 2019",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chevrolet_Corvette_C8_IAA_2021_1X7A0156.jpg/480px-Chevrolet_Corvette_C8_IAA_2021_1X7A0156.jpg",
        _id: uuid()
    },
    {
        time: "7:30.0",
        vehicle: "Mercedes-Benz SLS AMG GT (2012)",
        driver: "",
        date: "2012",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg/480px-Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg",
        _id: uuid()
    },
    {
        time: "7:30.41",
        vehicle: "Porsche 911 Carrera S (992)",
        driver: "Christian Gebhardt",
        date: "2019",
        tires: "Pirelli P Zero NA1",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2019_Porsche_911_Carrera_S_S-A_3.0_Front.jpg/480px-2019_Porsche_911_Carrera_S_S-A_3.0_Front.jpg",
        _id: uuid()
    },
    {
        time: "7:31",
        vehicle: "Porsche 911 GT2 (997, 2007)",
        driver: "Walter Röhrl",
        date: "2007",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Porsche_991_GT2_RS_%2841654760692%29.jpg/480px-Porsche_991_GT2_RS_%2841654760692%29.jpg",
        _id: uuid()
    },
    {
        time: "7:32.40",
        vehicle: "Porsche Carrera GT (980)",
        driver: "Horst von Saurma",
        date: "2003",
        tires: "Michelin Pilot Sport",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg/480px-Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg",
        _id: uuid()
    },
    {
        time: "7:32",
        vehicle: "Porsche 911 GT3 (991)",
        driver: "Horst von Saurma",
        date: "November 2013",
        tires: "Michelin Pilot Sport Cup 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Porsche_911_992_GT3.jpg/480px-Porsche_911_992_GT3.jpg",
        _id: uuid()
    },
    {
        time: "7:32",
        vehicle: "Audi R8 V10 Plus (4S, 2015)",
        driver: "Christian Gebhardt",
        date: "2015",
        tires: "Michelin Pilot Sport Cup 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/R8_Coupe_V10_performance-1.jpg/480px-R8_Coupe_V10_performance-1.jpg",
        _id: uuid()
    },
    {
        time: "7:32",
        vehicle: "Alfa Romeo Giulia Quadrifoglio (2015)",
        driver: "Fabio Francia",
        date: "September 2016",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Alfa_952_26.06.19_JM_%281%29.jpg/480px-Alfa_952_26.06.19_JM_%281%29.jpg",
        _id: uuid()
    },
    {
        time: "7:33",
        vehicle: "Pagani Zonda F",
        driver: "Horst von Saurma",
        date: "2006",
        tires: "Michelin Pilot Sport 2 N0/1",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pagani_Zonda_C12_%27chassis_001%27_Genf_2019_1Y7A5539.jpg/480px-Pagani_Zonda_C12_%27chassis_001%27_Genf_2019_1Y7A5539.jpg",
        _id: uuid()
    },
    {
        time: "7:33",
        vehicle: "Porsche 911 GT3 RS (997.2)",
        driver: "Horst von Saurma",
        date: "2010",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Porsche_911_992_GT3.jpg/480px-Porsche_911_992_GT3.jpg",
        _id: uuid()
    },
    {
        time: "7:33",
        vehicle: "Porsche 911 GT2 (997, 2007)",
        driver: "Horst von Saurma",
        date: "2007",
        tires: "Michelin Pilot Sport Cup",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Porsche_991_GT2_RS_%2841654760692%29.jpg/480px-Porsche_991_GT2_RS_%2841654760692%29.jpg",
        _id: uuid()
    },
    {
        time: "7:33.55",
        vehicle: "Koenigsegg CCX",
        driver: "Marc Basseng",
        date: "August 2008",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Koenigsegg_CCX_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2811%29.jpg/480px-Koenigsegg_CCX_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2811%29.jpg",
        _id: uuid()
    },
    {
        time: "7:33.67",
        vehicle: "Porsche 911 Carrera S (991.2)",
        driver: "Christian Gebhardt",
        date: "May 2016",
        tires: "Pirelli P Zero N1",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2013_Porsche_911_Carrera_4S_%28991%29_%289626546987%29.jpg/480px-2013_Porsche_911_Carrera_4S_%28991%29_%289626546987%29.jpg",
        _id: uuid()
    },
    {
        time: "7:33.95",
        vehicle: "Porsche Cayenne Turbo GT",
        driver: "Lars Kern",
        date: "June 14 2021",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Porsche_Cayenne%2C_IAA_2017_%281Y7A2256%29.jpg/480px-Porsche_Cayenne%2C_IAA_2017_%281Y7A2256%29.jpg",
        _id: uuid()
    },
    {
        time: "7:34",
        vehicle: "Koenigsegg CCR",
        driver: "Horst von Saurma",
        date: "October 17 2005",
        tires: "Michelin Pilot Sport N0",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Koenigsegg_CCR%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0035%29.jpg/480px-Koenigsegg_CCR%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0035%29.jpg",
        _id: uuid()
    },
    {
        time: "7:34",
        vehicle: "Nissan GT-R (2011)",
        driver: "Horst von Saurma",
        date: "October 2010",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg/480px-2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg",
        _id: uuid()
    },
    {
        time: "7:34",
        vehicle: "Lexus LFA Nürburgring Package",
        driver: "Horst von Saurma",
        date: "February 2012",
        tires: "Potenza RE070",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Lexus_LFA_Yellow_Las_Vegas.jpg/480px-Lexus_LFA_Yellow_Las_Vegas.jpg",
        _id: uuid()
    },
    {
        time: "7:34",
        vehicle: "Porsche 911 Turbo S (991)",
        driver: "Horst von Saurma",
        date: "February 2014",
        tires: "Dunlop SportMaxx Race",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2013_Porsche_911_Carrera_4S_%28991%29_%289626546987%29.jpg/480px-2013_Porsche_911_Carrera_4S_%28991%29_%289626546987%29.jpg",
        _id: uuid()
    },
    {
        time: "7:34.46",
        vehicle: "Nissan GT-R Spec-V",
        driver: "",
        date: "2009",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg/480px-2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg",
        _id: uuid()
    },
    {
        time: "7:35",
        vehicle: "Mercedes-AMG GT S",
        driver: "",
        date: "2016",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg/480px-Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg",
        _id: uuid()
    },
    {
        time: "7:35",
        vehicle: "Ruf Rt 12",
        driver: "Horst von Saurma",
        date: "2008",
        tires: "Michelin Pilot Sport Cup",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Rt12.jpg/480px-Rt12.jpg",
        _id: uuid()
    },
    {
        time: "7:35",
        vehicle: "McLaren 650S Spider",
        driver: "Horst von Saurma",
        date: "2015",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/The_frontview_of_McLaren_650S_Coup%C3%A9.JPG/480px-The_frontview_of_McLaren_650S_Coup%C3%A9.JPG",
        _id: uuid()
    },
    {
        time: "7:35.522",
        vehicle: "Audi RS3",
        driver: "Frank Stippler",
        date: "June 14 2021",
        tires: "Pirelli P Zero Trofeo R",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/2020_Audi_A3_Sport_30_TFSi_Saloon_1.0.jpg/480px-2020_Audi_A3_Sport_30_TFSi_Saloon_1.0.jpg",
        _id: uuid()
    },
    {
        time: "7:35.579",
        vehicle: "Tesla Model S Plaid",
        driver: "Andreas Simonsen",
        date: "September 9 2021",
        tires: "Michelin 295/30ZR21",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/480px-2018_Tesla_Model_S_75D.jpg",
        _id: uuid()
    },
    {
        time: "7:35.90",
        vehicle: "BMW M5 Competition (F90)",
        driver: "Christian Gebhardt",
        date: "April 17 2019",
        tires: "Pirelli P Zero",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/BMW%2C_Techno_Classica_2018%2C_Essen_%28IMG_8995%29.jpg/480px-BMW%2C_Techno_Classica_2018%2C_Essen_%28IMG_8995%29.jpg",
        _id: uuid()
    },
    {
        time: "7:36",
        vehicle: "Nissan GT-R (R35)",
        driver: "Horst von Saurma",
        date: "2011",
        tires: "Dunlop SP Sport Maxx GT 600 DSST",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg/480px-2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg",
        _id: uuid()
    },
    {
        time: "7:36",
        vehicle: "Honda NSX (NC1, 2016)",
        driver: "Christian Gebhardt",
        date: "March 2017",
        tires: "Pirelli P Zero Trofeo R",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Honda%2C_Paris_Motor_Show_2018%2C_Paris_%281Y7A1625%29.jpg/480px-Honda%2C_Paris_Motor_Show_2018%2C_Paris_%281Y7A1625%29.jpg",
        _id: uuid()
    },
    {
        time: "7:37",
        vehicle: "BMW M4 GTS",
        driver: "Christian Gebhardt",
        date: "October 2016",
        tires: "Michelin Pilot Sport Cup 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/2016_BMW_M4_%28UK%29_front_view.jpg/480px-2016_BMW_M4_%28UK%29_front_view.jpg",
        _id: uuid()
    },
    {
        time: "7:37.4",
        vehicle: "Chevrolet Camaro Z/28 (2014)",
        driver: "Adam Dean",
        date: "October 2013",
        tires: "Pirelli P Zero Trofeo R",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Chevrolet_Camaro_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2816%29_%28cropped%29.jpg/480px-Chevrolet_Camaro_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2816%29_%28cropped%29.jpg",
        _id: uuid()
    },
    {
        time: "7:37.9",
        vehicle: "Porsche 911 Carrera S (991)",
        driver: "Timo Kluck",
        date: "August 28 2012",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg/480px-Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg",
        _id: uuid()
    },
    {
        time: "7:38",
        vehicle: "Ferrari 458 Italia",
        driver: "Horst von Saurma",
        date: "2010",
        tires: "Michelin Pilot Sport PS2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2011_Ferrari_458_Italia_DCT_S-A_4.5_Front.jpg/480px-2011_Ferrari_458_Italia_DCT_S-A_4.5_Front.jpg",
        _id: uuid()
    },
    {
        time: "7:38",
        vehicle: "Lexus LFA",
        driver: "Horst von Saurma",
        date: "September 2010",
        tires: "Bridgestone Potenza S001",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Lexus_LFA_Yellow_Las_Vegas.jpg/480px-Lexus_LFA_Yellow_Las_Vegas.jpg",
        _id: uuid()
    }, 
    {
        time: "7:38",
        vehicle: "Porsche 911 Turbo (997)",
        driver: "",
        date: "September 2008",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Porsche_997_Turbo_-_Flickr_-_Alexandre_Pr%C3%A9vot_%288%29.jpg/480px-Porsche_997_Turbo_-_Flickr_-_Alexandre_Pr%C3%A9vot_%288%29.jpg",
        _id: uuid()
    },
    {
        time: "7:38",
        vehicle: "Chevrolet Corvette C6 ZR1",
        driver: "Horst von Saurma",
        date: "October 2009",
        tires: "Michelin Pilot Sport ZP run-flat",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chevrolet_Corvette_Z06_-_Flickr_-_Alexandre_Pr%C3%A9vot_%287%29_%28cropped%29.jpg/480px-Chevrolet_Corvette_Z06_-_Flickr_-_Alexandre_Pr%C3%A9vot_%287%29_%28cropped%29.jpg",
        _id: uuid()
    },
    {
        time: "7:38",
        vehicle: "Nissan GT-R",
        driver: "Horst von Saurma",
        date: "2009",
        tires: "Dunlop SP Sport 600 DSST run flat",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg/480px-2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg",
        _id: uuid()
    },
    {
        time: "7:38",
        vehicle: "Lamborghini Gallardo Superleggera LP570-4",
        driver: "Horst von Saurma",
        date: "2011",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lamborghini_Gallardo_5.2_%2714_%289390031309%29.jpg/480px-Lamborghini_Gallardo_5.2_%2714_%289390031309%29.jpg",
        _id: uuid()
    },
    {
        time: "7:38.85",
        vehicle: "Lexus LFA",
        driver: "Sascha Bert",
        date: "November 2010",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Lexus_LFA_Yellow_Las_Vegas.jpg/480px-Lexus_LFA_Yellow_Las_Vegas.jpg",
        _id: uuid()
    },
    {
        time: "7:38.92",
        vehicle: "BMW M5 (F90)",
        driver: "Christian Gebhardt",
        date: "April 12 2018",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/BMW%2C_Techno_Classica_2018%2C_Essen_%28IMG_8995%29.jpg/480px-BMW%2C_Techno_Classica_2018%2C_Essen_%28IMG_8995%29.jpg",
        _id: uuid()
    },
    {
        time: "7:39",
        vehicle: "Ferrari 430 Scuderia",
        driver: "Horst von Saurma",
        date: "2008",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ferrari_F430_front_20080605.jpg/480px-Ferrari_F430_front_20080605.jpg",
        _id: uuid()
    },
    {
        time: "7:40",
        vehicle: "Bugatti Veyron 16.4",
        driver: "",
        date: "2005",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Red_Bugatti_Veyron_on_the_road_%287559997596%29.jpg/480px-Red_Bugatti_Veyron_on_the_road_%287559997596%29.jpg",
        _id: uuid()
    },
    {
        time: "7:40",
        vehicle: "Lamborghini Murciélago LP640",
        driver: "Giorgio Sanna",
        date: "",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2840%29.jpg/480px-Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2840%29.jpg",
        _id: uuid()
    },
    {
        time: "7:40",
        vehicle: "Mercedes-Benz SLR McLaren",
        driver: "Klaus Ludwig",
        date: "",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mercedes-Benz_SLR_McLaren_%288615973055%29_%28cropped%29.jpg/480px-Mercedes-Benz_SLR_McLaren_%288615973055%29_%28cropped%29.jpg",
        _id: uuid()
    },
    {
        time: "7:40",
        vehicle: "Porsche 911 GT3 (997.2)",
        driver: "Horst von Saurma",
        date: "2009",
        tires: "Michelin Pilot Sport Cup",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Porsche_911_992_GT3.jpg/480px-Porsche_911_992_GT3.jpg",
        _id: uuid()
    },
    {
        time: "7:40",
        vehicle: "Mercedes-Benz SLS AMG",
        driver: "Horst von Saurma",
        date: "2010",
        tires: "Continental ContiSportContact 5",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg/480px-Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg",
        _id: uuid()
    },
    {
        time: "7:40.100",
        vehicle: "Renault Mégane R.S. Trophy-R",
        driver: "Laurent Hurgon",
        date: "April 2019",
        tires: "Bridgestone Potenza S007",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg/480px-Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg",
        _id: uuid()
    },  
    {
        time: "7:40.76",
        vehicle: "Lamborghini Gallardo Superleggera LP570-4",
        driver: "Sascha Bert",
        date: "November 2010",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lamborghini_Gallardo_5.2_%2714_%289390031309%29.jpg/480px-Lamborghini_Gallardo_5.2_%2714_%289390031309%29.jpg",
        _id: uuid()
    },
    {
        time: "7:41.23",
        vehicle: "Porsche 911 Turbo S (997.2)",
        driver: "Sascha Bert",
        date: "November 2010",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Porsche_997_Turbo_-_Flickr_-_Alexandre_Pr%C3%A9vot_%288%29.jpg/480px-Porsche_997_Turbo_-_Flickr_-_Alexandre_Pr%C3%A9vot_%288%29.jpg",
        _id: uuid()
    },
    {
        time: "7:41.27",
        vehicle: "Chevrolet Camaro ZL1 (2012)",
        driver: "Aaron Link",
        date: "October 2011",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Chevrolet_Camaro_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2816%29_%28cropped%29.jpg/480px-Chevrolet_Camaro_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2816%29_%28cropped%29.jpg",
        _id: uuid()
    },
    {
        time: "7:41.50",
        vehicle: "Chevrolet Corvette C6 ZR1",
        driver: "Sascha Bert",
        date: "November 2010",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chevrolet_Corvette_Z06_-_Flickr_-_Alexandre_Pr%C3%A9vot_%287%29_%28cropped%29.jpg/480px-Chevrolet_Corvette_Z06_-_Flickr_-_Alexandre_Pr%C3%A9vot_%287%29_%28cropped%29.jpg",
        _id: uuid()
    },
    {
        time: "7:42",
        vehicle: "Porsche 911 GT3 (997)",
        driver: "Walter Röhrl",
        date: "",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Porsche_911_992_GT3.jpg/480px-Porsche_911_992_GT3.jpg",
        _id: uuid()
    },
    {
        time: "7:42",
        vehicle: "Lamborghini Murciélago SuperVeloce LP670-4",
        driver: "Horst von Saurma",
        date: "",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2840%29.jpg/480px-Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2840%29.jpg",
        _id: uuid()
    },
    {
        time: "7:42.34",
        vehicle: "Porsche Taycan Turbo",
        driver: "Lars Kern",
        date: "August 2019",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/2020_Porsche_Taycan_4S_79kWh_Front.jpg/480px-2020_Porsche_Taycan_4S_79kWh_Front.jpg",
        _id: uuid()
    },
    {
        time: "7:42.39",
        vehicle: "Porsche Cayman GT4 (981)",
        driver: "Christian Gebhardt",
        date: "April 2015",
        tires: "Michelin Pilot Sport Cup 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Porsche_Cayman_GT4_%2829329465566%29_%28cropped%29.jpg/480px-Porsche_Cayman_GT4_%2829329465566%29_%28cropped%29.jpg",
        _id: uuid()
    },
    {
        time: "7:43.8",
        vehicle: "Honda Civic Type R (FK8)",
        driver: "",
        date: "April 2017",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Honda_Civic_Type_R_%28FK%3B_France%29_front_view.jpg/480px-Honda_Civic_Type_R_%28FK%3B_France%29_front_view.jpg",
        _id: uuid()
    },
    {
        time: "7:43.65",
        vehicle: "Nissan GT-R",
        driver: "Sascha Bert",
        date: "November 2010",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg/480px-2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg",
        _id: uuid()
    },
    {
        time: "7:43.92",
        vehicle: "Aston Martin V8 Vantage (2019)",
        driver: "Christian Gebhardt",
        date: "August 14 2019",
        tires: "Pirelli P Zero A6A",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/2019_Aston_Martin_Vantage_V8_Automatic_4.0_%281%29.jpg/480px-2019_Aston_Martin_Vantage_V8_Automatic_4.0_%281%29.jpg",
        _id: uuid()
    },
    {
        time: "7:44",
        vehicle: "Audi R8 Coupé 5.2 FSI quattro",
        driver: "",
        date: "",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/R8_Coupe_V10_performance-1.jpg/480px-R8_Coupe_V10_performance-1.jpg",
        _id: uuid()
    },
    {
        time: "7:44",
        vehicle: "Pagani Zonda S 7.3 (2002)",
        driver: "Horst von Saurma",
        date: "2002",
        tires: "Michelin Pilot Sport",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pagani_Zonda_C12_%27chassis_001%27_Genf_2019_1Y7A5539.jpg/480px-Pagani_Zonda_C12_%27chassis_001%27_Genf_2019_1Y7A5539.jpg",
        _id: uuid()
    },
    {
        time: "7:44",
        vehicle: "Bugatti EB110 SS",
        driver: "Loris Bicocchi",
        date: "1993",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bugatti_EB110_-_Flickr_-_Supermac1961.jpg/480px-Bugatti_EB110_-_Flickr_-_Supermac1961.jpg",
        _id: uuid()
    },
    {
        time: "7:44.13",
        vehicle: "Mercedes-AMG C 63 S Coupé (W205)",
        driver: "Christian Gebhardt",
        date: "2019",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Mercedes-Benz_C_200_Avantgarde_%28W_205%29_%E2%80%93_Frontansicht%2C_26._April_2014%2C_D%C3%BCsseldorf.jpg/480px-Mercedes-Benz_C_200_Avantgarde_%28W_205%29_%E2%80%93_Frontansicht%2C_26._April_2014%2C_D%C3%BCsseldorf.jpg",
        _id: uuid()
    },
    {
        time: "7:44.42",
        vehicle: "Mercedes-Benz SLS AMG",
        driver: "Sascha Bert",
        date: "November 2010",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg/480px-Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg",
        _id: uuid()
    },
    {
        time: "7:45.19",
        vehicle: "Mercedes-AMG E63 S 4Matic+ (T-Modell Wagon)",
        driver: "Christian Gebhardt",
        date: "September 22 2017",
        tires: "Michelin Pilot Sport 4S",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/2020-09-22_MB-E200_W213-Frontseite-MOPF.jpg/480px-2020-09-22_MB-E200_W213-Frontseite-MOPF.jpg",
        _id: uuid()
    },
    {
        time: "7:46",
        vehicle: "Mercedes-Benz C 63 AMG Coupe Black Series",
        driver: "Horst von Saurma",
        date: "2011",
        tires: "Dunlop Sport Maxx Race M0",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Mercedes-Benz_C_200_CDI_BlueEFFICIENCY_Elegance_%28W_204%29_%E2%80%93_Frontansicht%2C_13._Mai_2011%2C_Velbert.jpg/480px-Mercedes-Benz_C_200_CDI_BlueEFFICIENCY_Elegance_%28W_204%29_%E2%80%93_Frontansicht%2C_13._Mai_2011%2C_Velbert.jpg",
        _id: uuid()
    },
    {
        time: "7:46",
        vehicle: "Porsche 911 GT2 (1999)",
        driver: "Horst von Saurma",
        date: "",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Porsche_991_GT2_RS_%2841654760692%29.jpg/480px-Porsche_991_GT2_RS_%2841654760692%29.jpg",
        _id: uuid()
    },
    {
        time: "7:46",
        vehicle: "Lamborghini Gallardo LP570-4 Superleggera",
        driver: "Horst von Saurma",
        date: "2007",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lamborghini_Gallardo_5.2_%2714_%289390031309%29.jpg/480px-Lamborghini_Gallardo_5.2_%2714_%289390031309%29.jpg",
        _id: uuid()
    },
    {
        time: "7:46.70",
        vehicle: "Porsche 718 Cayman S (982)",
        driver: "Christian Gebhardt",
        date: "September 2016",
        tires: "Pirelli P Zero N1",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Porsche_718_Boxster_Spyder_IMG_2961.jpg/480px-Porsche_718_Boxster_Spyder_IMG_2961.jpg",
        _id: uuid()
    },
    {
        time: "7:47",
        vehicle: "Porsche 911 GT3 RS (996)",
        driver: "Horst von Saurma",
        date: "2004",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Porsche_911_992_GT3.jpg/480px-Porsche_911_992_GT3.jpg",
        _id: uuid()
    },
    {
        time: "7:47",
        vehicle: "Ferrari 599 GTB Fiorano",
        driver: "Horst von Saurma",
        date: "2007",
        tires: "Pirelli P Zero",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ferrari599_A6_1.JPG/480px-Ferrari599_A6_1.JPG",
        _id: uuid()
    },
    {
        time: "7:47",
        vehicle: "Lamborghini Murciélago LP640",
        driver: "Horst von Saurma",
        date: "2006",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2840%29.jpg/480px-Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2840%29.jpg",
        _id: uuid()
    },
    {
        time: "7:47.19",
        vehicle: "Volkswagen Golf GTI Clubsport S (2016)",
        driver: "",
        date: "December 7 2016",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Volkswagen_Golf_VIII_IMG_3829.jpg/480px-Volkswagen_Golf_VIII_IMG_3829.jpg",
        _id: uuid()
    },
    {
        time: "7:48",
        vehicle: "BMW M3 GTS Coupé (E92, 2011)",
        driver: "Horst von Saurma",
        date: "2011",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/2008-2010_BMW_M3_%28E90%29_sedan_04.jpg/280px-2008-2010_BMW_M3_%28E90%29_sedan_04.jpg",
        _id: uuid()
    },
    {
        time: "7:48",
        vehicle: "Porsche 911 GT3 RS (997.1)",
        driver: "Horst von Saurma",
        date: "2007",
        tires: "Michelin Pilot Sport Cup",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Porsche_911_992_GT3.jpg/480px-Porsche_911_992_GT3.jpg",
        _id: uuid()
    },
    {
        time: "7:48",
        vehicle: "Porsche 911 GT3 (997.1)",
        driver: "Horst von Saurma",
        date: "2006",
        tires: "Michelin Pilot Sport Cup",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Porsche_911_992_GT3.jpg/480px-Porsche_911_992_GT3.jpg",
        _id: uuid()
    },
    {
        time: "7:48.13",
        vehicle: "Lotus Exige Cup 380 (2017)",
        driver: "Christian Gebhardt",
        date: "July 27 2017",
        tires: "Michelin Pilot Sport Cup 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Lotus_Exige_Sport_380.jpg/480px-Lotus_Exige_Sport_380.jpg",
        _id: uuid()
    },
    {
        time: "7:48.40",
        vehicle: "Audi TT RS (8S)",
        driver: "Christian Gebhardt",
        date: "May 17 2017",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Audi_TT_Coup%C3%A9_2.0_TFSI_quattro_S-line_%288S%29_%E2%80%93_Frontansicht%2C_3._April_2015%2C_D%C3%BCsseldorf.jpg/480px-Audi_TT_Coup%C3%A9_2.0_TFSI_quattro_S-line_%288S%29_%E2%80%93_Frontansicht%2C_3._April_2015%2C_D%C3%BCsseldorf.jpg",
        _id: uuid()
    },
    {
        time: "7:48.80",
        vehicle: "Mercedes-AMG A 45 S 4Matic+ (W177)",
        driver: "Christian Gebhardt",
        date: "October 24 2019",
        tires: "Pirelli P Zero Trofeo R MO1",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Mercedes-Benz_A_180_Progressive_%28W_177%29_%E2%80%93_f_16032019.jpg/480px-Mercedes-Benz_A_180_Progressive_%28W_177%29_%E2%80%93_f_16032019.jpg",
        _id: uuid()
    },
    {
        time: "7:49",
        vehicle: "Chevrolet Corvette C6 Z06",
        driver: "Horst von Saurma",
        date: "June 22 2007",
        tires: " Goodyear Eagle F1 Supercar EMT",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chevrolet_Corvette_Z06_-_Flickr_-_Alexandre_Pr%C3%A9vot_%287%29_%28cropped%29.jpg/480px-Chevrolet_Corvette_Z06_-_Flickr_-_Alexandre_Pr%C3%A9vot_%287%29_%28cropped%29.jpg",
        _id: uuid()
    },
    {
        time: "7:49.21",
        vehicle: "Volkswagen Golf GTI Clubsport S",
        driver: "Benny Leuchter",
        date: "April 20 2016",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Volkswagen_Golf_VIII_IMG_3829.jpg/480px-Volkswagen_Golf_VIII_IMG_3829.jpg",
        _id: uuid()
    },
    {
        time: "7:50",
        vehicle: "Aston Martin V8 Vantage GT8",
        driver: "Christian Gebhardt",
        date: "February 2017",
        tires: "Michelin Pilot Sport Cup 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/2017_Aston_Martin_V12_Vantage_S%2C_Jet_Black%2C_front_left.jpg/480px-2017_Aston_Martin_V12_Vantage_S%2C_Jet_Black%2C_front_left.jpg",
        _id: uuid()
    },
    {
        time: "7:50",
        vehicle: "BMW M3 CSL (E46, 2004)",
        driver: "Horst von Saurma",
        date: "2003",
        tires: "Michelin Pilot Sport Cup",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/BMW_M3_CSL_%284891564217%29.jpg/220px-BMW_M3_CSL_%284891564217%29.jpg",
        _id: uuid()
    },
    {
        time: "7:50",
        vehicle: "Porsche 911 Carrera S (997.2, 2009)",
        driver: "Horst von Saurma",
        date: "2008",
        tires: "Michelin Pilot Sport Cup N0",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg/480px-Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg",
        _id: uuid()
    },
    {
        time: "7:51",
        vehicle: "Mercedes-Benz SL65 AMG Black Series",
        driver: "",
        date: "2009",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mercedes_R230_front_20071102.jpg/480px-Mercedes_R230_front_20071102.jpg",
        _id: uuid()
    },
    {
        time: "7:51.7",
        vehicle: "Alfa Romeo Stelvio Quadrifoglio (2018)",
        driver: "Fabio Francia",
        date: "2017",
        tires: "Pirelli",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Alfa_Romeo_Stelvio_Suv_Free_Car_Picture_-_Give_Credit_Via_Link.%28cropped%29.jpg/480px-Alfa_Romeo_Stelvio_Suv_Free_Car_Picture_-_Give_Credit_Via_Link.%28cropped%29.jpg",
        _id: uuid()
    },
    {
        time: "7:51.8",
        vehicle: "Lamborghini Gallardo LP560-4",
        driver: "Horst von Saurma",
        date: "2008",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lamborghini_Gallardo_5.2_%2714_%289390031309%29.jpg/480px-Lamborghini_Gallardo_5.2_%2714_%289390031309%29.jpg",
        _id: uuid()
    },
    {
        time: "7:52",
        vehicle: "Aston Martin V12 Vantage S",
        driver: "Horst von Saurma",
        date: "2014",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/2017_Aston_Martin_V12_Vantage_S%2C_Jet_Black%2C_front_left.jpg/480px-2017_Aston_Martin_V12_Vantage_S%2C_Jet_Black%2C_front_left.jpg",
        _id: uuid()
    },
    {
        time: "7:52",
        vehicle: "BMW M4",
        driver: "Horst von Saurma",
        date: "2014",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/2016_BMW_M4_%28UK%29_front_view.jpg/480px-2016_BMW_M4_%28UK%29_front_view.jpg",
        _id: uuid()
    },
    {
        time: "7:52",
        vehicle: "Mercedes-Benz SLR McLaren",
        driver: "Klaus Ludwig",
        date: "2004",
        tires: "Michelin Pilot Sport 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mercedes-Benz_SLR_McLaren_%288615973055%29_%28cropped%29.jpg/480px-Mercedes-Benz_SLR_McLaren_%288615973055%29_%28cropped%29.jpg",
        _id: uuid()
    },
    {
        time: "7:52",
        vehicle: "Porsche Panamera Turbo S (970)",
        driver: "Horst von Saurma",
        date: "",
        tires: "Michelin Pilot Sport",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg/480px-Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg",
        _id: uuid()
    },
    {
        time: "7:52.17",
        vehicle: "Toyota GR Supra (A90/J29)",
        driver: "Christian Gebhardt",
        date: "August 22 2019",
        tires: "Michelin Pilot Sport",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/2020_Toyota_GR_Supra_%28United_States%29.png/480px-2020_Toyota_GR_Supra_%28United_States%29.png",
        _id: uuid()
    },
    {
        time: "7:52.36",
        vehicle: "BMW M2 Competition (F22)",
        driver: "Christian Gebhardt",
        date: "September 12 2018",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/BMW_M2_%28F87%29_2979cc_registered_July_2019.jpg/480px-BMW_M2_%28F87%29_2979cc_registered_July_2019.jpg",
        _id: uuid()
    },
    {
        time: "7:54",
        vehicle: "Nissan GT-R",
        driver: "",
        date: "September 2008",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg/480px-2017_Nissan_GT-R_Premium%2C_Front_Right%2C_07-12-2021.jpg",
        _id: uuid()
    },
    {
        time: "7:54",
        vehicle: "Porsche 911 GT3 (996)",
        driver: "Horst von Saurma",
        date: "2003",
        tires: "Michelin Pilot Sport N2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Porsche_911_992_GT3.jpg/480px-Porsche_911_992_GT3.jpg",
        _id: uuid()
    },
    {
        time: "7:54",
        vehicle: "Porsche 911 Turbo (997)",
        driver: "Horst von Saurma",
        date: "2007",
        tires: "Michelin Pilot Sport Cup N0",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg/480px-Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg",
        _id: uuid()
    },
    {
        time: "7:54",
        vehicle: "BMW M5 Competition (F10)",
        driver: "Horst von Saurma",
        date: "2014",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/BMW%2C_Techno_Classica_2018%2C_Essen_%28IMG_8995%29.jpg/480px-BMW%2C_Techno_Classica_2018%2C_Essen_%28IMG_8995%29.jpg",
        _id: uuid()
    },
    {
        time: "7:54.36",
        vehicle: "Renault Mégane RS 275 Trophy-R",
        driver: "Laurent Hurgon",
        date: "June 16 2014",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/2017_Renault_Megane_Dynamique_S_NAV_DC_1.5_Front.jpg/480px-2017_Renault_Megane_Dynamique_S_NAV_DC_1.5_Front.jpg",
        _id: uuid()
    },
    {
        time: "7:55",
        vehicle: "Mercedes-Benz E63 AMG S 4Matic",
        driver: "Horst von Saurma",
        date: "September 2013",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/2020-09-22_MB-E200_W213-Frontseite-MOPF.jpg/480px-2020-09-22_MB-E200_W213-Frontseite-MOPF.jpg",
        _id: uuid()
    },
    {
        time: "7:55",
        vehicle: "Caterham R500 Superlight",
        driver: "Robert Nearn",
        date: "",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Caterham_R300.jpg/225px-Caterham_R300.jpg",
        _id: uuid()
    },
    {
        time: "7:55",
        vehicle: "Ferrari F430 F1",
        driver: "Horst von Saurma",
        date: "2005",
        tires: "Pirelli P Zero Corsa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ferrari_F430_front_20080605.jpg/480px-Ferrari_F430_front_20080605.jpg",
        _id: uuid()
    },
    {
        time: "7:55.12",
        vehicle: "Renault Mégane R.S. Trophy-R (No. 25 of 500)",
        driver: "Christian Gebhardt",
        date: "2019",
        tires: "Bridgestone Potenza S007 RS",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/2017_Renault_Megane_Dynamique_S_NAV_DC_1.5_Front.jpg/280px-2017_Renault_Megane_Dynamique_S_NAV_DC_1.5_Front.jpg",
        _id: uuid()
    },
    {
        time: "7:56",
        vehicle: "Chevrolet Corvette C5 Z06",
        driver: "Dave Hill",
        date: "2019",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Chevrolet_Corvette_C5.jpg/480px-Chevrolet_Corvette_C5.jpg",
        _id: uuid()
    },
    {
        time: "7:56",
        vehicle: "Porsche 911 Turbo (996)",
        driver: "Horst von Saurma",
        date: "2019",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg/480px-Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg",
        _id: uuid()
    },
    {
        time: "7:56",
        vehicle: "Ferrari 360 Challenge Stradale F1",
        driver: "Horst von Saurma",
        date: "",
        tires: "Sport",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ferrari_360_Modena_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2826%29_%28cropped%29.jpg/480px-Ferrari_360_Modena_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2826%29_%28cropped%29.jpg",
        _id: uuid()
    },
    {
        time: "7:56.73",
        vehicle: "Honda NSX-R (NA2)",
        driver: "Motoharu Kurosawa",
        date: "2002",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ferrari_360_Modena_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2826%29_%28cropped%29.jpg/480px-Ferrari_360_Modena_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2826%29_%28cropped%29.jpg",
        _id: uuid()
    },
    {
        time: "7:58",
        vehicle: "BMW M2 (F22)",
        driver: "",
        date: "December 2015",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/BMW_M2_%28F87%29_2979cc_registered_July_2019.jpg/480px-BMW_M2_%28F87%29_2979cc_registered_July_2019.jpg",
        _id: uuid()
    },
    {
        time: "7:58.4",
        vehicle: "SEAT León Mk3 Cupra",
        driver: "Jordi Gené",
        date: "March 2014",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/2020_SEAT_Leon_FR_TSi_Evo_1.5_Front.jpg/480px-2020_SEAT_Leon_FR_TSi_Evo_1.5_Front.jpg",
        _id: uuid()
    },
    {
        time: "7:59",
        vehicle: "Porsche 911 Carrera S (996)",
        driver: "Walter Röhrl",
        date: "",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg/480px-Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg",
        _id: uuid()
    },
    {
        time: "7:59.32",
        vehicle: "Cadillac CTS-V (2009)",
        driver: "John Heinricy",
        date: "May 9 2008",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/2008_Cadillac_CTS_--_NHTSA_1.jpg/480px-2008_Cadillac_CTS_--_NHTSA_1.jpg",
        _id: uuid()
    },
    {
        time: "7:59.74",
        vehicle: "Porsche Cayenne Turbo S (958.2)",
        driver: "",
        date: "",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Porsche_Cayenne%2C_IAA_2017_%281Y7A2256%29.jpg/480px-Porsche_Cayenne%2C_IAA_2017_%281Y7A2256%29.jpg",
        _id: uuid()
    },
    {
        time: "7:59.887",
        vehicle: "Nissan Skyline GT-R R33",
        driver: "Dirk Schoysman",
        date: "1996",
        tires: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Nissan_Skyline_GT-R_R34_V_Spec_II.jpg/480px-Nissan_Skyline_GT-R_R34_V_Spec_II.jpg",
        _id: uuid()
    },
]

carRouter
    .get("/", (req, res) =>{
        res.send(cars)
    })

    .post("/", (req, res) =>{
       const newCars = req.body
       newCars._id = uuid()
       cars.push(newCars)
       res.send("New Car Has Been Successfully Added.")
    })

module.exports = carRouter