import React, {useState, useEffect} from "react";

const useOrientation = () => {
    const [orientation, setOrientation] = useState();

    const updateOrientation = (e) => {
        if (e.target.type.startsWith('portrait')) {
          setOrientation('portrait')
        }
        
        if (e.target.type.startsWith('landscape')) {
          setOrientation('landscape');
        }
      }

    useEffect(() => {

        window.screen.orientation.addEventListener('change', updateOrientation)
        return () => {
        window.screen.orientation.removeEventListener('change', updateOrientation)
        }
    }, [])


    return orientation;
}

export default useOrientation;