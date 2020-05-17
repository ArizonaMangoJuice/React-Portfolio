// executes callback when its mounted
import React, {useEffect} from 'react'

const useComponentDidMount = onMountHandler => {
    useEffect(() => {
        onMountHandler()
    }, [])
}

export default useComponentDidMount