import './App.css';
import HairSalon from './components/Common/HairSalon';
import AboutUs from './components/AboutUs'
import Header from './components/Header';
import Footer from './components/Footer'
import Hours from './components/Hours';
import OurWork from './components/OurWork';
import wildHoney from '../src/assets/images/wildHoney.png'
import hairSalon1 from '../src/assets/images/hairSalon1.png'
import hairSalon2 from '../src/assets/images/hairSalon2.png'
import hairSalon3 from '../src/assets/images/hairSalon3.png'
import hairImg from '../src/assets/images/hairImg.png'
import hairImg2 from '../src/assets/images/hairImg2.png'
import hairImg3 from '../src/assets/images/hairImg3.png'
import hairImg4 from '../src/assets/images/hairImg4.png'
import station from '../src/assets/images/station.png'
import map from '../src/assets/images/map.png'
import icon1 from '../src/assets/images/icon1.svg'
import icon2 from '../src/assets/images/icon2.svg'
import icon3 from '../src/assets/images/icon3.svg'
import icon4 from '../src/assets/images/icon4.svg'
import locationIcon from '../src/assets/images/location.svg'
import icon5 from '../src/assets/images/icon5.svg'
import callIcon from '../src/assets/images/callIcon.svg'

function App() {
  const headerData = {
    imageUrl: wildHoney,
    texts: [
      'About Us',
      'Services',
      'Hours',
      'Testimonials',
      'FAQs',
      'Contact Us',
    ],
    text: "Connect with us",
    icon1:icon1,
    icon2:icon2,
    icon3:icon3,
    icon4:icon4,
    icon5:icon5,
    callIcon:callIcon,
    phone:"(619) 255-9779",
    btnText:"Book Now",
    title: "OUR SAN DIEGO HAIR SALON",
    discription: "Wild Honey Salons in Bankers Hill, San Diego CA (formerly Fox and Jane) is the premier salon for beautiful haircuts, hair color, balayage, highlights, hair painting, color correction, scissor/razor cuts, and blowouts. Our stylists make this the most requested hair salon in the Bankers Hill and Hillcrest area.",   
    discription2: "Eu velit sed nisl amet nisl morbi tristique feugiat. At ac ornare egestas pharetra egestas eu et ullamcorper. Sed eleifend vulputate vel faucibus volutpat.", 
    image: hairSalon1  ,
    discription3:"Nibh eget urna nullam at dolor lectus feugiat luctus. Tristique molestie sit tempor pulvinar. Lorem amet dignissim cras odio ut feugiat. Sit id nunc suspendisse viverra in neque. Vitae commodo convallis odio mattis ornare non felis.",

  };

   const hoursData = {
    title: "Hours",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday:"Saturday",
    sunday:"Sunday",
    sundayTime: "Closed",
    time: "6AM - 10PM",
    saturdayTime: "7AM - 8PM",
    image:hairSalon2,
    coments:"She was so nice and gave me the best haircut of my life!",
    discription:"I was in San Diego last week for wedding and I needed to get my hair done for that night. I found this super cute salon close to our airbnb. It was a Sunday morning and I couldn't believe they were open! I was greeted by Brenda, one of the owners.She was so nice and gave me the best haircut of my life! I think I will need to make monthly trips to San Diego now to get my hair cut.",
    name:"Barbara E.",
   }
  
   const cardData = [
    {
        'image': hairImg,
        'text': 'Full Highlight + Toner + Style | Miracle Hair'
    },
    {
        'image': hairImg2,
        'text': 'Vehmenently Vivid : a @mightylocks Appreciation ...'
    },
    {
        'image':hairImg3,
        'text': 'Obsession is totally healthy with a transformation ...'
    },
    {  'image':hairImg4,
        'text': 'In ❤️‍🔥 with this copper by @mightylocks'
    }
]  

const ourSalonData={
  title:"OUR VIBE",
  discription:"We see the Salon as a place for communal gathering, where we can share ideas and aspirations, find joy and solidarity, and converse about life as an experience to be cherished.",
  discription2:"Come in and have a coffee, network with other guests or simply detach and catch up on work. Our Wild Honey Shop offers carefully-curated, niche product lines from local and small businesses. Here, you can relax in our friendly, light-filled space with views of Balboa Park.",
  discription3:"Our space is available to rent for networking events as well. We are located in the historic Old Firehouse No. 3, built-in 1908. It is a space to see and to be seen in. To inquire, call Brenda at (619) 255-9779.",
  image:hairSalon3,
}
const imageStyle = {
  width: '592px',
  height: '564px',
};

const AboutUsData={
  title:"About Us",
  discription:"Wild Honey Salon is a diverse, exciting creative hub located in Bankers Hill just steps from Balboa Park and close to the nearby areas of",
  text1:"Mission Hills",
  text2:"Hillcrest",
  text3:"Little Italy",
  text4:"North Park",
  text5:"South Park",
  text6:"Mission Valley",
  text7:"University Heights",
  text8:"Downtown San Diego",
  image: station,
  location:"2870 5th Avenue, Ste. 101, San Diego 92103",
  locationIcon:locationIcon,
  callIcon:callIcon,
  phone:"(619) 255-9779",
  map:map,

}

const footerData = {
  image:wildHoney,
  location:"2870 5th Avenue, Ste. 101, San Diego 92103",
  locationIcon:locationIcon,
  callIcon:callIcon,
  phone:"(619) 255-9779",
}
  return (
    <div className="App">
      <div>
      <Header headerData={headerData} 
       text={headerData.text}
       icon1={headerData.icon1}
       icon2={headerData.icon2}
       icon3={headerData.icon3}
       icon4={headerData.icon4}
       icon5={headerData.icon5}
       callIcon={headerData.callIcon}
       phone={headerData.phone}
       btnText={headerData.btnText}
       title={headerData.title}
       discription={headerData.discription}
       discription2 = {headerData.discription2}
       discription3 = {headerData.discription3}
       image={headerData.image}
      />
    </div>

  <Hours 
  title={hoursData.title}
  monday={hoursData.monday}
  tuesday={hoursData.tuesday}
  wednesday={hoursData.wednesday}
  thursday={hoursData.thursday}
  friday={hoursData.friday}
  saturday={hoursData.saturday}
  sunday={hoursData.sunday}
  sundayTime={hoursData.sundayTime}
  saturdayTime={hoursData.saturdayTime}
  time={hoursData.time}
  image={hoursData.image}
  coments={hoursData.coments}
  discription={hoursData.discription}
  name={hoursData.name}
  />
<div className='py-[96px]'>
    <OurWork cardData={cardData}   />
  </div>
<div className='pb-[96px]'>
<HairSalon 
   title={ourSalonData.title}
   discription={ourSalonData.discription}
   discription2={ourSalonData.discription2}
   discription3={ourSalonData.discription3}
   image={ourSalonData.image}
   imageStyle={imageStyle}
  />
</div>

 <AboutUs
 title={AboutUsData.title}
 discription={AboutUsData.discription}
 text1={AboutUsData.text1}
 text2={AboutUsData.text2}
 text3={AboutUsData.text3}
 text4={AboutUsData.text4}
 text5={AboutUsData.text5}
 text6={AboutUsData.text6}
 text7={AboutUsData.text7}
 text8={AboutUsData.text8}
 image={AboutUsData.image}
 location={AboutUsData.location}
 locationIcon={AboutUsData.locationIcon}
 callIcon={AboutUsData.callIcon}
 phone={AboutUsData.phone}
 map={AboutUsData.map}
 />
  
 <Footer
 image={footerData.image}
 location={footerData.location}
 locationIcon={footerData.locationIcon}
 callIcon={footerData.callIcon}
 phone={footerData.phone}
 />

    </div>
  );
}

export default App;
