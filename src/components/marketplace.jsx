const marketplace = () => {
    return (
      <div>
        <div className="marketPlaceChil1">
          <h1 className="marketPlace">SAFIRUN market place </h1>
          <div style={{ display: 'flex', position: 'relative' }}>
            <p
              className="viewMore"
              style={{ marginRight: '20px', marginBottom: '-40px' }}
            >
              Vew more
            </p>
            <p>
              <MdArrowForward
                style={{
                  color: 'black',
                  height: '27px',
                  width: '27px',
                  marginLeft: '80px',
                  marginTop: '-12px',
                  position: 'absolute',
                  left: '10px',
                  top: '18px',
                  backgroundColor: '#CCCCCC',
                  borderRadius: '20px',
                }}
              />
            </p>
          </div>
        </div>
        <div className="marketPlaceChil2">
          {Data.map((data) => (
            <div className="marketPlaceChil3">
              <img
                src={data.url}
                style={{
                  width: '342px',
                  height: '303px',
                  left: '539px',
                  top: '1002px',
                }}
              />
              <p
                style={{
                  backgroundColor: `${data.backgroudColor}`,
                  width: '342px',

                  height: '57px',
                  fontFamily: 'poppis',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  lineHeight: '33px',
                  position: 'absolute',
                  bottom: '-4px',
                  left: '-6px',
                  color: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {data.text}
              </p>
            </div>
          ))}
          <div className="marketPlaceChil3">
            <img
              src="../assets/SHOPPIN2.png"
              style={{
                width: '1042px',
                height: '246px',
                left: '539px',
                top: '1002px',
              }}
            />
            <p
              style={{
                backgroundColor: '#750062',
                width: '1042px',
                color: '#FFFFFF',
                position: 'absolute',
                justifyContent: 'center',
                bottom: '-4px',
                left: '-6px',
                height: '57px',
              }}
            >
              SHOPPIG
            </p>
          </div>
        </div>
      </div>
    );
}

export default marketplace;