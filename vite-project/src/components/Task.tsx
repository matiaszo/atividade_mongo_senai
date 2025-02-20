import { JSX } from "react"

interface Itask{
    name: string,
    status: number
}

export default function Some(data: Itask): JSX.Element
{
    return(
        <>
            <div className="flex justify-around">
                <h1>{data.name}</h1>
                <h1>{data.status}</h1>
            </div>
        </>
    )
}