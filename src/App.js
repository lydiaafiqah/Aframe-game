// require('aframe-extras');
import 'aframe-extras'
// import './assets/ergo'

function App() {
	return (
		<a-scene fog="type: linear; color: #a3d0ed; near:5; far:20">

      <a-sky color="#a3d0ed"></a-sky>

      {/* <!-- Lights --> */}
      <a-light type="directional" castShadow="true" intensity="0.4" color="#D0EAF9;" position="5 3 1"></a-light>
      <a-light intensity="0.8" type="ambient" color="#B4C5EC"></a-light>

      {/* <!-- Camera --> */}
      <a-camera lane-controls position="0 0 2.5">
			<a-entity id="cursor-mobile" cursor="fuse: true; fuseTimeout: 250"
					position="0 0 -1"
					geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
					material="color: white; shader: flat"
					scale="0.5 0.5 0.5"
					raycaster="far: 50; interval: 1000; objects: .clickable"></a-entity>
			<a-animation begin="fusing" easing="ease-in" attribute="scale" fill="backwards" from="1 1 1" to="0.2 0.2 0.2" dur="250"></a-animation>
      </a-camera>

      {/* <!-- Icebergs --> */}
      <lp-cone class="iceberg" amplitude-variance="0.25" segments-radial="5" segments-height="3" height="1" radius-top="0.15" radius-bottom="0.5" position="3 -0.1 -1.5">
			<a-animation attribute="rotation" from="-5 0 0" to="5 0 0" repeat="indefinite" direction="alternate"></a-animation>
			<a-animation attribute="position" from="3 -0.2 -1.5" to="4 -0.2 -2.5" repeat="indefinite" direction="alternate" dur="12000" easing="linear"></a-animation>
      </lp-cone>
      <lp-cone class="iceberg" amplitude="0.12" segments-radial="7" segments-height="3" height="0.5" radius-top="0.25" radius-bottom="0.35" position="-3 -0.1 -0.5">
        	<a-animation attribute="rotation" from="0 0 -5" to="5 0 0" repeat="indefinite" direction="alternate" dur="1500"></a-animation>
        	<a-animation attribute="position" from="-4 -0.2 -0.5" to="-2 -0.2 -0.5" repeat="indefinite" direction="alternate" dur="15000" easing="linear"></a-animation>
      </lp-cone>
      <lp-cone class="iceberg" amplitude="0.1" segments-radial="6" segments-height="2" height="0.5" radius-top="0.25" radius-bottom="0.25" position="-5 -0.2 -3.5">
        	<a-animation attribute="rotation" from="5 0 -5" to="5 0 0" repeat="indefinite" direction="alternate" dur="800"></a-animation>
        	<a-animation attribute="position" from="-3 -0.2 -3.5" to="-5 -0.2 -5.5" repeat="indefinite" direction="alternate" dur="15000" easing="linear"></a-animation>
      </lp-cone>

      {/* <!-- Ocean --> */}
      <a-ocean depth="50" width="50" amplitude="0" amplitude-variance="0.1" speed="1.5" speed-variance="1" opacity="1" density="50"></a-ocean>
      <a-ocean depth="50" width="50" opacity="0.5" amplitude="0" amplitude-variance="0.15" speed="1.5" speed-variance="1" density="50"></a-ocean>
      {/* <a-box depth="50" width="50" height="1" color="#7AD2F7" position="0 -0.5 0"></a-box> */}

      {/* <!-- Platform --> */}
      <lp-cone amplitude="0.05" amplitude-variance="0.05" scale="2 2 2" shadow position="0 -3.5 -1.5" rotation="90 0 0" radius-top="1.9" radius-bottom="1.9" segments-radial="20" segments-height="20" height="20" emissive="#005DED" emissive-intensity="0.1">
			<a-entity id="tree-container" position="0 .5 -1.5" rotation="-90 0 0">
				{/* <!-- Player --> */}
				<a-entity id="player" player>
					<a-sphere radius="0.05">
					<a-animation repeat="indefinite" direction="alternate" attribute="position" ease="ease-in-out" from="0 0.5 0.6" to="0 0.525 0.6"></a-animation>
					<a-animation repeat="indefinite" direction="alternate" attribute="radius" from="0.05" to="0.055" dur="1500"></a-animation>
					<a-light type="point" intensity="0.35" color="#FF440C">
						<a-animation repeat="indefinite" direction="alternate-reverse" attribute="intensity" ease="ease-in-out" from="0.35" to="0.5"></a-animation>
					</a-light>
					</a-sphere>
				</a-entity>
			</a-entity>
      </lp-cone>
    </a-scene>
	);
}

export default App;