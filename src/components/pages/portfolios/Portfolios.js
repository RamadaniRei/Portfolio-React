import React from "react";
import Blog from "../../../images/Blog.png";
import Chat from "../../../images/Chat.png";
import Movie from "../../../images/Movie.png";
import Shop from "../../../images/Shop.png";
import ToDo from "../../../images/ToDo.png";
import Youtube from "../../../images/Youtube.png";
import "./Portfolios.css";

export default function Portfolios() {
  const portfolioItems = [
    {
      id: 1,
      title: "Movie Catalog",
      description:
        "Creating a movie search application linked with OMDB api to be able to get all the movies possible.",
      imageUrl: Movie,
    },
    {
      id: 2,
      title: "To do List",
      description: "Creating an application to add things you need to do.",
      imageUrl: ToDo,
    },
    {
      id: 3,
      title: "Blog Website",
      description:
        "Creating a website that can find all the news you need by searching your interest.",
      imageUrl: Blog,
    },
    {
      id: 4,
      title: "Video Sharing",
      description:
        "Creating a website that allows video viewing from Youtube by using Youtube API from Google APIs.",
      imageUrl: Youtube,
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Creating an interactive app that allows people to chat.",
      imageUrl: Chat,
    },
    {
      id: 6,
      title: "E-commerce Website",
      description:
        "Creating an e-commerce website that allows adding items to cart, looking at items, and removing them from the cart.",
      imageUrl: Shop,
    },
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="portfolio-image"
            />
            <h3 className="portfolio-title">{item.title}</h3>
            <p className="portfolio-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
