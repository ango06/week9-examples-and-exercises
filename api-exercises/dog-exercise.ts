interface DogBreeds {
   //fill in
}

async function fetchDogBreeds(): Promise<DogBreeds> {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');

    //complete function
}

function filterBreeds(breeds: DogBreeds, breedName: string): string[] {
    const filteredBreeds: string[] = [];

    //complete function
    
    return filteredBreeds;
}

async function main(){
    const breeds = await fetchDogBreeds();
    const breedName = "";
    const filteredBreeds = filterBreeds(breeds, breedName);

    //print out the filtered breeds
}

main();