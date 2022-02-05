import axios from 'axios';






export const getAllMenus = async () => 
    await axios.get(`${process.env.REACT_APP_API}/menus`);



export const getMenuById = async (id) => 
    await axios.get(`${process.env.REACT_APP_API}/menus/id`);

