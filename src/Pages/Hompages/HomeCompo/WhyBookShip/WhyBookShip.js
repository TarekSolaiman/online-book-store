import React from "react";

const WhyBookShip = () => {
  return (
    <div>
      <h2 className="my-5 text-5xl font-bold">Why BookShip</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <img
            className="w-full h-full"
            src="https://cdn.dribbble.com/users/504740/screenshots/11874243/media/2eb36cc429c6a8dc5c596ed3319538bd.jpg?compress=1&resize=400x300"
            alt=""
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-left">Easy to order</h3>
          <p className="text-left">
            Everybody is different, which is why we offer styles for every body.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyBookShip;
