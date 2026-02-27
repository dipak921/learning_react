import { useEffect, useState } from 'react'
import './App.css'
import { getPost } from './AppAPI'

function App() {

   const getPost = async () => {
    const response = await fetch("https://localhost:7035/api/Employees", {
        method: 'GET',
    });

    return response.json();
};
}

export default AppAPI