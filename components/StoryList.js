export default StoryList = () => {
  static async getInitialProps() {
    const req = await fetch(`https://api.hackerwebapp.com/news`)
    const stories = await req.json()
    return { stories }
  }

  render() {
    return (
      <h1>Latest News</h1>
      {
        this.props.stories.map((story) => (
          <h2 key={Math.random()}>
            <a href={ story.url }>{ story.title }</a>
          </h2>
        ))
      }
    )
  }
}