import { useState } from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import './project.scss';

export default function Project() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
    {
      id: "1",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://picsum.photos/id/119/500/600",
      url: "https://github.com/",
    },
    {
      id: "2",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://picsum.photos/id/119/500/600",
        url: "https://github.com/",
    },
    {
      id: "3",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://picsum.photos/id/119/500/600",
        url: "https://github.com/",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

    return (
        <div className='project' id='project'>
            <h1>My Projects</h1>
            <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d, index) => (
          <div className="container" key={index}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.url} className="btn">Live Demo</a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <KeyboardDoubleArrowLeftIcon className="arrow left" onClick={() => handleClick("left")}/>
      <KeyboardDoubleArrowLeftIcon className="arrow right" onClick={() => handleClick()}/>
        </div>
    )
}
