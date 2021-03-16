<div className='fooderChil8'>
    {
        SpecialOffer.map(special => (
            <Card className='fooderChil10'>
                <img src={special.url} style={{
                    width: '242px',
                    height: '150px',
                    marginBottom: '-8px'
                }}></img>
                <div style={{
                    height: '94px',
                    width: '242px',
                    boxShadow: '0px 0px 11px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <p style={{
                        lineHeight: '30px',
                        margin: '0px',
                        padding: '0px',
                        marginLeft: '10px'
                    }}>{special.title}</p>
                    <p style={{
                        fontSize: '14px',
                        color: '#787878',
                        lineHeight: '30px',
                        margin: '0px',
                        padding: '0px',
                        marginLeft: '10px'
                    }}>{special.sub1}</p>
                    <div style={{
                        fontSize: '14.2675px',
                        color: '#000000',
                        lineHeight: '30px',
                        margin: '0px',
                        padding: '0px',
                        marginLeft: '10px'
                    }}>
                        <img src='../assets/star.png' style={{
                            position: 'absolute',
                            marginLeft: '100px',
                            marginTop: '8px'
                        }}></img>
                        <p style={{
                            fontSize: '14.2675px',
                            color: '#000000',
                            lineHeight: '30px',
                            margin: '0px',
                            padding: '0px'
                        }}>{special.sub2}</p>
                        <p style={{
                            fontSize: '14.2675px',
                            color: '#000000',
                            lineHeight: '30px',
                            margin: '0px',
                            padding: '0px',
                            position: 'relative',
                            marginLeft: '120px',
                            marginTop: '-30px'
                        }}>{special.sub3}</p>
                    </div>
                </div>

            </Card>
        ))
    }
</div>