import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
const Home = () => {
  return (
    // <div className="home">
    //   {/* <Sidebar categories={categories}/> */}
    //   <BlogList blogs={blogs} title='All dojomate' handleDelete={handleDelete}/>

    // </div>
    <div>
      <div className="">
        <div id="renderedApp" className="responsive ">
          <div id="site-wrapper" className="site-wrapper is-responsive"></div>
          <div className="HeaderInverted">
            <div className="CustomHeader CustomHeader--mode-page-reverse CustomHeader-- ">
              <div className="CustomHeader__container">
                <div className="HeaderInverted__block HeaderInverted__block--left">
                  <button className="HeaderBurgerMenuButton" type="button">
                    <i className="HeaderBurgerMenuButton__icon HeaderInverted__button__burger __icon icon-menu-burger"></i>
                  </button>
                </div>
                <div className="HeaderInverted__block HeaderInverted__block--center"></div>
                <div className="HeaderInverted__block HeaderInverted__block--right">
                  <ul className="HeaderLinksList">
                    <li className="HeaderLinksListItem HeaderInverted__link">
                      <div className="HeaderAllCarts   ">
                        <div className="AllCartsDropdown">
                          <a
                            href="/carts"
                            className="AllCarts__handle AllCarts__handle--mobile HeaderAllCarts  "
                          >
                            <i className="AllCarts__handle__icon--custom-site icon-shopping-bag"></i>
                            <span className="AllCarts__handle__badge--white">
                              0
                            </span>
                          </a>
                          <button
                            type="button"
                            className="AllCarts__handle AllCarts__handle--tablet HeaderAllCarts  "
                          >
                            <i className="AllCarts__handle__icon--custom-site icon-shopping-bag"></i>
                            <span className="AllCarts__handle__badge--white">
                              0
                            </span>
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="CustomHeader__overlay CustomHeader__overlay--disabled"></div>
          </div>
          <div className="Homepage">
            <div className="SiteSearchPanel">
              <div className="SiteSearchPanel__Background "></div>
              <div className="SiteSearchPanel__SearchBlock ">
                <div
                  className="SiteSearchPanel__SearchBlock__Inner "
                  style={{ marginTop: '0px ' }}
                >
                  <div className="SiteSearchPanel__SearchBlock__OpacityCover "></div>
                  <div className="SiteSearchPanel__SearchBlock__OpacityContainer ">
                    <div className="SiteSearchPanel__SearchBlock__Inner__Logo icon-delivery-logo ">
                      Safirun
                    </div>
                    <div className="SiteSearchPanel__Icons ">
                      <i
                        className="SiteSearchPanel__Icons__Icon icon-food "
                        role="button "
                      ></i>
                      <i
                        className="SiteSearchPanel__Icons__Icon icon-alcohol "
                        role="button "
                      ></i>
                      <i
                        className="SiteSearchPanel__Icons__Icon icon-groceries "
                        role="button "
                      ></i>
                      <i
                        className="SiteSearchPanel__Icons__Icon icon-laundry "
                        role="button "
                      ></i>
                    </div>
                    <h1 className="SiteSearchPanel__SearchBlock__Inner__Title main-headline SiteSearchPanel__SearchBlock__Inner__Title--active ">
                      See who delivers in your neighborhood
                    </h1>
                    <h1 className="SiteSearchPanel__SearchBlock__Inner__Title main-headline ">
                      All of your favorite local restaurants
                    </h1>
                    <h1 className="SiteSearchPanel__SearchBlock__Inner__Title main-headline ">
                      Beer, wine and spirits delivered to your door
                    </h1>
                    <h1 className="SiteSearchPanel__SearchBlock__Inner__Title main-headline ">
                      Wash-and-fold, dry cleaning and more
                    </h1>
                    <h1 className="SiteSearchPanel__SearchBlock__Inner__Title main-headline ">
                      Groceries and home essentials
                    </h1>
                    <div className="AddressAutocompleteForm undefined ">
                      <form className="AddressAutocompleteForm__Form SiteSearchPanel__SearchBlock__Inner__Autocomplete ">
                        <div className="Autocomplete AddressAutocomplete undefined ">
                          <div className="AutocompleteInput ">
                            <input
                              name="AutocompleteInput-0"
                              className="AutocompleteInput__input AddressAutocomplete__Input"
                              placeholder="Street Address, City, State"
                              aria-haspopup="false"
                              aria-label="What is your address?"
                              aria-autoComplete="list"
                              aria-owns="AutocompleteResultsList-0"
                              aria-activedescendant="false "
                              autoComplete="on"
                              value=" "
                            ></input>
                            <div className="AutocompleteInput__inputIcon ">
                              <span className="icon-location-arrow AutocompleteInput__inputIcon__icon "></span>
                            </div>
                          </div>
                          <ul
                            className="AutocompleteResults "
                            id="AutocompleteResultsList-0 "
                            role="listbox "
                            aria-expanded="false "
                            style={{ visibility: 'hidden ' }}
                          ></ul>
                        </div>
                        <button
                          type="submit "
                          className="ProcessingButton AddressAutocompleteForm__Form__Submit SiteSearchPanel__SearchBlock__Inner__Autocomplete__Submit dcom-button primary "
                          delay="3000 "
                        >
                          <div className="ProcessingButton__Inner">
                            <span className="ProcessingButton__Child ">
                              Search
                            </span>
                          </div>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="WhyOrderPanel ">
            <h2 className="light ">Why order with Safirun</h2>
            <div className="HomepageDivider "></div>
            <div className="WhyOrderPanel__BubblesReasons dcom__container ">
              <div className="Bubbles ">
                <span className="Bubbles__Bubble "></span>
                <span className="Bubbles__Bubble "></span>
                <span className="Bubbles__Bubble "></span>
                <span className="Bubbles__Bubble "></span>
                <span
                  className="Bubbles__Bubble
                        "
                ></span>
                <span className="Bubbles__Bubble "></span>
                <span className="Bubbles__Bubble "></span>
                <span className="Bubbles__Bubble "></span>
                <span className="Bubbles__Bubble "></span>
              </div>
              <div className="Bubbles ">
                <span className="Bubbles__Bubble "></span>
                <span className="Bubbles__Bubble "></span>
                <span className="Bubbles__Bubble "></span>
                <span className="Bubbles__Bubble "></span>
                <span
                  className="Bubbles__Bubble
                        "
                ></span>
                <span className="Bubbles__Bubble "></span>
                <span className="Bubbles__Bubble "></span>
                <span className="Bubbles__Bubble "></span>
                <span className="Bubbles__Bubble "></span>
              </div>
              <div className="WhyOrderPanel__Reasons ">
                <div className="WhyOrderPanel__Reasons__Reason ">
                  <div className="WhyOrderPanel__Reasons__Reason__ImageWrap "></div>
                  <h3 className="WhyOrderPanel__Reasons__Reason__Headline ">
                    Find Favorites and Discover New Ones
                  </h3>
                  <p className="WhyOrderPanel__Reasons__Reason__Text ">
                    Browse thousands of restaurants and stores to get the best
                    of your neighborhood delivered.
                  </p>
                </div>
                <div className="WhyOrderPanel__Reasons__Reason ">
                  <div className="WhyOrderPanel__Reasons__Reason__ImageWrap ">
                    <img
                      className="WhyOrderPanel__Reasons__Reason__Image "
                      src="https://res.cloudinary.com/delivery-com/image/fetch/f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FHomepage%2FWhyOrder%2Fphone.png"
                    ></img>
                  </div>
                  <h3 className="WhyOrderPanel__Reasons__Reason__Headline ">
                    Free, Easy, and Essential
                  </h3>
                  <p className="WhyOrderPanel__Reasons__Reason__Text ">
                    It's free to order, so save time tackling your to-do list at
                    home, at work, or on the go.
                  </p>
                </div>
                <div className="WhyOrderPanel__Reasons__Reason ">
                  <div className="WhyOrderPanel__Reasons__Reason__ImageWrap "></div>
                  <h3 className="WhyOrderPanel__Reasons__Reason__Headline ">
                    Earn Points and Get Rewards
                  </h3>
                  <p className="WhyOrderPanel__Reasons__Reason__Text ">
                    Score Delivery Points with every purchase and cash them in
                    for gift cards and other rewards.
                  </p>
                  <a
                    href="/delivery-points "
                    className="WhyOrderPanel__Reasons__Reason__Link "
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div className="WhatPeopleSayPanel ">
            <div className="WhatPeopleSayPanel__Background "></div>
            <div className="dcom__container__large ">
              <div className="WhatPeopleSayPanel__Box ">
                <h2 className="light ">What people say about us</h2>
                <div className="HomepageDivider "></div>
                <div className="TweetPanel ">
                  <div className="TweetPanel__Block ">
                    <div className="lazyload-placeholder "></div>
                    <div className="TweetPanel__Block__TweetScale ">
                      <div className="TweetPanel__Block__TweetAnimate ">
                        <span className="triangle-down shadow "></span>
                        <span className="triangle-down "></span>
                        <div className="TweetPanel__Block__Tweet ">
                          <div className="TweetPanel__Block__Tweet__Wrap ">
                            <i className="icon-twitter-bird "></i>
                            <p className="TweetPanel__Block__Tweet__Content ">
                              <a
                                href='https:=" " twitter.com=" " deliverydotcom'
                                target="_blank"
                              ></a>
                            </p>
                            <p className="TweetPanel__Block__Tweet__User ">
                              <strong>Jonathon</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="TweetPanel__Block ">
                    <div className="lazyload-placeholder "></div>
                    <div className="TweetPanel__Block__TweetScale ">
                      <div className="TweetPanel__Block__TweetAnimate ">
                        <span className="triangle-down shadow "></span>
                        <span className="triangle-down "></span>
                        <div className="TweetPanel__Block__Tweet ">
                          <div className="TweetPanel__Block__Tweet__Wrap ">
                            <i className="icon-twitter-bird "></i>
                            <p className="TweetPanel__Block__Tweet__Content ">
                              The amount of joy I get from reaching the number
                              of points required to get $20 off{' '}
                            </p>
                            <p className="TweetPanel__Block__Tweet__User ">
                              <strong>Aly</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="TweetPanel__Block active ">
                  <div className="lazyload-placeholder "></div>
                  <div className="TweetPanel__Block__TweetScale ">
                    <div className="TweetPanel__Block__TweetAnimate ">
                      <span className="triangle-down shadow "></span>
                      <span className="triangle-down "></span>
                      <div className="TweetPanel__Block__Tweet ">
                        <div className="TweetPanel__Block__Tweet__Wrap ">
                          <i className="icon-twitter-bird "></i>
                          <p className="TweetPanel__Block__Tweet__Content ">
                            Just convinced myself that it's "too late " to do
                            dishes{' '}
                          </p>
                          <p className="TweetPanel__Block__Tweet__User ">
                            <strong>David</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="TweetPanel__Block ">
                <div className="lazyload-placeholder "></div>
                <div className="TweetPanel__Block__TweetScale ">
                  <div className="TweetPanel__Block__TweetAnimate ">
                    <span className="triangle-down shadow "></span>
                    <span className="triangle-down "></span>
                    <div className="TweetPanel__Block__Tweet ">
                      <div className="TweetPanel__Block__Tweet__Wrap ">
                        <i className="icon-twitter-bird "></i>
                        <p className="TweetPanel__Block__Tweet__Content ">
                          I’m obsessed with excellent customer service...thanks
                        </p>
                      </div>
                      <p className="TweetPanel__Block__Tweet__User ">
                        <strong>Katherine</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="TweetPanel__Block ">
              <div className="lazyload-placeholder "></div>
              <div className="TweetPanel__Block__TweetScale ">
                <div className="TweetPanel__Block__TweetAnimate ">
                  <span className="triangle-down shadow "></span>
                  <span className="triangle-down "></span>
                  <div className="TweetPanel__Block__Tweet ">
                    <div className="TweetPanel__Block__Tweet__Wrap ">
                      <i className="icon-twitter-bird "></i>
                      <p className="TweetPanel__Block__Tweet__Content ">
                        Chinese{' '}
                        <img
                          src="https://res.cloudinary.com/delivery-com/image/fetch/q_20,f_auto/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FHomepage%2FWhatPeopleSay%2Fchinese.png
                        "
                          alt=" "
                        ></img>
                      </p>
                      <p className="TweetPanel__Block__Tweet__User ">
                        <strong>Dave</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="TweetPanel__Block ">
              <div className="lazyload-placeholder "></div>
              <div className="TweetPanel__Block__TweetScale ">
                <div className="TweetPanel__Block__TweetAnimate ">
                  <span className="triangle-down shadow "></span>
                  <span className="triangle-down "></span>
                  <div className="TweetPanel__Block__Tweet ">
                    <div className="TweetPanel__Block__Tweet__Wrap ">
                      <i className="icon-twitter-bird "></i>
                      <p className="TweetPanel__Block__Tweet__Content ">
                        Ordering{' '}
                      </p>
                      <p className="TweetPanel__Block__Tweet__User ">
                        <strong>T. Kyle</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="TweetPanel__Block ">
              <div className="lazyload-placeholder "></div>
              <div className="TweetPanel__Block__TweetScale ">
                <div className="TweetPanel__Block__TweetAnimate ">
                  <span className="triangle-down shadow "></span>
                  <span className="triangle-down "></span>
                  <div className="TweetPanel__Block__Tweet ">
                    <div className="TweetPanel__Block__Tweet__Wrap ">
                      <i className="icon-twitter-bird "></i>
                      <p className="TweetPanel__Block__Tweet__Content "></p>
                      <p className="TweetPanel__Block__Tweet__User ">
                        <strong></strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="TweetPanel__Block ">
              <div className="lazyload-placeholder "></div>
              <div className="TweetPanel__Block__TweetScale ">
                <div className="TweetPanel__Block__TweetAnimate ">
                  <span className="triangle-down shadow "></span>
                  <span className="triangle-down "></span>
                  <div className="TweetPanel__Block__Tweet ">
                    <div className="TweetPanel__Block__Tweet__Wrap ">
                      <i className="icon-twitter-bird "></i>
                      <p className="TweetPanel__Block__Tweet__Content "></p>
                      <p className="TweetPanel__Block__Tweet__User ">
                        <strong></strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="TweetPanel__Block ">
              <div className="lazyload-placeholder "></div>
              <div className="TweetPanel__Block__TweetScale ">
                <div className="TweetPanel__Block__TweetAnimate ">
                  <span className="triangle-down shadow "></span>
                  <span className="triangle-down "></span>
                  <div className="TweetPanel__Block__Tweet ">
                    <div className="TweetPanel__Block__Tweet__Wrap ">
                      <i className="icon-twitter-bird "></i>
                      <p className="TweetPanel__Block__Tweet__Content "></p>
                      <p className="TweetPanel__Block__Tweet__User ">
                        <strong></strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="TweetPanel__Block ">
              <div className="lazyload-placeholder "></div>
              <div className="TweetPanel__Block__TweetScale ">
                <div className="TweetPanel__Block__TweetAnimate ">
                  <span className="triangle-down shadow "></span>
                  <span className="triangle-down "></span>
                  <div className="TweetPanel__Block__Tweet ">
                    <div className="TweetPanel__Block__Tweet__Wrap ">
                      <i className="icon-twitter-bird "></i>
                      <p className="TweetPanel__Block__Tweet__Content "></p>
                      <p className="TweetPanel__Block__Tweet__User ">
                        <strong></strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="TweetPanel__CenterTweet TweetPanel__CenterTweet--2 ">
              <div className="TweetPanel__Block__TweetScale ">
                <div className="TweetPanel__Block__TweetAnimate ">
                  <span className="triangle-down shadow "></span>
                  <span className="triangle-down "></span>
                  <div className="TweetPanel__Block__Tweet ">
                    <div className="TweetPanel__Block__Tweet__Wrap ">
                      <i className="icon-twitter-bird "></i>
                      <p className="TweetPanel__Block__Tweet__Content ">
                        Just convinced myself that it's "too late " to do dishes{' '}
                      </p>
                      <p className="TweetPanel__Block__Tweet__User ">
                        <strong>David</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
