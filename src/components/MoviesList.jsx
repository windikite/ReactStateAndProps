import React from "react";
import { useState } from "react";
import ListItem from "./ListItem";

function List(props) {
    const moviesList = [
        {name: "Jurrasic Park", 
            category: "Action", 
            details: "A movie about dinosaurs!"},
        {name: "Digimon Adventure: Our War Game!", 
            category: "Adventure", 
            details: "A movie about digital monsters!"},
        {name: "Scooby Doo on Zombie Island", 
            category: "Mystery", 
            details: "A movie about a gang of mystery solvers in Louisianna!"},
    ];

    const [movies, setMovies] = useState(moviesList)
    
    const [favorites, setFavorites] = useState([])

    function findAndAdd(text, arrayFrom, arrayTo){
        let found = arrayFrom.find(x => x.name == text);
        let new_array = arrayTo;
        if (found != -1) {
            new_array.push(found)
        }else{
            console.log(`${text} not found!`)
        };
        return new_array
    }

    function findAndDelete(text, array){
        let found = array.findIndex(x => x.name == text);
        let new_array = array;
        if (found != -1) {
            new_array.splice(found, 1)
        }else{
            console.log(`${text} not found!`)
        };
        return new_array
    }

    function addToFavorites(e){
        let term = e.target.parentNode.getElementsByTagName("p")[0].innerText;
        let found = favorites.find(x => x.name == term);
        if(!found){
            setFavorites([...findAndAdd(term, movies, favorites)]);
        }
    }

    function removeFromFavorites(e){
        let term = e.target.parentNode.getElementsByTagName("p")[0].innerText;
        setFavorites([...findAndDelete(term, favorites)]);
    }

    function displayButton(text){
        return (
            <button onClick={e => filterCategory(text)}>{text}</button>
        )
    }

    function filterCategory(category){
        if(category == "All"){
            setMovies(moviesList)
        }else{
            let filteredMovies = moviesList.filter(x => x.category == category)
            setMovies(filteredMovies)
        }
    }

    return (
        <div>
            {["All", "Action", "Adventure", "Mystery"].map(x => displayButton(x))}
            <div style={{display: "flex", padding: "10px", padding: "10px"}}>
                <div style={{padding: "10px", maxWidth: "40%"}}>
                    <h1>Movies</h1>
                    <ul style={{listStyleType: "none", backgroundColor: "black"}}>
                        {movies.map((x, index) => {
                            return <ListItem 
                                text={x.name}
                                k={index}
                                detailText={x.details}
                                favHandler={addToFavorites} 
                                innerText="+"
                                />
                        })}
                    </ul>
                </div>
                <div style={{padding: "10px", maxWidth: "40%"}}>
                    <h1>Favorites</h1>
                    <ul style={{listStyleType: "none", backgroundColor: "black"}}>
                        {favorites.map((x, index) => {
                            return <ListItem 
                                text={x.name}
                                k={index}
                                detailText={x.details}
                                favHandler={removeFromFavorites}
                                innerText="-"
                                />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default List