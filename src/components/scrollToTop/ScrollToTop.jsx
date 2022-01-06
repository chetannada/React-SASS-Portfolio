import {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './scrollToTop.scss';


const ScrollToTop = () =>{

  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200){
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

export default ScrollToTop;