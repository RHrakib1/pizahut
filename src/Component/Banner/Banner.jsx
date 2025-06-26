import React from 'react'

export default function Banner() {
    return (
        <div>
            <div
                className="hero min-h-screen "
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/C39bvXzk/street-food-still-life.jpg)",
                }}
            >
                  <div className="hero-overlay bg-black/50"></div>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to PizzaHut – Taste the Slice of Happiness!</h1>
                        <p className="mb-5">
                            Freshly baked, cheesy delights straight from our oven to your heart. Discover a world of irresistible flavors, sizzling crusts, and your all-time favorite toppings. Order now and turn every meal into a celebration!
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
