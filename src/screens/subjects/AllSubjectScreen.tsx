import React, { useEffect } from 'react'
import { useAppBarContext } from '../../layouts/main/MainLayout';

const AllSubjectScreen = () => {
    const appBarContext = useAppBarContext();

    useEffect(() => {
        appBarContext.setTitle('All Subjects');
    }, []);

    return (
        <div>
            Hello
        </div>
    )
}

export default AllSubjectScreen
