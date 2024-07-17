import React from "react";
import Button from "../../Components/Button/Button";

const Getintouch = () => {
  return (
    <section className="bg-secondary">
      <div></div>

      <div className="">
        <form action="" className="flex flex-col w-[50vw] ">
            <input type="text" />
            <input type="email" />
            <input type="text" />
            <input type="textarea" />
            <Button  text={"Send Message"}/>
        </form>
      </div>
    </section>
  );
};

export default Getintouch;
