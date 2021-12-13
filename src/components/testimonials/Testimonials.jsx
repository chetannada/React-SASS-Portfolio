import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
          id: 1,
          name: "Tom Durden",
          title: "Senior Developer",
          img:
            "https://picsum.photos/id/1005/300/300",
          icon: "assets/twitter.png",
          url: "#intro",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Alex Kalinski",
          title: "Co-Founder of DELKA",
          img:
            "https://picsum.photos/id/1011/300/300",
          icon: "assets/youtube.png",
          url: "#intro",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
          featured: true,
        },
        {
          id: 3,
          name: "Martin Harold",
          title: "CEO of ALBI",
          img:
            "https://picsum.photos/id/1062/300/300",
          icon: "assets/linkedin.png",
          url: "#intro",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d,index) => (
                    <div className={d.featured ? "card featured" : "card"} key={index}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img src={d.img} className="user" alt="" />
                        <a href={d.url}>
                        <img src={d.icon} className="right" alt="" />
                        </a>
                    </div>
                    <div className="center">{d.desc}</div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                    ))}
            </div>
        </div>
    )
}
