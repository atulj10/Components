import Globe from 'react-globe.gl';


function GlobeComponent() {
  const customPlaces = [
    {
      properties: {
        name: 'Delhi',
        latitude: 28.6139,
        longitude: 77.2090,
        pop_max: 29617000 // Example population
      }
    },
    {
      properties: {
        name: 'Uttarakhand ',
        latitude: 30.3165,
        longitude: 78.0322,
        pop_max: 578420 // Example population
      }
    },
    {
      properties: {
        name: 'Bangalore',
        latitude: 12.9716,
        longitude: 77.5946,
        pop_max: 11480000 // Example population
      }
    },
    {
      properties: {
        name: 'Mumbai',
        latitude: 19.0760,
        longitude: 72.8777,
        pop_max: 20411000 // Example population
      }
    },
    {
      properties: {
        name: 'Ahmedabad',
        latitude: 23.0225,
        longitude: 72.5714,
        pop_max: 7410000 // Example population
      }
    }
  ];

  return (
    <div className='w-[60%]' >
      <Globe
        className="w-[50%]"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

        labelsData={customPlaces}
        labelLat={d => d.properties.latitude}
        labelLng={d => d.properties.longitude}
        labelText={d => d.properties.name}
        labelSize={1}
        labelDotRadius={0.5}
        labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        labelResolution={2}
      />
    </div>
  );
}

export default GlobeComponent;
