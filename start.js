/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/
const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

var UniqueProductCountobj = {};

getUniqueProductCount = () =>{
const uniqueItemsDiv = document.getElementById("unique-items-display-div")
for(let i = 0; i < listOfProducts.length; i++)
{
    const {productName} = listOfProducts[i];
    if(!UniqueProductCountobj[productName])
    {
        UniqueProductCountobj[productName] = 1;
    }
    else
    {
        UniqueProductCountobj[productName] += 1;
    }
}
// Adding products and it count in paragraph tag
for (const item in UniqueProductCountobj) {
	const para = document.createElement("p");
  para.innerText = item + " : " + UniqueProductCountobj[item]; 
  uniqueItemsDiv.append(para);
}
console.log(UniqueProductCountobj);
}


getUniquePrducts = () =>{
console.log(UniqueProductCountobj)
  const parentProductDiv = document.getElementById("unique-items-display-div-product-details");
	let uniqueProductsArray = [];
  let obj = {}
  for(let i = 0; i < listOfProducts.length; i++)
  {
  			const {productName} = listOfProducts[i];
  			if(!obj[productName])
    		{
        		obj[productName] = 1;
            uniqueProductsArray.push(listOfProducts[i]);
    		}
    		else
    		{
        	  obj[productName] += 1;
    		}	
  }
  //console.log(uniqueProductsArray);
	for(let i = 0; i < uniqueProductsArray.length; i++)
  {
    	 const productDetails = document.getElementById("product-details");
  	 	for(let keys in uniqueProductsArray[i])
      {
          const para = document.createElement("p");
          para.innerText = keys + ":" + uniqueProductsArray[i][keys];
          productDetails.append(para);
      }
     parentProductDiv.append(productDetails);
  }
}
//getUniquePrducts();