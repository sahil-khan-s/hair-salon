import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import OurComunity from './components/OurComunity';
import CallUs from './components/CallUs';
import PlumbingHelp from './components/PlumbingHelp';
import Experts from './components/Experts';
import powers from '../src/assets/images/powers.png'
import experts from '../src/assets/images/experts.png'
import toilet from '../src/assets/images/toilet.png'
import heatPump from '../src/assets/images/heatPump.png'
import leakingPipes from '../src/assets/images/leakingPipes.png'
import sewerLines from '../src/assets/images/sewerLines.png'
import waterHeater from '../src/assets/images/waterHeater.png'
import drainClean from '../src/assets/images/drainClean.png'
import appliance from '../src/assets/images/appliance.png'
import pipeRepair from '../src/assets/images/pipeRepair.png'
import filter from '../src/assets/images/filter.png'
import noritz from '../src/assets/images/noritz.png'
import brandWhite from '../src/assets/images/brandWhite.png'
import icon1 from '../src/assets/images/icon1.svg'
import icon2 from '../src/assets/images/icon2.svg'
import icon3 from '../src/assets/images/icon3.svg'
import icon4 from '../src/assets/images/icon4.svg'
import fb from '../src/assets/images/fb.svg'
import insta from '../src/assets/images/insta.svg'
import linkdIn from '../src/assets/images/in.svg'
import youTube from '../src/assets/images/youTube.svg'
import twitter from '../src/assets/images/twitter.svg'
import Footer from '../src/components/Footer'
function App() {
  const headerData = {
    imageUrl: powers,
    texts: [
      'About Us',
      'Services',
      'Hours',
      'Testimonials',
      'FAQs',
      'Contact Us',
    ],
  };

  const heroData = {
    title: "Get In Touch",
    buttonText: "Contact Us",   
  };
  const expertsData = {
    title: "Trust Us, We’re Experts",
    discription: "Since 1914, Powers Plumbing has had a passion for performing high quality plumbing service.",   
    discription2: "We have seen a lot of unique situations over these years. We are here to help with your next service or remodel project. Call us now to discuss what you want to accomplish. We will perform all of your plumbing repairs so that you will be in service for years to come. See our Resources page for more articles and information.", 
    image: experts  ,
    subSectionTitle:"The team at Powers Plumbing was great to work with.",
    subSectionDiscrp:"They have great availability, fair pricing and do excellent work. I look forward to using them again when our next plumbing need arises.",
    name:"Aaron Iffland"
  };
  
  const ourComunityData = {
    title: "Involved In Our Community",
    discription: "Powers Plumbing has been deeply involved in the Mission Hills Community since the early part of the last century and we are here to stay. We are the longest running sponsor of the Presidio Little League. On April 5th, 2014, County Supervisor Ron Roberts declared Powers Plumbing Day throughout San Diego County and Mayor Kevin Faulconer declared August 1st, 2014 Powers Plumbing day in the City of San Diego in recognition of our 100th year serving San Diego. Thank you for your support and genuine affection towards our team. See our About Us page to learn more.",   
  };
  const plumbingData = {
    title: "Plumbing Problem? We Can Help You!",
    discription: "Below is a list of just some of the services we offer as well as appliances and equipment we work on. Whether it’s plumbing for a remodel, tankless water heater, sewer line camera inspection or toilet replacement parts, we take quality seriously. Our plumbers are great mechanics and our company strives to provide repair services and sources parts that will get you your money’s worth. To learn more, visit our Service & Repair and Remodel pages.",   
    discription2:"We Use Only Best Brands",
    image:noritz,
    image2:brandWhite,
  };

  const callUsData = {
    title: "Call Us Today",
    discription: "We are here to help!",   
    btnText:"Schedule Now! ",
    image :powers ,
    powerText:"Est.1914",
    icon1:icon1,
    icon2:icon2,
    icon3:icon3,
    icon4:icon4,
    licence:"License #12345",
    mail:"mike@marrowmerchant.com",
    location:"6200 Irvine Blvd, Irvine, CA 92620",
    phone:"(800) 555-4321",
    servingSan:"Serving San Diego For Over 100 Years",
    ServingSanDisc1:"Since 1914, Powers Plumbing has been on a mission to provide exceptional high quality plumbing services for the San Diego communities we serve. We are deeply connected to our historic Mission Hills community and are proud to serve multiple generations of families throughout San Diego.",
    ServingSanDisc2:"We continue to strive to be the best plumbing shop in San Diego by living up to high ethical standards that have been passed down to us through generations of honorable service."


  };
  const cards = [
    {
      id: 1,
      image: toilet,
      text: 'Toilets',
    },
    {
      id: 2,
      image: waterHeater,
      text: 'Gas Water Heater',
    },
    {
      id: 3,
      image: heatPump,
      text: 'Heat Pumps',
    },
    {
      id: 4,
      image: sewerLines,
      text: 'Sewer Lines  ',
    },
    {
      id: 5,
      image: leakingPipes,
      text: 'Leaking Pipes',
    },
    {
      id: 6,
      image: drainClean,
      text: 'Drain Cleaning',
    },
    {
      id: 7,
      image: filter,
      text: 'Water Filters',
    },
    {
      id: 8,
      image: pipeRepair,
      text: 'Pipe Repair And Installs',
    },
    {
      id: 9,
      image: appliance,
      text: 'Appliance Installation',
    },
    // ... rest of the data
  ];
  const footerData = {
    copyWrite: "Copyright ©2023 Company Name",
    fb:fb,
    twitter:twitter,
    insta:insta,
    in:linkdIn,
    youTube:youTube,
   
  };
  return (
    <div className="App">
      <div>
      <Header headerData={headerData} />
    </div>
    <div>
      <Hero 
      title = {heroData.title}
      buttonText={heroData.buttonText}
      />
    </div>
    <div>
      <Experts 
             
            discription2 = {expertsData.discription2}
            image={expertsData.image}
            subSectionTitle={expertsData.subSectionTitle}
            subSectionDiscrp={expertsData.subSectionDiscrp}
            name={expertsData.name}
      />
    </div>
    <div>
      <OurComunity 
      title = {ourComunityData.title}
      discription = {ourComunityData.discription}
      />
    </div>
    <PlumbingHelp
      title = {plumbingData.title}
      discription = {plumbingData.discription}
      discription2={plumbingData.discription2}
      image={plumbingData.image}
      image2={plumbingData.image2}
      cards={cards}

    />
    <CallUs
    title={callUsData.title}
    discription={callUsData.discription}
    btnText={callUsData.btnText}
    image={callUsData.image}
    powerText={callUsData.powerText}
    icon1={callUsData.icon1}
    icon2={callUsData.icon2}
    icon3={callUsData.icon3}
    icon4={callUsData.icon4}
    licence={callUsData.licence}
    mail={callUsData.mail}
    location={callUsData.location}
    phone={callUsData.phone}
    servingSan={callUsData.servingSan}
    ServingSanDisc1={callUsData.ServingSanDisc1}
    ServingSanDisc2={callUsData.ServingSanDisc2}
    />

    <Footer 
     copyWrite={footerData.copyWrite}
     fb={footerData.fb}
     insta={footerData.insta}
     linkdIn={footerData.linkdIn}
     youTube={footerData.youTube}
     twitter={footerData.twitter}
    />
    </div>
  );
}

export default App;
