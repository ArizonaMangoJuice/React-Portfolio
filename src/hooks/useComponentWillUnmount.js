// runs callback right before cleanup
import React, {useEffect} from 'react'

const useComponentWillUnmount = onUnmountHandler => {
    useEffect(() => () => {
        onUnmountHandler()
    },[])
}

export default useComponentWillUnmount