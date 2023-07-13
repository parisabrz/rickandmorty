import { GetCharacterById } from "../graphql/queries"
import { CharacterByID } from './type';
import { useQuery } from '@apollo/client';
import Lottie from "lottie-react";
import ricky from "../assets/jsons/animation.json";
import { useParams } from "react-router-dom";

function CharacterInfo() {
    let {characterId} = useParams()
    console.log(characterId);
    
    const { data, loading, error } = useQuery<CharacterByID>(
        GetCharacterById,
        { variables: { id: characterId } }
    );
    console.log(data);

    if (loading)
        return (
            <div className="loading">
                <Lottie animationData={ricky} />
            </div>
        );

    if (error) return <div>{error.message}</div>;

    //   const { created, gender, image, name, species, status } = data.character;

    return (
        <div>CharacterInfo</div>
    )
}

export default CharacterInfo