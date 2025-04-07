interface DogBreeds {
   //fill in
   [breed: string]: string[]
}

async function fetchDogBreeds(): Promise<DogBreeds> {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();

    return data.message as DogBreeds; // ensures type is DogBreeds
}

function filterBreeds(breeds: DogBreeds, breedName: string): string[] {
    const filteredBreeds: string[] = [];

    //complete function
    for (const breed in breeds){
        if (breed.toLowerCase().includes(breedName.toLowerCase())){
            filteredBreeds.push(breed);
        }
    }
    
    return filteredBreeds;
}

async function main(){
    const breeds = await fetchDogBreeds();
    //const breedName = "";
    const breedName = "bulldog";
    const filteredBreeds = filterBreeds(breeds, breedName);

    console.log(breeds);
    //print out the filtered breeds

    // how to run file
    console.log(filteredBreeds)
}

main();