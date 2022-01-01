import {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './scrollTopTop.scss';


const ScrollTopTop = () =>{

  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 100){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollTopTop;