const Favresto = () => {
    return (
      <div className="favoriteRestoPar">
        <div style={{ marginRight: '200px', marginTop: '50px' }}>
          <h3
            class="fontF"
            style={{
              textAlign: 'left',
              fontStyle: 'normal',
              fontWeight: '600px',
              fontSize: '35px',
              lineHeight: '35px',
            }}
          >
            Favorite Restaurants &<br></br> Stores in your pocket
          </h3>
          <p style={{ textAlign: 'left' }}>
            Order from your favorite restaurants and stores,<br></br>with the
            all-new SAFIRUN app.
          </p>
          <h4 style={{ textAlign: 'left' }}>DISCOVER. ORDER. TRACK IN APP</h4>
          <img src="../assets/PlaystoreBadges-011.jpg"></img>
          <img src="../assets/PlaystoreBadges-021.jpg"></img>
        </div>
        <div className="favoriteRestochil1">
          <img
            src="../assets/Trackrunner1.jpg"
            style={{ position: 'absolute', zIndex: 2 }}
          ></img>
          <img
            src="../assets/Trackrunner2.jpg"
            style={{
              position: 'relative',
              top: '1px',
              left: '200px',
              zIndex: 1,
            }}
          ></img>
        </div>
      </div>
    );
}

export default Favresto;