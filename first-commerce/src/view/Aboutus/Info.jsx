import React, { useEffect, useState, useRef } from "react";
import "./Info.css";
import storeimg from "./about-furniture-store-img.jpg"; // Ensure the image file extension is correct

function Info() {
    const [foundedCount, setFoundedCount] = useState(0);
    const [employeeCount, setEmployeeCount] = useState(0);
    const [productsCount, setProductsCount] = useState(0);
    const [storesCount, setStoresCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false); // State to track visibility

    const sectionRef = useRef(null); // Reference to the section

    // Function to animate the counter
    const animateCounter = (setter, target) => {
        let count = 0;
        const increment = Math.ceil(target / 100); // Increment by a percentage of the target

        const interval = setInterval(() => {
            if (count < target) {
                count += increment;
                setter(count > target ? target : count);
            } else {
                clearInterval(interval);
            }
        }, 20); // Adjust the interval for the desired speed
    };

    useEffect(() => {
        // Set up the intersection observer
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    animateCounter(setFoundedCount, 1982);
                    animateCounter(setEmployeeCount, 400);
                    animateCounter(setProductsCount, 1000);
                    animateCounter(setStoresCount, 5);
                    observer.disconnect(); // Stop observing after the first count
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current); // Clean up the observer
            }
        };
    }, []);

    return (
        <div ref={sectionRef}> {/* Attach ref to the div to observe */}
            <div className="store-img">
                <img src={storeimg} alt="Furniture Store" />
                <div className="white-box">
                    <div className="counter">
                        <h2>{foundedCount}</h2>
                        <p>FOUNDED</p>
                    </div>
                    <div className="counter">
                        <h2>{employeeCount}</h2>
                        <p>EMPLOYEES</p>
                    </div>
                    <div className="counter">
                        <h2>{productsCount}+</h2>
                        <p>PRODUCTS</p>
                    </div>
                    <div className="counter">
                        <h2>{storesCount}</h2>
                        <p>STORES</p>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default Info;
