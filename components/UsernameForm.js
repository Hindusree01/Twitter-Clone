import { useEffect, useState } from "react";
import useUserInfo from "@/hooks/useUserInfo";

export default function UsernameForm(){

    const {userInfo, status} = useUserInfo();
    

    const [username, setUsername] = useState('');


    useEffect(() =>{
        if(status === 'loading'){
            return;
        }
        if(username === ''){
            const defaultUsername = userInfo?.email?.split('@')[0];
            setUsername(defaultUsername.replace(/[^a-z]+/gi,''));
        }
    })

    function handleFormSubmit(e){
        e.preventDefault();
        fetch('/api/users', {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({username})
        })
    }
    if(status === 'loading'){
        return '';
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <form className="text-center" onSubmit={handleFormSubmit}>
                <h1 className="text-xl block mb-2">Pick a username</h1>
            <input type="text"  className = "block mb-1 bg-twitterBorder px-3 py-1 rounded-full" placeholder={'Username'} value={username} onChange={e =>
            {setUsername(e.target.value)}}/>
            <button className="block bg-twitterBlue w-full rounded-full py-1">Continue</button>
            </form>
        </div>
       
    )
}
