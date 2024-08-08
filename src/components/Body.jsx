import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';


const Body = () => {
    return (
			<>
				<Header />
				<div className="flex ">
					<Sidebar />
					<MainContainer />
				</div>
			</>
		);
}

export default Body;