import React, { useContext } from "react";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const buildRow = (data, type) => {
		return data.map((item, index) => {
			return (
				<Card
					img={"https://via.placeholder.com/300"}
					key={index}
					title={item.name}
					btnLink={`/${type}/${index}`}
					btnText="view more..."
				/>
			);
		});
	};

	return (
		<div className="text-left mt-5 ml-5">
			<h1>Characters</h1>
			<div className="resource-row">{buildRow(store.planets, "planets")}</div>
			<div className="resource-row">{buildRow(store.people, "people")}</div>
			<div className="resource-row">{buildRow(store.vehicles, "vehicles")}</div>
		</div>
	);
};
