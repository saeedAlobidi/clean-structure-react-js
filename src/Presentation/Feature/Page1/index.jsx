import React, { Component, useRef, useEffect, useState,useContext } from 'react';
import Html from './html.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { UserUsecase } from '../../../Infrastructure/Usecase/Index'
import { ThingsContext } from '../../../Context/ThingsContextProvider'

function HomePage() {
    const things = useContext(ThingsContext)
    const dispatch = useDispatch()

    /* state */
    const [data, setData] = useState(() => { return { title: "saeed " } });//get data from State
    const refData = useRef(() => { return { title: "saeed " } }); //get data from useRef that not update currnet component when update value
    const user = useSelector((state) => state.entities.userSlice.value)//get data from redux

   

    /* method */

    const FetchData = async () => {
      await UserUsecase(dispatch).getUseFromGraphqlInfo()
        let userData = await UserUsecase(dispatch).getUserInfo("1")
        setData({ title: userData.title }   )
        refData.current.title = userData.title

    }

    /* hook */
    useEffect(() => {
        console.log("Mount",things)
        FetchData()

    }, []);


    /* render */
    return (Html({ user, data, refData }));
}






export default HomePage;