//Question 1

a = ["John" , "Celine" , "Bob" , "Sophie" , "Jack" ];
    
function rev_array(arr) {
    b = [];
    for (var i=arr.length ;i>=0 ;i--) {
        b.push(arr[i]);
    }
    console.log(b);
}

rev_array(a);


//Question 2

let COUNTRY = [

    {

        "name":"Norway",
        "capital":"abcd",
        "population":500

    },

    {

        "name":"Brazil",
        "capital":"efgh",
        "population":1000

    },

    {

        "name":"Canada",
        "capital":"ijkl",
        "population":1500

    },

    {

        "name":"India",
        "capital":"mnop",
        "population":2000


    },

    {

        "name":"UAE",
        "capital":"qrst",
        "population":2500

    }

]

const LP_limit = 2000;
const LP_countries = COUNTRY.filter(_country => _country.population < 2000);
console.log(LP_countries)
