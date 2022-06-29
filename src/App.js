import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';

const Stored_data = []

function App() {

    // const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    

    const loadPost = async () => {

        // Till the data is fetch using API 
        // the Loading page will show.
        // setLoading(true);

        // Await make wait until that 
        // promise settles and return its result
        const response = await axios.get(
            "https://randomuser.me/api");

        const res = response.data.results
        const post = {
            name: `${res[0].name.title}. ${res[0].name.first} ${res[0].name.last}`,
            email: `${res[0].email}`
        }

        Stored_data.push(post)
        localStorage.setItem("f_name", JSON.stringify(Stored_data))
        const allData = JSON.parse(localStorage.getItem("f_name"))
        // After fetching data stored it in posts state.
        setPosts([...allData]);

        // Closed the loading page
        // setLoading(false);
    }
    useEffect(() => { 
        // Call the function
        // loadPost();
    }, []);

    return (
        <>
        <div className='app'>
            {/* {loading ? (
                <h4>Loading...</h4>) : */
                (<>
                <h1 className='head'>Table Content</h1>
                    <table id='table'><thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                        </tr>
                    </thead>
                        <tbody>
                            {posts.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.email}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button id='btn' onClick={()=>loadPost()}>Refresh</button>
                </>
                )}
        </div>
        </>
        )
}
export default App;