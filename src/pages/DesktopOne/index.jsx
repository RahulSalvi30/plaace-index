import React from "react";

import { Img, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-2.5 w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[18px] md:px-5 w-[93%] md:w-full">
            <Img
              className="h-[93px] sm:h-auto object-cover w-[8%] md:w-full"
              src="images/img_rectangle29.png"
              alt="rectangleTwentyNine"
            />
            <div className="flex flex-col items-center justify-center ml-1.5 md:ml-[0] md:mt-0 mt-[17px] p-2.5 w-[338px]">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                size="txtInterBold40"
              >
                Portuguese villa
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center md:ml-[0] ml-[106px] md:mt-0 mt-[35px] p-2.5 w-[135px]">
              <Text
                className="text-black-900 text-lg w-auto"
                size="txtInterRegular18"
              >
                OUR HOTELS
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center md:ml-[0] ml-[5px] md:mt-0 mt-[34px] p-2.5 w-[164px]">
              <Text
                className="text-black-900 text-lg w-auto"
                size="txtInterRegular18"
              >
                SUSTAINABILITY
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center md:ml-[0] ml-[5px] md:mt-0 mt-9 p-2.5 w-[183px]">
              <Text
                className="text-black-900 text-lg w-auto"
                size="txtInterRegular18"
              >
                PARTNER WITH US
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center md:ml-[0] ml-[9px] md:mt-0 mt-9 p-2.5 w-[137px]">
              <a href="javascript:" className="text-black-900 text-lg w-auto">
                <Text size="txtInterRegular18">CONTACT US</Text>
              </a>
            </div>
            <div className="flex flex-col items-center justify-center md:ml-[0] ml-[5px] md:mt-0 mt-[35px] p-2.5 w-[153px]">
              <Text
                className="text-black-900 text-lg w-auto"
                size="txtInterRegular18"
              >
                RESERVATIONS
              </Text>
            </div>
          </div>
          <div className="sm:h-[1020px] md:h-[1588px] h-[1788px] mt-[54px] md:px-5 relative w-full">
            <div className="absolute md:h-[1534px] h-[1767px] sm:h-[966px] inset-[0] justify-center m-auto w-full">
              <div className="absolute md:h-[1534px] h-[1581px] sm:h-[966px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="flex flex-col md:gap-10 gap-[76px] h-full items-start justify-start m-auto w-full">
                  <div className="flex flex-col relative w-full">
                    <div className="flex flex-col mx-auto w-full">
                      <Img
                        className="h-[689px] mx-auto object-cover w-full"
                        src="images/img_rectangle2.png"
                        alt="rectangleTwo"
                      />
                      <div className="flex flex-col h-[179px] md:h-auto items-center justify-center max-w-[807px] mt-[-0.44px] mx-auto p-2.5 w-full z-[1]">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-700 w-auto"
                          size="txtInterRegular32"
                        >
                          Luxury 18th-century Portuguese Villa in North Kochi
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-[458px] ml-auto mr-[51px] mt-[-53.74px] object-cover w-[41%] z-[1]"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start w-[95%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[111px] items-start justify-start p-[26px] sm:px-5 w-[99%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group9.svg')",
                      }}
                    >
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start my-0.5 w-[70%] md:w-full">
                        <div className="flex flex-col items-center justify-center md:mt-0 mt-[9px] p-2.5 w-[183px]">
                          <Text
                            className="text-black-900 text-xl w-auto"
                            size="txtInterExtraLight20"
                          >
                            ROOMS & VILLAS
                          </Text>
                        </div>
                        <Text
                          className="mb-0.5 md:ml-[0] ml-[46px] md:mt-0 mt-1.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                          size="txtInterMedium36"
                        >
                          15
                        </Text>
                        <Text
                          className="mb-[9px] md:ml-[0] ml-[308px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                          size="txtInterMedium36"
                        >
                          11
                        </Text>
                        <Text
                          className="mb-[9px] md:ml-[0] ml-[296px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                          size="txtInterMedium36"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat h-[113px] md:h-[484px] sm:h-[84px] relative w-full"
                      style={{
                        backgroundImage: "url('images/img_group9.svg')",
                      }}
                    >
                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[72%]">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Text
                            className="md:mt-0 mt-[5px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                            size="txtInterThin48"
                          >
                            I
                          </Text>
                          <Img
                            className="md:flex-1 h-[37px] sm:h-auto md:ml-[0] ml-[41px] md:mt-0 mt-3.5 object-cover w-[5%] md:w-full"
                            src="images/img_rectangle6.png"
                            alt="rectangleSix"
                          />
                          <div className="flex flex-col items-center justify-center mb-0.5 md:ml-[0] ml-[22px] p-2.5 w-[153px]">
                            <Text
                              className="text-black-900 text-xl w-auto"
                              size="txtInterExtraLight20Black900"
                            >
                              SWIMMING POOL
                            </Text>
                          </div>
                          <Img
                            className="md:flex-1 h-[54px] sm:h-auto md:ml-[0] ml-[23px] md:mt-0 mt-[9px] object-cover w-[5%] md:w-full"
                            src="images/img_rectangle7.png"
                            alt="rectangleSeven"
                          />
                          <div className="flex flex-col items-center justify-center ml-6 md:ml-[0] md:mt-0 mt-1.5 p-2.5 w-[205px]">
                            <Text
                              className="font-thin text-black-900 text-xl w-auto"
                              size="txtInterLight16"
                            >
                              RECREATIONAL CENTRE
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center md:ml-[0] ml-[97px] md:mt-0 mt-0.5 p-2.5 w-[172px]">
                            <Text
                              className="normal-case text-black-900 text-xl w-auto"
                              size="txtInterExtraLight20Black900"
                            >
                              POOL SIDE SERVICE
                            </Text>
                          </div>
                          <div className="bg-gray-400 h-[49px] mb-[33px] md:ml-[0] ml-[5px] md:mt-0 mt-0.5 rounded-[10px] w-[16%]"></div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-[50px] md:h-auto items-center justify-center p-2.5 right-[14%] top-[23%] w-[134px]">
                        <a
                          href="javascript:"
                          className="text-black-900 text-xl w-auto"
                        >
                          <Text size="txtInterLight20">VIEW ALL</Text>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[5%] flex flex-row items-center justify-between left-[27%] w-[32%]">
                  <div className="flex flex-col items-center justify-center p-2.5 w-[161px]">
                    <Text
                      className="h-[120px] max-w-[141px] md:max-w-full text-black-900 text-xl"
                      size="txtInterExtraLight20"
                    >
                      ROOMS WITH PLUNGE POOL
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2.5 w-[106px]">
                    <Text
                      className="h-[130px] max-w-[106px] md:max-w-full text-black-900 text-xl"
                      size="txtInterExtraLight20"
                    >
                      FOOD & BEVERAGE OUTLETS
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[8%] flex flex-col items-center justify-center left-[1%] p-2.5 w-[133px]">
                <Text
                  className="h-[130px] max-w-[113px] md:max-w-full text-black-900 text-xl"
                  size="txtInterExtraLight20Black900"
                >
                  Facilities and Amenities
                </Text>
              </div>
              <Img
                className="absolute bottom-[12%] h-[57px] object-cover right-[43%] w-[4%]"
                src="images/img_rectangle8.png"
                alt="rectangleEight"
              />
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto p-2.5 w-[456px] sm:w-full">
                <Text
                  className="h-[120px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                  size="txtInterRegular32Black900"
                >
                  Live Your Stories
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-center max-w-[1041px] mx-auto p-2.5 w-full">
              <Text
                className="max-w-[1021px] md:max-w-full text-[15px] text-black-900 text-center"
                size="txtInterExtraLight15"
              >
                Embark on a memorable journey to explore the culture, heritage
                and cuisine of North Goa with curated experiences that narrate a
                story of their own.
              </Text>
            </div>
            <div className="absolute bottom-[22%] flex flex-col h-[765px] md:h-auto items-center justify-center left-[1%] max-w-[803px] p-2.5 w-full">
              <Text
                className="text-[18.5px] text-black-900"
                size="txtInterRegular185"
              >
                <span className="text-black-900 font-inter text-left font-normal">
                  <>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-thin">
                  Brief sketch{" "}
                </span>
                <span className="text-black-900 font-inter text-left font-medium">
                  <>
                    More Information
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  <>
                    <br />
                    Discover the enchantment of Old Kochi and immerse yourself
                    in the pleasures of an 18th-century Portuguese villa in
                    north Kochi at Lamrin Ucassaim.
                    <br />
                    <br />
                    The ancient streets of Ucassaim village in north Kochi are
                    interwoven with a rich tapestry of musical history. As you
                    wander through its winding lanes, you can almost hear the
                    haunting melodies that once filled the air, serenading
                    travelers on a journey through time. Tucked away amidst the
                    captivating beauty of this idyllic village is a hidden
                    treasure an exquisite 18th-century Portuguese villa. This
                    boutique h
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  otel in North Kochi 
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  <>
                    echoes the whispers of days gone by, inviting you to bask in
                    the grandeur and luxury of a bygone era.
                    <br />
                    <br />
                    Situated conveniently between Assagao and the pristine
                    beaches of north Kochi, this place awaits your arrival,
                    ready to embrace you with its golden sands and azure waters.{" "}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </>
                </span>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1311px] mt-[13px] mx-auto md:px-5 w-full">
            <Img
              className="h-[454px] md:h-auto md:mt-0 mt-[46px] object-cover rounded-tl-[15px] rounded-tr-[15px]"
              src="images/img_rectangle10.png"
              alt="rectangleTen"
            />
            <div className="flex flex-col gap-3 justify-start mb-2.5">
              <Img
                className="h-[454px] sm:h-auto object-cover w-full"
                src="images/img_rectangle11.png"
                alt="rectangleEleven"
              />
              <Text
                className="ml-8 md:ml-[0] text-black-900 text-center text-xl"
                size="txtInterRegular20"
              >
                KERALA BACKWATER
              </Text>
            </div>
            <Img
              className="h-[454px] md:h-auto md:mt-0 mt-[47px] object-cover rounded-tl-[15px] rounded-tr-[15px]"
              src="images/img_rectangle12.png"
              alt="rectangleTwelve"
            />
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1210px] mt-[29px] mx-auto md:px-5 w-full">
            <Text
              className="mb-[11px] text-black-900 text-center text-xl"
              size="txtInterRegular20"
            >
              KERALA TO MUNNNAR
            </Text>
            <Text
              className="sm:mt-0 mt-[11px] text-black-900 text-center text-xl"
              size="txtInterRegular20"
            >
              KERALA KATHAKALI
            </Text>
          </div>
          <Text
            className="ml-1.5 md:ml-[0] mt-[43px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
            size="txtInterRegular32Black900"
          >
            Stay
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1400px] mt-[17px] mx-auto md:px-5 w-full">
            <div className="md:h-[923px] h-[953px] md:mt-0 mt-[11px] relative w-[31%] md:w-full">
              <div className="absolute md:h-[923px] h-[953px] inset-[0] justify-center m-auto w-[96%] sm:w-full">
                <div className="absolute bg-gray-50 flex flex-col h-max inset-[0] items-end justify-center m-auto p-[35px] sm:px-5 w-full">
                  <Text
                    className="mr-[103px] mt-[828px] text-black-900 text-center text-xl"
                    size="txtInterRegular20"
                  >
                    BOOK NOW
                  </Text>
                </div>
                <Img
                  className="absolute h-[395px] inset-x-[0] mx-auto object-cover rounded-tl-[20px] rounded-tr-[20px] top-[0] w-full"
                  src="images/img_rectangle16.png"
                  alt="rectangleSixteen"
                />
              </div>
              <div className="absolute bottom-[21%] flex flex-col gap-[5px] inset-x-[0] justify-start mx-auto w-full">
                <div className="flex flex-col items-center justify-center md:ml-[0] ml-[110px] p-2.5 w-[193px]">
                  <Text
                    className="text-black-900 text-center text-xl"
                    size="txtInterRegular20"
                  >
                    <span className="text-black-900 font-inter font-normal">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="md:text-[26px] sm:text-2xl text-black-900 font-inter text-[28px] font-normal">
                      <>
                        Deluxe Room
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-inter font-normal">
                      <>
                        <br />
                      </>
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col h-[222px] md:h-auto items-center justify-center p-2.5 w-[434px] sm:w-full">
                  <Text
                    className="text-[17.5px] text-black-900 text-center"
                    size="txtInterRegular175"
                  >
                    <span className="text-black-900 font-inter font-normal">
                      <>
                        Gaze into the horizon from these well-adorned, open-plan
                        rooms on the first floor. Relax in these large rooms
                        with hand painted master walls, modern amenities and
                        stylized bathrooms. Private balcony with lounge beds
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-inter font-thin">
                      <>
                        Private plunge pools
                        <br />
                        Contemporary wooden interiors with four poster bed
                        <br />
                        Spacious rooms with abundant natural light
                      </>
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="md:h-[912px] h-[953px] md:ml-[0] ml-[38px] md:mt-0 mt-[11px] relative w-[32%] md:w-full">
              <div className="md:h-[912px] h-[953px] m-auto w-full">
                <div className="absolute md:h-[912px] h-[953px] inset-y-[0] left-[0] my-auto w-[96%] sm:w-full">
                  <div className="absolute bg-gray-50_01 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[46px] md:px-10 sm:px-5">
                    <Text
                      className="ml-20 md:ml-[0] mt-[795px] text-black-900 text-center text-xl"
                      size="txtInterRegular20"
                    >
                      BOOK NOW
                    </Text>
                  </div>
                  <Img
                    className="absolute h-[395px] inset-x-[0] mx-auto object-cover rounded-tl-[20px] rounded-tr-[20px] top-[0] w-full"
                    src="images/img_rectangle17.png"
                    alt="rectangleSeventeen"
                  />
                </div>
                <div className="absolute flex flex-col md:h-auto h-max inset-[0] items-center justify-center m-auto p-2.5 w-[434px] sm:w-full">
                  <Text
                    className="max-w-[414px] md:max-w-full text-black-900 text-center text-xl"
                    size="txtInterRegular20"
                  >
                    Superior Room With Private Pool
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[18%] flex flex-col h-[225px] md:h-auto inset-x-[0] items-center justify-center mx-auto pt-2.5 px-2.5 w-[434px] sm:w-full">
                <Text
                  className="text-[17.5px] text-black-900 text-center"
                  size="txtInterRegular175"
                >
                  <span className="text-black-900 font-inter font-normal">
                    <>
                      Enjoy the beauty of these open-plan rooms with distinctive
                      panache, bold designs and stylish bathrooms. These come
                      adorned with chic furniture & hand painted walls in shades
                      of deep turquoise & teal.
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-inter font-thin">
                    <>
                      Private plunge pool & garden area
                      <br />
                      Patio with intimate seating
                      <br />
                      Stylish interiors with four poster bed
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-inter font-normal">
                    <>
                      <br />
                      <br />
                      <br />
                    </>
                  </span>
                </Text>
              </div>
            </div>
            <div className="md:h-[944px] h-[946px] md:ml-[0] ml-[29px] relative w-[33%] md:w-full">
              <div className="absolute md:h-[944px] h-[946px] inset-[0] justify-center m-auto w-[99%] sm:w-full">
                <div className="absolute md:h-[944px] h-[946px] inset-y-[0] left-[0] my-auto w-[94%] sm:w-full">
                  <div className="absolute bg-gray-50_01 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[29px] sm:px-5">
                    <Text
                      className="mt-[861px] text-black-900 text-center text-xl"
                      size="txtInterRegular20"
                    >
                      BOOK NOW
                    </Text>
                  </div>
                  <Img
                    className="absolute h-[395px] inset-x-[0] mx-auto object-cover rounded-tl-[20px] rounded-tr-[20px] top-[0] w-[98%]"
                    src="images/img_rectangle18.png"
                    alt="rectangleEighteen"
                  />
                </div>
                <div className="absolute flex flex-col md:h-auto h-max inset-[0] items-center justify-center m-auto p-2.5 w-[454px] sm:w-full">
                  <Text
                    className="max-w-[434px] md:max-w-full text-black-900 text-center text-xl"
                    size="txtInterRegular20"
                  >
                    Premium Cottage With Private Pool
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[5%] flex flex-col h-[306px] md:h-auto items-center justify-center left-[0] p-2.5 w-[431px] sm:w-full">
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtInterRegular20"
                >
                  <span className="text-black-900 font-inter text-[17.5px] font-normal">
                    <>
                      Enjoy the beauty of these open-plan rooms with distinctive
                      panache, bold designs and stylish bathrooms. These come
                      adorned with hand painted statement wall in shades of deep
                      turquoise & teal, & chic furniture.
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-inter text-[17.5px] font-thin">
                    <>
                      Private plunge pools
                      <br />
                      Contemporary wooden interiors with four poster bed
                      <br />
                      Spacious rooms with abundant natural ligh
                    </>
                  </span>
                  <span className="text-black-900 font-inter text-[17.5px] font-normal">
                    <>
                      t<br />
                    </>
                  </span>
                  <span className="text-black-900 font-inter font-normal">
                    <>
                      <br />
                      <br />
                      <br />
                      <br />
                    </>
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[5px] mt-[41px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
            size="txtInterRegular32Black900"
          >
            Dining & After Hours
          </Text>
          <div className="flex md:flex-col flex-row gap-[59px] items-center justify-start md:ml-[0] ml-[75px] mt-6 md:px-5 w-4/5 md:w-full">
            <div className="md:h-[822px] h-[845px] relative w-[48%] md:w-full">
              <div className="absolute bg-gray-50_01 flex flex-col gap-[53px] h-max inset-[0] items-center justify-center m-auto p-[11px]">
                <Text
                  className="mt-[344px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtInterRegular32Black900"
                >
                  Stories Bistro
                </Text>
                <Text
                  className="text-gray-700 text-xl"
                  size="txtInterLight20Gray700"
                >
                  Portuguese Villa in North Kochi
                </Text>
                <Text
                  className="mb-2 text-black-900 text-center text-xl"
                  size="txtInterLight20"
                >
                  <>
                    Serving a range of Indian, continental & local Goan
                    delicacies, the Bistro offers an idyllic setting for a
                    delicious meal. Open floor plan, hand painted murals
                    depicting the colourful hues of nature, along with bespoke
                    service make for an enjoyable dining experience.
                    <br />
                    <br />
                    Multicuisine
                    <br />
                    Relaxed
                    <br />
                    Operational Period: 0700 till 2300 hours
                  </>
                </Text>
              </div>
              <Img
                className="absolute h-[341px] inset-x-[0] mx-auto object-cover rounded-tl-[10px] rounded-tr-[10px] top-[0] w-full"
                src="images/img_rectangle22.png"
                alt="rectangleTwentyTwo"
              />
            </div>
            <div className="md:h-[841px] h-[845px] relative w-[48%] md:w-full">
              <div className="absolute bg-gray-50_01 flex flex-col h-max inset-[0] justify-center m-auto pt-[27px] sm:px-5 px-[27px] w-full">
                <Text
                  className="mt-[345px] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtInterRegular32Black900"
                >
                  Stories Lounge
                </Text>
                <Text
                  className="md:ml-[0] ml-[126px] mr-[94px] mt-14 text-gray-700 text-xl"
                  size="txtInterLight20Gray700"
                >
                  Portuguese Villa in North Kochi
                </Text>
                <Text
                  className="mt-[71px] text-black-900 text-center text-xl"
                  size="txtInterLight20"
                >
                  <>
                    Experience Mediterranean vibes as you lounge in this
                    exquisitely stylised lounge with atypical interiors, jazz
                    music, and sweeping views of the Moira river backwaters.
                    <br />
                    <br />
                    Finger Food
                    <br />
                    Relaxed
                    <br />
                    Operational Period: Opening Soon
                  </>
                </Text>
              </div>
              <Img
                className="absolute h-[341px] inset-x-[0] mx-auto object-cover rounded-tl-[10px] rounded-tr-[10px] top-[0] w-full"
                src="images/img_rectangle23.png"
                alt="rectangleTwentyThree"
              />
            </div>
          </div>
          <Text
            className="ml-1.5 md:ml-[0] mt-[57px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
            size="txtInterRegular32Black900"
          >
            Wellness
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1242px] mt-[18px] mx-auto md:px-5 w-full">
            <div className="bg-gray-50_01 flex md:flex-1 flex-col md:gap-10 gap-[60px] items-center justify-start mb-[19px] pr-0.5 py-0.5 w-[46%] md:w-full">
              <Img
                className="h-[564px] sm:h-auto mt-4 object-cover rounded-tl-[15px] rounded-tr-[15px] w-full"
                src="images/img_rectangle26.png"
                alt="rectangleTwentySix"
              />
              <Text
                className="mb-[21px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                size="txtInterRegular32Black900"
              >
                <span className="md:text-[22px] sm:text-xl text-black-900 font-inter text-2xl font-normal">
                  <>
                    K By Kaya Kalp
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-xl font-light">
                  <>
                    Immerse and relax with our signature treatments at K by Kaya
                    Kalp.
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-xl font-normal">
                  <>
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-xl font-medium">
                  <>
                    Opening Soon
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter font-normal">
                  <>
                    <br />
                  </>
                </span>
              </Text>
            </div>
            <div className="bg-gray-50_01 flex md:flex-1 flex-col gap-[49px] items-center justify-start md:mt-0 mt-[19px] pb-[3px] pr-[3px] w-[46%] md:w-full">
              <Img
                className="h-[564px] sm:h-auto object-cover rounded-tl-[15px] rounded-tr-[15px] w-full"
                src="images/img_rectangle28.png"
                alt="rectangleTwentyEight"
              />
              <Text
                className="mb-[50px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                size="txtInterRegular32Black900"
              >
                <span className="md:text-[22px] sm:text-xl text-black-900 font-inter text-2xl font-normal">
                  <>
                    Pool
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-xl font-light">
                  <>
                    The perfect place for our guests to relax and sunbathe is at
                    the turquoise tiled swimming pool. 
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-xl font-semibold">
                  Operational Timing
                </span>
                <span className="text-black-900 font-inter text-xl font-light">
                  <>
                     - 0700 till 2000 hours
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-xl font-medium">
                  <>
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter font-normal">
                  <>
                    <br />
                  </>
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
