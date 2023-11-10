import React from "react";
import ReactDOM from "react-dom/client";


const Title = ()=>{
    return <img className = "titleimg" src="https://scontent.fblr20-1.fna.fbcdn.net/v/t39.30808-6/307178056_179634744602095_8622766121324205517_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qqUcbnTSlNcAX-J9Pu1&_nc_ht=scontent.fblr20-1.fna&oh=00_AfCEudQVniJalMB9vfHcKcbp6SGb8dMfxFbSp2I9ly5TUA&oe=65500E78" alt="" />
}

const HeaderComponent = () => {
  return (
    <div className="head">
        <Title />
        <div className="navbar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>contact us</li>
                <li>dnt</li>
            </ul>
        </div>
    </div>
  )
};

const burgerKing = {
  name : "Burger King",
  rating: 4.7,
  cuisines:["Burger","sandwich"],
  image:"https://scontent.fblr20-1.fna.fbcdn.net/v/t39.30808-6/307178056_179634744602095_8622766121324205517_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qqUcbnTSlNcAX-J9Pu1&_nc_ht=scontent.fblr20-1.fna&oh=00_AfCEudQVniJalMB9vfHcKcbp6SGb8dMfxFbSp2I9ly5TUA&oe=65500E78"
}

const restoInfo= [
  {
    "info": {
      "id": "396422",
      "name": "EatFit - All Things Healthy",
      "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
      "locality": "Kalidasa Road",
      "areaName": "Jayalakhsmipuram",
      "costForTwo": "₹270 for two",
      "cuisines": [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "396422",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3600
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3600
      },
      "parentId": "76139",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 4.5,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "4.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "EVERY ITEM",
        "subHeader": "@ ₹149"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/eatfit-all-things-healthy-kalidasa-road-jayalakhsmipuram-mysore-396422",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "85267",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "Gokulam Main Road",
      "areaName": "Jayalakhsmipuram",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Fast Food",
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "85267",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3500
      },
      "parentId": "2",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 4.6,
        "serviceability": "SERVICEABLE",
        "slaString": "28 mins",
        "lastMileTravelString": "4.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-gokulam-main-road-jayalakhsmipuram-mysore-85267",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "299434",
      "name": "Mysuru Veg",
      "cloudinaryImageId": "yvcu1cazmxh9lr7kwxgq",
      "locality": "Krishna Vilas Road",
      "areaName": "Yadavgiri",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 3.8,
      "veg": true,
      "feeDetails": {
        "restaurantId": "299434",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2100
      },
      "parentId": "142815",
      "avgRatingString": "3.8",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 23:15:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mysuru-veg-krishna-vilas-road-yadavgiri-mysore-299434",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69915",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "f93uxiwvgyih0rmk6bi9",
      "locality": "Jhansi Rani Lakshmi Bai Road",
      "areaName": "Yadavgiri",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Sweets",
        "Chinese"
      ],
      "avgRating": 4.2,
      "veg": true,
      "feeDetails": {
        "restaurantId": "69915",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1700
      },
      "parentId": "22",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-jhansi-rani-lakshmi-bai-road-yadavgiri-mysore-69915",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "251793",
      "name": "Udupi Brahmins Cafe",
      "cloudinaryImageId": "w17gsvh8gfgcq6kjwcix",
      "locality": "Manathavdi Road",
      "areaName": "Vidyaranyapura",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese",
        "Biryani"
      ],
      "avgRating": 3.9,
      "veg": true,
      "feeDetails": {
        "restaurantId": "251793",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2100
      },
      "parentId": "218999",
      "avgRatingString": "3.9",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 21:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/udupi-brahmins-cafe-manathavdi-road-vidyaranyapura-mysore-251793",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "120905",
      "name": "Amrutha Veg Family Restaurant",
      "cloudinaryImageId": "s6s4etiyoqxblb6nhwcp",
      "locality": "Chamarajpura",
      "areaName": "Chamrajpura",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Chinese",
        "South Indian",
        "North Indian",
        "Beverages"
      ],
      "avgRating": 4.1,
      "veg": true,
      "feeDetails": {
        "restaurantId": "120905",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1700
      },
      "parentId": "21370",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/amrutha-veg-family-restaurant-chamarajpura-chamrajpura-mysore-120905",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69580",
      "name": "KFC",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "locality": "Garuda Mall",
      "areaName": "Mandi Mohalla",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "69580",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2000
      },
      "parentId": "547",
      "avgRatingString": "3.9",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "28 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-garuda-mall-mandi-mohalla-mysore-69580",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "99881",
      "name": "TKS Iyengar",
      "cloudinaryImageId": "drvxcx5czj4axtn9r0si",
      "locality": "Gokulam Main Road",
      "areaName": "Gokulam",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.4,
      "veg": true,
      "feeDetails": {
        "restaurantId": "99881",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3200
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3200
      },
      "parentId": "21414",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 4.5,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "4.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 21:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/tks-iyengar-main-road-gokulam-mysore-99881",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "437163",
      "name": "Nefty",
      "cloudinaryImageId": "eanrz1ryny92iyya3jny",
      "locality": "3rd Stage\n",
      "areaName": "Bogadi",
      "costForTwo": "₹198 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.5,
      "veg": true,
      "feeDetails": {
        "restaurantId": "437163",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3700
      },
      "parentId": "263795",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 5.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "5.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 16:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nefty-3rd-stage-bogadi-mysore-437163",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "80262",
      "name": "Ashirvaad Grand",
      "cloudinaryImageId": "c3u1umuncwau2mr2djcf",
      "locality": "Mysore Road",
      "areaName": "Bannimantap",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Desserts",
        "Chinese",
        "North Indian",
        "South Indian",
        "Ice Cream",
        "Biryani"
      ],
      "avgRating": 4.4,
      "veg": true,
      "feeDetails": {
        "restaurantId": "80262",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3200
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3200
      },
      "parentId": "20989",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 4.6,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "4.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ashirvaad-grand-road-bannimantap-mysore-80262",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "68504",
      "name": "TaajaTindi",
      "cloudinaryImageId": "uiqwfo1x2mtsgocwtjpi",
      "locality": "Kalidasa Road",
      "areaName": "Jayalakhsmipuram",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "South Indian",
        "Desserts"
      ],
      "avgRating": 4,
      "veg": true,
      "feeDetails": {
        "restaurantId": "68504",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3600
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3600
      },
      "parentId": "20997",
      "avgRatingString": "4.0",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 4.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "4.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/taajatindi-kalidasa-road-jayalakhsmipuram-mysore-68504",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "500320",
      "name": "Biryani By Kilo",
      "cloudinaryImageId": "bf9be1c6b9d796850f426281559cb2d2",
      "locality": "Adipampa Road",
      "areaName": "Jayalakhsmipuram",
      "costForTwo": "₹499 for two",
      "cuisines": [
        "Biryani",
        "Hyderabadi",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "500320",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2100
      },
      "parentId": "130",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 23:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/biryani-by-kilo-adipampa-road-jayalakhsmipuram-mysore-500320",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "68521",
      "name": "Dosa Point Since 1999",
      "cloudinaryImageId": "dgx1vvhixptrsxvtepze",
      "locality": "P and T Block",
      "areaName": "Kuvempunagar",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Desserts",
        "North Indian",
        "South Indian",
        "Biryani"
      ],
      "avgRating": 4.2,
      "veg": true,
      "feeDetails": {
        "restaurantId": "68521",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1700
      },
      "parentId": "418892",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 12:35:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dosa-point-since-1999-p-and-t-block-kuvempunagar-mysore-68521",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "549147",
      "name": "Keventers - Milkshakes & Desserts",
      "cloudinaryImageId": "cb8abe073bdea37ce7a3b78fff2be73e",
      "locality": "New Kantharaj Urs Road",
      "areaName": "Kuvempunagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Beverages",
        "Ice Cream",
        "Desserts",
        "Healthy Food"
      ],
      "avgRating": 4.3,
      "veg": true,
      "feeDetails": {
        "restaurantId": "549147",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2100
      },
      "parentId": "268997",
      "avgRatingString": "4.3",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-09 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-new-kantharaj-urs-road-kuvempunagar-mysore-549147",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "331897",
      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
      "cloudinaryImageId": "srurqig2fbgpdw7r2avr",
      "locality": "Vishveshwaranagar",
      "areaName": "Ittige Gudu",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "avgRating": 4.6,
      "veg": true,
      "feeDetails": {
        "restaurantId": "331897",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1700
      },
      "parentId": "582",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-vishveshwaranagar-ittige-gudu-mysore-331897",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "87311",
      "name": "Cafe Coffee Day",
      "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
      "locality": "Vishwamanava Double Road",
      "areaName": "Jayalakhsmipuram",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "87311",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2100
      },
      "parentId": "1",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 22:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-vishwamanava-double-road-jayalakhsmipuram-mysore-87311",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "361926",
      "name": "CakeZone",
      "cloudinaryImageId": "bbbeb027d65d881c3107b1b0c97ba1f5",
      "locality": "Double Road",
      "areaName": "Vishwamanava Double Road",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Sweets",
        "Ice Cream"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "361926",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2100
      },
      "parentId": "7003",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-09 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cakezone-double-road-vishwamanava-double-road-mysore-361926",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "185774",
      "name": "Sweet Truth - Cake and Desserts",
      "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
      "locality": "Kuvempu Nagar",
      "areaName": "Vivekananda Nagar",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Snacks",
        "Bakery",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "185774",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2100
      },
      "parentId": "4444",
      "avgRatingString": "4.2",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 2.9,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "2.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-kuvempu-nagar-vivekananda-nagar-mysore-185774",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "128816",
      "name": "Mysore Mylari",
      "cloudinaryImageId": "wtcomf1hb83tlhcd2qkw",
      "locality": "Udayaravi Road",
      "areaName": "Kuvempunagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "South Indian",
        "Ice Cream",
        "Biryani"
      ],
      "avgRating": 4.2,
      "veg": true,
      "feeDetails": {
        "restaurantId": "128816",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1700
      },
      "parentId": "21354",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹50 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mysore-mylari-udayaravi-road-kuvempunagar-mysore-128816",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "117066",
      "name": "Neelanjana Mahesh Prasad",
      "cloudinaryImageId": "jwrzrbxbxteg8mt0vn6f",
      "locality": "Vishwamanava Double Road",
      "areaName": "Kuvempunagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Desserts",
        "Chinese",
        "North Indian",
        "South Indian",
        "Ice Cream"
      ],
      "avgRating": 4.3,
      "veg": true,
      "feeDetails": {
        "restaurantId": "117066",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1700
      },
      "parentId": "21375",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-11-08 12:11:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "loyaltyDiscoverPresentationInfo": {
        "badgeType": "BADGE_TYPE_OFFER_PACK",
        "offerSubText": "with offer pack",
        "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/neelanjana-mahesh-prasad-vishwamanava-double-road-kuvempunagar-mysore-117066",
      "type": "WEBLINK"
    }
  }
]

const resutaCard = (x
  //{
  // name,
  // cuisines,
  // avgRating
//}
)=> (
  <div className="card" key={x.id}>
   <img className = "cardimg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660"+"/"+x.cloudinaryImageId} />
      <h2>{x.name}</h2>
      <h3>{x.cuisines.join(", ")}</h3>
      <h4>{x.avgRating}stars</h4>
  </div>
)



const FooterComponent = () => {
  return <h1>I'm a footer</h1>;
};

const BodyComponent = ()=>{
 return (   <div className="cards">
    {/* {ResutaCard(6)}
    {ResutaCard(7)}
    {ResutaCard(8)}
    {ResutaCard(9)} */}
    {
      restoInfo.map((restaurant)=>{
        return resutaCard(restaurant.info)
      })
    }
    </div>)
}

const Compo = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent/>
      <FooterComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("body"));

root.render(Compo())
