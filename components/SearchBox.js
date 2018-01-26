import React from 'react'
import Location from 'react-place'
const createLocation = React.createFactory(Location);

const onLocationSet = data => {
  console.log(data.description, data.coords.lat, data.coords.lng)
}

const Places = createLocation({
  country: 'DE',
  noMatching: 'Sorry, I can not find {{value}}.',
  onLocationSet: onLocationSet,
  inputProps:{
    style: {color: '#0099FF'},
    className:'location',
    placeholder: 'Search...'
  }
});

export default () => (
  <div id='search-box'>
    <div id='places'>
      {Places}
    </div>
    <style jsx>{`
      #search-box {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 13px;
      }
    `}</style>
  </div>
)