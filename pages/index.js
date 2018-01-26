import 'isomorphic-fetch'

import Layout from '../components/Layout'
import Map from '../components/Map'
import RadiusSlider from '../components/RadiusSlider'
import SearchBox from '../components/SearchBox'
import GeojsonOutput from '../components/GeojsonOutput'

export default class extends React.PureComponent {
  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          debugger
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render() {
    return <Layout title="Abraxas">
      <div>
        {/* Components here... */}
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <RadiusSlider/>
          <SearchBox/>
          <GeojsonOutput/>
        <style jsx>{`
          h1 {
           font-family: system-ui;
           font-weight: 300;
           color: #333;
          }
        `}</style>
        <style global jsx>{`
          html, body {
            padding: 0;
            margin: 0;
          }
        `}</style>
      </div>
    </Layout>
  }
}