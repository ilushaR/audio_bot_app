import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, PanelHeader, Div, Card, SimpleCell, Checkbox, ConfigProvider, FixedLayout, Button, Separator } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

class App extends React.Component {
	pickedTracks = [];
	vkId = null;
	telegramId = null
	icon = 'data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20opacity%3D%22.4%22%2F%3E%3Cpath%20d%3D%22m13%2011.4849987v5.6482897c0%204.5123987-.8747233%205.3834431-4.37440289%205.8421935-1.6682259.2186769-3.62559711-.5384568-3.62559711-3.1617096%200-1.2814037.80181302-2.498263%202.46114282-2.8162494%201.26723039-.2428462-.09078118.0181935%202.77607228-.5140396.6959753-.1292083.7748413-.3782301.7748413-.908791%200-.2664094-.0013183-2.5951438-.0022416-4.1936475l-.0073943-.0003862v-4.31781414s-.0054461-2.05827203%200-3.08739758c.0065136-1.23086488.6796458-1.68321833%202.6637921-2.08397579%200%200%203.0232113-.57396781%204.6852252-.87541989.367783-.06670761.6485622.07018054.6485622.49202579%200%200-.0106774%202.62210108%200%204.05433854.0031006.41590408-.168424.60420104-.5899711.67902227-1.6816987.29848801-4.8649278.86036181-4.8649278.86036181-.3738792.09182758-.5451011.35499958-.5451011.73329156z%22%20fill%3D%22%236f99c8%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'
    API_URL = 'https://s23209.h10.modhost.pro';

	constructor(props) {
		super(props);

		this.state = {
			scheme: 'bright_light',
			tracks: [],
		};
	}

	onCheckboxChange = (e) => {
		const track = JSON.parse(e.currentTarget.dataset.track);
		this.pickedTracks[track.index] = this.pickedTracks[track.index] ? null : { url: track.url, title: track.title, artist: track.artist };
	}

	sendTracks = () => {
		this.pickedTracks = this.pickedTracks.filter(track => !!track);
		
		if (!this.pickedTracks.length) {
			// modal 'please pick tracks'
			return;
		}

		// accept choice

		fetch(`${this.API_URL}/sendTracks?id=${this.telegramId}`, {
			method: 'POST',
			headers: {
		  		'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.pickedTracks),
		})
	}

	async componentDidMount() {
		bridge.subscribe(async ({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				this.setState({ scheme: data.scheme });
			} else if (type === 'VKWebAppInitResult') {
				this.vkId = (await bridge.send("VKWebAppGetUserInfo", {})).id;
				this.telegramId = (await bridge.send('VKWebAppStorageGet', {keys: ['telegramId']})).keys[0].value;
                console.log(this.telegramId);

				if (this.telegramId === false || this.telegramId === 'false') {
					const response = await fetch(`${this.API_URL}/getUser?id=${this.vkId}`).then(res => res.json());
					console.log(response);
					const permission = response.permission;
					this.telegramId = response.telegramId;

					if (!permission) {
						// ask to auth
						// return
					}

					if (!this.telegramId) {
						// need to authorization
						// return;
					}

					const req = await bridge.send('VKWebAppStorageSet', { key: 'telegramId', value: `${this.telegramId}` })
					console.log(req);
				}

				fetch(`${this.API_URL}/getTracks?id=${this.vkId}`)
					.then(res => res.json())
					.then(result => {
						this.pickedTracks = new Array(result.tracks.length)
						this.setState({ tracks: result.tracks })
					})
			}
		});
	}

	render() {
		return (
			<ConfigProvider scheme={ this.state.scheme }>
				<View activePanel="main">
					<Panel id="main">
						<PanelHeader>Audio Bot</PanelHeader>
						{ this.state.tracks.map((track, index) => 
							(<Div key={ track.id }>
								<SimpleCell 
									before={
										<Card 
											size={"m"} 
											style={{ width: 40, height: 40, marginRight: 10, background: `url(${ track.album && track.album.thumb ? track.album.thumb.photo_68 : this.icon}) no-repeat center #e5ebf1`, backgroundSize: 'cover'}} 
										/>
									} 
									after={ <Checkbox data-track={JSON.stringify({ index, url: track.url, title: track.title, artist: track.artist })} onChange={ this.onCheckboxChange }/> } 
									description={ track.artist } 
								>
									{ track.title } 
								</SimpleCell>
							</Div>)
						)}
						<FixedLayout vertical="bottom">
							<Separator wide />
							<Button onClick={ this.sendTracks } size='xl'>Скачать</Button>
						</FixedLayout>
					</Panel>
				</View>
			</ConfigProvider>
		);
	}
}

export default App;