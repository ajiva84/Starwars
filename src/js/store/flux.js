const getState = ({ getStore, getActions, setStore }) => {
	const baseUrl = "https://www.swapi.tech/api";

	return {
		store: {
			planets: [],
			people: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			initData: () => {
				getActions().loadSomeData("planets");
				getActions().loadSomeData("people");
				getActions().loadSomeData("vehicles");
			},

			loadSomeData: type => {
				return fetch(`${baseUrl}/${type}`)
					.then(res => {
						if (!res.ok) throw new Error(res.statusText);

						return res.json();
					})
					.then(data => setStore({ [type]: data.results }))
					.catch(err => console.error(err));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
