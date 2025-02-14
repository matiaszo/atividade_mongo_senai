
import { useEffect, useState } from "react";

interface taskInterface {
  id: string;
  name: string;
  important: boolean;
}

function App()
{
  const [name, setname] = useState<taskInterface[]>([]);
  const getTaskData = async () => {

    const response = await fetch(`http://localhost:8080/api/task/all/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('Erro ao buscar dados');
    }

    const dataUser = await response.json();

    console.log("TASKS:", dataUser);
  }


  return (
    <>
      <div className="flex justify-center items-center w-[100%]">
        <p className="flex w-30 justify-center text-xl font-bold rounded-sm bg-red-50">To do list</p>
      </div>
    </>
  )
}
export default App