import { GET_RESTAURANT_LIST } from "../ListView";

export default [
  {
    request: {
      query: GET_RESTAURANT_LIST,
      variables: {
        location: "las vegas",
        limit: 20,
        categories: "Restaurants"
      }
    },
    result: {
      data: {
        search: {
          total: 4912,
          business: [
            {
              name: "Mon Ami Gabi",
              rating: 4,
              is_closed: false,
              price: "$$",
              categories: [
                {
                  title: "French",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Steakhouses",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Breakfast & Brunch",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.112859,
                longitude: -115.172434
              },
              photos: [
                "https://s3-media3.fl.yelpcdn.com/bphoto/ja1-oE6RiIWorNzty-A4Eg/o.jpg"
              ]
            },
            {
              name: "Yardbird Southern Table & Bar",
              rating: 4.5,
              is_closed: false,
              price: "$$",
              categories: [
                {
                  title: "Southern",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "American (New)",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.1223280184553,
                longitude: -115.170111842838
              },
              photos: [
                "https://s3-media1.fl.yelpcdn.com/bphoto/SjqX67pNUnPoyMsDNe6xzA/o.jpg"
              ]
            },
            {
              name: "Earl of Sandwich",
              rating: 4.5,
              is_closed: false,
              price: "$",
              categories: [
                {
                  title: "Sandwiches",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Salad",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Wraps",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.1094075,
                longitude: -115.1718738
              },
              photos: [
                "https://s3-media2.fl.yelpcdn.com/bphoto/snFM4hWY5Ivv_NbhWcXPgQ/o.jpg"
              ]
            },
            {
              name: "Egg & I",
              rating: 4.5,
              is_closed: false,
              price: "$$",
              categories: [
                {
                  title: "Breakfast & Brunch",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Burgers",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "American (Traditional)",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.1443697895445,
                longitude: -115.202492506843
              },
              photos: [
                "https://s3-media3.fl.yelpcdn.com/bphoto/tDnWv0HCj3YgRRIzLuMfww/o.jpg"
              ]
            },
            {
              name: "El Dorado Cantina",
              rating: 4.5,
              is_closed: false,
              price: "$$",
              categories: [
                {
                  title: "Mexican",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Desserts",
                  parent_categories: [
                    {
                      title: "Food"
                    }
                  ]
                },
                {
                  title: "Salad",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.135072,
                longitude: -115.171247
              },
              photos: [
                "https://s3-media3.fl.yelpcdn.com/bphoto/v7zjOwJ0rJCNg6ATTbJcuw/o.jpg"
              ]
            },
            {
              name: "Gordon Ramsay Hell's Kitchen",
              rating: 4.5,
              is_closed: false,
              price: "$$$",
              categories: [
                {
                  title: "American (New)",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.1157859554742,
                longitude: -115.17323
              },
              photos: [
                "https://s3-media4.fl.yelpcdn.com/bphoto/mFimEc6u8JCmbM5X1qgCeQ/o.jpg"
              ]
            },
            {
              name: "Mr Mamas",
              rating: 4.5,
              is_closed: false,
              price: "$",
              categories: [
                {
                  title: "Breakfast & Brunch",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "American (Traditional)",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Burgers",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.0864753723145,
                longitude: -115.225959777832
              },
              photos: [
                "https://s3-media1.fl.yelpcdn.com/bphoto/jcFwekQsVKpXleKqcWUu2Q/o.jpg"
              ]
            },
            {
              name: "Gangnam Asian BBQ Dining",
              rating: 4.5,
              is_closed: false,
              price: "$$",
              categories: [
                {
                  title: "Japanese",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Korean",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Barbeque",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.109315,
                longitude: -115.151063
              },
              photos: [
                "https://s3-media4.fl.yelpcdn.com/bphoto/SrM8q-cGpbX5RJUYiEFFrQ/o.jpg"
              ]
            },
            {
              name: "Nacho Daddy",
              rating: 4.5,
              is_closed: false,
              price: "$$",
              categories: [
                {
                  title: "American (New)",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Mexican",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Breakfast & Brunch",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.1080857621234,
                longitude: -115.17111089259
              },
              photos: [
                "https://s3-media4.fl.yelpcdn.com/bphoto/pu9doqMplB5x5SEs8ikW6w/o.jpg"
              ]
            },
            {
              name: "Rollin Smoke Barbeque",
              rating: 4.5,
              is_closed: false,
              price: "$$",
              categories: [
                {
                  title: "Barbeque",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Burgers",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Soul Food",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.131985,
                longitude: -115.177125
              },
              photos: [
                "https://s3-media3.fl.yelpcdn.com/bphoto/KngtUjVGEer36UU3sKi0dQ/o.jpg"
              ]
            },
            {
              name: "Oyster Bar",
              rating: 4.5,
              is_closed: false,
              price: "$$",
              categories: [
                {
                  title: "Seafood",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Bars",
                  parent_categories: [
                    {
                      title: "Nightlife"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.14295,
                longitude: -115.174937
              },
              photos: [
                "https://s3-media1.fl.yelpcdn.com/bphoto/7Rx_j6r85ufd8nOFc7u_fA/o.jpg"
              ]
            },
            {
              name: "Bacchanal Buffet",
              rating: 4,
              is_closed: false,
              price: "$$$",
              categories: [
                {
                  title: "Buffets",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.116113,
                longitude: -115.176222
              },
              photos: [
                "https://s3-media4.fl.yelpcdn.com/bphoto/T6p2zmAdERYge9RhYk2Y0Q/o.jpg"
              ]
            },
            {
              name: "Secret Pizza",
              rating: 4,
              is_closed: false,
              price: "$",
              categories: [
                {
                  title: "Pizza",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.109823,
                longitude: -115.176047
              },
              photos: [
                "https://s3-media2.fl.yelpcdn.com/bphoto/aUEiGRhpkJD9VCiVsCViNw/o.jpg"
              ]
            },
            {
              name: "Brew Tea Bar",
              rating: 5,
              is_closed: false,
              price: "$",
              categories: [
                {
                  title: "Tea Rooms",
                  parent_categories: [
                    {
                      title: "Food"
                    }
                  ]
                },
                {
                  title: "Bubble Tea",
                  parent_categories: [
                    {
                      title: "Food"
                    }
                  ]
                },
                {
                  title: "Desserts",
                  parent_categories: [
                    {
                      title: "Food"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.05421,
                longitude: -115.2422
              },
              photos: [
                "https://s3-media1.fl.yelpcdn.com/bphoto/8v1oA_tuILqW6hWKcFrJtA/o.jpg"
              ]
            },
            {
              name: "Hash House A Go Go",
              rating: 4,
              is_closed: false,
              price: "$$",
              categories: [
                {
                  title: "American (New)",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Breakfast & Brunch",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.1181806905551,
                longitude: -115.171579781293
              },
              photos: [
                "https://s3-media1.fl.yelpcdn.com/bphoto/Jc1gL11WLt-a4vDNEyT7MQ/o.jpg"
              ]
            },
            {
              name: "Carson Kitchen",
              rating: 4.5,
              is_closed: false,
              price: "$$",
              categories: [
                {
                  title: "American (New)",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Desserts",
                  parent_categories: [
                    {
                      title: "Food"
                    }
                  ]
                },
                {
                  title: "Cocktail Bars",
                  parent_categories: [
                    {
                      title: "Bars"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.1678783156885,
                longitude: -115.140640474856
              },
              photos: [
                "https://s3-media2.fl.yelpcdn.com/bphoto/0VrHwfDDG_6nzvvar0TR4A/o.jpg"
              ]
            },
            {
              name: "Joes Seafood Prime Steak & Stone Crab",
              rating: 4.5,
              is_closed: false,
              price: "$$$",
              categories: [
                {
                  title: "Seafood",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Steakhouses",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Wine Bars",
                  parent_categories: [
                    {
                      title: "Bars"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.119098,
                longitude: -115.173656
              },
              photos: [
                "https://s3-media1.fl.yelpcdn.com/bphoto/yv6j-8WjINHafebrmTw7PQ/o.jpg"
              ]
            },
            {
              name: "Tacos El Gordo",
              rating: 4,
              is_closed: false,
              price: "$",
              categories: [
                {
                  title: "Tacos",
                  parent_categories: [
                    {
                      title: "Mexican"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.1315942123034,
                longitude: -115.164766837504
              },
              photos: [
                "https://s3-media4.fl.yelpcdn.com/bphoto/KXhh6aAwCljschov68frTQ/o.jpg"
              ]
            },
            {
              name: "Sakana",
              rating: 4.5,
              is_closed: false,
              price: "$$",
              categories: [
                {
                  title: "Japanese",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Sushi Bars",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Buffets",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.1171507742866,
                longitude: -115.138436947621
              },
              photos: [
                "https://s3-media2.fl.yelpcdn.com/bphoto/0QQfUjFZuI18NDU2w_SXoQ/o.jpg"
              ]
            },
            {
              name: "Hobak Korean BBQ",
              rating: 4.5,
              is_closed: false,
              price: "$$",
              categories: [
                {
                  title: "Korean",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                },
                {
                  title: "Barbeque",
                  parent_categories: [
                    {
                      title: "Restaurants"
                    }
                  ]
                }
              ],
              coordinates: {
                latitude: 36.1260309581078,
                longitude: -115.221996888693
              },
              photos: [
                "https://s3-media2.fl.yelpcdn.com/bphoto/hMaXW3Jbg1cVzFV8QmQvJg/o.jpg"
              ]
            }
          ]
        }
      }
    }
  }
];
