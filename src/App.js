import React from 'react';
import { View, Panel, PanelHeader, List, Cell, Group, Div, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePanel: 'home',
			fetchedUser: null,
		};
	}
	componentDidMount() {
		fetch("https://conversation-list.herokuapp.com/get_all")
		.then(response => response.json())
		.then(data => {
			this.setState({
				data: data.filter((item) => item.status === 1)
			})
		})
	}

	add = (e) => {
		fetch("https://conversation-list.herokuapp.com/good?id="+e.currentTarget.id)
		.then(response => response.json())
		.then(data => {
			window.location.reload()
		})
	}
	
	remove = (e) => {
		fetch("https://conversation-list.herokuapp.com/remove?id="+e.currentTarget.id)
		.then(response => response.json())
		.then(data => {
			window.location.reload()
		})
	}

	render() {
		return (
			<View activePanel="home">
				<Panel id="home">
					<PanelHeader>Беседы</PanelHeader>
					{
						this.state.data && this.state.data.map((item) => 
							<Group>
								<List>
									<Cell
										before={<img src={item.photo} style={{marginRight: "20px"}} width="40px" />}
									>{item.name}</Cell>
									<Cell>Количество участников: {item.count}</Cell>
									<Cell multiline>{item.description}</Cell>
									<Cell>Ссылка на беседу: <a target="_blank" href={item.link.indexOf("https://") !== -1 ? item.link : ("https://"+item.link)}>{item.link}</a></Cell>
                            		<Cell>Ссылка на создателя: <a target="_blank" href={item.admin.indexOf("https://") !== -1 ? item.admin : ("https://"+item.admin)}>{item.admin}</a></Cell>
									<Cell>
										<Div>
											<Button stretched id={item._id} onClick={this.add} level="commerce" style={{marginRight: 8}}>Добавить</Button>
											<Button stretched id={item._id} onClick={this.remove} style={{background: "tomato"}}>Удалить</Button>
										</Div>
									</Cell>
								</List>
							</Group>
						)
					}
				</Panel>
			</View>
		);
	}
}

export default App;
