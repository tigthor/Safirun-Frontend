const Onmenu = () => {
    return (
      <div>
        <h1>what's on the menu</h1>
        <div className="whatOnTheMenuPar" style={{ height: '463px' }}>
          <div
            className="whatOnTheMenuChil1"
            style={{ width: '299px', height: '463px' }}
          >
            <img
              src="../assets/burger.png"
              style={{
                width: '299px',
                height: '400px',
              }}
            />
            <p
              style={{
                backgroundColor: '#CCCCCC',
                width: '300px',
                color: '#000000',
                position: 'absolute',
                justifyContent: 'center',
                bottom: '-0px',
                left: '-6px',
                height: '57px',
              }}
            >
              BUGGERS
            </p>
          </div>
          <div
            className="whatOnTheMenuChil2"
            style={{ width: '800px', height: '463px' }}
          >
            {Values.map((values) => (
              <div className="whatOnTheMenuChil3">
                <img
                  src={values.url}
                  style={{
                    width: '243px',
                    height: '220px',
                    left: '539px',
                    top: '1002px',
                  }}
                />
                <p
                  style={{
                    backgroundColor: `${values.backgroudColor}`,
                    width: '243px',
                    height: '60px',
                    fontFamily: 'poppis',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    lineHeight: '33px',
                    position: 'absolute',
                    bottom: '0px',
                    left: '-6px',
                    color: '#000000',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {values.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Onmenu;