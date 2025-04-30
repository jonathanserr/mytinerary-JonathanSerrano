import Carousel from "../components/Carousel";
import CallButton from "../components/CallButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCities } from "../store/actions/citiesActions";
import { useEffect } from "react";


function Home() {
    const dispatch = useDispatch()
    const  {status} = useSelector((store) => store.city.citiesState)

    useEffect(() => {
        if (status === "idle"){
            dispatch(getCities())
        }
    },[dispatch, status])



    const navigate = useNavigate();

    function handleNavigate() {
        navigate("/cities");
    }

    // console.log("Cities in Home component:", cities);

    return (
        <>
            <div className="bg-orange-100/50 min-h-[80vh] pb-10">
                <div className="relative">
                    <img className="w-full h-[90vh] object-cover" src="../src/Images/fondoMar.jpg" alt="" />
                    <div className="w-full h-full absolute text-white text-center inset-0 bg-black/10 flex-col content-center">
                        <h1 className="text-5xl italic font-bold m-5">My Tinerary</h1>
                        <h3 className="text-3xl mb-8 mx-10">
                        “Find your perfect trip, designed by insiders who know and love their cities!”
                        </h3>
                        <CallButton onClick={handleNavigate} />
                    </div>
                </div>

                <div className="min-h-[70vh] flex-col justify-items-center">
                    <div className="w-4/6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
                        <h1 className="text-center text-3xl text-blue-600 font-bold mt-10 py-6">Live your next adventure!</h1>
                        <p className="text-center text-black text-lg ">
                        Ready to explore the world? Find new destinations and live the best experiences of your life.
                        </p>
                        <CallButton onClick={handleNavigate} />
                    </div>
                    <h1 className="text-5xl mt-8 mb-4 text-blue-600 font-bold">Popular Mytineraries</h1>

                    <Carousel/>
                </div>
            </div>
        </>
    );
}

export default Home;
