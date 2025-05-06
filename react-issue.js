import { useState, useEffect } from "react";

const Desk = ({ checkin }) => {
    useEffect(() => {
        // we gonna need to keep track of the flight schedule
        // lets get the schedule data every 5 minutes
        
        console.log("init flight schedule monitor");
        
        // Set up a polling system that checks for boarding flights
        const scheduleMonitor = setInterval(() => {
            const boardingFlights = flightSchedule.filter(flight => 
                flight.status === "BOARDING");
                
            // For each boarding flight, checkin waiting passengers
            boardingFlights.forEach(flight => {
                checkin(flight.id);
            });
        }, 300000); // Check every 5 minute
        
        return () => clearInterval(scheduleMonitor);
    }, [checkin, flightSchedule]);

    return <div>Welcome! Where would you like to go?</div>;
};

export function AirPort(props) {
    const [passengerCount, setPassengerCount] = useState(0);


    function checkInToFlight() {
        console.log("Checking the passenger in to the flight"); 
        // fetch checkin service. service is very slow, and has security mechanism against DDOS
        // so if this function is called too many times, it will be blocked

    }

    return (
        <>
            <Desk checkin={checkInToFlight} />
            <button onClick={() => setPassengerCount((count) => count + 1)}>
                Passenger Arrived: {passengerCount} total guests
            </button>
        </>
    );
};

