// arrays as properties of object
const dogs = {
    breeds: ["golden retriever", "labrador", "poodle"]
};
console.log(dogs.breeds);

// JSON
/*
{   
    id: 1,
    age: 7,
    type: "dog",
    dangerous: true,
    likes: ["barking", "sleeping"]
}

{
    count: 2,
    pets [
        {
            id: 1,
            age: 7,
            dangerous: false,
            likes: ["barking", "eating"]
        },
        {
            id: 2,
            age: 4,
            type: "cat",
            dangerous: true,
            likes: ["sleeping", "complaining"]
        }
    ]
}
*/

//loading multiple js files

const pet = "dog";
function bark() {
    console.log("woof!");
}