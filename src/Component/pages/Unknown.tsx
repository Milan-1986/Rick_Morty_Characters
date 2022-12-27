import { useEffect, useState } from "react";
import useFetch from "../../customHook/useFetch";

export default function Unknown(props: any) {
    const [page, setPage] = useState(1);
    const status = 'unknown';
    // const status: string = props.status;
    const { loading, data, error } = useFetch(`https://rickandmortyapi.com/api/character/?page=${page}&status=${status}`);
    const [characterUnknown, setCharecterUnknown] = useState<any>([data]);
    useEffect(() => {
        setCharecterUnknown((prev: any) => [...prev, ...data])
    }, [data])

    useEffect(() => {
        
        const handleScroll = () => {
            // console.log("Height: " + document.documentElement.scrollHeight);
            // console.log("Top: " + document.documentElement.scrollTop);
            // console.log("Window: " + window.innerHeight);
            const height: number = document.documentElement.scrollHeight;
            const top: number = document.documentElement.scrollTop;
            const windowHeight: number = window.innerHeight;
            if (windowHeight + top + 1 >= height) {
                setPage(prev => prev + 1);
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);
    }, [page])
    console.log(data);
    const unknownCharacter: any =
        characterUnknown.filter((character: any) => character.name?.toLowerCase()?.includes(props.search))?.map((person: any, index: number) => (
            <div key={index} className="d-inline-flex flex-wrap flex-column m-3" id="card">
                <img className="rounded-top" width="100%" src={person.image} alt="Character in cartoon" />
                <span className="bg-primary p-2 rounded-bottom" id="nameFontSize">{person.name} </span>
            </div>));

    console.log(characterUnknown.filter((character: any) => character.name?.toLowerCase()?.includes(props.search))?.map((person: any) => (person.name)));

    return (
        <div className="container">
            <div className="container d-flex flex-wrap bg-danger justify-content-around">

                {!loading && error ? (
                    <>
                        <div> {unknownCharacter} </div>
                        <div className="endPage">  No more character</div>
                    </>

                ) : (
                    <>

                        {unknownCharacter}


                    </>
                )}
                {loading && <span >Loading.....</span>}
            </div>
        </div>
    )
} 