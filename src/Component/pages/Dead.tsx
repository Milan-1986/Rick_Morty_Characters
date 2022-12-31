import { useEffect, useState } from "react";
import useFetch from "../../customHook/useFetch";

export default function Dead(props: any) {
    const [page, setPage] = useState(1);
    const status = 'dead';
    const { loading, data, error } = useFetch(`https://rickandmortyapi.com/api/character/?page=${page}&status=${status}`);
    const [characterDead, setCharecterDead] = useState<any>([data]);
    useEffect(() => {
        setCharecterDead((prev: any) => [...prev, ...data])
    }, [data])

    useEffect(() => {
        const handleScroll = () => {
            const height: number = document.documentElement.scrollHeight;
            const top: number = document.documentElement.scrollTop;
            const windowHeight: number = window.innerHeight;
            if (windowHeight + top + 1 >= height) {
                setPage(prev => prev + 1);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page])
    console.log(data)

    const deadCharacter = characterDead.filter((character: any) => character.name?.toLowerCase()?.includes(props.search?.toLowerCase()))?.map((person: any, index: number) => (
        <div key={index} className="d-inline-flex flex-column m-3" id="card">
            <img className="rounded-top" width="100%" src={person.image} alt="Character in cartoon" />
            <span className="bg-primary p-2 rounded-bottom" id="nameFontSize">{person.name} </span>
        </div>));

    return (
        <div className="container">
            <div className="container d-flex flex-wrap bg-danger justify-content-around">

                {!loading && error ? (
                <>
                    <div> {deadCharacter} </div>
                    <div className="endPage">  No more character</div>
                    
                </>
                ) : (
                    <>
                        {deadCharacter}

                    </>
                )}
                {loading && <span >Loading.....</span>}
            </div>
        </div>
    )
} 