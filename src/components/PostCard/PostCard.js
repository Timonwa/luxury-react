import React from "react";
import "./PostCard.scss";
import PostCardCarousel from "./PostCardCarousel";
import PostBadges from "../PostBadges/PostBadges";
import { FaToilet, FaBath, FaBed, FaCar } from "react-icons/fa";
import LikeButton from "../hooks/LikeButton/LikeButton";
import PostTags from "../hooks/PostTags/PostTags";
import PostCardTable from "../PostCardTable/PostCardTable";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch/useFetch";
import ApartmentReviews from "../ApartmentReviews/ApartmentReviews";

const PostCard = () => {
  const { id } = useParams();
  // const {
  // data: post,
  // isPending,
  // error,
  // } = useFetch("https://luxury-react-api.herokuapp.com/posts/" + id);
  // const {
  //   data: post,
  //   isPending,
  //   error,
  // } = useFetch("http://localhost:3000/posts/" + id);

  const posts = [
    {
      id: 1,
      postId: "01-01-10020201345",
      agent: "Peculiar Ekom",
      date: "10/02/2020",
      name: "Ajoke Hostel",
      verified: false,
      images: [
        "https://i.ibb.co/gvjf1YZ/blake-woolwine-lz9-W775o-Dy-I-unsplash-1.jpg",
        "https://i.ibb.co/NYr2kkN/filios-sazeides-i-E48-PAk-Yy0w-unsplash.jpg",
        "https://i.ibb.co/dKw63Gz/vincent-erhart-4-HGZ2-Ujt-Vx-E-unsplash.jpg",
      ],
      title: "Ajoke 4man room female hostel",
      location: "Abule Oja, Yaba, Lagos",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iure atque animi? Odio doloribus sint dolorem harum atque nobis repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit, aliquid deleniti totam repellendus ab obcaecati dolorem nostrum distinctio quisquam. Id!",
      features: {
        type: "hostel",
        person_per_room: "4",
        gender: "female",
        serviced_apartment: "Yes",
        duration: "per school session",
        price: "200,000",
        installments: "No",
        slots: "12",
        room: "1",
        kitchen: "1",
        toilet: "1",
        bathroom: "1",
        bedroom: "1",
        car_space: "0",
        security: "Yes",
        electricity: "Yes",
        water: "Yes",
        common_room: "No",
        bed: "Yes",
        mattress: "No",
        cupboard: "No",
        wardrobe: "Yes",
        gas: "No",
        gen: "Yes",
        fan: "Yes",
        ac: "Yes",
        cleaning: "No",
        laundry: "No",
        visitation: "Visitations Allowed",
        tv: "No",
        cable_tv: "No",
        car_park: "No",
        wifi: "No",
        inspection_days: ["Mon", "Weds", "Thurs"],
        inspection_hours: ["10am", "3pm"],
        road_proximity: "5",
        market_proximity: "5",
        school_proximity: "5",
      },
      tags: [
        "hostel",
        "abule oja",
        "female",
        "4man",
        "serviced apartment",
        "yaba",
      ],
      reviews: [
        {
          id: 1,
          ratings: 4,
          userName: "Evelyn Omor",
          date: "Jan 6th, 2021",
          review:
            "Lorem ipsum dolor sit amet consectetu adipis, accusantium magnam laborum ducimus corrupti inventore illum a!",
        },
        {
          id: 2,
          ratings: 5,
          userName: "Bridget Oromosele",
          date: "Jan 27th, 2021",
          review:
            "Lorem ipsum dolor sit amet consectetu adipis, accusantium magnam laborum ducimus corrupti inventore illum a!",
        },
      ],
    },
    {
      id: 2,
      postId: "02-01-100220200530",
      agent: "Bolatito Coker",
      date: "10/02/2020",
      name: "2 Bedroom Apartment",
      verified: false,
      images: [
        "https://i.ibb.co/txC3MRJ/im3rd-media-FJZt-Zld-A-u-E-unsplash.jpg",
        "https://i.ibb.co/vxKHvYb/immo-renovation-iu3-Qq5-Hwq5-E-unsplash.jpg",
        "https://i.ibb.co/vv0n9cd/immo-renovation-Akuk-CPhi-Mx-M-unsplash.jpg",
        "https://i.ibb.co/NnNNpDj/point3d-commercial-imaging-ltd-pu-Siz-Vhq-ZYw-unsplash.jpg",
      ],
      title: "2 bedroom apartment ensuite",
      location: "Bariga, Yaba, Lagos",
      description:
        "Lorem ipsum dolor sit amet , adipisicing elit. Nihil iure atque animi? Odio doloribus sint dolorem harum atque nobis repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptateati dolorem nostrum distinctio quisquam. Id!",
      features: {
        type: "apartment",
        person_per_room: "-",
        gender: "unisex",
        serviced_apartment: "No",
        duration: "per year",
        price: "500,000",
        installments: "No",
        slots: "-",
        room: "3",
        kitchen: "1",
        toilet: "3",
        bathroom: "2",
        bedroom: "2",
        car_space: "1",
        security: "No",
        electricity: "Yes",
        water: "Yes",
        common_room: "-",
        bed: "No",
        mattress: "No",
        cupboard: "Yes",
        wardrobe: "Yes",
        gas: "No",
        gen: "No",
        fan: "No",
        ac: "Yes",
        cleaning: "-",
        laundry: "-",
        visitation: "-",
        tv: "No",
        cable_tv: "No",
        car_park: "Yes",
        wifi: "No",
        inspection_days: ["Mon", "Tues", "Weds", "Thurs", "Fri"],
        inspection_hours: ["12pm", "4pm"],
        road_proximity: "5",
        market_proximity: "5",
        school_proximity: "-",
      },
      tags: ["apartment", "bariga", "female", "male", "2 bedroom", "yaba"],
      reviews: [],
    },
    {
      id: 3,
      postId: "02-02-010320211221",
      agent: "Bolatito Coker",
      date: "01/03/2021",
      name: "Studio Apartment",
      verified: false,
      images: [
        "https://i.ibb.co/tYMqNH9/adam-winger-VGs8z60y-T2c-unsplash.jpg",
      ],
      title: "1room studio apartment",
      location: "Alagomeji Lagos",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iure adipisicing elit. Rerum, voluptatem nesciunt molestias modi voluptates atque sed quas maxime tenetur aliquid deleniti totam repellendus ab obcaecati dolorem nostrum distinctio quisquam. Id!",
      features: {
        type: "apartment",
        person_per_room: "-",
        gender: "unisex",
        serviced_apartment: "No",
        duration: "per year",
        price: "450,000",
        installments: "No",
        slots: "3",
        room: "1",
        kitchen: "1",
        toilet: "1",
        bathroom: "1",
        bedroom: "1",
        car_space: "1",
        security: "No",
        electricity: "Yes",
        water: "Yes",
        common_room: "No",
        bed: "No",
        mattress: "No",
        cupboard: "Yes",
        wardrobe: "Yes",
        gas: "No",
        gen: "No",
        fan: "Yes",
        ac: "No",
        cleaning: "No",
        laundry: "No",
        visitation: "-",
        tv: "No",
        cable_tv: "No",
        car_park: "No",
        wifi: "No",
        inspection_days: ["Mon", "Tues", "Thurs"],
        inspection_hours: ["9am", "12pm"],
        road_proximity: "5",
        market_proximity: "3",
        school_proximity: "-",
      },
      tags: ["selfcon", "akoka", "female", "male", "1 room", "somolu"],
      reviews: [],
    },
    {
      id: 4,
      postId: "03-01-210320210630",
      agent: "Babatunde Oladipupo",
      date: "21/03/2021",
      name: "Grey Hostel",
      verified: true,
      images: [
        "https://i.ibb.co/LSLrtjr/blake-woolwine-9bq7-0nvz-Xs-unsplash-1.jpg",
        "https://i.ibb.co/NYr2kkN/filios-sazeides-i-E48-PAk-Yy0w-unsplash.jpg",
        "https://i.ibb.co/dKw63Gz/vincent-erhart-4-HGZ2-Ujt-Vx-E-unsplash.jpg",
      ],
      title: "Grey Hostel serviced apartment 2man room",
      location: "Akoka road, Yaba, Lagos",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iure atque animi? Odio doloribus sint dolorem harum atque nobis repelletes atque sed quas maxime tenetur aliquid deleniti totam repellendus ab obcaecati dolorem nostrum distinctio quisquam. Id!",
      features: {
        type: "hostel",
        person_per_room: "2",
        gender: "female",
        serviced_apartment: "Yes",
        duration: "per school session",
        price: "300,000",
        installments: "2",
        slots: "5",
        room: "1",
        kitchen: "1",
        toilet: "1",
        bathroom: "1",
        bedroom: "1",
        car_space: "0",
        security: "Yes",
        electricity: "Yes",
        water: "Yes",
        common_room: "No",
        bed: "Yes",
        mattress: "No",
        cupboard: "Yes",
        wardrobe: "Yes",
        gas: "Yes",
        gen: "Yes",
        fan: "Yes",
        ac: "Yes",
        cleaning: "Yes",
        laundry: "Yes",
        visitation: "Visitations Allowed",
        tv: "Yes",
        cable_tv: "Yes",
        car_park: "Yes",
        wifi: "No",
        inspection_days: ["Mon", "Thurs"],
        inspection_hours: ["12pm", "2pm"],
        road_proximity: "5",
        market_proximity: "5",
        school_proximity: "4",
      },
      tags: ["hostel", "akoka", "female", "2man", "serviced apartment", "yaba"],
      reviews: [
        {
          id: 1,
          ratings: 5,
          userName: "Bolanle Wura",
          date: "July 19th, 2021",
          review:
            "Lorem ipsum dolor sit amet consectetu adipis, accusantium magnam laborum ducimus corrupti inventore illum a!",
        },
        {
          id: 2,
          ratings: 5,
          userName: "Agu Stella",
          date: "Aug 27th, 2021",
          review:
            "Lorem ipsum dolor sit amet com  repelletes atque sed quas maxime tenetur aliquid laborum ducimus corrupti inventore illum a!",
        },
        {
          id: 3,
          ratings: 5,
          userName: "Agu Tracy",
          date: "Aug 27th, 2021",
          review:
            "Lorem ipsum dolor sit amet com laborum ducimus corrupti inventore illum a. Lorem ipsum dolor sit amet com laborum!",
        },
        {
          id: 4,
          ratings: 5,
          userName: "Olawole Bello",
          date: "Aug 27th, 2021",
          review: "Lorem ipsum dolor sit amet dolor sit amet com laborum!",
        },
      ],
    },
    {
      id: 5,
      postId: "03-02-210320210635",
      agent: "Babatunde Oladipupo",
      date: "21/03/2021",
      name: "Grey Hostel",
      verified: true,
      images: [
        "https://i.ibb.co/BV4zdmj/marcus-loke-WQJv-WU-HZFo-unsplash.jpg",
        "https://i.ibb.co/HHyLGGF/im3rd-media-dn5-Vih-Vxloc-unsplash.jpg",
        "https://i.ibb.co/RbxycY7/andrea-davis-5-FUVoost-Mmo-unsplash.jpg",
      ],
      title: "Grey Hostel serviced apartment 4man room",
      location: "Akoka road, Yaba, Lagos",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iure atque animi? Odio doloribus sint dolorem harum atque nobis repelletes atque sed quas maxime tenetur aliquid deleniti totam repellendus ab obcaecati dolorem nostrum distinctio quisquam. Id!",
      features: {
        type: "hostel",
        person_per_room: "4",
        gender: "female",
        serviced_apartment: "Yes",
        duration: "per school session",
        price: "200,000",
        installments: "2",
        slots: "10",
        room: "1",
        kitchen: "1",
        toilet: "1",
        bathroom: "1",
        bedroom: "1",
        car_space: "1",
        security: "Yes",
        electricity: "Yes",
        water: "Yes",
        common_room: "No",
        bed: "Yes",
        mattress: "No",
        cupboard: "No",
        wardrobe: "Yes",
        gas: "Yes",
        gen: "Yes",
        fan: "Yes",
        ac: "Yes",
        cleaning: "Yes",
        laundry: "No",
        visitation: "Visitations Allowed",
        tv: "Yes",
        cable_tv: "Yes",
        car_park: "Yes",
        wifi: "No",
        inspection_days: ["Mon", "Thurs"],
        inspection_hours: ["12pm", "2pm"],
        road_proximity: "5",
        market_proximity: "5",
        school_proximity: "4",
      },
      tags: ["hostel", "akoka", "female", "4man", "serviced apartment", "yaba"],
      reviews: [
        {
          id: 1,
          ratings: 5,
          userName: "Abiola Bello",
          date: "March 19th, 2021",
          review:
            "Lorem ipsum dolor sit amet consectetu adipis, accusantium magnam laborum ducimus corrupti inventore illum a!",
        },
        {
          id: 2,
          ratings: 5,
          userName: "Omolara Fakeye",
          date: "May 20th, 2021",
          review:
            "Lorem ipsum dolor sit amet com  repelletes atque sed quas maxime tenetur aliquid laborum ducimus corrupti inventore illum a!",
        },
        {
          id: 3,
          ratings: 3,
          userName: "Agu Tracy",
          date: "Aug 27th, 2021",
          review:
            "Lorem ipsum dolor sit amet com laborum ducimus corrupti inventore illum a. Lorem ipsum dolor sit amet com laborum!",
        },
        {
          id: 4,
          ratings: 4,
          userName: "Amaeze Glory",
          date: "Sept 1st, 2021",
          review: "Lorem ipsum dolor sit amet dolor sit amet com laborum!",
        },
      ],
    },
    {
      id: 6,
      postId: "03-03-210320210640",
      agent: "Babatunde Oladipupo",
      date: "21/03/2021",
      name: "Grey Hostel",
      verified: true,
      images: [
        "https://i.ibb.co/TmvCtD3/francesca-tosolini-w1-RE0l-Bb-REo-unsplash.jpg",
        "https://i.ibb.co/6n3FsLc/evy-prentice-r-Je9rk-Ov-BWY-unsplash-1.jpg",
        "https://i.ibb.co/JjB6nCx/jan-antonin-kolar-x-Xc7z-UKIh-Rw-unsplash.jpg",
      ],
      title: "Grey Hostel serviced apartment 1man room",
      location: "Akoka road, Yaba, Lagos",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iure atque animi? Odio doloribus sint dolorem harum atque nobis repelletes atque sed quas maxime tenetur aliquid deleniti totam repellendus ab obcaecati dolorem nostrum distinctio quisquam. Id!",
      features: {
        type: "hostel",
        person_per_room: "1",
        gender: "female",
        serviced_apartment: "Yes",
        duration: "per school session",
        price: "450,000",
        installments: "2",
        slots: "4",
        room: "1",
        kitchen: "1",
        toilet: "1",
        bathroom: "1",
        bedroom: "1",
        car_space: "1",
        security: "Yes",
        electricity: "Yes",
        water: "Yes",
        common_room: "No",
        bed: "Yes",
        mattress: "Yes",
        cupboard: "Yes",
        wardrobe: "Yes",
        gas: "Yes",
        gen: "Yes",
        fan: "Yes",
        ac: "Yes",
        cleaning: "Yes",
        laundry: "Yes",
        visitation: "Visitations Allowed",
        tv: "Yes",
        cable_tv: "Yes",
        car_park: "Yes",
        wifi: "No",
        inspection_days: ["Mon", "Thurs"],
        inspection_hours: ["12pm", "2pm"],
        road_proximity: "5",
        market_proximity: "5",
        school_proximity: "4",
      },
      tags: ["hostel", "akoka", "female", "1man", "serviced apartment", "yaba"],
      reviews: [
        {
          id: 1,
          ratings: 5,
          userName: "Brandon Coco",
          date: "July 19th, 2021",
          review:
            "Lorem ipsum dolor sit amet consectetu, accusantium magnam laborum ducimus corrupti inventore illum a!",
        },
      ],
    },
    {
      id: 7,
      postId: "04-01-210320211203",
      agent: "Jide Sanwolu",
      date: "21/03/2021",
      name: "Kings Lodge",
      verified: true,
      images: [
        "https://i.ibb.co/CQrb0B2/adam-winger-Ott-UMTiv-RVc-unsplash.jpg",
        "https://i.ibb.co/0fPK7FJ/adam-winger-PCDl-E94-Jjc-I-unsplash.jpg",
        "https://i.ibb.co/4jbJjFP/adam-winger-JBye-WNMdfo-Y-unsplash.jpg",
        "https://i.ibb.co/SnM8HLY/adam-winger-p-Ea-BEq-XXk-M-unsplash.jpg",
        "https://i.ibb.co/B6FrQgd/adam-winger-sqc9yv6iue-E-unsplash.jpg",
        "https://i.ibb.co/pxwJ5Nv/francesca-tosolini-FX1-Eb-T-j-KBQ-unsplash.jpg",
      ],
      title: "Kings Lodge serviced apartment 2 bedroom",
      location: "2 Brandon Road, Ikoyi Lagos",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iure atque animi? Odio dolor sit amet consectetur adipisicing elit. Rerum, voluptatem nesciunt molestias modi aliquid deleniti totam repellendus ab obcaecati dolorem nostrum distinctio quisquam. Id!",
      features: {
        type: "apartment",
        person_per_room: "2",
        gender: "unisex",
        serviced_apartment: "Yes",
        duration: "per month",
        price: "40,000",
        installments: "No",
        slots: "-",
        room: "3",
        kitchen: "1",
        toilet: "3",
        bathroom: "2",
        bedroom: "2",
        car_space: "2",
        security: "Yes",
        electricity: "Yes",
        water: "Yes",
        common_room: "No",
        bed: "Yes",
        mattress: "Yes",
        cupboard: "Yes",
        wardrobe: "Yes",
        gas: "Yes",
        gen: "Yes",
        fan: "No",
        ac: "Yes",
        cleaning: "Yes",
        laundry: "Yes",
        visitation: "Visitations Allowed",
        tv: "Yes",
        cable_tv: "Yes",
        car_park: "Yes",
        wifi: "Yes",
        inspection_days: ["-"],
        inspection_hours: ["-"],
        road_proximity: "5",
        market_proximity: "-",
        school_proximity: "-",
      },
      tags: ["apartment", "ikoyi", "serviced apartment", "2 bedroom"],
      reviews: [
        {
          id: 1,
          ratings: 5,
          userName: "Bolanle Wura",
          date: "March 19th, 2021",
          review:
            "Lorem ipsum dolor sit amet consectetu adipis, accusantium magnam laborum ducimus corrupti inventore illum a!",
        },
        {
          id: 2,
          ratings: 5,
          userName: "Ndubuisi Steven",
          date: "March 27th, 2021",
          review:
            "Lorem ipsum dolor sit amet com  repelletes atque sed quas maxime tenetur aliquid laborum ducimus corrupti inventore illum a!",
        },
        {
          id: 3,
          ratings: 5,
          userName: "Agu Tracy",
          date: "April 27th, 2021",
          review:
            "Lorem ipsum dolor sit amet com laborum ducimus corrupti inventore illum a. Lorem ipsum dolor sit amet com laborum!",
        },
        {
          id: 4,
          ratings: 4,
          userName: "Kole Badmus",
          date: "Aug 27th, 2021",
          review: "Lorem ipsum dolor sit amet dolor sit amet com laborum!",
        },
        {
          id: 5,
          ratings: 3,
          userName: "Bidemi Amos",
          date: "Aug 30th, 2021",
          review:
            "Lorem ipsum dolor sit amet dolor sit amet com laborum! Rerum, voluptatem nesciunt molestias modi aliquid.",
        },
      ],
    },
    {
      id: 8,
      postId: "05-01-020420212304",
      agent: "Bode Bankole",
      date: "02/04/2021",
      name: "Roommate needed selfcon",
      verified: false,
      images: [
        "https://i.ibb.co/8rkY5db/beazy-PK8-BLao-Aj-Ic-unsplash.jpg",
        "https://i.ibb.co/JjB6nCx/jan-antonin-kolar-x-Xc7z-UKIh-Rw-unsplash.jpg",
        "https://i.ibb.co/6n3FsLc/evy-prentice-r-Je9rk-Ov-BWY-unsplash-1.jpg",
      ],
      title: "Self contain shared apartment roommate needed",
      location: "Juwon street, Jibowu, Lagos",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iure atque animi? Odio dolor sit amet consectetur adipisicing elit. Rerum, voluptatem nesciunt molestias modi aliquid deleniti totam repellendus ab obcaecati dolorem nostrum distinctio quisquam. Id!",
      features: {
        type: "shared apartment",
        person_per_room: "2",
        gender: "male",
        serviced_apartment: "No",
        duration: "per year",
        price: "170,000",
        installments: "No",
        slots: "-",
        room: "1",
        kitchen: "1",
        toilet: "1",
        bathroom: "1",
        bedroom: "1",
        car_space: "0",
        security: "No",
        electricity: "Yes",
        water: "Yes",
        common_room: "No",
        bed: "No",
        mattress: "Yes",
        cupboard: "Yes",
        wardrobe: "Yes",
        gas: "No",
        gen: "No",
        fan: "Yes",
        ac: "No",
        cleaning: "No",
        laundry: "No",
        visitation: "-",
        tv: "No",
        cable_tv: "No",
        car_park: "Yes",
        wifi: "No",
        inspection_days: ["-"],
        inspection_hours: ["-"],
        road_proximity: "5",
        market_proximity: "-",
        school_proximity: "-",
      },
      tags: ["roommate needed", "jibowu", "shared apartment", "selfcon"],
      reviews: [],
    },
    {
      id: 9,
      postId: "02-03-3004202111240",
      agent: "Bolatito Coker",
      date: "30/04/2021",
      name: "3 Bedroom Apartment",
      verified: false,
      images: [
        "https://i.ibb.co/ry1Vr0k/point3d-commercial-imaging-ltd-n-Ql-VMCHPys-Y-unsplash.jpg",
        "https://i.ibb.co/Lx9gwmj/point3d-commercial-imaging-ltd-Wbm-X0pw-Au-I-unsplash.jpg",
        "https://i.ibb.co/vXL3MN9/point3d-commercial-imaging-ltd-SPnt9-Iz-T-ew-unsplash.jpg",
        "https://i.ibb.co/bmm58Tj/steven-ungermann-CVTm-LMv5o-G4-unsplash.jpg",
        "https://i.ibb.co/hMKCNvS/point3d-commercial-imaging-ltd-J7k-HP4-Dq-Mx-I-unsplash.jpg",
      ],
      title: "3 bedroom apartment",
      location: "2 Steven street, Lawanson Lagos",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iure atque animi? Odio dolor sit amet consectetur adipisicing elit. Rerum, voluptatem nesciunt molestias modi aliquid deleniti totam repellendus ab obcaecati dolorem nostrum distinctio quisquam. Id!",
      features: {
        type: "apartment",
        person_per_room: "-",
        gender: "-",
        serviced_apartment: "No",
        duration: "per year",
        price: "800,000",
        installments: "No",
        slots: "-",
        room: "4",
        kitchen: "1",
        toilet: "4",
        bathroom: "3",
        bedroom: "3",
        car_space: "2",
        security: "Yes",
        electricity: "Yes",
        water: "Yes",
        common_room: "-",
        bed: "-",
        mattress: "-",
        cupboard: "Yes",
        wardrobe: "Yes",
        gas: "-",
        gen: "-",
        fan: "-",
        ac: "Yes",
        cleaning: "Yes",
        laundry: "-",
        visitation: "-",
        tv: "-",
        cable_tv: "-",
        car_park: "Yes",
        wifi: "-",
        inspection_days: ["-"],
        inspection_hours: ["-"],
        road_proximity: "5",
        market_proximity: "-",
        school_proximity: "-",
      },
      tags: ["apartment", "lawanson", "surulere", "3 bedroom"],
      reviews: [],
    },
    {
      id: 10,
      postId: "01-02-250720211257",
      agent: "Peculiar Ekom",
      date: "25/07/2021",
      name: "Ajoke Hostel",
      verified: false,
      images: [
        "https://i.ibb.co/d2jKW32/alen-rojnic-T1-Yvmf4ole-Q-unsplash.jpg",
        "https://i.ibb.co/HHyLGGF/im3rd-media-dn5-Vih-Vxloc-unsplash.jpg",
        "https://i.ibb.co/RbxycY7/andrea-davis-5-FUVoost-Mmo-unsplash.jpg",
      ],
      title: "Ajoke male hostel 4man room",
      location: "Abule Oja, Yaba, Lagos",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iure atque animi? Odio dolor sit amet consectetur adipisicing elit. Rerum, voluptatem nesciunt molestias modi aliquid deleniti totam repellendus ab obcaecati dolorem nostrum distinctio quisquam. Id!",
      features: {
        type: "hostel",
        person_per_room: "4",
        gender: "male",
        serviced_apartment: "Yes",
        duration: "per school session",
        price: "200,000",
        installments: "No",
        slots: "15",
        room: "1",
        kitchen: "1",
        toilet: "1",
        bathroom: "1",
        bedroom: "1",
        car_space: "0",
        security: "Yes",
        electricity: "Yes",
        water: "Yes",
        common_room: "No",
        bed: "Yes",
        mattress: "No",
        cupboard: "No",
        wardrobe: "Yes",
        gas: "No",
        gen: "Yes",
        fan: "Yes",
        ac: "Yes",
        cleaning: "No",
        laundry: "No",
        visitation: "Visitations Allowed",
        tv: "No",
        cable_tv: "No",
        car_park: "No",
        wifi: "No",
        inspection_days: ["Mon", "Weds", "Thurs"],
        inspection_hours: ["10am", "3pm"],
        road_proximity: "5",
        market_proximity: "5",
        school_proximity: "5",
      },
      tags: [
        "hostel",
        "abule oja",
        "male",
        "4man",
        "serviced apartment",
        "yaba",
      ],
      reviews: [
        {
          id: 1,
          ratings: 4,
          userName: "John Gabriel",
          date: "Aug 6th, 2021",
          review:
            "Lorem ipsum dolor sit amet consectetu adipis, accusantium magnam laborum ducimus corrupti inventore illum a!",
        },
        {
          id: 2,
          ratings: 5,
          userName: "Ehi Oromosele",
          date: "Jan 27th, 2022",
          review:
            "Lorem ipsum dolor sit amet consectetu adipis, accusantium magnam laborum ducimus corrupti inventore illum a!",
        },
        {
          id: 3,
          ratings: 5,
          userName: "Alex Uzoma",
          date: "Jan 30th, 2022",
          review:
            "Lorem ipsum dolor sit amet consectetu, magnam laborum ducimus corrupti inventore illum a!",
        },
      ],
    },
    {
      id: 11,
      postId: "01-03-250720211415",
      agent: "Peculiar Ekom",
      date: "25/07/2021",
      name: "Ajoke Hostel",
      verified: false,
      images: [
        "https://i.ibb.co/d4ns3HW/dad-hotel-P6-B7y6-Gnyzw-unsplash.jpg",
        "https://i.ibb.co/NYr2kkN/filios-sazeides-i-E48-PAk-Yy0w-unsplash.jpg",
        "https://i.ibb.co/NYr2kkN/filios-sazeides-i-E48-PAk-Yy0w-unsplash.jpg",
      ],
      title: "Ajoke 2man room male hostel",
      location: "Abule Oja, Yaba, Lagos",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iure atque animi? Odio doloribus sint dolorem harum atque nobis repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit, aliquid deleniti totam repellendus ab obcaecati dolorem nostrum distinctio quisquam. Id!",
      features: {
        type: "hostel",
        person_per_room: "2",
        gender: "male",
        serviced_apartment: "Yes",
        duration: "per school session",
        price: "300,000",
        installments: "No",
        slots: "6",
        room: "1",
        kitchen: "1",
        toilet: "1",
        bathroom: "1",
        bedroom: "1",
        car_space: "0",
        security: "Yes",
        electricity: "Yes",
        water: "Yes",
        common_room: "No",
        bed: "Yes",
        mattress: "No",
        cupboard: "No",
        wardrobe: "Yes",
        gas: "No",
        gen: "Yes",
        fan: "Yes",
        ac: "Yes",
        cleaning: "No",
        laundry: "No",
        visitation: "Visitations Allowed",
        tv: "No",
        cable_tv: "No",
        car_park: "No",
        wifi: "No",
        inspection_days: ["Mon", "Weds", "Thurs"],
        inspection_hours: ["10am", "3pm"],
        road_proximity: "5",
        market_proximity: "5",
        school_proximity: "5",
      },
      tags: [
        "hostel",
        "abule oja",
        "male",
        "2man",
        "serviced apartment",
        "yaba",
      ],
      reviews: [
        {
          id: 1,
          ratings: 4,
          userName: "Bello Usman",
          date: "Oct 6th, 2021",
          review:
            "Lorem ipsum dolor sit amet consectetu adipis, accusantium magnam laborum ducimus corrupti inventore illum a!",
        },
        {
          id: 2,
          ratings: 5,
          userName: "Akanni Akande",
          date: "Nov 27th, 2021",
          review:
            "Lorem ipsum dolor sit amet accusantium magnam laborum ducimus corrupti inventore illum a!",
        },
        {
          id: 3,
          ratings: 3,
          userName: "Akanni Akande",
          date: "Dec 7th, 2021",
          review:
            "Lorem ipsum dolor sit amet consectetu adipis, accusantium ducimus corrupti inventore illum a!",
        },
        {
          id: 4,
          ratings: 4,
          userName: "Akanni Akande",
          date: "Jan 27th, 2022",
          review:
            "Lorem ipsum dolor sit amet  adipis, accusantium magnam laborum ducimus corrupti inventore illum a!",
        },
      ],
    },
    {
      id: 12,
      postId: "06-01-070820211415",
      agent: "Solomon Ndubuisi",
      date: "21/03/2021",
      name: "roomate needed",
      verified: false,
      images: [
        "https://i.ibb.co/vXmZkH7/sidekix-media-1v-Mz2-Mclr-M-unsplash.jpg",
        "https://i.ibb.co/Snd6Wg2/filmreal-studio-2mp-KOHm-4-J0-unsplash.jpg",
        "https://i.ibb.co/VtF1QsX/andrea-davis-Wj6o-ZNCAzs4-unsplash.jpg",
        "https://i.ibb.co/kKK1bgV/sidekix-media-7jl-VQPX8-PLE-unsplash.jpg",
      ],
      title: "roomates needed in 2 bedroom apartment",
      location: "2 Pele street, Akoka Lagos",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iure atque animi? Odio dolor sit amet consectetur adipisicing elit. Rerum, voluptatem nesciunt molestias modi aliquid deleniti totam repellendus ab obcaecati dolorem nostrum distinctio quisquam. Id!",
      features: {
        type: "shared apartment",
        person_per_room: "2",
        gender: "male",
        serviced_apartment: "No",
        duration: "per year",
        price: "150,000",
        installments: "No",
        slots: "2",
        room: "3",
        kitchen: "1",
        toilet: "2",
        bathroom: "2",
        bedroom: "2",
        car_space: "-",
        security: "Yes",
        electricity: "Yes",
        water: "Yes",
        common_room: "No",
        bed: "Yes",
        mattress: "Yes",
        cupboard: "Yes",
        wardrobe: "Yes",
        gas: "No",
        gen: "-",
        fan: "Yes",
        ac: "-",
        cleaning: "-",
        laundry: "-",
        visitation: "-",
        tv: "yes",
        cable_tv: "-",
        car_park: "Yes",
        wifi: "-",
        inspection_days: ["-"],
        inspection_hours: ["-"],
        road_proximity: "5",
        market_proximity: "-",
        school_proximity: "-",
      },
      tags: ["apartment", "akoka", "male", "shared apartment", "2 bedroom"],
      reviews: [],
    },
  ];
  const post = posts[id - 1];

  return (
    <>
      {/* {error && <div className="error">{error}</div>} */}
      {/* {isPending && <h3 className="loading">Loading...</h3>} */}
      {post && (
        <>
          <main className="post-section">
            <div className="post-section-wrapper">
              <div className="post-card">
                {/* <!-- name of the advert --> */}
                <div className="post-card-title">
                  <span>
                    <p>{post.name}</p>
                    <span className="price">{post.features.price}</span>
                  </span>
                  <span>
                    <p>Posted by {post.agent}</p>
                    <p>{post.date}</p>
                  </span>
                </div>
                <div className="post-card-image">
                  {/* <PostBadges /> */}
                  <PostBadges verified={post.verified} reviews={post.reviews} />
                  <PostCardCarousel images={post.images} />
                </div>
                <div className="post-card-features">
                  <div className="features-cntr">
                    <div className="feature">
                      <span>
                        {`${post.features.toilet} `}
                        <FaToilet className="feature-icon" />
                      </span>
                      <span>toilet</span>
                    </div>
                    <div className="feature">
                      <span>
                        {`${post.features.bathroom} `}
                        <FaBath className="feature-icon" />
                      </span>
                      <span>bathroom</span>
                    </div>
                    <div className="feature">
                      <span>
                        {`${post.features.bedroom} `}
                        <FaBed className="feature-icon" />
                      </span>
                      <span>bedroom</span>
                    </div>
                    <div className="feature">
                      <span>
                        {`${post.features.car_space} `}
                        <FaCar className="feature-icon" />
                      </span>
                      <span>car space</span>
                    </div>
                    {/* <!-- save button --> */}
                    <LikeButton />
                  </div>
                </div>
                <div className="post-card-body">
                  {/* <!-- title --> */}
                  <h4 className="post-title">{`${post.title} | ${post.location}`}</h4>

                  {/* <!-- price --> */}
                  <p className="ad-price">
                    <span className="price">{post.features.price}</span>
                    {` `}
                    {post.features.duration}
                  </p>
                  {/* <!-- description title --> */}
                  <h4 className="post-body-title">Property Description</h4>
                  {/* <!-- description  --> */}
                  <p className="post-body">{post.description}</p>
                </div>
                <PostCardTable features={post.features} />
                <PostTags tags={post.tags} />
              </div>

              <div className="post-cta-btns">
                {/* <!-- the chat with agent button --> */}
                <button className="cta-btn chat-btn" type="button">
                  <a href="https://example.com">Chat</a>
                </button>
                {/* <!-- the book a video call inspection button --> */}
                <button className="cta-btn video-btn" type="button">
                  <a href="https://example.com">Video Call</a>
                </button>
                {/* <!-- the book a physical inspection button --> */}
                <button className="cta-btn book-btn" type="button">
                  <a href="https://example.com">Book Inspection</a>
                </button>
              </div>
            </div>
          </main>
          <ApartmentReviews reviews={post.reviews} />
        </>
      )}
    </>
  );
};

export default PostCard;
