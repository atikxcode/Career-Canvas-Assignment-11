import { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";




const Blogs = () => {

  const {theme} = useContext(AuthContext);

  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
      <title>CareerCanvas - Blogs</title>

      </Helmet> 
      <NavBar></NavBar>

      <div className="container mx-auto my-10">


      <div className="flex flex-col items-center gap-8">


      <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-orange-500 opacity-90">Discover Your Next Career Move</h1>
      <p className={`text-xl xl:w-[900px] text-center ${ theme === 'light' ? 'text-black' : 'text-white'}`}>Welcome to our job-centric blog, where opportunities meet insights. Dive into a wealth of resources tailored to job seekers and career enthusiasts. From industry trends to interview tips, we're here to empower you on your professional journey. Let's navigate the job market together and unlock new horizons.</p>


      <h2 className={`text-5xl xl:w-[900px] mt-20 text-center ${ theme === 'light' ? 'text-black' : 'text-white'}`}>Our Recent <span className="text-orange-500 font-bold">Blogs</span></h2>


      <div className={`collapse collapse-arrow rounded-xl ${ theme === 'light' ? 'text-white bg-black ' : 'text-black bg-white'}`}>
      <input type="radio" name="my-accordion-2" defaultChecked /> 
      <div className={`collapse-title text-xl font-medium  ${ theme === 'light' ? 'text-white' : 'text-black '}`}>
      What is an access token and refresh token? How do they work and where should we store them on the client side?
      </div>
      <div className="collapse-content"> 
        <ul>
          <li><span className="font-bold">Access Token:</span> An access token is a credential used by an application to access an API. It represents the authorization of a specific application to access specific parts of a user's data on behalf of the user. Access tokens are typically short-lived and are used to authenticate a user's access to resources.</li>
          <li><span className="font-bold">Refresh Token:</span> A refresh token is a special kind of token used to obtain a new access token once the current access token expires. Unlike access tokens, refresh tokens are usually long-lived and are used to obtain new access tokens without requiring the user to log in again.</li>
          <li><span className="font-bold">Storage on the Client Side:</span> Access tokens should be stored securely on the client side, typically in memory or in a secure storage mechanism such as browser storage (e.g., localStorage or sessionStorage) or HTTP cookies with proper security measures to prevent unauthorized access. Refresh tokens, being more sensitive and long-lived, should be stored securely on the server side.</li>
        </ul>
      </div>
      </div>


      <div className={`collapse collapse-arrow rounded-xl ${ theme === 'light' ? 'text-white bg-black ' : 'text-black bg-white'}`}>
        <input type="radio" name="my-accordion-2" /> 
        <div className={`collapse-title text-xl font-medium  ${ theme === 'light' ? 'text-white' : 'text-black '}`}>
        What is Express.js?
        </div>
        <div className="collapse-content"> 
          <p>Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It is designed to make the process of building web applications with Node.js easier and more efficient by providing a simple and intuitive API for handling HTTP requests, routing, middleware, and more.</p>
        </div>
      </div>


      <div className={`collapse collapse-arrow rounded-xl ${ theme === 'light' ? 'text-white bg-black ' : 'text-black bg-white'}`}>
        <input type="radio" name="my-accordion-2" /> 
        <div className={`collapse-title text-xl font-medium  ${ theme === 'light' ? 'text-white' : 'text-black '}`}>
        What is NestJS?
        </div>
        <div className="collapse-content"> 
          <p>NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses TypeScript and is heavily inspired by Angular, providing a similar development experience and architectural concepts such as modules, controllers, services, and dependency injection. NestJS aims to enable developers to create highly maintainable and scalable server-side applications while leveraging the power of TypeScript and the ecosystem surrounding Node.js.</p>
        </div>
      </div>

      </div>
      
      
      
      </div>
    </div>
  );
};

export default Blogs;