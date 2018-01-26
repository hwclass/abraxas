import 'isomorphic-fetch'

import Layout from '../components/Layout'
import Map from '../components/Map'

export default class extends React.PureComponent {
  static async getInitialProps() {
    const req = await fetch(`https://api.hackerwebapp.com/news`)
    const stories = await req.json()
    return { stories }
  }
  
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
    return <Layout title="Latest News">
      <div>
        <h1>Latest News</h1>
        {
          this.props.stories.map((story) => (
            <h2 key={Math.random()}>
              <a href={ story.url }>{ story.title }</a>
            </h2>
          ))
        }
        <Map/>
        <style jsx>{`
          h1 {
           font-family: system-ui;
           font-weight: 300;
           color: #333;
          }
        `}</style>
        <style global jsx>{`
          padding: 0;
          margin: 0;
        `}</style>
      </div>
    </Layout>
  }
}