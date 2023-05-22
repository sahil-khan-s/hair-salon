import './App.css';
import Header from './components/Header';
import wildHoney from '../src/assets/images/wildHoney.png'
import hairSalon1 from '../src/assets/images/hairSalon1.png'
import icon1 from '../src/assets/images/icon1.svg'
import icon2 from '../src/assets/images/icon2.svg'
import icon3 from '../src/assets/images/icon3.svg'
import icon4 from '../src/assets/images/icon4.svg'
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
  
    </div>
  );
}

export default App;
