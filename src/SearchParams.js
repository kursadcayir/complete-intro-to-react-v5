import React, {useState,useEffect} from "react";

import pet,{ANIMALS} from "@frontendmasters/pet";
import useDropDown from "./useDropDown"
import Results from "./Results"
 
const SearchParams = () => {
    
    const [loc, setLocation] = useState("Seattle,WA");
    const [breeds,setBreeds] = useState([]);

    const [animal,AnimalDropDown] = useDropDown("Animal","dog",ANIMALS)//useState("dog");
    const [breed,BreedDropDown,setBreed] = useDropDown("Breed","",breeds);

    const [pets,setPets] = useState([]);

    async function requestPets () {
        const res = await pet.animals( {animal} )
        console.log(res);
        setPets(res.animals || [])
    }
    
    useEffect(() => {
        setBreeds([]);
        setBreed("");
        pet.breeds(animal).then( ({breeds}) => {
            const c = breeds.map( ({name}) => name );
            setBreeds(c);
        },console.error );
    },[animal,setBreed,setBreeds])
    
    return (
        <div className="search-params">
            <h1>{loc}</h1>
            <form onSubmit = { (e) => {
                e.preventDefault(); 
                requestPets()}}>
                <label htmlFor="location">
                    <input id= "location" value = {loc} placeholder="deneme" onChange = {e => setLocation(e.target.value)} />
                </label>

                <AnimalDropDown></AnimalDropDown>
                <BreedDropDown></BreedDropDown>
                <button>Submit</button>

            </form>
            <Results pets = {pets}></Results>
        </div>

    )
}
export default SearchParams;