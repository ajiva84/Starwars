import React, { useContext } from "react";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

const buildRow = (data, type) => {
	return (
		<>
			{data.map((item, index) => {
				return (
					// <div key={index}>Hello</div>
					<Card
						img={"https://via.placeholder.com/300"}
						key={index}
						title={item.name}
						btnLink={`/${type}/${index}`}
						btnText="view more..."
					/>
				);
			})}
		</>
	);
};
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-left mt-5 ml-5">
			<h1>Characters</h1>
			<div className="resource-row">{buildRow(store.planets, "planets")}</div>
			<div className="resource-row">{buildRow(store.people, "people")}</div>
			<div className="resource-row">{buildRow(store.vehicles, "vehicles")}</div>
		</div>
	);
};
